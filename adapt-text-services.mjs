import fs from 'node:fs'
const FILE = 'src/components/sportix/Services.tsx'
// Cours du template -> cours Beauregard (FR). + titre de section.
const PAIRS = [
  [`push their limits and train with purpose.`, `se dépasse et s'entraîne avec sens.`],
  [`Where athletes`, `Des cours où chacun`],
  [`Speed &amp; Endurance Training`, `Cardio & Endurance`],
  [`Agility &amp; Quickness Drills`, `Renforcement musculaire`],
  [`Jump &amp; Plyometric Training`, `Cross-Training`],
  [`Strength &amp; Power Training`, `Musculation & Force`],
  [`Aquatics &amp; Swimming`, `Pilates`],
  [`Specialized Athlete Program`, `Coaching personnalisé`],
  [`Mobility &amp; Recoverability`, `Stretching & Mobilité`],
  [`Outdoor &amp; Functional Fitness`, `Fonctionnel & Outdoor`],
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
