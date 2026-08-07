'use client'

import { useEffect } from 'react'

// Le port SSR de Framer fournit le mini-bloc d'avis du hero (« Testimonials
// Slider Wrapper ») avec ses 3 citations et ses 3 points, mais PAS la logique
// du slider : les avis 2 et 3 étaient posés hors cadre en absolu et les points
// n'avaient aucun gestionnaire. Ce composant client, monté une fois par la page
// d'accueil (pattern CarrouselAvis), câble chaque variante SSR : clic sur un
// point -> défilement vers l'avis correspondant, point actif synchronisé sur le
// défilement, et rotation automatique toutes les 5 s (suspendue au survol / au
// toucher et désactivée si l'utilisateur limite les animations).
// Le défilement, l'aimantation et le swipe tactile sont en CSS (overrides.css).

const WRAPPER = '[data-framer-name="Testimonials Slider Wrapper"]'
const RANGEE = '[data-framer-name="Testimonials"]'
const POINTS = '[data-framer-name="Dots Wrapper"]'

const FOND_ACTIF = 'var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))'
const FOND_INACTIF = 'var(--token-ebc97e9b-043d-45c1-8613-8642c9de28e6, rgba(255, 255, 255, 0.5))'
const DELAI_AUTO = 5000

export default function SliderAvisHero() {
  useEffect(() => {
    const wrapper = document.querySelector(WRAPPER)
    if (!wrapper) return

    const animationsReduites =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const nettoyages: (() => void)[] = []

    wrapper.querySelectorAll<HTMLElement>(RANGEE).forEach((rangee) => {
      const racine = rangee.parentElement
      if (!racine) return
      const conteneurPoints = racine.querySelector<HTMLElement>(POINTS)
      if (!conteneurPoints) return

      const avis = Array.from(rangee.children) as HTMLElement[]
      const points = Array.from(conteneurPoints.children) as HTMLElement[]
      if (avis.length < 2 || points.length !== avis.length) return

      const indexCourant = () => {
        let meilleur = 0
        let ecart = Infinity
        avis.forEach((bloc, i) => {
          const d = Math.abs(bloc.offsetLeft - rangee.scrollLeft)
          if (d < ecart) {
            ecart = d
            meilleur = i
          }
        })
        return meilleur
      }

      const majPoints = () => {
        const actif = indexCourant()
        points.forEach((point, i) => {
          point.style.backgroundColor = i === actif ? FOND_ACTIF : FOND_INACTIF
          point.setAttribute('aria-current', i === actif ? 'true' : 'false')
        })
      }

      const allerA = (i: number, doux: boolean) => {
        const cible = avis[i]
        if (!cible) return
        rangee.scrollTo({ left: cible.offsetLeft, behavior: doux ? 'smooth' : 'auto' })
      }

      points.forEach((point, i) => {
        point.setAttribute('role', 'button')
        point.setAttribute('aria-label', `Avis ${i + 1}`)
        point.setAttribute('tabindex', '0')
        const surClic = () => {
          suspendre()
          allerA(i, !animationsReduites)
          reprendre()
        }
        const surTouche = (e: KeyboardEvent) => {
          if (e.key !== 'Enter' && e.key !== ' ') return
          e.preventDefault()
          surClic()
        }
        point.addEventListener('click', surClic)
        point.addEventListener('keydown', surTouche)
        nettoyages.push(() => {
          point.removeEventListener('click', surClic)
          point.removeEventListener('keydown', surTouche)
        })
      })

      // --- rotation automatique ---
      let minuteur: ReturnType<typeof setInterval> | null = null
      let enPause = false

      const tick = () => {
        // la variante SSR masquée n'a pas de largeur : rien à faire défiler
        if (enPause || !rangee.clientWidth) return
        allerA((indexCourant() + 1) % avis.length, true)
      }
      const reprendre = () => {
        if (animationsReduites) return
        if (minuteur !== null) clearInterval(minuteur)
        enPause = false
        minuteur = setInterval(tick, DELAI_AUTO)
      }
      const suspendre = () => {
        enPause = true
        if (minuteur !== null) {
          clearInterval(minuteur)
          minuteur = null
        }
      }

      const surEntree = () => suspendre()
      const surSortie = () => reprendre()
      racine.addEventListener('mouseenter', surEntree)
      racine.addEventListener('mouseleave', surSortie)
      racine.addEventListener('touchstart', surEntree, { passive: true })
      racine.addEventListener('touchend', surSortie, { passive: true })
      racine.addEventListener('focusin', surEntree)
      racine.addEventListener('focusout', surSortie)

      rangee.addEventListener('scroll', majPoints, { passive: true })
      window.addEventListener('resize', majPoints)
      majPoints()
      reprendre()

      nettoyages.push(() => {
        suspendre()
        racine.removeEventListener('mouseenter', surEntree)
        racine.removeEventListener('mouseleave', surSortie)
        racine.removeEventListener('touchstart', surEntree)
        racine.removeEventListener('touchend', surSortie)
        racine.removeEventListener('focusin', surEntree)
        racine.removeEventListener('focusout', surSortie)
        rangee.removeEventListener('scroll', majPoints)
        window.removeEventListener('resize', majPoints)
      })
    })

    return () => nettoyages.forEach((f) => f())
  }, [])

  return null
}
