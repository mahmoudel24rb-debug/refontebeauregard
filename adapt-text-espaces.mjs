import fs from 'node:fs'
const FILE = 'src/components/sportix/Espaces.tsx'
const PAIRS = [
  // section heading
  [`The perfect environment to`, `L'environnement idéal pour`],
  [`push your limits and grow.`, `repousser vos limites et progresser.`],
  // descriptions (génériques Beauregard)
  [`The Outdoor Strength & Conditioning Zone offers a dynamic and open-air training environment designed for athletes, bodybuilders, and fitness enthusiasts who want to push their limits outside of traditional gym walls.`,
   `L'espace fonctionnel offre un environnement d'entraînement dynamique, conçu pour tous ceux qui veulent se dépasser, en pleine nature au bord de la Loire.`],
  [`Our Cross / Cardio is designed for swimmers, triathletes, and fitness enthusiasts looking to enhance their water-based training.`,
   `Notre espace cardio & cross-training est pensé pour tous les sportifs qui veulent améliorer leur endurance et leur condition physique.`],
  // tags / features
  [`Sports Science Consultations`, `Conseils sportifs`],
  [`Olympic Lifting Platforms`, `Plateformes de force`],
  [`Strength Testing`, `Tests de force`],
  [`Progress Tracking`, `Suivi des progrès`],
  [`Post-Workout`, `Après l'effort`],
  [`Flexibility & Mobility`, `Souplesse & mobilité`],
  [`Healing`, `Récupération`],
  [`Relaxation`, `Détente`],
  [`Olympic-Sized Pool`, `Grand espace`],
  [`Aqua Fitness Classes`, `Cours collectifs`],
  [`Hydrotherapy`, `Récupération active`],
  [`Recovery`, `Récupération`],
  [`Sprint Lanes`, `Zone cardio`],
  [`Agility Ladders`, `Agilité`],
  [`Reduces Injury Risk`, `Prévention des blessures`],
  [`Accessible for All Fitness Levels`, `Accessible à tous les niveaux`],
]
PAIRS.sort((a, b) => b[0].length - a[0].length)
let s = fs.readFileSync(FILE, 'utf8')
let n = 0
for (const [en, fr] of PAIRS) {
  const parts = s.split(en)
  if (parts.length > 1) { n += parts.length - 1; s = parts.join(fr) }
}
fs.writeFileSync(FILE, s)
console.log(`Espaces.tsx : ${n} remplacements`)
