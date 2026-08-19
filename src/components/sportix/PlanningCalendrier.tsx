'use client'

import React, { useEffect, useMemo, useState } from 'react'
import PlanningGrilleTemps from './PlanningGrilleTemps'
import { JOURS, bornesAxe, couleurSalle, rangSalle, type CreneauCal } from './planningLayout'

// Calendrier « Semaine type » de /planning.
//
// Adaptation LECTURE SEULE du EventManager 21st.dev : on garde son architecture
// (un état central, des vues enfants qui reçoivent les créneaux déjà filtrés),
// mais tout le CRUD, le drag & drop, la recherche et la navigation de dates
// sont retirés — un planning hebdomadaire type n'a ni dates ni édition.
// Les primitives shadcn/Radix sont remplacées par du HTML natif stylé
// (.bg-cal-* dans overrides.css), le projet n'utilisant pas Tailwind.

export type PlanningCalendrierProps = { creneaux: CreneauCal[] }

/** Salles présentes, dans l'ordre des colonnes, pour la légende. */
function sallesDe(creneaux: CreneauCal[]): string[] {
  const vues: string[] = []
  for (const c of creneaux) if (!vues.includes(c.salle)) vues.push(c.salle)
  return vues.sort((a, b) => rangSalle(a) - rangSalle(b) || a.localeCompare(b, 'fr'))
}

export default function PlanningCalendrier({ creneaux }: PlanningCalendrierProps) {
  // Jour courant : calculé APRÈS montage uniquement. Le rendu serveur ne connaît
  // pas le fuseau du visiteur, le calculer pendant le rendu créerait un
  // décalage d'hydratation.
  const [aujourdhui, setAujourdhui] = useState<string | null>(null)

  useEffect(() => {
    const index = new Date().getDay() // 0 = dimanche
    setAujourdhui(index >= 1 && index <= 6 ? JOURS[index - 1] : null)
  }, [])

  const bornes = useMemo(() => bornesAxe(creneaux), [creneaux])
  const salles = useMemo(() => sallesDe(creneaux), [creneaux])

  return (
    <section className="bg-cal" aria-label="Calendrier des cours de la semaine">
      <ul className="bg-cal-legende">
        {salles.map((s) => (
          <li key={s}>
            <span
              className="bg-cal-pastille"
              aria-hidden="true"
              style={{ background: couleurSalle(s).pleine }}
            />
            {s}
          </li>
        ))}
      </ul>

      <PlanningGrilleTemps
        jours={JOURS}
        creneaux={creneaux}
        bornes={bornes}
        aujourdhui={aujourdhui}
        variante="compact"
      />
    </section>
  )
}
