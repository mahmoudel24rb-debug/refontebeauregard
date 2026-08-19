import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PlanningCalendrier from './PlanningCalendrier'
import { PLANNING, planningVersCreneaux, type JourPlanning } from './planning'
import type { CreneauCal } from './planningLayout'

// Page « Planning des cours » (/planning) : planning de la rentrée septembre 2026.
// Données : collection Payload `planning` (éditable par le client), avec fallback
// sur src/components/sportix/planning.ts si la collection est vide.

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

export default function PlanningPage(props: { data?: JourPlanning[]; creneaux?: CreneauCal[] }) {
  const { data, creneaux } = props
  // Repli en cascade : créneaux Payload -> planning Payload converti -> planning statique
  const CRENEAUX =
    creneaux && creneaux.length > 0
      ? creneaux
      : planningVersCreneaux(data && data.length > 0 ? data : PLANNING)
  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '170px 30px 50px', textAlign: 'center' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 16px' }}>Rentrée septembre 2026</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 20px' }}>Planning des cours</h1>
              <p style={{ color: '#404040', fontSize: 18, lineHeight: 1.6, maxWidth: 720, margin: '0 auto' }}>
                Le planning hebdomadaire des cours collectifs, en salle et dans la Bulle.
              </p>
            </section>

            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 30px 30px' }}>
              <PlanningCalendrier creneaux={CRENEAUX} />
            </section>

            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '10px 30px 110px' }}>
              <p style={{ color: '#737373', fontSize: 15, lineHeight: 1.6, margin: '0 0 26px' }}>
                Planning de la rentrée de septembre 2026, susceptible d&rsquo;évoluer.
              </p>
              <a href="/tarifs" style={{ display: 'inline-block', background: '#376131', color: '#fff', fontWeight: 700, fontSize: 17, textDecoration: 'none', padding: '16px 34px', borderRadius: 70 }}>Voir les tarifs</a>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
