import React from 'react'
import Header from './Header'
import Footer from './Footer'
import type { Cour as CoursDoc } from '@/payload-types'

// Sous-page d'un cours (/cours/[slug]) : données Payload.

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

export default function CoursDetail({ cours, autres }: { cours: CoursDoc; autres: CoursDoc[] }) {
  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ position: 'relative', minHeight: 'clamp(360px,46vw,540px)', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
              {cours.image ? <img src={cours.image} alt={cours.nom} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} /> : null}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 100%)' }} />
              <div style={{ position: 'relative', maxWidth: 1180, width: '100%', margin: '0 auto', padding: '0 30px 56px' }}>
                <p style={{ color: '#cfe7cb', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 12px' }}>Cours</p>
                <h1 style={{ color: '#fff', fontSize: 'clamp(38px,6vw,72px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, margin: 0 }}>{cours.nom}</h1>
              </div>
            </section>

            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 30px 30px', display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)', gap: 48, alignItems: 'start' }} className="bg-cours-grid">
              <div>
                <a href="/cours" style={{ color: '#376131', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>← Tous les cours</a>
                <h2 style={{ fontSize: 'clamp(24px,3vw,34px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '20px 0 18px' }}>Présentation</h2>
                <p style={{ color: '#404040', fontSize: 19, lineHeight: 1.75, margin: 0, whiteSpace: 'pre-line' }}>{cours.description}</p>
              </div>
              <aside style={{ background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 16, padding: 30 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 18px' }}>Infos pratiques</h3>
                {([
                  ['Espace', cours.espace || 'Parc Beauregard'],
                  ['Encadrement', 'Coachs diplômés Beauregard'],
                  ['Accès', 'Inclus dans les formules'],
                  [
                    'Réservation',
                    <a key="planning" href="/planning" style={{ color: '#376131', fontWeight: 600, textDecoration: 'underline' }}>
                      Voir le planning
                    </a>,
                  ],
                ] as [string, React.ReactNode][]).map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '11px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                    <span style={{ color: '#737373', fontSize: 14 }}>{k}</span>
                    <span style={{ fontWeight: 600, fontSize: 14, textAlign: 'right' }}>{v}</span>
                  </div>
                ))}
                <a href="/contact" style={{ display: 'block', textAlign: 'center', marginTop: 24, background: '#376131', color: '#fff', fontWeight: 700, textDecoration: 'none', padding: '15px', borderRadius: 70 }}>S'inscrire</a>
                <a href="/tarifs" style={{ display: 'block', textAlign: 'center', marginTop: 10, color: '#376131', fontWeight: 700, textDecoration: 'none', padding: '4px' }}>Voir les tarifs →</a>
              </aside>
            </section>

            {autres.length > 0 && (
              <section style={{ maxWidth: 1180, margin: '0 auto', padding: '40px 30px 110px' }}>
                <h2 style={{ fontSize: 'clamp(22px,2.6vw,30px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 24px' }}>Découvrez aussi</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 24 }}>
                  {autres.map((c) => (
                    <a key={c.id} href={`/cours/${c.slug}`} style={{ display: 'block', background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 14, overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}>
                      {c.image ? <img src={c.image} alt={c.nom} loading="lazy" style={{ width: '100%', height: 150, objectFit: 'cover', display: 'block' }} /> : null}
                      <div style={{ padding: 22 }}>
                        <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 8px' }}>{c.nom}</h3>
                        <p style={{ color: '#525252', fontSize: 14, lineHeight: 1.5, margin: '0 0 12px' }}>{c.accroche}</p>
                        <span style={{ color: '#376131', fontWeight: 700, fontSize: 14 }}>Découvrir →</span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
