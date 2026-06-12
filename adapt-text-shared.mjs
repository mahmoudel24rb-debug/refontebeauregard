import fs from 'node:fs'

// Table de traduction HOME : chaîne template (EN) -> texte Beauregard (FR).
// Tiré du brief : Rochecorbon, bord de Loire, "nature + coaching", premium.
const PAIRS = [
  // Hero
  [`Best in`, `Le meilleur du`],
  [`sports & recreation.`, `sport & de la nature.`],
  [`Athletic is your ultimate destination for sports, wellness, and recreation.`, `Le Parc Beauregard, votre destination fitness, bien-être et coaching en bord de Loire, à Rochecorbon.`],
  [`Our classes`, `Nos cours`],
  [`Become a member`, `Devenir membre`],
  // Carte communauté
  [`Join a growing community of over`, `Rejoignez une communauté de plus de`],
  [`50,000 athletes, fitness enthusiasts, and sports lovers`, `1 200 adhérents, sportifs et passionnés`],
  [`who are pushing their limits, breaking barriers, and achieving their personal best every day.`, `qui se dépassent chaque jour, en pleine nature au bord de la Loire.`],
  [`20K+`, `1200+`],
  [`Training now`, `adhérents actifs`],
  // Carrousel témoignage hero
  [`“The perfect place to train and connect!”`, `« L'endroit parfait pour s'entraîner et se ressourcer ! »`],
  [`Oscar Lindsey`, `Marie L.`],
  [`“A game-changer for my training!”`, `« Ça a tout changé dans mon entraînement ! »`],
  [`Tiana Braddock`, `Julie D.`],
  [`“Best decision I've made for my health!”`, `« La meilleure décision pour ma santé ! »`],
  [`Tasha Merchant`, `Sophie M.`],
  [`Sportix keeps me motivated every day!"`, `« Le Parc Beauregard me motive chaque jour ! »`],
  [`Alex Rodriguez`, `Thomas R.`],
  [`Watch video introduction.`, `Découvrez le club en vidéo.`],
  // Services (teaser)
  [`What we do`, `Nos services`],
  [`We’re redefining the way`, `Nous réinventons votre façon`],
  [`people experience`, `de vivre le`],
  [`sports.`, `sport.`],
  [`View all classes`, `Tous nos services`],
  // NB: noms de programmes (Speed & Endurance Training, etc.) exclus ici car ils
  // réapparaissent comme VRAI contenu sur /services → traités page par page.
  // À propos
  [`The ultimate destination`, `La destination ultime`],
  [`for sports & fitness.`, `du sport & du bien-être.`],
  [`We are more than just a sports and recreation center—we are a community built for movement, motivation, and excellence.`, `Bien plus qu'une salle de sport : une communauté tournée vers le mouvement, la motivation et l'excellence, en pleine nature au bord de la Loire.`],
  [`Performance Excellence`, `Excellence sportive`],
  [`Community & Support`, `Communauté & entraide`],
  [`Inclusivity & Accessibility`, `Accessible à tous`],
  [`Innovation & Progress`, `Progrès & innovation`],
  [`Wellness & Balance`, `Bien-être & équilibre`],
  [`Passion for Movement`, `Passion du mouvement`],
  [`About us`, `En savoir plus`],
  [`About Us`, `À propos`],
  // Valeurs
  [`Our values`, `Nos valeurs`],
  [`A community fueled by`, `Une communauté portée par`],
  [`passion, performance, and progress.`, `la passion, la performance et le progrès.`],
  [`Community`, `Communauté`],
  // Témoignages
  [`Our community`, `Notre communauté`],
  [`is at the heart of everything we do.`, `est au cœur de tout ce que nous faisons.`],
  [`Hear from our members who have transformed their fitness, performance, and lifestyle with us!`, `Découvrez les adhérents qui ont transformé leur forme, leurs performances et leur mode de vie avec nous !`],
  [`“The personal trainers here are next level! I've seen massive improvements in my endurance and strength. Highly recommend!”`, `« Les coachs sont au top ! J'ai énormément progressé en endurance et en force. Je recommande sans hésiter ! »`],
  [`Verity M.`, `Marie L.`],
  [`“Athletic has everything I need—expert coaches, top-notch equipment, and an amazing atmosphere. I feel stronger, healthier, and more motivated than ever!”`, `« Le Parc Beauregard a tout ce qu'il me faut : coachs experts, super matériel et ambiance géniale. Je me sens plus forte et plus motivée que jamais ! »`],
  [`Salem B.`, `Sophie B.`],
  [`“I love the community at Athletic. The group classes push me beyond my limits, and I’ve made great friends along the way!”`, `« J'adore la communauté du Parc Beauregard. Les cours collectifs me poussent au-delà de mes limites, et je m'y suis fait de vrais amis ! »`],
  [`Mildred T.`, `Camille T.`],
  [`Alex R.`, `Thomas R.`],
  [`Jordan M.`, `Julien M.`],
  [`Chris T.`, `Chloé T.`],
  // Événements
  [`Upcoming Events`, `Nos prochains rendez-vous`],
  [`We bring fitness and community together through exciting events, competitions, and challenges designed to push your limits and keep you motivated.`, `Toute l'année, le Parc Beauregard réunit sport et communauté autour d'événements, de challenges et de rencontres pour vous motiver et vous dépasser.`],
  [`All events`, `Tous les événements`],
  [`Events`, `Événements`],
  // Tarifs
  [`Your path to peak`, `Votre accès au meilleur`],
  [`physical and mental performance.`, `de votre forme physique et mentale.`],
  [`Monthly`, `Mensuel`],
  [`Yearly`, `Annuel`],
  [`Basic Membership`, `FORME`],
  [`Premium Membership`, `GOLD`],
  [`Elite Membership`, `VIP`],
  [`$29.99`, `49 €`],
  [`$49.99`, `59 €`],
  [`$79.99`, `99 €`],
  [`/month`, `/mois`],
  [`Perfect for beginners & casual fitness enthusiasts`, `Pour démarrer en douceur — accès muscu + bilan offert.`],
  [`For those looking to take their training to the next level`, `Pour progresser, avec plus d'accès et de suivi.`],
  [`For athletes and serious fitness enthusiasts`, `L'expérience complète, coaching premium inclus.`],
  [`Full access to gym & training zones`, `Accès libre à la salle & aux espaces`],
  [`Standard group fitness classes`, `Cours collectifs inclus`],
  [`Locker room & shower facilities`, `Vestiaires & douches`],
  [`Member-exclusive fitness tips & guides`, `Bilan forme offert`],
  [`Everything in Basic, plus:`, `Tout FORME, plus :`],
  [`Access to specialized training areas`, `Accès aux espaces spécialisés`],
  [`Advanced group fitness programs`, `Programmes collectifs avancés`],
  [`Discounts on personal training`, `Réductions sur le coaching perso`],
  [`Everything in Premium, plus:`, `Tout GOLD, plus :`],
  [`Unlimited personal training sessions`, `Coaching personnel illimité`],
  [`Exclusive performance coaching`, `Coaching performance exclusif`],
  [`Access to recovery zones`, `Accès aux espaces récupération`],
  [`Join now`, `Je m'inscris`],
  [`Limited-time offer`, `Offre limitée`],
  [`Sign up today and get 1 FREE personal training session!`, `Inscrivez-vous aujourd'hui et profitez d'un bilan coaching offert !`],
  [`Start your journey now`, `Je commence maintenant`],
  [`Membership`, `Adhésion`],
  // Footer
  [`Best in sports & recreation.`, `Le meilleur du sport & de la nature.`],
  [`Questions?`, `Une question ?`],
  [`information@example.com`, `rochecorbon@parcbeauregard.com`],
  [`Program & classes`, `Services`],
  [`Outdoor Strength Zone`, `Cours collectifs`],
  [`Recovery & Mobility Lounge`, `Entraînement fonctionnel`],
  [`Advanced Aquatics Center`, `Cross / Cardio`],
  [`Speed & Agility Tracks`, `Yoga`],
  [`Functional Training Areas`, `Pilates`],
  [`Gym & Training Zones`, `École du dos`],
  [`Our Mission`, `Notre mission`],
  [`Our Team`, `Notre équipe`],
  [`Facilities`, `Nos espaces`],
  [`Contact us`, `Contact`],
  [`Pricing`, `Tarifs`],
  [`About`, `À propos`],
  [`Home`, `Accueil`],
  [`© Sportix. All rights reserved.`, `© Parc Beauregard. Tous droits réservés.`],
]

// longest-first pour éviter qu'une chaîne courte mange une plus longue
PAIRS.sort((a, b) => b[0].length - a[0].length)

// Appliqué à TOUTES les pages : ne traduit que les chaînes partagées présentes
// (footer, UI, pricing, témoignages, events…). Les chaînes absentes ne matchent pas.
const DIR = 'src/components/sportix'
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  let n = 0
  for (const [en, fr] of PAIRS) {
    const parts = s.split(en)
    if (parts.length > 1) { n += parts.length - 1; s = parts.join(fr) }
  }
  fs.writeFileSync(p, s)
  console.log(`${f.padEnd(16)} ${n} remplacements`)
}
