import React from 'react'
import Header from './Header'
import Footer from './Footer'

// Page « Services » (/services) — hub listant les 3 services réels du club.
// Contenu stable (pas de collection Payload nécessaire ici).

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

const SERVICES = [
  {
    nom: 'Beauregard Coaching',
    href: '/services/coaching',
    image: '/assets/beauregard/coaching.webp',
    desc: "Un accompagnement personnalisé avec nos coachs diplômés : programme sur-mesure élaboré après un entretien individuel, suivi à chaque séance. La première séance est offerte.",
  },
  {
    nom: 'Beauregard Cours',
    href: '/services/cours',
    image: '/assets/beauregard/cours.webp',
    desc: "Près de 40 cours collectifs par semaine — yoga, pilates, école du dos, boxe, cross training, HYROX et plus — pour tous les niveaux, encadrés par nos coachs.",
  },
  {
    nom: 'Location de terrain',
    href: '/location-de-terrain',
    image: '/assets/beauregard/location.webp',
    desc: "Réservez notre terrain multisport pour vos entraînements, matchs ou événements, en plein air dans le cadre naturel du Parc Beauregard, au bord de la Loire.",
  },
]

export default function ServicesHub() {
  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '170px 30px 50px', textAlign: 'center' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 16px' }}>Nos services</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 20px' }}>Tout ce que le Parc Beauregard vous propose</h1>
              <p style={{ color: '#404040', fontSize: 18, lineHeight: 1.6, maxWidth: 760, margin: '0 auto' }}>
                Du coaching personnalisé aux cours collectifs, jusqu'à la location de notre terrain multisport : trouvez la formule qui correspond à vos objectifs, en pleine nature au bord de la Loire.
              </p>
            </section>

            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 30px 110px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
                {SERVICES.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    style={{ display: 'flex', flexDirection: 'column', background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}
                  >
                    <img src={s.image} alt={s.nom} loading="lazy" style={{ width: '100%', height: 210, objectFit: 'cover', display: 'block' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 30 }}>
                      <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 14px' }}>{s.nom}</h2>
                      <p style={{ color: '#525252', lineHeight: 1.65, margin: '0 0 24px', flex: 1 }}>{s.desc}</p>
                      <span style={{ color: '#376131', fontWeight: 700 }}>Découvrir →</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
