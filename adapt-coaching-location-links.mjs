import fs from 'node:fs'
const DIR = 'src/components/sportix'
// Repointe les liens « Beauregard Coaching » -> /services/coaching et
// « Location de terrain » -> /location-de-terrain (footer + cartes teaser home).
// La regex s'arrête au 1er href rencontré : elle cible donc le lien qui enveloppe
// directement le titre, sans traverser un autre lien.
const rules = [
  [/href=\{"\/services"\}((?:(?!href=\{")[\s\S])*?)Beauregard Coaching/g, 'href={"/services/coaching"}$1Beauregard Coaching'],
  [/href=\{"\/services"\}((?:(?!href=\{")[\s\S])*?)Location de terrain/g, 'href={"/location-de-terrain"}$1Location de terrain'],
]
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  let n = 0
  for (const [re, rep] of rules) { const m = s.match(re); if (m) { n += m.length; s = s.replace(re, rep) } }
  if (n) { fs.writeFileSync(p, s); console.log(`${f.padEnd(16)} ${n}`) }
}
console.log('liens coaching/location repointés')
