// Les 9 cours réels du Parc Beauregard (source : CONTENU-REEL-BEAUREGARD.md,
// crawl du site officiel). Source unique pour la page /cours et les
// sous-pages /cours/[slug]. À brancher sur Payload ultérieurement.
//
// benefices / pourQui : reformulations SOBRES des descriptions réelles (aucun
// fait ni chiffre inventé), utilisées comme fallback si les champs Payload sont
// vides. À faire valider par le client.

export type Cours = { slug: string; name: string; short: string; desc: string; img: string; espace: string; benefices: string[]; pourQui: string }

const I = (n: string) => `/assets/beauregard/${n}.webp`

export const COURS: Cours[] = [
  {
    slug: 'yoga',
    name: 'Yoga',
    short: 'Respiration, équilibre et souplesse.',
    desc: "Le Yoga est une discipline douce mais physiquement exigeante qui repose sur un enchaînement de mouvements dynamiques, basée sur la respiration. Il demande beaucoup de concentration et permet un renforcement musculaire tout en travaillant l'équilibre et la souplesse.",
    img: I('nature'),
    espace: 'Espace Cours Collectifs',
    benefices: [
      'Renforcement musculaire en profondeur',
      "Meilleur équilibre et gain de souplesse",
      'Travail de la respiration et de la concentration',
    ],
    pourQui: "Accessible à tous les niveaux : le Yoga reste doux tout en étant physiquement exigeant. Idéal pour se recentrer tout en travaillant sa forme physique.",
  },
  {
    slug: 'pilates',
    name: 'Pilates',
    short: 'Musculature naturelle et respiration.',
    desc: "Le Pilates est un cours qui consiste à développer une musculature naturelle, sans efforts violents, tout en mettant un accent particulier sur la respiration et la fluidité du mouvement. Il requiert éventuellement l'utilisation de matériel comme un ballon ou un boudin en mousse.",
    img: I('stretch'),
    espace: 'Espace Cours Collectifs',
    benefices: [
      'Développe une musculature naturelle, sans efforts violents',
      'Améliore la respiration et la fluidité du mouvement',
      'Renforce la posture en douceur',
    ],
    pourQui: "Pour tous, débutants compris. Convient particulièrement à celles et ceux qui recherchent un renforcement doux et progressif.",
  },
  {
    slug: 'boxe',
    name: 'Boxe',
    short: 'Discipline de combat qui sculpte le corps.',
    desc: "Le Boxing permet d'exercer une véritable discipline de combat tout en sculptant son corps. Les exercices sont axés sur le renforcement musculaire, la coordination, l'équilibre et la souplesse.",
    img: I('boxe'),
    espace: 'Espace Fonctionnel',
    benefices: [
      'Sculpte le corps par une véritable discipline de combat',
      "Développe la coordination, l'équilibre et la souplesse",
      'Renforcement musculaire complet',
    ],
    pourQui: "Débutants comme confirmés : les exercices s'adaptent au niveau de chacun.",
  },
  {
    slug: 'ecole-du-dos',
    name: 'École du dos',
    short: 'Détendre, muscler et assouplir votre dos.',
    desc: "80 % des Français ont des douleurs dorsales régulières. C'est pourquoi nous vous proposons un cours qui a pour objectif de détendre, de muscler, d'assouplir et d'étirer votre dos, pour prévenir d'éventuelles douleurs futures.",
    img: I('stretch'),
    espace: 'Espace Cours Collectifs',
    benefices: [
      'Détend, muscle, assouplit et étire le dos',
      'Aide à prévenir les douleurs dorsales',
      'Améliore le confort au quotidien',
    ],
    pourQui: "Pour toute personne sujette aux douleurs de dos ou souhaitant les prévenir. Accessible à tous les niveaux.",
  },
  {
    slug: 'renfo-fit',
    name: 'Renfo Fit',
    short: 'Renforcement musculaire : force et endurance.',
    desc: "Cuisses Abdos Fessiers. Cours visant à travailler l'ensemble des membres inférieurs ainsi que la ceinture abdominale, avec pour objectif d'améliorer la force et l'endurance.",
    img: I('renfo'),
    espace: 'Espace Fonctionnel',
    benefices: [
      'Renforce les membres inférieurs et la ceinture abdominale',
      "Améliore la force et l'endurance",
      'Cours ciblé cuisses, abdos, fessiers',
    ],
    pourQui: "Pour tous les niveaux, de la reprise du sport à l'entretien régulier.",
  },
  {
    slug: 'cross-training',
    name: 'Cross Training',
    short: 'Un entraînement complet, tout le corps.',
    desc: "Cet entraînement vous permettra de développer toutes vos qualités physiques. C'est donc un cours complet qui travaille l'ensemble du corps. Les résultats sont visibles rapidement. Le coach est capable de s'adapter à tous les niveaux en proposant des alternatives d'exercices.",
    img: I('cross'),
    espace: 'Espace Fonctionnel',
    benefices: [
      "Développe l'ensemble des qualités physiques",
      'Travaille tout le corps pour des résultats visibles rapidement',
      'Exercices adaptables à chaque niveau',
    ],
    pourQui: "De débutant à confirmé : le coach propose des alternatives d'exercices pour s'adapter à tous.",
  },
  {
    slug: 'total-silhouette',
    name: 'Total Silhouette',
    short: 'Renforcement complet en musique.',
    desc: "Le Total Silhouette vient renforcer l'ensemble des muscles du corps. Le cours idéal pour se remettre en forme, dans une ambiance conviviale et en musique. Il permet de renforcer et d'assouplir les muscles en profondeur. D'intensité modérée, ce cours vous permettra de travailler votre mobilité, votre coordination et votre équilibre.",
    img: I('renfo'),
    espace: 'Espace Fonctionnel',
    benefices: [
      "Renforce et assouplit l'ensemble des muscles en profondeur",
      'Travaille la mobilité, la coordination et l’équilibre',
      'Intensité modérée, dans une ambiance conviviale et en musique',
    ],
    pourQui: "Idéal pour se (re)mettre en forme. Accessible à tous grâce à une intensité modérée.",
  },
  {
    slug: 'hyrox',
    name: 'HYROX',
    short: 'Course à pied + exercices fonctionnels.',
    desc: "L'HYROX est une discipline combinant course à pied et exercices fonctionnels, sollicitant tout le corps pour développer force, endurance et condition physique générale, avec un impact rapide sur le cardio et la performance globale.",
    img: I('cross'),
    espace: 'Espace Fonctionnel',
    benefices: [
      'Combine course à pied et exercices fonctionnels',
      'Développe force, endurance et condition physique générale',
      'Impact rapide sur le cardio et la performance',
    ],
    pourQui: "Pour les sportifs qui veulent un entraînement complet et intense, à aborder selon sa condition physique.",
  },
  {
    slug: 'mob-stretch',
    name: 'Mob & Stretch',
    short: 'Mobilité, coordination, équilibre.',
    desc: "Dans une ambiance conviviale et en musique, travaillez votre mobilité, votre coordination et votre équilibre. Ce cours permet de renforcer et d'assouplir les muscles en profondeur. Idéal après avoir fait un effort physique.",
    img: I('nature'),
    espace: 'Espace Cours Collectifs',
    benefices: [
      'Améliore la mobilité, la coordination et l’équilibre',
      "Renforce et assouplit les muscles en profondeur",
      'Idéal en récupération après un effort',
    ],
    pourQui: "Pour tous, notamment après une séance intense. Parfait pour entretenir sa souplesse.",
  },
]

export const coursBySlug = (slug: string) => COURS.find((c) => c.slug === slug)
