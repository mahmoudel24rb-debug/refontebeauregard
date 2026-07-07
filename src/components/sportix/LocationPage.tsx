import React from 'react'
import Header from './Header'
import Footer from './Footer'

// Page « Location de terrain sportif » (/location-de-terrain) — contenu réel.

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

const POINTS = [
  { t: 'Pour qui ?', d: "En famille, entre amis, entre collègues ou avec une équipe compétitive : nos terrains n'attendent que vous !" },
  { t: 'Le matériel', d: '2 terrains en pelouse synthétique à votre disposition. Dossards et ballons fournis. Parking gratuit et vestiaires sur place.' },
  { t: 'Réservation', d: '50 €/h, ballon fourni. Jusqu’à 10 personnes par terrain. Réservez par téléphone ou directement à l’accueil du Parc Beauregard.' },
]

export default function LocationPage() {
  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '170px 30px 30px' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 14px' }}>Location de terrain</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 24px', maxWidth: 820 }}>Réservez votre terrain de foot</h1>
              <p style={{ color: '#404040', fontSize: 19, lineHeight: 1.7, margin: 0, maxWidth: 820 }}>
                Envie d'une partie de football inoubliable ? Nos terrains sont l'endroit idéal pour vivre des moments passionnants entre amis, en famille ou entre collègues — en plein air, au bord de la Loire.
              </p>
            </section>
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 30px 0' }}>
              <img src="/assets/beauregard/location.webp" alt="Terrains de football synthétiques du Parc Beauregard" loading="lazy" style={{ width: '100%', height: 'clamp(240px,42vw,470px)', objectFit: 'cover', borderRadius: 16, display: 'block' }} />
            </section>

            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 30px 20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 24 }}>
                {POINTS.map((b) => (
                  <div key={b.t} style={{ background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 14, padding: 30 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 12px' }}>{b.t}</h2>
                    <p style={{ color: '#525252', lineHeight: 1.6, margin: 0 }}>{b.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 30px 110px' }}>
              <a href="/contact" style={{ display: 'inline-block', background: '#376131', color: '#fff', fontWeight: 700, fontSize: 17, textDecoration: 'none', padding: '16px 34px', borderRadius: 70 }}>Réserver un terrain</a>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
