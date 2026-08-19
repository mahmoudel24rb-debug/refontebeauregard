import React from 'react'
import PlanningPage from '@/components/sportix/PlanningPage'
import { DUREE_DEFAUT, slugsSecoursParNom, type JourPlanning } from '@/components/sportix/planning'
import {
  JOURS as JOURS_CAL,
  heureEnMinutes,
  normaliserActivite,
  rangSalle,
  type CreneauCal,
} from '@/components/sportix/planningLayout'
import { getPayloadClient } from '@/lib/payload'

// /planning : planning des cours collectifs (rentrée septembre 2026).
// Source : collection Payload `planning` (éditable), fallback planning.ts si vide.

// ISR : modifs Payload visibles sous ~60s sans rebuild
export const revalidate = 60

export const metadata = {
  title: 'Planning des cours',
  description:
    'Le planning hebdomadaire des cours collectifs du Parc Beauregard : Salle Fitness, Salle Cross et Bulle, du lundi au samedi. Rentrée septembre 2026.',
}

const JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const SALLES = ['Salle Fitness', 'Salle Cross', 'Bulle']

async function getPlanning(): Promise<JourPlanning[]> {
  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'planning',
      where: { actif: { equals: true } },
      sort: 'ordre',
      limit: 500,
      depth: 0,
    })
    if (!docs.length) return []
    // Regroupement jour -> salle -> créneaux (ordre déjà appliqué par le tri)
    const parJour = new Map<string, Map<string, { heure?: string; cours: string }[]>>()
    for (const d of docs as { jour: string; salle: string; heure?: string | null; cours: string }[]) {
      if (!parJour.has(d.jour)) parJour.set(d.jour, new Map())
      const salles = parJour.get(d.jour)!
      if (!salles.has(d.salle)) salles.set(d.salle, [])
      salles.get(d.salle)!.push({ heure: d.heure || undefined, cours: d.cours })
    }
    const result: JourPlanning[] = []
    for (const jour of JOURS) {
      const salles = parJour.get(jour)
      if (!salles) continue
      const sallesOrdonnees = [...SALLES, ...[...salles.keys()].filter((s) => !SALLES.includes(s))]
        .filter((s) => salles.has(s))
        .map((salle) => ({ salle, creneaux: salles.get(salle)! }))
      result.push({ jour, salles: sallesOrdonnees })
    }
    return result
  } catch {
    return []
  }
}

/**
 * Créneaux plats (sérialisables) pour le calendrier client : jour, salle, cours,
 * heure de début en minutes, durée, et slug de la fiche /cours quand elle existe.
 * Le slug vient de la collection `cours` (matching sur le nom normalisé), avec
 * la table de secours de planning.ts si la collection est indisponible.
 */
async function getCreneaux(): Promise<CreneauCal[]> {
  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'planning',
      where: { actif: { equals: true } },
      sort: 'ordre',
      limit: 500,
      depth: 0,
    })
    if (!docs.length) return []

    const slugs = slugsSecoursParNom()
    try {
      const { docs: cours } = await payload.find({
        collection: 'cours',
        sort: 'ordre',
        limit: 100,
        depth: 0,
        select: { nom: true, slug: true },
      })
      for (const c of cours as { nom?: string | null; slug?: string | null }[]) {
        if (c.nom && c.slug) slugs.set(normaliserActivite(c.nom), c.slug)
      }
    } catch {
      // table de secours conservée
    }

    const creneaux = (
      docs as { id: string | number; jour: string; salle: string; heure?: string | null; cours: string; duree?: number | null }[]
    ).map((d) => ({
      id: String(d.id),
      jour: d.jour,
      salle: d.salle,
      cours: d.cours,
      heure: d.heure || undefined,
      debutMin: heureEnMinutes(d.heure),
      duree: d.duree ?? DUREE_DEFAUT,
      slug: slugs.get(normaliserActivite(d.cours)),
    }))

    // ordre stable : jour, puis heure (sans horaire en fin), puis salle
    return creneaux.sort((a, b) => {
      const ja = JOURS_CAL.indexOf(a.jour)
      const jb = JOURS_CAL.indexOf(b.jour)
      if (ja !== jb) return ja - jb
      if (a.debutMin === null && b.debutMin !== null) return 1
      if (b.debutMin === null && a.debutMin !== null) return -1
      if (a.debutMin !== null && b.debutMin !== null && a.debutMin !== b.debutMin)
        return a.debutMin - b.debutMin
      return rangSalle(a.salle) - rangSalle(b.salle)
    })
  } catch {
    return []
  }
}

export default async function Page() {
  const [data, creneaux] = await Promise.all([getPlanning(), getCreneaux()])
  return <PlanningPage data={data} creneaux={creneaux} />
}
