import React from 'react'
import Header from '@/components/sportix/Header'
import Footer from '@/components/sportix/Footer'
import { getPayloadClient } from '@/lib/payload'

// ISR : nouveaux articles visibles sous ~60s sans rebuild
export const revalidate = 60

export const metadata = {
  title: 'Blog',
  description: "Conseils, actualités et coulisses du Parc Beauregard Fitness & Coaching à Rochecorbon.",
}

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

type Article = { id: string | number; titre?: string | null; slug?: string | null; extrait?: string | null; datePublication?: string | null; image?: { url?: string | null } | string | null }

const fmtDate = (d?: string | null) => {
  if (!d) return ''
  try {
    return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(d))
  } catch {
    return ''
  }
}

export default async function BlogPage() {
  let articles: Article[] = []
  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({ collection: 'articles', where: { publie: { equals: true } }, sort: '-datePublication', limit: 100, depth: 1 })
    articles = docs as Article[]
  } catch {
    // état vide si la base est indisponible
  }
  const imgUrl = (a: Article) => (typeof a.image === 'object' && a.image ? a.image.url || undefined : undefined)

  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '170px 30px 20px' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 14px' }}>Le blog</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 20px' }}>Actualités &amp; conseils</h1>
              <p style={{ color: '#404040', fontSize: 19, lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
                Nos conseils forme et bien-être, les nouveautés du club et les coulisses du Parc Beauregard.
              </p>
            </section>

            {articles.length > 0 ? (
              <section style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 30px 110px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
                  {articles.map((a) => (
                    <a key={a.id} href={`/blog/${a.slug}`} style={{ display: 'flex', flexDirection: 'column', background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 14, overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}>
                      {imgUrl(a) ? <img src={imgUrl(a)} alt={a.titre || 'Article'} loading="lazy" style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} /> : null}
                      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 26 }}>
                        {a.datePublication ? <p style={{ color: '#376131', fontWeight: 700, fontSize: 13, letterSpacing: '0.03em', textTransform: 'uppercase', margin: '0 0 8px' }}>{fmtDate(a.datePublication)}</p> : null}
                        <h2 style={{ fontSize: 21, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 10px' }}>{a.titre}</h2>
                        {a.extrait ? <p style={{ color: '#525252', lineHeight: 1.55, margin: '0 0 16px', flex: 1 }}>{a.extrait}</p> : null}
                        <span style={{ color: '#376131', fontWeight: 700 }}>Lire l&rsquo;article →</span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ) : (
              <section style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 30px 120px' }}>
                <div style={{ background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 16, padding: '48px 34px', textAlign: 'center' }}>
                  <p style={{ fontSize: 19, fontWeight: 600, color: '#171717', margin: '0 0 8px' }}>Les premiers articles arrivent bientôt.</p>
                  <p style={{ color: '#525252', fontSize: 16, lineHeight: 1.6, margin: 0 }}>Revenez vite pour découvrir nos conseils et actualités.</p>
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
