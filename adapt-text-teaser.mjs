import fs from 'node:fs'
const DIR = 'src/components/sportix'
// Cartes teaser "services" (= les 3 services Beauregard) + tags. Appliqué partout
// SAUF Services.tsx, où "Speed & Endurance Training" etc. sont de vrais cours.
const PAIRS = [
  ['Speed & Endurance Training', 'Beauregard Coaching'],
  ['Agility & Quickness Drills', 'Beauregard Cours'],
  ['Jump & Plyometric Training', 'Location de terrain'],
  ['RunFaster', 'Sur-mesure'],
  ['BoostEndurance', 'Suivi perso'],
  ['MoveFast', '≈ 40 cours'],
  ['AgilityTraining', 'Tous niveaux'],
  ['JumpHigher', 'Sport co'],
  ['ExplosivePower', 'Sur réservation'],
]
PAIRS.sort((a, b) => b[0].length - a[0].length)
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx') && x !== 'Services.tsx')) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  let n = 0
  for (const [en, fr] of PAIRS) {
    const parts = s.split(en)
    if (parts.length > 1) { n += parts.length - 1; s = parts.join(fr) }
  }
  if (n) { fs.writeFileSync(p, s); console.log(`${f.padEnd(16)} ${n}`) }
}
