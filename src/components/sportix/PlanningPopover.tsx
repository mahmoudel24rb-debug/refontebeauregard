'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { couleurSalle, formatDuree, formatFin, formatHeure, type CreneauCal } from './planningLayout'

// Fiche d'un créneau. Elle fusionne les deux surfaces du composant d'origine :
// la « hover card » d'aperçu et le Dialog de détail. Ici pas d'édition, donc un
// seul composant à deux modes :
//   - « apercu »  : au survol après 250 ms, purement informatif, non cliquable ;
//   - « epingle » : au clic ou à Entrée, role=dialog, Échap referme et rend le
//                   focus au bloc d'origine.
// Sous 640px, la fiche épinglée devient une feuille basse avec voile.
//
// Le positionnement est en `fixed` à partir du rectangle du bloc : la grille
// défile horizontalement sur mobile, une fiche en absolu y serait rognée.

export type ModePopover = 'apercu' | 'epingle'

export type PlanningPopoverProps = {
  creneau: CreneauCal
  rect: { top: number; left: number; bottom: number; width: number }
  mode: ModePopover
  onFermer: (rendreLeFocus: boolean) => void
}

const MARGE = 10

export default function PlanningPopover({ creneau, rect, mode, onFermer }: PlanningPopoverProps) {
  const boite = useRef<HTMLDivElement>(null)
  const [feuille, setFeuille] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number }>({
    top: rect.bottom + 8,
    left: rect.left,
  })

  useEffect(() => {
    setFeuille(window.matchMedia('(max-width: 639px)').matches)
  }, [])

  useLayoutEffect(() => {
    if (feuille) return
    const el = boite.current
    if (!el) return
    const l = Math.max(
      MARGE,
      Math.min(
        rect.left + rect.width / 2 - el.offsetWidth / 2,
        window.innerWidth - el.offsetWidth - MARGE,
      ),
    )
    const bas = rect.bottom + 8
    const t =
      bas + el.offsetHeight > window.innerHeight - MARGE
        ? Math.max(MARGE, rect.top - el.offsetHeight - 8)
        : bas
    setPos({ top: t, left: l })
  }, [rect, feuille, creneau.id])

  useEffect(() => {
    if (mode !== 'epingle') return
    boite.current?.focus()
    const auClavier = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onFermer(true)
        return
      }
      // piège minimal : on garde la tabulation dans la fiche épinglée
      if (e.key !== 'Tab' || !boite.current) return
      const cibles = boite.current.querySelectorAll<HTMLElement>('a[href], button')
      if (!cibles.length) {
        e.preventDefault()
        return
      }
      const premier = cibles[0]
      const dernier = cibles[cibles.length - 1]
      const actif = document.activeElement
      if (e.shiftKey && (actif === premier || actif === boite.current)) {
        e.preventDefault()
        dernier.focus()
      } else if (!e.shiftKey && actif === dernier) {
        e.preventDefault()
        premier.focus()
      }
    }
    const auClic = (e: MouseEvent) => {
      if (boite.current && !boite.current.contains(e.target as Node)) onFermer(false)
    }
    document.addEventListener('keydown', auClavier)
    document.addEventListener('mousedown', auClic)
    return () => {
      document.removeEventListener('keydown', auClavier)
      document.removeEventListener('mousedown', auClic)
    }
  }, [mode, onFermer])

  const coul = couleurSalle(creneau.salle)
  const epingle = mode === 'epingle'
  const enFeuille = epingle && feuille
  const horaire =
    creneau.debutMin === null
      ? 'Horaire à confirmer'
      : `${formatHeure(creneau.debutMin)} – ${formatFin(creneau.debutMin, creneau.duree)} · ${formatDuree(creneau.duree)}`

  const classes = ['bg-cal-popover']
  if (!epingle) classes.push('bg-cal-popover-apercu')
  if (enFeuille) classes.push('bg-cal-popover-feuille')

  return (
    <>
      {enFeuille && <div className="bg-cal-voile" aria-hidden="true" />}
      <div
        ref={boite}
        className={classes.join(' ')}
        role={epingle ? 'dialog' : undefined}
        aria-modal={enFeuille ? true : undefined}
        aria-label={epingle ? `${creneau.cours}, ${creneau.jour}` : undefined}
        tabIndex={epingle ? -1 : undefined}
        style={enFeuille ? undefined : { top: pos.top, left: pos.left }}
      >
        <p className="bg-cal-pop-titre">{creneau.cours}</p>
        <p className="bg-cal-pop-heure">{horaire}</p>
        <p className="bg-cal-pop-salle">
          <span className="bg-cal-pastille" aria-hidden="true" style={{ background: coul.pleine }} />
          {creneau.salle}
        </p>
        <p className="bg-cal-pop-recurrence">Tous les {creneau.jour.toLowerCase()}s</p>
        {creneau.slug && (
          <a className="bg-cal-pop-cta" href={`/cours/${creneau.slug}`}>
            Voir la fiche du cours
          </a>
        )}
        {epingle && (
          <button type="button" className="bg-cal-pop-fermer" onClick={() => onFermer(true)}>
            Fermer
          </button>
        )}
      </div>
    </>
  )
}
