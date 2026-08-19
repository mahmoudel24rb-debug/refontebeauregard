import React from 'react'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Header from '@/components/sportix/Header'
import Footer from '@/components/sportix/Footer'
import { getPayloadClient } from '@/lib/payload'

// ISR : modifs Payload visibles sous ~60s sans rebuild
export const revalidate = 60

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

export async function generateStaticParams() {
  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({ collection: 'articles', where: { publie: { equals: true } }, limit: 200, select: { slug: true } })
    return docs.map((a) => ({ slug: a.slug as string }))
  } catch {
    return []
  }
}

async function getArticle(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'articles', where: { and: [{ slug: { equals: slug } }, { publie: { equals: true } }] }, limit: 1, depth: 1 })
  return docs[0] ?? null
}

const fmtDate = (d?: string | null) => {
  if (!d) return ''
  try {
    return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(d))
  } catch {
    return ''
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let article = null
  try {
    article = await getArticle(slug)
  } catch {
    /* base indisponible */
  }
  return article ? { title: article.titre as string, description: (article.extrait as string) || undefined } : { title: 'Article' }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()
  const image = article.image as { url?: string | null } | null
  const imgUrl = typeof image === 'object' && image ? image.url || undefined : undefined

  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <article style={{ maxWidth: 760, margin: '0 auto', padding: '140px 24px 100px' }}>
              <a href="/blog" style={{ color: '#376131', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>← Tous les articles</a>
              {article.datePublication ? <p style={{ color: '#737373', fontSize: 14, margin: '22px 0 10px' }}>{fmtDate(article.datePublication as string)}</p> : null}
              <h1 style={{ fontSize: 'clamp(30px,4.5vw,46px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 26px' }}>{article.titre as string}</h1>
              {/* aspect fixe : la hauteur de l'image de tête ne dépend plus de son
                  format d'origine, la mise en page reste stable d'un article à l'autre */}
              {imgUrl ? <img src={imgUrl} alt={article.titre as string} style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', borderRadius: 16, display: 'block', margin: '0 0 30px' }} /> : null}
              <div className="bg-article-body" style={{ fontSize: 18, lineHeight: 1.8, color: '#2a2a2a' }}>
                {article.corps ? <RichText data={article.corps as never} /> : null}
              </div>
            </article>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
