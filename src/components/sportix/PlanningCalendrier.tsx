'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import PlanningGrilleTemps from './PlanningGrilleTemps'
import PlanningListe from './PlanningListe'
import { JOURS, bornesAxe, couleurSalle, rangSalle, type CreneauCal } from './planningLayout'

// Calendrier « Semaine type » de /planning.
//
// Adaptation LECTURE SEULE du EventManager 21st.dev : on garde son architecture
// (un état central, des vues enfants qui reçoivent les créneaux déjà filtrés,
// une bascule de vue en groupe de boutons sur desktop et en select natif sur
// mobile), mais tout le CRUD, le drag & drop, la recherche et la navigation de
// dates sont retirés — un planning hebdomadaire type n'a ni dates ni édition.
// Les primitives shadcn/Radix sont remplacées par du HTML natif stylé
// (.bg-cal-* dans overrides.css), le projet n'utilisant pas Tailwind.

export type Vue = 'semaine' | 'jour' | 'liste'

export type PlanningCalendrierProps = { creneaux: CreneauCal[] }

const VUES: { cle: Vue; libelle: string }[] = [
  { cle: 'semaine', libelle: 'Semaine' },
  { cle: 'jour', libelle: 'Jour' },
  { cle: 'liste', libelle: 'Liste' },
]

/** Salles présentes, dans l'ordre des colonnes, pour la légende. */
function sallesDe(creneaux: CreneauCal[]): string[] {
  const vues: string[] = []
  for (const c of creneaux) if (!vues.includes(c.salle)) vues.push(c.salle)
  return vues.sort((a, b) => rangSalle(a) - rangSalle(b) || a.localeCompare(b, 'fr'))
}

const Chevron = ({ sens }: { sens: 'gauche' | 'droite' }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={sens === 'gauche' ? 'M15 5 8 12l7 7' : 'm9 5 7 7-7 7'} />
  </svg>
)

export default function PlanningCalendrier({ creneaux }: PlanningCalendrierProps) {
  const [vue, setVue] = useState<Vue>('semaine')
  const [jourActif, setJourActif] = useState<string>(JOURS[0])
  // Jour courant : calculé APRÈS montage uniquement. Le rendu serveur ne connaît
  // pas le fuseau du visiteur, le calculer pendant le rendu créerait un
  // décalage d'hydratation.
  const [aujourdhui, setAujourdhui] = useState<string | null>(null)
  const boutonsVue = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const index = new Date().getDay() // 0 = dimanche
    const jour = index >= 1 && index <= 6 ? JOURS[index - 1] : null
    setAujourdhui(jour)
    if (jour) setJourActif(jour)
    // Sur petit écran, la semaine complète est illisible d'un coup : on ouvre
    // sur la vue Jour, positionnée sur le jour courant.
    if (window.matchMedia('(max-width: 1024px)').matches) setVue('jour')
  }, [])

  const bornes = useMemo(() => bornesAxe(creneaux), [creneaux])
  const salles = useMemo(() => sallesDe(creneaux), [creneaux])

  const indexJour = JOURS.indexOf(jourActif)
  const allerAuJour = (delta: number) => {
    const cible = indexJour + delta
    if (cible >= 0 && cible < JOURS.length) setJourActif(JOURS[cible])
  }

  // Groupe de boutons : une seule tabulation, flèches pour changer de vue
  // (motif « toolbar » ARIA — évite trois arrêts de tabulation avant la grille).
  const naviguerVues = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const suivant = (i + (e.key === 'ArrowRight' ? 1 : VUES.length - 1)) % VUES.length
    setVue(VUES[suivant].cle)
    boutonsVue.current[suivant]?.focus()
  }

  return (
    <section className="bg-cal" aria-label="Calendrier des cours de la semaine">
      <div className="bg-cal-barre">
        {/* Desktop : groupe de boutons. Mobile : select natif (cf. overrides.css) */}
        <div className="bg-cal-vues" role="group" aria-label="Choisir la vue">
          {VUES.map((v, i) => (
            <button
              key={v.cle}
              type="button"
              ref={(el) => {
                boutonsVue.current[i] = el
              }}
              className={vue === v.cle ? 'bg-cal-btn bg-cal-btn-actif' : 'bg-cal-btn'}
              aria-pressed={vue === v.cle}
              tabIndex={vue === v.cle ? 0 : -1}
              onClick={() => setVue(v.cle)}
              onKeyDown={(e) => naviguerVues(e, i)}
            >
              {v.libelle}
            </button>
          ))}
        </div>
        <label className="bg-cal-select-enveloppe">
          <span className="bg-cal-sr">Choisir la vue</span>
          <select
            className="bg-cal-select"
            value={vue}
            onChange={(e) => setVue(e.target.value as Vue)}
          >
            {VUES.map((v) => (
              <option key={v.cle} value={v.cle}>
                {v.libelle}
              </option>
            ))}
          </select>
        </label>
      </div>

      {vue === 'jour' && (
        <div className="bg-cal-jours">
          <button
            type="button"
            className="bg-cal-chevron"
            onClick={() => allerAuJour(-1)}
            disabled={indexJour <= 0}
            aria-label="Jour précédent"
          >
            <Chevron sens="gauche" />
          </button>
          <div className="bg-cal-pills" role="group" aria-label="Choisir le jour">
            {JOURS.map((j) => (
              <button
                key={j}
                type="button"
                className={j === jourActif ? 'bg-cal-pill bg-cal-pill-actif' : 'bg-cal-pill'}
                aria-pressed={j === jourActif}
                onClick={() => setJourActif(j)}
              >
                {j}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="bg-cal-chevron"
            onClick={() => allerAuJour(1)}
            disabled={indexJour >= JOURS.length - 1}
            aria-label="Jour suivant"
          >
            <Chevron sens="droite" />
          </button>
          <button
            type="button"
            className="bg-cal-btn"
            onClick={() => aujourdhui && setJourActif(aujourdhui)}
            disabled={!aujourdhui}
          >
            Aujourd&rsquo;hui
          </button>
        </div>
      )}

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

      {vue === 'liste' ? (
        <PlanningListe jours={JOURS} creneaux={creneaux} />
      ) : (
        <PlanningGrilleTemps
          jours={vue === 'jour' ? [jourActif] : JOURS}
          creneaux={creneaux}
          bornes={bornes}
          aujourdhui={aujourdhui}
          variante={vue === 'jour' ? 'detailed' : 'compact'}
        />
      )}
    </section>
  )
}
