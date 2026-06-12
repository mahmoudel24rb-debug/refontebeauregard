import fs from 'node:fs'
const DIR = 'src/components/sportix'
// Retire de la colonne footer « Nos espaces » les entrées Yoga/Pilates/École du dos
// (ce sont des COURS, pas des espaces). Garde les 3 espaces réels.
const re = /\s*<div className=\{"[^"]*"\} data-framer-name=\{"Nav Link"\}[^>]*>\s*<p[^>]*>\s*<a[^>]*>\s*(?:Yoga|Pilates|École du dos)\s*<\/a>\s*<\/p>\s*<\/div>/g
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  const n = (s.match(re) || []).length
  if (n) { s = s.replace(re, ''); fs.writeFileSync(p, s); console.log(`${f.padEnd(16)} ${n} entrées retirées`) }
}
console.log('footer Nos espaces nettoyé')
