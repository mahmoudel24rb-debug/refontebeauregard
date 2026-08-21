import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { getPayloadClient } from '@/lib/payload'
import { classeGrille } from '@/lib/grilleCartes'

// Page « Coaching » (/coaching) : contenu réel (site officiel).

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

const BLOCS = [
  {
    t: 'Comment m’y prendre ?',
    d: "La première séance est offerte. Appelez-nous dès maintenant pour la réserver, ou venez directement sur place visiter les lieux, rencontrer nos coachs et prendre rendez-vous pour votre premier coaching.",
  },
  {
    t: 'Pour qui ?',
    d: "Que vous soyez débutant, sportif confirmé, en baisse de motivation ou de performances, bénéficiez d'un coach à votre écoute pour vous accompagner à chaque séance et tout au long de votre transformation.",
  },
  {
    t: 'Quels avantages ?',
    d: "Un suivi avec l'un de nos coachs vous permet de rester motivé et d'atteindre vos objectifs. Le programme personnalisé est élaboré à partir d'un entretien individuel pour identifier vos besoins ; le coach s'adapte à vos contraintes et à vos capacités.",
  },
]

export default async function CoachingPage() {
  let coachs: { id: string | number; nom?: string | null; role?: string | null; bio?: string | null; photo?: string | null }[] = []
  try {
    const payload = await getPayloadClient()
    const r = await payload.find({ collection: 'coachs', sort: 'ordre', limit: 50 })
    coachs = r.docs
  } catch {
    // grille coachs vide si la base est indisponible
  }
  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            {/* Hero / approche */}
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '170px 30px 30px' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 14px' }}>Coaching</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 24px', maxWidth: 820 }}>Le mouvement, votre meilleur allié</h1>
              <p style={{ color: '#404040', fontSize: 19, lineHeight: 1.7, margin: 0, maxWidth: 820 }}>
                Le meilleur remède anti-âge et anti-douleurs reste le mouvement. Au Parc Beauregard, nos coachs passionnés d'anatomie et de physiologie vous accompagnent avec soin. Grâce à un suivi personnalisé, ils vous aident à retrouver votre équilibre corporel et une totale liberté de mouvement, dans un cadre privilégié au bord de la Loire.
              </p>
            </section>
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 30px 0' }}>
              <img src="/assets/beauregard/coaching.webp" alt="Coaching au Parc Beauregard" loading="lazy" style={{ width: '100%', height: 'clamp(240px,40vw,440px)', objectFit: 'cover', borderRadius: 16, display: 'block' }} />
            </section>

            {/* 1re séance offerte */}
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 30px 0' }}>
              <div style={{ background: '#cfe7cb', borderRadius: 16, padding: '28px 34px', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#1f3d18' }}>La première séance est offerte</p>
                <a href="/contact" style={{ background: '#376131', color: '#fff', fontWeight: 700, textDecoration: 'none', padding: '14px 30px', borderRadius: 70 }}>Réserver ma séance</a>
              </div>
            </section>

            {/* Blocs approche */}
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 30px 20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 24 }}>
                {BLOCS.map((b) => (
                  <div key={b.t} style={{ background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 14, padding: 30 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 12px' }}>{b.t}</h2>
                    <p style={{ color: '#525252', lineHeight: 1.6, margin: 0 }}>{b.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Nos coachs */}
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 30px 30px' }}>
              <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 14px' }}>Nos coachs</h2>
              <p style={{ color: '#404040', fontSize: 19, lineHeight: 1.7, margin: '0 0 4px', maxWidth: 820 }}>
                Une équipe de coachs diplômés et passionnés, à votre écoute pour vous accompagner à chaque séance. Chacun a sa spécialité, Hyrox, boxe ou yoga, pour s'adapter à vos objectifs et à votre niveau.
              </p>
              {coachs.length > 0 ? (
                <div className={classeGrille(coachs.length)} style={{ marginTop: 28 }}>
                  {coachs.map((c) => (
                    <div key={c.id} style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 14, overflow: 'hidden' }}>
                      {c.photo ? <img src={c.photo} alt={c.nom || 'Coach du Parc Beauregard'} loading="lazy" style={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', display: 'block' }} /> : null}
                      {(c.nom || c.role || c.bio) ? (
                        <div style={{ padding: 20 }}>
                          {c.nom ? <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 4px', color: '#376131' }}>{c.nom}</h3> : null}
                          {c.role ? <p style={{ fontSize: 13, color: '#737373', margin: '0 0 8px' }}>{c.role}</p> : null}
                          {c.bio ? <p style={{ fontSize: 14, color: '#525252', lineHeight: 1.5, margin: 0 }}>{c.bio}</p> : null}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </section>

            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 30px 110px' }}>
              <a href="/contact" style={{ display: 'inline-block', background: '#376131', color: '#fff', fontWeight: 700, fontSize: 17, textDecoration: 'none', padding: '16px 34px', borderRadius: 70 }}>Nous rejoindre</a>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
