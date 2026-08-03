'use client'

import { useEffect } from 'react'

// Le port SSR de Framer fournit la section « Testimonials » avec ses flèches
// préc./suiv., mais PAS la logique du slider (JS Framer non porté). Ce composant
// client, monté une fois par la page d'accueil (pattern MobileNav), câble chaque
// paire de flèches sur la rangée d'avis de SA variante SSR : scrollBy d'une carte,
// état désactivé en bout de course, flèches masquées s'il n'y a rien à faire
// défiler. Le défilement/snap lui-même est en CSS (overrides.css).

const SECTION = '[data-framer-name="Testimonials Section"]'
const RANGEE = '[data-framer-name="Testimonials Wrapper"] > [data-framer-name="Testimonials Wrapp"]'
const GAP = 30

export default function CarrouselAvis() {
  useEffect(() => {
    const section = document.querySelector(SECTION)
    if (!section) return

    const nettoyages: (() => void)[] = []

    section.querySelectorAll<HTMLElement>(RANGEE).forEach((rangee) => {
      const racine = rangee.parentElement?.parentElement
      if (!racine) return
      const boutons = Array.from(
        racine.querySelectorAll<HTMLButtonElement>('[data-framer-name="Button Wrapper"] button'),
      )
      if (boutons.length < 2) return
      const [prev, next] = boutons
      const enveloppes = Array.from(
        racine.querySelectorAll<HTMLElement>('[data-framer-name="Button Wrapper"]'),
      )

      prev.setAttribute('aria-label', 'Avis précédent')
      next.setAttribute('aria-label', 'Avis suivant')
      prev.setAttribute('type', 'button')
      next.setAttribute('type', 'button')

      const pas = () => {
        const carte = rangee.firstElementChild as HTMLElement | null
        return (carte ? carte.getBoundingClientRect().width : 370) + GAP
      }

      const majEtat = () => {
        const debordement = rangee.scrollWidth - rangee.clientWidth
        // pas de débordement : le slider n'a aucun sens, on masque les flèches
        enveloppes.forEach((e) => {
          e.style.display = debordement > 4 ? '' : 'none'
        })
        const auDebut = rangee.scrollLeft <= 4
        const aLaFin = rangee.scrollLeft >= debordement - 4
        ;[
          [prev, auDebut],
          [next, aLaFin],
        ].forEach(([b, inactif]) => {
          const bouton = b as HTMLButtonElement
          bouton.disabled = inactif as boolean
          bouton.style.opacity = inactif ? '0.4' : '1'
          bouton.style.cursor = inactif ? 'default' : 'pointer'
        })
      }

      const versLaGauche = () => rangee.scrollBy({ left: -pas(), behavior: 'smooth' })
      const versLaDroite = () => rangee.scrollBy({ left: pas(), behavior: 'smooth' })

      prev.addEventListener('click', versLaGauche)
      next.addEventListener('click', versLaDroite)
      rangee.addEventListener('scroll', majEtat, { passive: true })
      window.addEventListener('resize', majEtat)
      majEtat()

      nettoyages.push(() => {
        prev.removeEventListener('click', versLaGauche)
        next.removeEventListener('click', versLaDroite)
        rangee.removeEventListener('scroll', majEtat)
        window.removeEventListener('resize', majEtat)
      })
    })

    return () => nettoyages.forEach((f) => f())
  }, [])

  return null
}
