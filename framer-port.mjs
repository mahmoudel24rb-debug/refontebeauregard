#!/usr/bin/env node
// framer-port.mjs — Porte une page Framer exportée (SSR) vers du JSX FIDÈLE.
//
// Principe : Framer livre dans le HTML statique (1) le DOM SSR complet et
// (2) ~184 Ko de CSS SSR avec TOUTES les classes .framer-xxxx résolues à leurs
// valeurs EXACTES. On ne reconstruit donc rien : on LÈVE le CSS tel quel et on
// transpose le DOM en JSX sans toucher aux classes ni aux valeurs.
// Résultat = pixel-perfect par construction (c'est le CSS de Framer), en vrai
// React déployable sur Next/Vercel.
//
// Usage :
//   node framer-port.mjs <page.html> [options]
// Options :
//   --out <dir>            dossier de sortie (défaut: ./out)
//   --css <fichier>        nom du CSS global (défaut: framer.css)
//   --section "<nom>"      n'extrait QUE le sous-arbre data-framer-name="<nom>"
//                          (sinon : page entière, racine #main)
//   --name <Composant>     nom du composant exporté (défaut: déduit du fichier/section)
//   --asset-prefix <p>     préfixe des assets (défaut: "" → /assets/...).
//                          Copie sportix-local/assets dans public/  → /assets/ marche.
//   --keep-scripts         conserve les <script> (défaut: supprimés)
//   --keep-framer-attrs    conserve data-framer-* (défaut: supprimés, sauf utiles)
//
// Exemples :
//   node framer-port.mjs index.html --out src/app/(site) --name HomePage
//   node framer-port.mjs index.html --section "Testimonials Wrapper" --name Testimonials

import { parse } from 'node-html-parser';
import fs from 'node:fs';
import path from 'node:path';

// ---------- args ----------
const argv = process.argv.slice(2);
const input = argv[0];
if (!input || input.startsWith('--')) {
  console.error('Usage: node framer-port.mjs <page.html> [--out dir] [--section "Nom"] [--name Composant]');
  process.exit(1);
}
const opt = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const flag = (k) => argv.includes(k);
const OUT = opt('--out', './out');
const CSS_NAME = opt('--css', 'framer.css');
const SECTION = opt('--section', null);
const ASSET_PREFIX = opt('--asset-prefix', '');
const KEEP_SCRIPTS = flag('--keep-scripts');
const KEEP_FRAMER = flag('--keep-framer-attrs');

const baseName = path.basename(input).replace(/\.[^.]+$/, '');
const pascal = (s) => s.replace(/[^a-zA-Z0-9]+/g, ' ').trim().split(/\s+/)
  .map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') || 'Page';
const COMP = opt('--name', SECTION ? pascal(SECTION) : pascal(baseName));

// ---------- rename maps (HTML + SVG attributes -> JSX) ----------
const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly',
  maxlength: 'maxLength', minlength: 'minLength', autocomplete: 'autoComplete',
  autofocus: 'autoFocus', autoplay: 'autoPlay', playsinline: 'playsInline',
  crossorigin: 'crossOrigin', srcset: 'srcSet', enctype: 'encType', novalidate: 'noValidate',
  contenteditable: 'contentEditable', spellcheck: 'spellCheck', colspan: 'colSpan',
  rowspan: 'rowSpan', usemap: 'useMap', accesskey: 'accessKey', frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen', 'xlink:href': 'xlinkHref', 'xml:lang': 'xmlLang',
  'xmlns:xlink': 'xmlnsXlink',
};
// attributs valeur-vide rendus en booléens
const BOOLEAN = new Set(['disabled', 'checked', 'selected', 'hidden', 'readonly', 'multiple',
  'required', 'autofocus', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'open',
  'novalidate', 'allowfullscreen']);
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'param', 'source', 'track', 'wbr']);

const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function jsxAttrName(name) {
  const low = name.toLowerCase();
  if (ATTR[name]) return ATTR[name];
  if (ATTR[low]) return ATTR[low];
  if (name.startsWith('data-') || name.startsWith('aria-')) return name; // autorisés tels quels
  if (name.includes('-')) return kebabToCamel(name); // svg presentation attrs (stroke-width…)
  return name; // viewBox, preserveAspectRatio, etc. (casse déjà bonne via rawAttributes)
}

function rewriteAsset(v) {
  if (typeof v !== 'string') return v;
  return v
    .replace(/\.\/assets\//g, `${ASSET_PREFIX}/assets/`)
    .replace(/url\(\.\/assets\//g, `url(${ASSET_PREFIX}/assets/`)
    .replace(/url\((['"]?)\.\/assets\//g, (m, q) => `url(${q}${ASSET_PREFIX}/assets/`);
}

function styleToObject(str) {
  const decls = [];
  for (const decl of str.split(';')) {
    const t = decl.trim();
    if (!t) continue;
    const i = t.indexOf(':');
    if (i < 0) continue;
    decls.push([t.slice(0, i).trim(), rewriteAsset(t.slice(i + 1).trim())]);
  }
  // Neutralise l'ÉTAT INITIAL des animations "appear" de Framer (opacity:0 + transform
  // translate/scale/rotate). Sans le runtime JS ces éléments resteraient invisibles ;
  // on fige l'état RÉVÉLÉ. Ciblé : un slide de carrousel est opacity:1 → épargné.
  const isAppearInitial =
    decls.some(([k, v]) => k === 'opacity' && v.trim() === '0') &&
    decls.some(([k, v]) => k === 'transform' && /translate|scale|rotate|perspective/i.test(v));
  if (isAppearInitial) {
    for (const d of decls) {
      if (d[0] === 'opacity') d[1] = '1';
      else if (d[0] === 'transform') d[1] = 'none';
      else if (d[0] === 'will-change') d[1] = 'auto';
    }
  }
  const out = decls.map(([key, val]) => {
    const k = key.startsWith('--') ? key : kebabToCamel(key);
    const jsKey = k.startsWith('--') || /[^a-zA-Z]/.test(k) ? JSON.stringify(k) : k;
    return `${jsKey}: ${JSON.stringify(val)}`;
  });
  return out.length ? `{{ ${out.join(', ')} }}` : null;
}

function escapeText(t) {
  // JSX texte : seules les accolades doivent être neutralisées ; les entités HTML passent.
  if (!t.trim()) return t.replace(/\{/g, '{"{"}').replace(/\}/g, '{"}"}');
  return t.replace(/\{/g, '{"{"}').replace(/\}/g, '{"}"}');
}

function attrsToJsx(node) {
  const raw = node.rawAttributes || {};
  const parts = [];
  for (const [k, vRaw] of Object.entries(raw)) {
    const lk = k.toLowerCase();
    if (lk === 'style') { const o = styleToObject(vRaw); if (o) parts.push(`style=${o}`); continue; }
    if (!KEEP_FRAMER && lk.startsWith('data-framer') && lk !== 'data-framer-name') continue;
    if (BOOLEAN.has(lk) && (vRaw === '' || vRaw === lk)) { parts.push(jsxAttrName(k)); continue; }
    let v = vRaw;
    if (['src', 'href', 'srcset', 'poster'].includes(lk)) v = rewriteAsset(v);
    parts.push(`${jsxAttrName(k)}={${JSON.stringify(v)}}`);
  }
  return parts;
}

const ELEMENT = 1, TEXT = 3;
function serialize(node, depth) {
  const pad = '  '.repeat(depth);
  if (node.nodeType === TEXT) {
    const raw = node.rawText;
    if (raw.trim()) {
      // Préserve les espaces de BORD significatifs (HTML compact : "<span>x</span> y"
      // ou " y") que JSX supprimerait, sinon les mots se collent ("du"+"sport").
      const lead = /^\s/.test(raw) ? '{" "}' : '';
      const trail = /\s$/.test(raw) ? '{" "}' : '';
      return pad + lead + escapeText(raw.trim()) + trail + '\n';
    }
    // Nœud 100% espace entre deux frères : restitue un espace inline.
    const sibs = node.parentNode ? node.parentNode.childNodes : [];
    const i = sibs.indexOf(node);
    if (/\s/.test(raw) && i > 0 && i < sibs.length - 1) return pad + '{" "}\n';
    return '';
  }
  if (node.nodeType !== ELEMENT) return '';
  const tag = node.rawTagName?.toLowerCase();
  if (!tag) return '';
  if (tag === 'script' && !KEEP_SCRIPTS) return '';
  if (tag === 'style') return ''; // remontés globalement
  if (tag === 'noscript') return '';
  const attrs = attrsToJsx(node);
  const attrStr = attrs.length ? ' ' + attrs.join(' ') : '';
  const kids = node.childNodes.map(c => serialize(c, depth + 1)).filter(Boolean);
  if (VOID.has(tag) || kids.length === 0) {
    return `${pad}<${tag}${attrStr}${VOID.has(tag) ? ' /' : kids.length ? '' : ' /'}>\n`
      .replace(`<${tag}${attrStr}>`, `<${tag}${attrStr} />`); // self-close si vide
  }
  return `${pad}<${tag}${attrStr}>\n${kids.join('')}${pad}</${tag}>\n`;
}

// ---------- run ----------
const html = fs.readFileSync(input, 'utf8');
const root = parse(html, { comment: false, blockTextElements: { script: true, style: true } });

// 1) CSS global (tous les blocs <style> du <head>, valeurs exactes Framer)
const styleBlocks = root.querySelectorAll('style').map(s => rewriteAsset(s.innerHTML));
const css = styleBlocks.join('\n\n');

// 2) cible : section nommée ou racine #main
let target;
if (SECTION) {
  target = root.querySelector(`[data-framer-name="${SECTION}"]`);
  if (!target) { console.error(`Section "${SECTION}" introuvable (data-framer-name).`); process.exit(2); }
} else {
  target = root.querySelector('#main') || root.querySelector('body') || root;
}

// On préserve le nœud cible lui-même (#main garde id="main", la section garde
// sa classe racine) ; on ne déplie en enfants que si la cible est body/document.
const tagOf = target.rawTagName?.toLowerCase();
const isWrapper = target === root || tagOf === 'body' || tagOf === 'html';
const childrenJsx = (isWrapper
  ? target.childNodes.map(c => serialize(c, 3))
  : [serialize(target, 3)]
).filter(Boolean).join('');

const tsx = `// Généré par framer-port.mjs — port FIDÈLE du SSR Framer (ne pas reconstruire, brancher Payload sur les noeuds de contenu).
// Styles exacts : importer "${CSS_NAME}" une seule fois (layout global).
import './${CSS_NAME}';

export default function ${COMP}() {
  return (
    <>
${childrenJsx}    </>
  );
}
`;

fs.mkdirSync(OUT, { recursive: true });
const tsxPath = path.join(OUT, `${COMP}.tsx`);
const cssPath = path.join(OUT, CSS_NAME);
fs.writeFileSync(tsxPath, tsx);
if (!fs.existsSync(cssPath)) fs.writeFileSync(cssPath, css); // CSS partagé : écrit une fois
console.log(`✓ ${tsxPath}  (${(tsx.length / 1024).toFixed(0)} Ko JSX)`);
console.log(`✓ ${cssPath}  (${(css.length / 1024).toFixed(0)} Ko CSS exact${fs.existsSync(cssPath) ? '' : ''})`);
console.log(`  Composant : <${COMP}/>${SECTION ? `  · section "${SECTION}"` : '  · page entière'}`);
