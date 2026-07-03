import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { getPayloadClient } from '@/lib/payload'

// Page « Nos cours » (/services/cours) — liste les cours depuis Payload.

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

export default async function CoursHub() {
  const payload = await getPayloadClient()
  const { docs: cours } = await payload.find({ collection: 'cours', sort: 'ordre', limit: 100 })

  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '170px 30px 50px', textAlign: 'center' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 16px' }}>Beauregard Cours</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 20px' }}>Nos cours collectifs</h1>
              <p style={{ color: '#404040', fontSize: 18, lineHeight: 1.6, maxWidth: 720, margin: '0 auto' }}>
                40 cours collectifs par semaine, du bien-être santé aux entraînements les plus intensifs. Trouvez le cours qui vous correspond, encadré par nos coachs, en pleine nature au bord de la Loire.
              </p>
            </section>

            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 30px 110px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 24 }}>
                {cours.map((c) => (
                  <a
                    key={c.id}
                    href={`/services/cours/${c.slug}`}
                    style={{ display: 'flex', flexDirection: 'column', background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 14, overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}
                  >
                    {c.image ? <img src={c.image} alt={c.nom} loading="lazy" style={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }} /> : null}
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 26 }}>
                      <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 10px' }}>{c.nom}</h3>
                      <p style={{ color: '#525252', lineHeight: 1.55, margin: '0 0 20px', flex: 1 }}>{c.accroche}</p>
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
