import fs from 'node:fs'
const DIR = 'src/components/sportix'
// Fragments restés EN du titre teaser (éclaté différemment selon les pages).
const PAIRS = [
  ['redefining the way', 'réinventons votre façon'],
  ['We’re', 'Nous'], // We're (apostrophe courbe)
  ["We're", 'Nous'],
]
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  let n = 0
  for (const [en, fr] of PAIRS) {
    const parts = s.split(en)
    if (parts.length > 1) { n += parts.length - 1; s = parts.join(fr) }
  }
  if (n) { fs.writeFileSync(p, s); console.log(`${f.padEnd(16)} ${n}`) }
}
