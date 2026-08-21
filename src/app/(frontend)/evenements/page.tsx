import React from 'react'
import Header from '@/components/sportix/Header'
import Footer from '@/components/sportix/Footer'
import { getPayloadClient } from '@/lib/payload'
import { classeGrille } from '@/lib/grilleCartes'

// ISR : nouveaux événements visibles sous ~60s sans rebuild
export const revalidate = 60

export const metadata = {
  title: 'Événements',
  description: "Les événements et rendez-vous du Parc Beauregard Fitness & Coaching à Rochecorbon.",
}

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

type Evt = { id: string | number; titre?: string | null; date?: string | null; description?: string | null; image?: { url?: string | null } | string | null }

const fmtDate = (d?: string | null) => {
  if (!d) return ''
  try {
    return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(d))
  } catch {
    return ''
  }
}

export default async function EvenementsPage() {
  let evenements: Evt[] = []
  let facebook = 'https://www.facebook.com/parcbeauregard'
  try {
    const payload = await getPayloadClient()
    const now = new Date().toISOString()
    const [aVenir, passes, infos] = await Promise.all([
      payload.find({ collection: 'evenements', where: { and: [{ publie: { equals: true } }, { date: { greater_than_equal: now } }] }, sort: 'date', limit: 100, depth: 1 }),
      payload.find({ collection: 'evenements', where: { and: [{ publie: { equals: true } }, { date: { less_than: now } }] }, sort: '-date', limit: 100, depth: 1 }),
      payload.findGlobal({ slug: 'infos-club' }).catch(() => null),
    ])
    evenements = [...aVenir.docs, ...passes.docs] as Evt[]
    const fb = (infos as { reseaux?: { facebook?: string } } | null)?.reseaux?.facebook
    if (fb) facebook = fb
  } catch {
    // état vide si la base est indisponible
  }

  const imgUrl = (e: Evt) => (typeof e.image === 'object' && e.image ? e.image.url || undefined : undefined)

  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '170px 30px 30px' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 14px' }}>Le club en mouvement</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 20px', maxWidth: 820 }}>Événements</h1>
              <p style={{ color: '#404040', fontSize: 19, lineHeight: 1.7, margin: 0, maxWidth: 820 }}>
                Retrouvez ici les rendez-vous, animations et temps forts du Parc Beauregard.
              </p>
            </section>

            {evenements.length > 0 ? (
              <section style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 30px 110px' }}>
                <div className={classeGrille(evenements.length)}>
                  {evenements.map((e) => (
                    <article key={e.id} style={{ display: 'flex', flexDirection: 'column', background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 14, overflow: 'hidden' }}>
                      {imgUrl(e) ? <img src={imgUrl(e)} alt={e.titre || 'Événement du Parc Beauregard'} loading="lazy" style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} /> : null}
                      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 26 }}>
                        {e.date ? <p style={{ color: '#376131', fontWeight: 700, fontSize: 13, letterSpacing: '0.03em', textTransform: 'uppercase', margin: '0 0 8px' }}>{fmtDate(e.date)}</p> : null}
                        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 10px' }}>{e.titre}</h2>
                        {e.description ? <p style={{ color: '#525252', lineHeight: 1.55, margin: 0, whiteSpace: 'pre-line' }}>{e.description}</p> : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : (
              <section style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 30px 120px' }}>
                <div style={{ background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 16, padding: '48px 34px', textAlign: 'center' }}>
                  <p style={{ fontSize: 19, fontWeight: 600, color: '#171717', margin: '0 0 10px' }}>Aucun événement programmé pour le moment.</p>
                  <p style={{ color: '#525252', fontSize: 16, lineHeight: 1.6, margin: '0 0 24px' }}>
                    Suivez-nous sur Facebook pour ne rien manquer de la vie du club.
                  </p>
                  <a href={facebook} target="_blank" rel="noopener" style={{ display: 'inline-block', background: '#376131', color: '#fff', fontWeight: 700, fontSize: 16, textDecoration: 'none', padding: '14px 30px', borderRadius: 70 }}>Voir notre page Facebook</a>
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
