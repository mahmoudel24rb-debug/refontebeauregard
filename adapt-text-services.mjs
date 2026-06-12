import fs from 'node:fs'
const FILE = 'src/components/sportix/Services.tsx'
// Cours du template -> cours Beauregard (FR). + titre de section.
const PAIRS = [
  [`push their limits and train with purpose.`, `se dépasse et s'entraîne avec sens.`],
  [`Where athletes`, `Des cours où chacun`],
  [`Speed & Endurance Training`, `Cardio & Endurance`],
  [`Agility & Quickness Drills`, `Renforcement musculaire`],
  [`Jump & Plyometric Training`, `Cross-Training`],
  [`Strength & Power Training`, `Musculation & Force`],
  [`Aquatics & Swimming`, `Pilates`],
  [`Specialized Athlete Program`, `Coaching personnalisé`],
  [`Mobility & Recoverability`, `Stretching & Mobilité`],
  [`Outdoor & Functional Fitness`, `Fonctionnel & Outdoor`],
]
PAIRS.sort((a, b) => b[0].length - a[0].length)
let s = fs.readFileSync(FILE, 'utf8')
let n = 0
for (const [en, fr] of PAIRS) {
  const parts = s.split(en)
  if (parts.length > 1) { n += parts.length - 1; s = parts.join(fr) }
}
fs.writeFileSync(FILE, s)
console.log(`Services.tsx : ${n} remplacements`)
