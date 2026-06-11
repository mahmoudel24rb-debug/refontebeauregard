import { parse } from 'node-html-parser'
import fs from 'node:fs'

// Union dédupliquée des blocs <style> de toutes les pages hydratées.
const FILES = [
  'c:/tmp/hydrated-clean.html', // home
  'c:/tmp/hyd/Espaces.html',
  'c:/tmp/hyd/FicheEspace.html',
  'c:/tmp/hyd/Services.html',
  'c:/tmp/hyd/FicheService.html',
  'c:/tmp/hyd/Tarifs.html',
  'c:/tmp/hyd/Contact.html',
  'c:/tmp/hyd/PageTexte.html',
]

const rewriteAsset = (v) =>
  v.replace(/\.\/assets\//g, '/assets/').replace(/url\(\.\/assets\//g, 'url(/assets/')

const seen = new Set()
const blocks = []
let total = 0
for (const f of FILES) {
  if (!fs.existsSync(f)) { console.log('skip (absent):', f); continue }
  const root = parse(fs.readFileSync(f, 'utf8'), { comment: false, blockTextElements: { style: true, script: true } })
  let added = 0
  for (const s of root.querySelectorAll('style')) {
    const css = rewriteAsset(s.innerHTML)
    total++
    const key = css.trim()
    if (!key || seen.has(key)) continue
    seen.add(key)
    blocks.push(css)
    added++
  }
  console.log(`${f.split('/').pop().padEnd(22)} +${added} blocs uniques`)
}
const out = blocks.join('\n\n')
fs.writeFileSync('src/components/sportix/framer.css', out)
console.log(`\nframer.css combiné : ${(out.length / 1024).toFixed(0)} Ko · ${blocks.length} blocs uniques / ${total} totaux`)
