'use client'

import React from 'react'
import {
  couleurSalle,
  formatDuree,
  formatFin,
  formatHeure,
  poserJour,
  sansHeure,
  type CreneauCal,
} from './planningLayout'

// Vue Liste : les créneaux groupés par jour, du lundi au samedi.
// Les lignes ne sont PAS cliquables : seul le lien « Voir le cours » l'est,
// pour ne pas piéger la navigation clavier sur une liste de 31 entrées.

export default function PlanningListe({
  jours,
  creneaux,
}: {
  jours: string[]
  creneaux: CreneauCal[]
}) {
  const groupes = jours
    .map((jour) => {
      const duJour = creneaux.filter((c) => c.jour === jour)
      return { jour, poses: poserJour(duJour), attente: sansHeure(duJour) }
    })
    .filter((g) => g.poses.length > 0 || g.attente.length > 0)

  if (!groupes.length) {
    return <p className="bg-cal-vide">Aucun cours ne correspond à ce filtre.</p>
  }

  const lien = (c: CreneauCal) =>
    c.slug ? (
      <a className="bg-cal-liste-lien" href={`/cours/${c.slug}`}>
        Voir le cours
      </a>
    ) : (
      <span />
    )

  return (
    <div className="bg-cal-liste">
      {groupes.map(({ jour, poses, attente }) => (
        <section key={jour} className="bg-cal-liste-groupe">
          <h3 className="bg-cal-liste-jour">{jour}</h3>
          <ul className="bg-cal-liste-lignes">
            {poses.map((p) => {
              const c = p.creneau
              return (
                <li key={c.id} className="bg-cal-liste-ligne">
                  <span className="bg-cal-liste-heure">
                    {formatHeure(p.debut)} – {formatFin(p.debut, c.duree)}
                  </span>
                  <span
                    className="bg-cal-pastille"
                    aria-hidden="true"
                    style={{ background: couleurSalle(c.salle).pleine }}
                  />
                  <span className="bg-cal-liste-nom">
                    {c.cours}
                    <span className="bg-cal-liste-meta">
                      {formatDuree(c.duree)} · {c.salle}
                    </span>
                  </span>
                  {lien(c)}
                </li>
              )
            })}
            {attente.map((c) => (
              <li key={c.id} className="bg-cal-liste-ligne bg-cal-liste-attente">
                <span className="bg-cal-liste-heure">À confirmer</span>
                <span
                  className="bg-cal-pastille"
                  aria-hidden="true"
                  style={{ background: couleurSalle(c.salle).pleine }}
                />
                <span className="bg-cal-liste-nom">
                  {c.cours}
                  <span className="bg-cal-liste-meta">{c.salle}</span>
                </span>
                {lien(c)}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
