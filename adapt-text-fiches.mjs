import fs from 'node:fs'
const DIR = 'src/components/sportix'
const BYFILE = {
  'FicheEspace.tsx': [
    [`From free weights and resistance machines to innovative cardio and recovery tools, every corner of the gym is crafted to support your unique fitness journey. Certified trainers provide personalized coaching and group classes tailored to all skill levels, ensuring motivation and progress every step of the way. With a vibrant community atmosphere and flexible scheduling options, the École du dos make it easy to stay committed and push beyond your limits.`,
     `Des poids libres aux machines, en passant par le cardio et les outils de récupération, chaque recoin de l'espace est pensé pour accompagner votre progression. Nos coachs diplômés proposent un suivi personnalisé et des cours collectifs adaptés à tous les niveaux, pour rester motivé et progresser à chaque séance. Dans une ambiance conviviale et avec des horaires flexibles, le Parc Beauregard vous aide à tenir vos objectifs.`],
    [`State-of-the-Art Equipment – Access the latest strength and cardio machines, free weights, and resistance training tools.`,
     `Équipement de pointe – Les dernières machines de force et de cardio, poids libres et outils de résistance.`],
    [`Versatile Training Areas – Dedicated zones for powerlifting, functional fitness, HIIT, and more.`,
     `Espaces polyvalents – Zones dédiées à la force, au fonctionnel, au HIIT et plus encore.`],
    [`Expert Coaching & Programs – Personalized training sessions, group workouts, and specialized fitness plans.`,
     `Coaching expert & programmes – Séances personnalisées, cours collectifs et plans adaptés.`],
    [`Optimal Training Environment – Spacious, well-ventilated, and designed for maximum performance and comfort.`,
     `Environnement optimal – Spacieux, bien aéré, conçu pour la performance et le confort.`],
    [`The perfect environment to`, `L'environnement idéal pour`],
    [`push your limits and grow.`, `repousser vos limites et progresser.`],
    [`We help you take the next step toward`, `Nous vous aidons à passer à l'étape suivante de`],
    [`your fitness and athletic journey.`, `votre parcours sportif.`],
    [`State-of-the-Art Equipment`, `Équipement de pointe`],
    [`Versatile Training Areas`, `Espaces polyvalents`],
    [`Expert Coaching`, `Coaching expert`],
    [`Optimal Training Environment`, `Environnement optimal`],
    [`Advantages:`, `Avantages :`],
  ],
  'FicheService.tsx': [
    [`Strength & Power Training is engineered for individuals who want to build raw strength, increase muscle mass, and develop explosive power for sport or life. Using proven strength systems such as powerlifting, Olympic lifts, and speed-strength complexes, this program will help you maximize your force production and athletic performance.`,
     `Ce cours est conçu pour celles et ceux qui veulent gagner en force, prendre de la masse musculaire et développer leur puissance. Grâce à des méthodes éprouvées, il vous aide à maximiser votre force et vos performances.`],
    [`With a focus on proper technique and progressive overload, this class is perfect for athletes, lifters, and fitness enthusiasts ready to push their limits under the guidance of expert strength coaches.`,
     `Axé sur la technique et la progressivité, ce cours est idéal pour les sportifs et passionnés prêts à se dépasser, encadrés par des coachs experts.`],
    [`Mondays, Wednesdays & Fridays at 6:00 PM`, `Lundi, mercredi & vendredi à 18h00`],
    [`Build absolute and functional strength across major lifts`, `Développer une force globale et fonctionnelle`],
    [`Increase power output with explosive movements (cleans, snatches, med ball throws)`, `Gagner en puissance avec des mouvements explosifs`],
    [`Improve lifting technique and injury resilience`, `Améliorer la technique et prévenir les blessures`],
    [`Develop fast-twitch muscle fibers for improved speed and agility`, `Développer la vitesse et l'agilité`],
    [`Gain lean muscle mass and improve body composition`, `Prendre du muscle et affiner sa silhouette`],
    [`Boost confidence and athletic dominance`, `Gagner en confiance`],
    [`Strength athletes (powerlifters, weightlifters, CrossFitters)`, `Sportifs de force`],
    [`Competitive athletes looking to improve power and strength`, `Athlètes en quête de puissance`],
    [`Individuals training for military, police, or fire academy tests`, `Préparation aux tests physiques`],
    [`Fitness enthusiasts wanting advanced lifting and explosive training`, `Passionnés de musculation avancée`],
    [`Anyone looking to break personal records and get stronger`, `Toute personne voulant progresser`],
    [`Strength & Power Training`, `Coaching personnalisé`],
    [`Class Overview`, `Présentation`],
    [`Key Benefits`, `Bénéfices clés`],
    [`Who This Program Is Perfect For`, `Pour qui ?`],
    [`Joint Stability`, `Stabilité articulaire`],
    [`Injury Prevention`, `Prévention des blessures`],
    [`Muscle Strength`, `Force musculaire`],
    [`Explosive Power`, `Puissance explosive`],
  ],
  'PageTexte.tsx': [
    [`Sportix blog`, `Parc Beauregard`],
    [`More Than Just a Workout`, `Mentions légales`],
    [`Running is one of the most effective forms of exercise, offering physical, mental, and emotional benefits. Whether sprinting, jogging, or training for a marathon, it improves endurance, strengthens the heart, and boosts overall well-being.`,
     `Cette page regroupera les mentions légales du Parc Beauregard Fitness & Coaching : éditeur, hébergeur, propriété intellectuelle et données personnelles. Contenu juridique à compléter.`],
    [`Why Running Works`, `Éditeur du site`],
    [`Types of Running`, `Hébergement`],
    [`Getting Started`, `Données personnelles`],
    [`Final Thoughts`, `Contact`],
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
  console.log(`${file.padEnd(18)} ${n}`)
}
