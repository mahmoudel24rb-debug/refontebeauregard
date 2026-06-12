import fs from 'node:fs'
const DIR = 'src/components/sportix'
const BYFILE = {
  'Espaces.tsx': [
    [`Our Yoga are designed to enhance your quickness, acceleration, and overall athletic performance.`,
     `Nos cours de Yoga favorisent la souplesse, l'équilibre et le bien-être.`],
    [`Our Pilates are designed for dynamic, full-body workouts that enhance strength, mobility, endurance, and agility.`,
     `Nos cours de Pilates renforcent le corps en profondeur : gainage, mobilité et posture.`],
    [`Our École du dos offer a cutting-edge fitness experience with top-tier equipment, versatile workout areas, and expert-led programs.`,
     `Notre École du dos propose des séances encadrées pour soulager et renforcer le dos en douceur.`],
    [`State-of-the-Art Equipment`, `Équipement de pointe`],
    [`Versatile Training Areas`, `Espaces polyvalents`],
    [`Optimal Training Environment`, `Environnement optimal`],
  ],
  'Contact.tsx': [
    [`sports and recreation.`, `sport & bien-être.`],
  ],
  'PageTexte.tsx': [
    [`Running engages multiple muscle groups, strengthens the heart and lungs, and burns calories efficiently. It boosts metabolism, lowers blood pressure, and increases lung capacity, reducing the risk of heart disease.`,
     `Le Parc Beauregard Fitness & Coaching est édité par la société exploitant le club, située 1 quai de la Loire, 37210 Rochecorbon.`],
    [`Beyond physical benefits, running reduces stress and anxiety by triggering endorphin release. It also enhances mental focus, builds resilience, and improves sleep quality.`,
     `Pour toute question relative au site ou à vos données personnelles, contactez-nous à rochecorbon@parcbeauregard.com.`],
    [`Sprinting – Builds speed and power.`, `Éditeur – Parc Beauregard Fitness & Coaching.`],
    [`Distance Running – Improves stamina and endurance.`, `Hébergeur – à préciser.`],
    [`Trail Running – Enhances balance and core strength.`, `Données personnelles – traitées conformément au RGPD.`],
    [`Start with the right gear—proper running shoes are essential. Gradually increase your pace and mileage to prevent injuries. Listen to your body, take rest days when needed, and incorporate stretching and mobility exercises.`,
     `Le contenu juridique détaillé (mentions légales, CGV, politique de confidentialité) sera complété prochainement.`],
    [`Explore tips & workouts`, `Découvrez nos espaces`],
    [`to boost your fitness journey.`, `et nos cours.`],
    [`High-Intensity Workouts vs. Steady-State Cardio`, `Nos espaces`],
    [`Both HIIT and steady-state cardio have their benefits, but which one aligns best with your fitness goals?`,
     `Des espaces pensés pour chaque pratique, en bord de Loire.`],
    [`What to Eat Before and After a Workout`, `Nos cours`],
    [`Fueling your body with the right nutrients before and after a workout can significantly impact your performance and recovery.`,
     `Yoga, Pilates, renforcement : un cours pour chaque objectif.`],
    [`Tips for Long-Lasting Performance`, `Nous rejoindre`],
    [`Whether you're training for a marathon, triathlon, or looking to increase stamina, endurance training plays a crucial role.`,
     `Rejoignez la communauté du Parc Beauregard.`],
    [`Related Posts`, `À découvrir aussi`],
    [`Shanon Brierley`, `Parc Beauregard`],
    [`More Than Just a Workout`, `Mentions légales`],
  ],
}
for (const [file, pairs] of Object.entries(BYFILE)) {
  const p = `${DIR}/${file}`
  let s = fs.readFileSync(p, 'utf8')
  let n = 0
  for (const [en, fr] of pairs.sort((a, b) => b[0].length - a[0].length)) {
    const parts = s.split(en)
    if (parts.length > 1) { n += parts.length - 1; s = parts.join(fr) }
  }
  fs.writeFileSync(p, s)
  console.log(`${file.padEnd(16)} ${n}`)
}
