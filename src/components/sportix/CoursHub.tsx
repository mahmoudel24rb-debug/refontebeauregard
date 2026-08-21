import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ESPACES } from './espaces'
import { getPayloadClient } from '@/lib/payload'
import { classeGrille } from '@/lib/grilleCartes'

// Page « Nos cours » (/cours) : liste les cours depuis Payload, regroupés par
// espace (valeur du champ `espace` du cours : « Espace Cours Collectifs » /
// « Espace Fonctionnel »). L'intro d'un groupe vient d'espaces.ts (une ligne).

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

// ordre d'affichage des groupes ; les autres valeurs éventuelles suivent
const ORDRE_ESPACES = ['Espace Cours Collectifs', 'Espace Fonctionnel']

const introEspace = (nom: string) => ESPACES.find((e) => e.name === nom)?.short || ''

type CoursDoc = { id: string | number; slug?: string | null; nom: string; accroche?: string | null; image?: string | null; espace?: string | null }

export default async function CoursHub() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'cours', sort: 'ordre', limit: 100 })
  const cours = docs as unknown as CoursDoc[]

  const groupes: { espace: string; cours: CoursDoc[] }[] = []
  for (const c of cours) {
    const espace = c.espace || ''
    let g = groupes.find((x) => x.espace === espace)
    if (!g) {
      g = { espace, cours: [] }
      groupes.push(g)
    }
    g.cours.push(c)
  }
  groupes.sort((a, b) => {
    const ia = ORDRE_ESPACES.indexOf(a.espace)
    const ib = ORDRE_ESPACES.indexOf(b.espace)
    return (ia === -1 ? ORDRE_ESPACES.length : ia) - (ib === -1 ? ORDRE_ESPACES.length : ib)
  })

  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '170px 30px 50px', textAlign: 'center' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 16px' }}>Cours</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 20px' }}>Nos cours collectifs</h1>
              <p style={{ color: '#404040', fontSize: 18, lineHeight: 1.6, maxWidth: 720, margin: '0 auto' }}>
                40 cours collectifs par semaine, du bien-être santé aux entraînements les plus intensifs. Trouvez le cours qui vous correspond, encadré par nos coachs, en pleine nature au bord de la Loire.
              </p>
              <a href="/planning" style={{ display: 'inline-block', marginTop: 22, color: '#376131', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
                Voir le planning de la rentrée →
              </a>
            </section>

            {groupes.map((g) => (
              <section key={g.espace || 'sans-espace'} style={{ maxWidth: 1180, margin: '0 auto', padding: '0 30px 60px' }}>
                {g.espace ? (
                  <div style={{ margin: '0 0 26px', maxWidth: 720 }}>
                    <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 }}>{g.espace}</h2>
                    {introEspace(g.espace) ? (
                      <p style={{ color: '#525252', fontSize: 17, lineHeight: 1.6, margin: '10px 0 0' }}>{introEspace(g.espace)}</p>
                    ) : null}
                  </div>
                ) : null}
                <div className={classeGrille(g.cours.length)} style={{ ['--bg-grille-gap' as string]: '26px' }}>
                  {g.cours.map((c) => (
                    <a
                      key={c.id}
                      href={`/cours/${c.slug}`}
                      style={{ display: 'flex', flexDirection: 'column', background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 14, overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}
                    >
                      {c.image ? (
                        <img src={c.image} alt={c.nom} loading="lazy" style={{ width: '100%', height: 210, objectFit: 'cover', display: 'block' }} />
                      ) : null}
                      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 28 }}>
                        <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 10px' }}>{c.nom}</h3>
                        <p style={{ color: '#525252', fontSize: 16, lineHeight: 1.55, margin: '0 0 22px', flex: 1 }}>{c.accroche}</p>
                        <span style={{ color: '#376131', fontWeight: 700 }}>Découvrir →</span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}

            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '10px 30px 110px' }}>
              <div style={{ background: '#376131', borderRadius: 18, padding: 'clamp(30px,4vw,50px)', color: '#fff', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ maxWidth: 620 }}>
                  <h2 style={{ fontSize: 'clamp(24px,3vw,32px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 10px' }}>Trouvez votre créneau</h2>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, lineHeight: 1.6, margin: 0 }}>
                    Consultez le planning de la semaine et les formules d&rsquo;adhésion.
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                  <a href="/planning" style={{ display: 'inline-block', background: '#fff', color: '#376131', fontWeight: 700, fontSize: 16, textDecoration: 'none', padding: '15px 30px', borderRadius: 70 }}>Voir le planning</a>
                  <a href="/tarifs" style={{ display: 'inline-block', border: '1.5px solid rgba(255,255,255,0.6)', color: '#fff', fontWeight: 700, fontSize: 16, textDecoration: 'none', padding: '15px 30px', borderRadius: 70 }}>Voir les tarifs</a>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
