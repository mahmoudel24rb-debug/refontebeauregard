import React from 'react'
import Header from './Header'
import Footer from './Footer'
import type { Cours } from './cours'

// Sous-page d'un cours (/services/cours/[slug]).

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

export default function CoursDetail({ cours }: { cours: Cours }) {
  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ maxWidth: 820, margin: '0 auto', padding: '170px 30px 40px' }}>
              <a href="/services/cours" style={{ color: '#376131', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>← Tous les cours</a>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '26px 0 12px' }}>Beauregard Cours</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 28px' }}>{cours.name}</h1>
              <p style={{ color: '#404040', fontSize: 19, lineHeight: 1.7, margin: 0 }}>{cours.desc}</p>
            </section>

            <section style={{ maxWidth: 820, margin: '0 auto', padding: '10px 30px 110px' }}>
              <a
                href="/contact"
                style={{ display: 'inline-block', background: '#376131', color: '#fff', fontWeight: 700, fontSize: 17, textDecoration: 'none', padding: '16px 34px', borderRadius: 70 }}
              >
                S'inscrire
              </a>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
