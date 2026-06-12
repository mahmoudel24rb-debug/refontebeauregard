import { parse } from 'node-html-parser'
import fs from 'node:fs'

// Union dédupliquée des blocs <style> de toutes les pages — SOURCE = SSR sportix-local
// (contient le CSS des breakpoints/variantes responsive, perdu dans le DOM hydraté).
const SSR = '../sportix-local'
const FILES = [
  `${SSR}/index.html`,
  `${SSR}/facilities.html`,
  `${SSR}/facilities--gym-training-zones.html`,
  `${SSR}/classes.html`,
  `${SSR}/classes--strength-power-training.html`,
  `${SSR}/pricing.html`,
  `${SSR}/contact-us.html`,
  `${SSR}/blog--the-power-of-running.html`,
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
  console.log(`${f.split('/').pop().padEnd(40)} +${added} blocs`)
}
const out = blocks.join('\n\n')
fs.writeFileSync('src/components/sportix/framer.css', out)
console.log(`\nframer.css : ${(out.length / 1024).toFixed(0)} Ko · ${blocks.length}/${total} blocs · hidden-* présents: ${/hidden-[a-z0-9]/.test(out)}`)
