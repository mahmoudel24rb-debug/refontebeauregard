import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { getPayloadClient } from '@/lib/payload'
import { classeGrille } from '@/lib/grilleCartes'

// Page « Nos espaces » (/espaces) — données Payload.

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

export default async function EspacesHub() {
  const payload = await getPayloadClient()
  const { docs: espaces } = await payload.find({ collection: 'espaces', sort: 'ordre', limit: 50 })

  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '170px 30px 50px', textAlign: 'center' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 16px' }}>Nos espaces</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 20px' }}>Des espaces au service de votre forme</h1>
              <p style={{ color: '#404040', fontSize: 18, lineHeight: 1.6, maxWidth: 760, margin: '0 auto' }}>
                Du cours bien-être santé aux séances les plus intensives : découvrez nos espaces de cours collectifs, de fitness fonctionnel et de cross/cardio. Nos coachs sont toujours présents pour vous conseiller et vous guider, en pleine nature au bord de la Loire.
              </p>
            </section>

            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 30px 110px' }}>
              <div className={classeGrille(espaces.length)} style={{ ['--bg-grille-gap' as string]: '28px' }}>
                {espaces.map((e) => (
                  <a
                    key={e.id}
                    href={e.lien || `/espaces/${e.slug}`}
                    style={{ display: 'flex', flexDirection: 'column', background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}
                  >
                    {e.image ? <img src={e.image} alt={e.nom} loading="lazy" style={{ width: '100%', height: 210, objectFit: 'cover', display: 'block' }} /> : null}
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 30 }}>
                      <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 14px' }}>{e.nom}</h2>
                      <p style={{ color: '#525252', lineHeight: 1.65, margin: '0 0 24px', flex: 1 }}>{e.description}</p>
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
