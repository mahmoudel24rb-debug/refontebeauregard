import React from 'react'
import Header from '@/components/sportix/Header'
import Footer from '@/components/sportix/Footer'
import { getPayloadClient } from '@/lib/payload'

// ISR : nouvelles questions visibles sous ~60s sans rebuild
export const revalidate = 60

export const metadata = {
  title: 'Questions fréquentes',
  description: "Toutes les réponses sur le Parc Beauregard Fitness & Coaching : horaires, formules, cours, coaching, location de terrain et accès.",
}

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

type QR = { id?: string | number; question?: string | null; reponse?: string | null }

export default async function FaqPage() {
  let faq: QR[] = []
  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({ collection: 'faq', sort: 'ordre', limit: 100, depth: 0 })
    faq = docs as QR[]
  } catch {
    // liste vide si la base est indisponible
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq
      .filter((q) => q.question && q.reponse)
      .map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.reponse },
      })),
  }

  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            {faq.length > 0 && (
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            )}
            <section style={{ maxWidth: 860, margin: '0 auto', padding: '170px 30px 20px' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 14px' }}>Aide</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 20px' }}>Questions fréquentes</h1>
              <p style={{ color: '#404040', fontSize: 19, lineHeight: 1.7, margin: 0 }}>
                Vous ne trouvez pas votre réponse ? <a href="/contact" style={{ color: '#376131', fontWeight: 700 }}>Contactez-nous</a>, nous vous répondons rapidement.
              </p>
            </section>

            <section style={{ maxWidth: 860, margin: '0 auto', padding: '20px 30px 110px' }}>
              {faq.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {faq.map((q, i) => (
                    <details key={q.id ?? i} style={{ background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 14, padding: '0 24px' }}>
                      <summary style={{ listStyle: 'none', cursor: 'pointer', fontSize: 18, fontWeight: 700, color: '#171717', padding: '20px 0', display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center' }}>
                        <span>{q.question}</span>
                        <span aria-hidden="true" style={{ color: '#376131', fontSize: 22, fontWeight: 400, flexShrink: 0 }}>+</span>
                      </summary>
                      <p style={{ color: '#404040', fontSize: 16.5, lineHeight: 1.7, margin: '0 0 20px', whiteSpace: 'pre-line' }}>{q.reponse}</p>
                    </details>
                  ))}
                </div>
              ) : (
                <p style={{ color: '#525252', fontSize: 17 }}>Les questions fréquentes arrivent bientôt.</p>
              )}
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
