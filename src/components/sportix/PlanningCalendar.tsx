import React from 'react'
import type { JourPlanning } from './planning'

// Calendrier hebdomadaire (server component) : une colonne par jour, les
// créneaux de toutes les salles fusionnés et TRIÉS par heure. Les créneaux sans
// horaire dans le document client (Pole Dance, Renfo Fit, Journée enfants)
// restent affichés, en fin de colonne, avec la mention « Horaire à confirmer ».
// Le responsive (grille 6 colonnes en desktop, scroll-snap en mobile) est dans
// overrides.css, les media queries n'étant pas exprimables en style inline.

const COULEURS: Record<string, string> = {
  'Salle Fitness': '#376131',
  'Salle Cross': '#6f9b3c',
  Bulle: '#2e4f3a',
}
const COULEUR_DEFAUT = '#737373'

// « 10h », « 9h15 » -> minutes depuis minuit ; null si le format est autre
export function heureEnMinutes(heure?: string): number | null {
  if (!heure) return null
  const m = heure.trim().match(/^(\d{1,2})h(\d{2})?$/)
  if (!m) return null
  return Number(m[1]) * 60 + Number(m[2] || 0)
}

type Creneau = { heure?: string; cours: string; salle: string; minutes: number | null }

function creneauxDuJour(jour: JourPlanning): Creneau[] {
  const plats: Creneau[] = []
  for (const s of jour.salles) {
    for (const c of s.creneaux) {
      plats.push({ heure: c.heure, cours: c.cours, salle: s.salle, minutes: heureEnMinutes(c.heure) })
    }
  }
  // tri par heure ; les créneaux sans horaire exploitable ferment la colonne
  return plats.sort((a, b) => {
    if (a.minutes === null && b.minutes === null) return 0
    if (a.minutes === null) return 1
    if (b.minutes === null) return -1
    return a.minutes - b.minutes
  })
}

export default function PlanningCalendar({ data }: { data: JourPlanning[] }) {
  const salles = Array.from(new Set(data.flatMap((j) => j.salles.map((s) => s.salle))))

  return (
    <div>
      {/* Légende des salles */}
      <ul className="bg-planning-legende" style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px 22px', margin: '0 0 22px', padding: 0 }}>
        {salles.map((s) => (
          <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14.5, color: '#404040' }}>
            <span
              aria-hidden="true"
              style={{ width: 10, height: 10, borderRadius: '50%', background: COULEURS[s] || COULEUR_DEFAUT, display: 'inline-block', flexShrink: 0 }}
            />
            {s}
          </li>
        ))}
      </ul>

      <div className="bg-planning-grille">
        {data.map((jour) => {
          const creneaux = creneauxDuJour(jour)
          return (
            <div key={jour.jour} className="bg-planning-colonne">
              <h2 className="bg-planning-jour">{jour.jour}</h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {creneaux.map((c, i) => (
                  <li
                    key={`${jour.jour}-${i}`}
                    style={{ background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 12, padding: '12px 14px' }}
                  >
                    <span style={{ display: 'block', fontWeight: 700, fontSize: c.heure ? 16 : 13, color: c.heure ? '#171717' : '#737373', letterSpacing: c.heure ? '-0.01em' : 0 }}>
                      {c.heure || 'Horaire à confirmer'}
                    </span>
                    <span style={{ display: 'block', fontSize: 15, color: '#171717', margin: '3px 0 6px' }}>{c.cours}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: '#525252' }}>
                      <span
                        aria-hidden="true"
                        style={{ width: 8, height: 8, borderRadius: '50%', background: COULEURS[c.salle] || COULEUR_DEFAUT, display: 'inline-block', flexShrink: 0 }}
                      />
                      {c.salle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
