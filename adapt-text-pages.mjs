import fs from 'node:fs'
const DIR = 'src/components/sportix'

// Traductions SPÉCIFIQUES par page (heros + sous-titres). Appliquées uniquement
// au fichier concerné pour éviter toute collision. Longest-first par fichier.
const BYFILE = {
  'Espaces.tsx': [
    [`Our facilities offer the ideal environment to push your limits and improve your fitness, whether you're training for a competition or just getting started.`,
     `Nos espaces offrent l'environnement idéal pour repousser vos limites et progresser, que vous prépariez une compétition ou que vous débutiez.`],
    [`Our facilities`, `Nos espaces`],
    [`support your fitness goals.`, `au service de votre forme.`],
  ],
  'Services.tsx': [
    [`Our expert-designed classes cater to athletes and individuals looking to improve their health, accommodating every goal and ability level.`,
     `Nos cours, conçus par des experts, s'adressent aux sportifs comme à tous ceux qui veulent améliorer leur santé, quels que soient leurs objectifs et leur niveau.`],
    [`We offer`, `Bien plus`],
    [`more than just classes.`, `que de simples cours.`],
  ],
  'Tarifs.tsx': [
    [`If you want high-performance training, expert coaching, or recovery, we have the right membership for you.`,
     `Que vous cherchiez un entraînement performant, du coaching expert ou de la récupération, nous avons la formule qu'il vous faut.`],
    [`Unlock your potential with`, `Révélez votre potentiel avec`],
    [`our membership.`, `nos formules.`],
  ],
  'Contact.tsx': [
    [`Whether you have questions about memberships, classes, facilities, or events, our team is here to help.`,
     `Que vous ayez des questions sur les formules, les cours, les espaces ou les événements, notre équipe est là pour vous aider.`],
    [`We’d love`, `Nous serions ravis`],
    [`to hear from you.`, `d'échanger avec vous.`],
  ],
  'FicheEspace.tsx': [
    [`Our École du dos offer a cutting-edge fitness experience with top-tier equipment, versatile workout areas, and expert-led programs.`,
     `Nos espaces offrent une expérience de pointe : équipement haut de gamme, zones polyvalentes et programmes encadrés par des experts.`],
  ],
  'FicheService.tsx': [
    [`Unleash your full potential with advanced strength and explosive power programming.`,
     `Révélez tout votre potentiel avec un accompagnement sur-mesure et des programmes adaptés à vos objectifs.`],
    [`Strength & Power Training`, `Coaching personnalisé`],
  ],
  'PageTexte.tsx': [
    [`Running is one of the most effective and accessible forms of exercise, whether you're training for a race, or simply enjoying the outdoors.`,
     `Informations légales du Parc Beauregard Fitness & Coaching.`],
    [`The Power of Running`, `Mentions légales`],
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
  console.log(`${file.padEnd(18)} ${n} remplacements`)
}
