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
          { cours: 'Pole Dance' },
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
          { cours: 'Renfo Fit' },
          { heure: '18h30', cours: 'Dance' },
          { heure: '19h15', cours: 'Pilates' },
        ],
      },
      {
        salle: 'Salle Cross',
        creneaux: [{ cours: 'Pole Dance' }],
      },
      {
        salle: 'Bulle',
        creneaux: [
          { cours: 'Journée enfants' }, // sans horaire
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
