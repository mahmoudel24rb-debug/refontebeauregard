// Les 3 espaces réels du Parc Beauregard (source : CONTENU-REEL-BEAUREGARD.md).
// Kid Fitness exclu (décision client). L'espace Cours Collectifs est fusionné avec
// la page Cours -> son lien pointe vers /cours (pas de fiche dédiée).

export type Espace = { slug: string; name: string; short: string; desc: string; href: string; detail: boolean; img: string }

export const ESPACES: Espace[] = [
  {
    slug: 'cours-collectifs',
    name: 'Espace Cours Collectifs',
    short: 'Yoga, Pilates, École du dos : l’atmosphère Zen du Parc.',
    desc: "Dès le premier pas dans cet espace, vous ressentirez l'atmosphère Zen du Parc Beauregard. Alliant la nature et la modernité, cet espace est destiné aux séances de Yoga, Pilates et École du dos. Nous mettons à disposition tout le matériel nécessaire, pour le plus grand plaisir de nos adhérents.",
    href: '/cours',
    detail: false,
    img: '/assets/beauregard/nature.webp',
  },
  {
    slug: 'fonctionnel',
    name: 'Espace Fonctionnel',
    short: 'Sculptez votre corps : haltères, barres, wall balls, kettlebells.',
    desc: "Cet espace est dédié à l'entretien de votre corps. Sculptez vos muscles ou développez vos capacités physiques, avec des appareils guidés et simples d'utilisation. Des poids tels que des haltères, barres, wall balls et kettlebells sont à votre disposition.",
    href: '/espaces/fonctionnel',
    detail: true,
    img: '/assets/beauregard/fonctionnel.webp',
  },
  {
    slug: 'cross-cardio',
    name: 'Espace Cross / Cardio',
    short: 'Vue sur la nature, 6 équipements + une salle de cross.',
    desc: "Automne comme hiver, printemps ou été, le Parc Beauregard Fitness & Coaching vous offre une vue agréable sur la nature. Avec 6 équipements différents et une salle de cross mise à votre disposition, ils vous permettront de maintenir votre souffle et votre cœur en bonne santé. S'oxygéner au Parc Beauregard n'a jamais été aussi simple.",
    href: '/espaces/cross-cardio',
    detail: true,
    img: '/assets/beauregard/cardio.webp',
  },
]

export const espaceBySlug = (slug: string) => ESPACES.find((e) => e.slug === slug)
