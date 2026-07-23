import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ContactForm from './ContactForm'
import { getPayloadClient } from '@/lib/payload'

// Page Contact (/contact) : bannière + grille 2 colonnes (formulaire à gauche,
// colonne réassurance à droite) + carte Maps pleine largeur. Composant server
// propre qui remplace le port Framer Contact.tsx (structure plus claire).

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

export default async function ContactPage() {
  let infos: { nom?: string | null; adresse?: string | null; telephone?: string | null; email?: string | null; horaires?: { jours?: string | null; heures?: string | null }[] | null } | null = null
  try {
    const payload = await getPayloadClient()
    infos = await payload.findGlobal({ slug: 'infos-club' })
  } catch {
    // valeurs de repli ci-dessous si la base est indisponible
  }
  const horaires = infos?.horaires?.length
    ? infos.horaires
    : [{ jours: 'Lundi – Vendredi', heures: '9h00 – 20h00' }, { jours: 'Samedi', heures: '9h30 – 12h00' }, { jours: 'Dimanche', heures: 'Fermé' }]
  const adresse = infos?.adresse || '1 quai de la Loire, 37210 Rochecorbon'
  const telephone = infos?.telephone || '02.47.44.41.43'
  const email = infos?.email || 'rochecorbon@parcbeauregard.com'
  const telHref = 'tel:+33' + telephone.replace(/\D/g, '').replace(/^0/, '')
  const mapsEmbed = 'https://www.google.com/maps?q=' + encodeURIComponent(adresse) + '&output=embed'

  const rowStyle: React.CSSProperties = { display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }
  const labelStyle: React.CSSProperties = { color: '#737373', fontSize: 13, fontWeight: 600, letterSpacing: '0.03em', textTransform: 'uppercase', margin: '0 0 3px' }

  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            {/* Bannière */}
            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '170px 30px 20px' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 14px' }}>Contact</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 20px', maxWidth: 820 }}>Parlons de votre objectif</h1>
              <p style={{ color: '#404040', fontSize: 19, lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
                Une question, une envie d&rsquo;essayer, un projet de coaching ? Écrivez-nous ou passez nous voir au bord de la Loire. La première séance de coaching est offerte.
              </p>
            </section>

            {/* Grille 2 colonnes : formulaire + réassurance */}
            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '30px 30px 20px', display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 40, alignItems: 'start' }} className="bg-contact-grid">
              <ContactForm />

              <aside>
                <div style={{ background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 16, padding: 30 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 4px' }}>Nous contacter</h2>
                  <p style={{ color: '#525252', fontSize: 15, lineHeight: 1.6, margin: '0 0 10px' }}>Nous vous répondons rapidement.</p>

                  <div style={rowStyle}>
                    <div>
                      <p style={labelStyle}>Adresse</p>
                      <a href={'https://www.google.com/maps?q=' + encodeURIComponent(adresse)} target="_blank" rel="noopener" style={{ color: '#171717', fontWeight: 600, textDecoration: 'none' }}>{adresse}</a>
                    </div>
                  </div>
                  <div style={rowStyle}>
                    <div>
                      <p style={labelStyle}>Téléphone</p>
                      <a href={telHref} style={{ color: '#376131', fontWeight: 700, textDecoration: 'none' }}>{telephone}</a>
                    </div>
                  </div>
                  <div style={rowStyle}>
                    <div>
                      <p style={labelStyle}>Email</p>
                      <a href={'mailto:' + email} style={{ color: '#376131', fontWeight: 700, textDecoration: 'none', wordBreak: 'break-word' }}>{email}</a>
                    </div>
                  </div>
                  <div style={{ ...rowStyle, borderBottom: 'none', paddingBottom: 0 }}>
                    <div style={{ width: '100%' }}>
                      <p style={labelStyle}>Horaires</p>
                      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {horaires.map((h, i) => (
                          <li key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '4px 0', fontSize: 15, color: '#404040' }}>
                            <span>{h.jours}</span>
                            <span style={{ fontWeight: 600 }}>{h.heures}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <a href={telHref} style={{ display: 'block', textAlign: 'center', marginTop: 16, background: '#376131', color: '#fff', fontWeight: 700, fontSize: 16, textDecoration: 'none', padding: '15px', borderRadius: 70 }}>Appeler le club</a>
              </aside>
            </section>

            {/* Carte pleine largeur */}
            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '20px 30px 110px' }}>
              <h2 style={{ fontSize: 'clamp(22px,2.6vw,30px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 20px' }}>Nous trouver</h2>
              <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e5e5' }}>
                <iframe
                  title="Carte du Parc Beauregard à Rochecorbon"
                  src={mapsEmbed}
                  width="100%"
                  height="420"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
