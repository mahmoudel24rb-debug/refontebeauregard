#!/usr/bin/env node
// visual-diff.mjs — Boucle de vérification PIXEL entre l'original Framer et le port Next.
// (copie locale dans le projet ; import playwright -> @playwright/test déjà installé)

import { chromium } from '@playwright/test';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import fs from 'node:fs';
import path from 'node:path';

// ---------- CONFIG ----------
const ORIGINAL = 'http://localhost:5000';
const PORT = 'http://localhost:3000';
const OUTDIR = './diff-report';
const THRESHOLD = 0.1;
const ROUTES = [{ original: '/index.html', port: '/' }];
const WIDTHS = [1920, 1440, 768, 390];
const HEIGHT = 1000;
// ----------------------------

const FREEZE_CSS = `
  *,*::before,*::after{animation-duration:0s!important;animation-delay:0s!important;
    transition-duration:0s!important;transition-delay:0s!important;
    caret-color:transparent!important}
  [data-framer-appear-id],[style*="opacity:0"]{opacity:1!important;transform:none!important}
`;

async function shoot(page, url, w) {
  await page.setViewportSize({ width: w, height: HEIGHT });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.addStyleTag({ content: FREEZE_CSS });
  await page.evaluate(async () => { if (document.fonts) await document.fonts.ready; });
  await page.evaluate(async () => {
    const step = innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(400);
  return PNG.sync.read(await page.screenshot({ fullPage: true }));
}

function fit(a, b) {
  const w = Math.min(a.width, b.width), h = Math.min(a.height, b.height);
  const crop = (src) => { const o = new PNG({ width: w, height: h });
    for (let y = 0; y < h; y++) src.data.copy(o.data, y * w * 4, (y * src.width) * 4, (y * src.width + w) * 4);
    return o; };
  return [crop(a), crop(b), w, h];
}

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ deviceScaleFactor: 1 });
fs.mkdirSync(OUTDIR, { recursive: true });
const rows = [];

for (const r of ROUTES) {
  for (const w of WIDTHS) {
    const tag = `${r.port.replace(/\W+/g, '_') || 'home'}_${w}`;
    try {
      const oImg = await shoot(page, ORIGINAL + r.original, w);
      const pImg = await shoot(page, PORT + r.port, w);
      const [oc, pc, cw, ch] = fit(oImg, pImg);
      const diff = new PNG({ width: cw, height: ch });
      const wrong = pixelmatch(oc.data, pc.data, diff.data, cw, ch, { threshold: THRESHOLD });
      const pct = (wrong / (cw * ch) * 100);
      fs.writeFileSync(path.join(OUTDIR, `${tag}.diff.png`), PNG.sync.write(diff));
      fs.writeFileSync(path.join(OUTDIR, `${tag}.original.png`), PNG.sync.write(oc));
      fs.writeFileSync(path.join(OUTDIR, `${tag}.port.png`), PNG.sync.write(pc));
      rows.push({ tag, w, pct: pct.toFixed(2), wrong });
      console.log(`${pct < 0.5 ? 'OK' : pct < 3 ? '~ ' : 'XX'} ${tag.padEnd(20)} ${pct.toFixed(2).padStart(6)}% ecart`);
    } catch (e) {
      console.log(`XX ${tag.padEnd(20)}  ERREUR ${e.message}`);
      rows.push({ tag, w, pct: 'ERR', wrong: -1 });
    }
  }
}
await browser.close();

const cards = rows.map(r => `
  <div class="card"><h3>${r.tag} — <b>${r.pct}%</b></h3>
  <div class="row">
    <figure><figcaption>original</figcaption><img src="${r.tag}.original.png"></figure>
    <figure><figcaption>port</figcaption><img src="${r.tag}.port.png"></figure>
    <figure><figcaption>diff</figcaption><img src="${r.tag}.diff.png"></figure>
  </div></div>`).join('');
fs.writeFileSync(path.join(OUTDIR, 'index.html'),
  `<!doctype html><meta charset=utf8><title>Diff Sportix</title>
   <style>body{font:14px/1.4 system-ui;margin:24px;background:#111;color:#eee}
   .row{display:flex;gap:8px;margin:8px 0 24px}figure{margin:0;flex:1}img{width:100%;border:1px solid #333}
   figcaption{opacity:.6;font-size:12px}b{color:#fad000}</style>${cards}`);
console.log(`\nRapport : ${path.join(OUTDIR, 'index.html')} — vise <0.5% par vue.`);
