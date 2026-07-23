// Les 9 cours réels du Parc Beauregard (source : CONTENU-REEL-BEAUREGARD.md,
// crawl du site officiel). Source unique pour la page /cours et les
// sous-pages /cours/[slug]. À brancher sur Payload ultérieurement.

export type Cours = { slug: string; name: string; short: string; desc: string; img: string; espace: string }

const I = (n: string) => `/assets/beauregard/${n}.webp`

export const COURS: Cours[] = [
  {
    slug: 'yoga',
    name: 'Yoga',
    short: 'Respiration, équilibre et souplesse.',
    desc: "Le Yoga est une discipline douce mais physiquement exigeante qui repose sur un enchaînement de mouvements dynamiques, basée sur la respiration. Il demande beaucoup de concentration et permet un renforcement musculaire tout en travaillant l'équilibre et la souplesse.",
    img: I('nature'),
    espace: 'Espace Cours Collectifs',
  },
  {
    slug: 'pilates',
    name: 'Pilates',
    short: 'Musculature naturelle et respiration.',
    desc: "Le Pilates est un cours qui consiste à développer une musculature naturelle, sans efforts violents, tout en mettant un accent particulier sur la respiration et la fluidité du mouvement. Il requiert éventuellement l'utilisation de matériel comme un ballon ou un boudin en mousse.",
    img: I('stretch'),
    espace: 'Espace Cours Collectifs',
  },
  {
    slug: 'boxe',
    name: 'Boxe',
    short: 'Discipline de combat qui sculpte le corps.',
    desc: "Le Boxing permet d'exercer une véritable discipline de combat tout en sculptant son corps. Les exercices sont axés sur le renforcement musculaire, la coordination, l'équilibre et la souplesse.",
    img: I('boxe'),
    espace: 'Espace Fonctionnel',
  },
  {
    slug: 'ecole-du-dos',
    name: 'École du dos',
    short: 'Détendre, muscler et assouplir votre dos.',
    desc: "80 % des Français ont des douleurs dorsales régulières. C'est pourquoi nous vous proposons un cours qui a pour objectif de détendre, de muscler, d'assouplir et d'étirer votre dos, pour prévenir d'éventuelles douleurs futures.",
    img: I('stretch'),
    espace: 'Espace Cours Collectifs',
  },
  {
    slug: 'renfo-fit',
    name: 'Renfo Fit',
    short: 'Renforcement musculaire : force et endurance.',
    desc: "Cuisses Abdos Fessiers. Cours visant à travailler l'ensemble des membres inférieurs ainsi que la ceinture abdominale, avec pour objectif d'améliorer la force et l'endurance.",
    img: I('renfo'),
    espace: 'Espace Fonctionnel',
  },
  {
    slug: 'cross-training',
    name: 'Cross Training',
    short: 'Un entraînement complet, tout le corps.',
    desc: "Cet entraînement vous permettra de développer toutes vos qualités physiques. C'est donc un cours complet qui travaille l'ensemble du corps. Les résultats sont visibles rapidement. Le coach est capable de s'adapter à tous les niveaux en proposant des alternatives d'exercices.",
    img: I('cross'),
    espace: 'Espace Fonctionnel',
  },
  {
    slug: 'total-silhouette',
    name: 'Total Silhouette',
    short: 'Renforcement complet en musique.',
    desc: "Le Total Silhouette vient renforcer l'ensemble des muscles du corps. Le cours idéal pour se remettre en forme, dans une ambiance conviviale et en musique. Il permet de renforcer et d'assouplir les muscles en profondeur. D'intensité modérée, ce cours vous permettra de travailler votre mobilité, votre coordination et votre équilibre.",
    img: I('renfo'),
    espace: 'Espace Fonctionnel',
  },
  {
    slug: 'hyrox',
    name: 'HYROX',
    short: 'Course à pied + exercices fonctionnels.',
    desc: "L'HYROX est une discipline combinant course à pied et exercices fonctionnels, sollicitant tout le corps pour développer force, endurance et condition physique générale, avec un impact rapide sur le cardio et la performance globale.",
    img: I('cross'),
    espace: 'Espace Fonctionnel',
  },
  {
    slug: 'mob-stretch',
    name: 'Mob & Stretch',
    short: 'Mobilité, coordination, équilibre.',
    desc: "Dans une ambiance conviviale et en musique, travaillez votre mobilité, votre coordination et votre équilibre. Ce cours permet de renforcer et d'assouplir les muscles en profondeur. Idéal après avoir fait un effort physique.",
    img: I('nature'),
    espace: 'Espace Cours Collectifs',
  },
]

export const coursBySlug = (slug: string) => COURS.find((c) => c.slug === slug)
