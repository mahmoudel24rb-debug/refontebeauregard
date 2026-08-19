// Planning des cours collectifs — rentrée septembre 2026.
// Source : récapitulatif client (rentrée sept. 2026). Seule vérité : ne rien ajouter ni déplacer.
//
// Normalisations volontaires par rapport au document client (ne pas « corriger ») :
// - « Total.S » → Total Silhouette
// - « Cross » → Cross Training
// - « Hyrox » → HYROX
// - « Renfo Fit (Bastien) » → Renfo Fit (le prénom est interne)
// - « Kid Fitness » → Journée enfants (mention interne au club, sans lien externe)
// Les créneaux internes « Dispo Kid / IPMS » et « Dispo location » ont été volontairement omis.
// Certains créneaux sont sans horaire dans le doc client (Pole Dance, Renfo Fit, Journée enfants) :
// ils sont affichés sans horaire.

import { heureEnMinutes, normaliserActivite, type CreneauCal } from './planningLayout'

export type Creneau = {
  /** Horaire au format « 10h » / « 9h15 » — absent si le doc client n'en donne pas. */
  heure?: string
  cours: string
}

export type SallePlanning = {
  salle: string
  creneaux: Creneau[]
}

export type JourPlanning = {
  jour: string
  salles: SallePlanning[]
}

export const PLANNING: JourPlanning[] = [
  {
    jour: 'Lundi',
    salles: [
      {
        salle: 'Salle Fitness',
        creneaux: [
          { heure: '10h', cours: 'École du dos' },
          { heure: '17h', cours: 'Pilates' },
          { heure: '18h', cours: 'Yoga' },
          { heure: '19h', cours: 'Yoga' },
        ],
      },
      {
        salle: 'Salle Cross',
        creneaux: [
          { heure: '9h15', cours: 'Pilates' },
          { heure: '18h', cours: 'Pole Dance' }, // horaire provisoire, à ajuster dans l'admin
        ],
      },
    ],
  },
  {
    jour: 'Mardi',
    salles: [
      {
        salle: 'Salle Fitness',
        creneaux: [
          { heure: '9h15', cours: 'Pilates' },
          { heure: '10h', cours: 'Pilates' },
          { heure: '17h15', cours: 'Total Silhouette' },
          { heure: '18h', cours: 'Mob & Stretch' },
          { heure: '19h', cours: 'Pilates' },
        ],
      },
      {
        salle: 'Bulle',
        creneaux: [
          { heure: '18h', cours: 'Cross Training' },
          { heure: '19h', cours: 'Boxe' },
        ],
      },
    ],
  },
  {
    jour: 'Mercredi',
    salles: [
      {
        salle: 'Salle Fitness',
        creneaux: [
          { heure: '17h30', cours: 'Renfo Fit' }, // horaire provisoire, à ajuster dans l'admin
          { heure: '18h30', cours: 'Dance' },
          { heure: '19h15', cours: 'Pilates' },
        ],
      },
      {
        salle: 'Salle Cross',
        creneaux: [{ heure: '18h', cours: 'Pole Dance' }], // horaire provisoire
      },
      {
        salle: 'Bulle',
        creneaux: [
          { heure: '9h', cours: 'Journée enfants' }, // horaire provisoire (journée)
          { heure: '18h', cours: 'Cross Training' },
          { heure: '19h', cours: 'HYROX' },
        ],
      },
    ],
  },
  {
    jour: 'Jeudi',
    salles: [
      {
        salle: 'Salle Fitness',
        creneaux: [{ heure: '18h', cours: 'Yoga' }],
      },
      {
        salle: 'Salle Cross',
        creneaux: [{ heure: '19h', cours: 'Bungee' }],
      },
      {
        salle: 'Bulle',
        creneaux: [
          { heure: '18h', cours: 'HYROX' },
          { heure: '19h', cours: 'Boxe' },
        ],
      },
    ],
  },
  {
    jour: 'Vendredi',
    salles: [
      {
        salle: 'Salle Fitness',
        creneaux: [{ heure: '9h15', cours: 'Pilates' }],
      },
      {
        salle: 'Bulle',
        creneaux: [
          { heure: '18h', cours: 'Cross Training' },
          { heure: '19h', cours: 'HYROX' },
        ],
      },
    ],
  },
  {
    jour: 'Samedi',
    salles: [
      {
        salle: 'Salle Fitness',
        creneaux: [
          { heure: '9h30', cours: 'Total Silhouette' },
          { heure: '10h15', cours: 'Pilates' },
        ],
      },
      {
        salle: 'Salle Cross',
        creneaux: [
          { heure: '11h', cours: 'Boxe' },
          { heure: '12h15', cours: 'HYROX' },
        ],
      },
    ],
  },
]

// Table de secours nom de cours -> fiche /cours/[slug], utilisée quand la
// collection Payload `cours` est indisponible. Les créneaux absents de cette
// table (Pole Dance, Dance, Journée enfants, Bungee) n'ont volontairement pas
// de fiche : le calendrier n'affichera alors aucun lien.
export const SLUGS_COURS: { nom: string; slug: string }[] = [
  { nom: 'Yoga', slug: 'yoga' },
  { nom: 'Pilates', slug: 'pilates' },
  { nom: 'Boxe', slug: 'boxe' },
  { nom: 'École du dos', slug: 'ecole-du-dos' },
  { nom: 'Renfo Fit', slug: 'renfo-fit' },
  { nom: 'Cross Training', slug: 'cross-training' },
  { nom: 'Total Silhouette', slug: 'total-silhouette' },
  { nom: 'HYROX', slug: 'hyrox' },
  { nom: 'Mob & Stretch', slug: 'mob-stretch' },
]

/** Slugs de secours indexés par nom normalisé. */
export const slugsSecoursParNom = (): Map<string, string> =>
  new Map(SLUGS_COURS.map((c) => [normaliserActivite(c.nom), c.slug]))

/** Durée par défaut d'un créneau, en minutes (le champ Payload vaut 60 par défaut). */
export const DUREE_DEFAUT = 60

/**
 * Adaptateur du planning statique vers les créneaux plats du calendrier.
 * Sert de repli quand la collection Payload est vide ou injoignable.
 */
export function planningVersCreneaux(data: JourPlanning[] = PLANNING): CreneauCal[] {
  const slugs = slugsSecoursParNom()
  const creneaux: CreneauCal[] = []
  for (const jour of data) {
    for (const salle of jour.salles) {
      salle.creneaux.forEach((c, i) => {
        creneaux.push({
          id: `${jour.jour}-${salle.salle}-${i}`.replace(/\s+/g, '-').toLowerCase(),
          jour: jour.jour,
          salle: salle.salle,
          cours: c.cours,
          heure: c.heure,
          debutMin: heureEnMinutes(c.heure),
          duree: DUREE_DEFAUT,
          slug: slugs.get(normaliserActivite(c.cours)),
        })
      })
    }
  }
  return creneaux
}
