import React from 'react'
import PlanningPage from '@/components/sportix/PlanningPage'
import type { JourPlanning } from '@/components/sportix/planning'
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

export default async function Page() {
  const data = await getPlanning()
  return <PlanningPage data={data} />
}
