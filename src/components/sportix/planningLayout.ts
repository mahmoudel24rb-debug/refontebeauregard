// Moteur de placement du calendrier « Semaine type » (/planning).
//
// Module PUR (aucun React, aucun DOM) : il transforme la liste plate des
// créneaux en blocs positionnables, et rien d'autre. Testé par
// tests/int/planningLayout.int.spec.ts.
//
// Le calendrier ne travaille pas avec des dates : le planning est une semaine
// TYPE (Lundi -> Samedi, pas de 12 mars). Les positions sont donc exprimées en
// minutes depuis minuit, et la conversion en pixels est faite en CSS par
// custom properties (cf. .bg-cal-* dans overrides.css).

/** Un créneau prêt à afficher, sérialisable (props d'un composant client). */
export type CreneauCal = {
  id: string
  jour: string
  salle: string
  cours: string
  /** Libellé d'origine (« 18h », « 9h15 ») ; absent = horaire à confirmer. */
  heure?: string
  /** Minutes depuis minuit ; null si le créneau n'a pas d'horaire exploitable. */
  debutMin: number | null
  /** Durée en minutes (60 par défaut côté serveur). */
  duree: number
  /** Slug de la fiche /cours/[slug] quand le cours en a une. */
  slug?: string
}

/** Un créneau horodaté, placé dans la grille. */
export type BlocPose = {
  creneau: CreneauCal
  /** Minutes depuis minuit. */
  debut: number
  fin: number
  /** Index de colonne dans le cluster de chevauchement (0-based). */
  col: number
  /** Nombre total de colonnes du cluster (1 = bloc pleine largeur). */
  cols: number
}

export const JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

/** Ordre stable des salles : la colonne de gauche est toujours la même salle. */
const RANGS_SALLE: Record<string, number> = {
  'Salle Fitness': 0,
  'Salle Cross': 1,
  Bulle: 2,
}

export function rangSalle(salle?: string): number {
  if (!salle) return 99
  const r = RANGS_SALLE[salle]
  return r === undefined ? 99 : r
}

/** « 10h », « 9h15 » -> minutes depuis minuit ; null si le format est autre. */
export function heureEnMinutes(heure?: string | null): number | null {
  if (!heure) return null
  const m = heure.trim().match(/^(\d{1,2})h(\d{2})?$/)
  if (!m) return null
  const h = Number(m[1])
  const min = Number(m[2] || 0)
  if (h > 23 || min > 59) return null
  return h * 60 + min
}

/** 1080 -> « 18h », 1095 -> « 18h15 ». */
export function formatHeure(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, '0')}`
}

/** Heure de fin lisible à partir du début et de la durée. */
export function formatFin(debutMin: number, duree: number): string {
  return formatHeure(debutMin + duree)
}

/** 60 -> « 1h », 90 -> « 1h30 », 45 -> « 45 min ». */
export function formatDuree(minutes: number): string {
  if (minutes < 60) return `${minutes} min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, '0')}`
}

/** Clé de comparaison d'un nom de cours (accents, casse et espaces neutralisés). */
export function normaliserActivite(nom: string): string {
  // NFD sépare la lettre de son accent ; on retire ensuite les diacritiques
  // combinants (U+0300 à U+036F) par code, plutôt qu'avec une plage littérale
  // dans une expression régulière (illisible et fragile dans un fichier source).
  const sansAccents = Array.from(nom.normalize('NFD'))
    .filter((ch) => {
      const code = ch.codePointAt(0) as number
      return code < 0x0300 || code > 0x036f
    })
    .join('')
  return sansAccents.toLowerCase().replace(/\s+/g, ' ').trim()
}

/**
 * Bornes de l'axe horaire, dérivées des données (heure pleine inférieure du
 * premier début, heure pleine supérieure de la dernière fin).
 * Repli 9h -> 21h si aucun créneau n'est horodaté.
 */
export function bornesAxe(creneaux: CreneauCal[]): { debut: number; fin: number } {
  const horodates = creneaux.filter((c) => c.debutMin !== null)
  if (!horodates.length) return { debut: 9 * 60, fin: 21 * 60 }
  let min = Infinity
  let max = -Infinity
  for (const c of horodates) {
    const d = c.debutMin as number
    if (d < min) min = d
    const f = d + Math.max(0, c.duree)
    if (f > max) max = f
  }
  return { debut: Math.floor(min / 60) * 60, fin: Math.ceil(max / 60) * 60 }
}

/**
 * Place les créneaux horodatés d'UN jour.
 *
 * 1. tri (début croissant, fin décroissante, puis rang de salle) ;
 * 2. clusters par balayage : deux créneaux se chevauchent si a.debut < b.fin ET
 *    b.debut < a.fin (comparaison STRICTE : 18h-19h puis 19h-20h ne se
 *    chevauchent pas) ; le chevauchement est transitif à l'intérieur d'un cluster ;
 * 3. interval partitioning glouton : première colonne libre, sinon nouvelle ;
 * 4. tous les membres d'un cluster reçoivent le même `cols`, pour que les
 *    largeurs restent alignées.
 *
 * Les créneaux sans horaire sont ignorés (ils vont dans la rangée
 * « Horaire à confirmer »).
 */
export function poserJour(creneaux: CreneauCal[]): BlocPose[] {
  const blocs = creneaux
    .filter((c) => c.debutMin !== null)
    .map((c) => {
      const debut = c.debutMin as number
      return { creneau: c, debut, fin: debut + Math.max(1, c.duree), col: 0, cols: 1 }
    })
    .sort((a, b) => {
      if (a.debut !== b.debut) return a.debut - b.debut
      if (a.fin !== b.fin) return b.fin - a.fin
      const ra = rangSalle(a.creneau.salle)
      const rb = rangSalle(b.creneau.salle)
      if (ra !== rb) return ra - rb
      return a.creneau.cours.localeCompare(b.creneau.cours, 'fr')
    })

  let cluster: BlocPose[] = []
  let clusterFin = -Infinity

  const cloreCluster = () => {
    if (!cluster.length) return
    // interval partitioning glouton : fins de la dernière pose de chaque colonne
    const finsColonnes: number[] = []
    for (const bloc of cluster) {
      let cible = finsColonnes.findIndex((fin) => fin <= bloc.debut)
      if (cible === -1) {
        finsColonnes.push(bloc.fin)
        cible = finsColonnes.length - 1
      } else {
        finsColonnes[cible] = bloc.fin
      }
      bloc.col = cible
    }
    for (const bloc of cluster) bloc.cols = finsColonnes.length
    cluster = []
    clusterFin = -Infinity
  }

  for (const bloc of blocs) {
    if (cluster.length && bloc.debut < clusterFin) {
      cluster.push(bloc)
      clusterFin = Math.max(clusterFin, bloc.fin)
    } else {
      cloreCluster()
      cluster = [bloc]
      clusterFin = bloc.fin
    }
  }
  cloreCluster()

  return blocs
}

/** Créneaux d'un jour sans horaire exploitable, dans l'ordre de saisie. */
export function sansHeure(creneaux: CreneauCal[]): CreneauCal[] {
  return creneaux.filter((c) => c.debutMin === null)
}

/** Liste des activités présentes, triée alphabétiquement, avec leur nombre de créneaux. */
export function activitesDisponibles(creneaux: CreneauCal[]): { nom: string; total: number }[] {
  const compte = new Map<string, number>()
  for (const c of creneaux) compte.set(c.cours, (compte.get(c.cours) || 0) + 1)
  return [...compte.entries()]
    .map(([nom, total]) => ({ nom, total }))
    .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'))
}
