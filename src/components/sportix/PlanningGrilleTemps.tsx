'use client'

import React from 'react'
import {
  bornesAxe,
  couleurSalle,
  formatDuree,
  formatFin,
  formatHeure,
  poserJour,
  sansHeure,
  type CreneauCal,
} from './planningLayout'

// Timeline du calendrier : en-têtes de jours, rangée « Horaire à confirmer »,
// puis la grille horaire proprement dite.
//
// Aucune cellule à l'heure : les blocs sont posés en absolu, à la minute. Toute
// la conversion minutes -> pixels est faite en CSS (cf. .bg-cal-* dans
// overrides.css) à partir de custom properties posées ici en style inline :
//   --debut / --fin : bornes de l'axe (minutes depuis minuit)
//   --min / --dur   : début et durée du bloc
//   --col / --cols  : colonne du bloc dans son cluster de chevauchement
// La hauteur d'une heure (--hpx) est la seule valeur qui change au responsive,
// elle reste donc dans la feuille de style.

export type PlanningGrilleTempsProps = {
  /** 6 jours en vue Semaine, 1 seul en vue Jour. */
  jours: string[]
  creneaux: CreneauCal[]
  /** Bornes communes à toutes les vues (calculées sur l'ensemble des créneaux). */
  bornes?: { debut: number; fin: number }
  /** Jour de la semaine en cours, surligné (calculé après montage). */
  aujourdhui?: string | null
  /** « compact » = blocs de la semaine, « detailed » = vue Jour. */
  variante?: 'compact' | 'detailed'
}

const heuresDeAxe = (debut: number, fin: number) => {
  const liste: number[] = []
  for (let h = debut; h <= fin; h += 60) liste.push(h)
  return liste
}

/** « Yoga, lundi 18h, 1h, Salle Fitness » */
export function libelleBloc(c: CreneauCal): string {
  const jour = c.jour.toLowerCase()
  if (c.debutMin === null) return `${c.cours}, ${jour}, horaire à confirmer, ${c.salle}`
  return `${c.cours}, ${jour} ${formatHeure(c.debutMin)}, ${formatDuree(c.duree)}, ${c.salle}`
}

export default function PlanningGrilleTemps({
  jours,
  creneaux,
  bornes,
  aujourdhui = null,
  variante = 'compact',
}: PlanningGrilleTempsProps) {
  const axe = bornes ?? bornesAxe(creneaux)
  const heures = heuresDeAxe(axe.debut, axe.fin)
  const parJour = jours.map((jour) => {
    const duJour = creneaux.filter((c) => c.jour === jour)
    return { jour, poses: poserJour(duJour), attente: sansHeure(duJour) }
  })
  const aAttente = parJour.some((j) => j.attente.length > 0)

  return (
    <div className="bg-cal-scroller">
      <div className="bg-cal-piste" style={{ '--jours': jours.length } as React.CSSProperties}>
        {/* En-têtes de jours (pas de sticky vertical : la page défile normalement) */}
        <div className="bg-cal-entetes">
          <div className="bg-cal-gouttiere bg-cal-gouttiere-entete" aria-hidden="true" />
          {parJour.map(({ jour }) => (
            <div key={jour} className="bg-cal-entete">
              <span className={jour === aujourdhui ? 'bg-cal-jour bg-cal-jour-actuel' : 'bg-cal-jour'}>
                {jour}
              </span>
            </div>
          ))}
        </div>

        {/* Créneaux sans horaire : hors de l'axe, juste sous les en-têtes */}
        {aAttente && (
          <div className="bg-cal-attente">
            <p className="bg-cal-attente-titre">Horaire à confirmer</p>
            <div className="bg-cal-attente-grille">
              <div className="bg-cal-gouttiere bg-cal-attente-gouttiere" aria-hidden="true" />
              {parJour.map(({ jour, attente }) => (
                <div key={jour} className="bg-cal-attente-jour">
                  {attente.map((c) => {
                    const coul = couleurSalle(c.salle)
                    return (
                      <button
                        key={c.id}
                        type="button"
                        className="bg-cal-mini"
                        aria-label={libelleBloc(c)}
                        style={{ borderColor: coul.pleine, color: coul.texte } as React.CSSProperties}
                      >
                        <span className="bg-cal-mini-nom">{c.cours}</span>
                        <span className="bg-cal-mini-salle">
                          <span
                            className="bg-cal-pastille"
                            aria-hidden="true"
                            style={{ background: coul.pleine }}
                          />
                          {c.salle}
                        </span>
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grille horaire */}
        <div
          className="bg-cal-corps"
          style={{ '--debut': axe.debut, '--fin': axe.fin } as React.CSSProperties}
        >
          <div className="bg-cal-gouttiere bg-cal-heures" aria-hidden="true">
            {heures.map((h) => (
              <span key={h} className="bg-cal-heure" style={{ '--h': h } as React.CSSProperties}>
                {formatHeure(h)}
              </span>
            ))}
          </div>
          <div className="bg-cal-cols">
            {parJour.map(({ jour, poses }) => (
              <div key={jour} className="bg-cal-col">
                {poses.map((p) => {
                  const c = p.creneau
                  const coul = couleurSalle(c.salle)
                  // 3 colonnes ou plus : la place manque, on garde heure + nom
                  const compresse = p.cols >= 3
                  return (
                    <button
                      key={c.id}
                      type="button"
                      className="bg-cal-event"
                      data-cols={p.cols}
                      aria-label={libelleBloc(c)}
                      style={
                        {
                          '--min': p.debut,
                          '--dur': c.duree,
                          '--col': p.col,
                          '--cols': p.cols,
                          background: coul.fond,
                          color: coul.texte,
                          borderLeftColor: coul.pleine,
                        } as React.CSSProperties
                      }
                    >
                      <span className="bg-cal-event-heure">
                        {p.cols === 1
                          ? `${formatHeure(p.debut)} – ${formatFin(p.debut, c.duree)}`
                          : formatHeure(p.debut)}
                      </span>
                      <span className="bg-cal-event-nom">{c.cours}</span>
                      {compresse ? null : (
                        <span className="bg-cal-event-salle">
                          {p.cols === 1 ? c.salle : c.salle.replace(/^Salle /, '')}
                        </span>
                      )}
                      {variante === 'detailed' && p.cols === 1 ? (
                        <span className="bg-cal-event-duree">{formatDuree(c.duree)}</span>
                      ) : null}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
