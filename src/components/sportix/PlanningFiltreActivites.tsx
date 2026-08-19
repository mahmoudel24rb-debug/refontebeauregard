'use client'

import React, { useEffect, useRef, useState } from 'react'

// Filtre par activité. Le composant d'origine proposait trois menus déroulants
// (couleur / étiquette / catégorie) : ici une seule dimension a du sens, le
// cours. Le menu Radix est remplacé par un panneau maison à cases à cocher
// NATIVES (accent-color vert) : rien à installer, et le clavier fonctionne
// sans code supplémentaire.
// Sélection vide = tout est visible (comme le composant d'origine).

export type PlanningFiltreActivitesProps = {
  activites: { nom: string; total: number }[]
  selection: string[]
  onChange: (selection: string[]) => void
}

export default function PlanningFiltreActivites({
  activites,
  selection,
  onChange,
}: PlanningFiltreActivitesProps) {
  const [ouvert, setOuvert] = useState(false)
  const enveloppe = useRef<HTMLDivElement>(null)
  const declencheur = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!ouvert) return
    const auClic = (e: MouseEvent) => {
      if (enveloppe.current && !enveloppe.current.contains(e.target as Node)) setOuvert(false)
    }
    const auClavier = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOuvert(false)
      declencheur.current?.focus()
    }
    document.addEventListener('mousedown', auClic)
    document.addEventListener('keydown', auClavier)
    return () => {
      document.removeEventListener('mousedown', auClic)
      document.removeEventListener('keydown', auClavier)
    }
  }, [ouvert])

  const basculer = (nom: string, coche: boolean) =>
    onChange(coche ? [...selection, nom] : selection.filter((a) => a !== nom))

  return (
    <div className="bg-cal-filtre" ref={enveloppe}>
      <button
        type="button"
        ref={declencheur}
        className={selection.length ? 'bg-cal-btn bg-cal-btn-bordure bg-cal-btn-marque' : 'bg-cal-btn bg-cal-btn-bordure'}
        aria-expanded={ouvert}
        aria-haspopup="true"
        onClick={() => setOuvert((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z" />
        </svg>
        Activités
        {selection.length > 0 && <span className="bg-cal-compteur">{selection.length}</span>}
      </button>

      {ouvert && (
        <div className="bg-cal-panneau" role="group" aria-label="Filtrer par activité">
          <p className="bg-cal-panneau-titre">Filtrer par activité</p>
          <ul className="bg-cal-panneau-liste">
            {activites.map((a) => (
              <li key={a.nom}>
                <label className="bg-cal-case">
                  <input
                    type="checkbox"
                    checked={selection.includes(a.nom)}
                    onChange={(e) => basculer(a.nom, e.target.checked)}
                  />
                  <span className="bg-cal-case-nom">{a.nom}</span>
                  <span className="bg-cal-case-total">{a.total}</span>
                </label>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="bg-cal-panneau-pied"
            onClick={() => onChange([])}
            disabled={selection.length === 0}
          >
            Tout afficher
          </button>
        </div>
      )}
    </div>
  )
}
