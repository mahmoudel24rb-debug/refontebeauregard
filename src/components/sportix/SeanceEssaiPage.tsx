import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ContactForm from './ContactForm'
import { getPayloadClient } from '@/lib/payload'

// Page « Séance d'essai » (/seance-essai) : cible du CTA principal du header.
// Même gabarit que ContactPage (bannière + grille 2 colonnes) et MÊME formulaire
// (ContactForm -> POST /api/contact) : une seule voie de contact à maintenir.
// Les faits affichés sont ceux du club (première séance de coaching offerte,
// coachs diplômés, coordonnées/horaires du global infos-club) : rien d'inventé.

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

const POINTS: { titre: string; texte: string }[] = [
  {
    titre: 'La première séance de coaching est offerte',
    texte: 'Vous repartez avec un premier avis de coach sur votre objectif, sans rien avancer.',
  },
  {
    titre: 'Sans engagement',
    texte: 'La séance d’essai ne vous engage à rien : vous choisissez votre formule seulement après.',
  },
  {
    titre: 'Des coachs diplômés',
    texte: 'Chacun a sa spécialité, Hyrox, boxe ou yoga, pour s’adapter à votre niveau.',
  },
  {
    titre: 'Une réponse rapide',
    texte: 'Nous vous rappelons pour fixer le créneau qui vous arrange.',
  },
]

export default async function SeanceEssaiPage() {
  let infos: {
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    horaires?: { jours?: string | null; heures?: string | null }[] | null
  } | null = null
  // Liste du menu « activité qui vous intéresse » : les cours réels du club,
  // plus le coaching personnalisé. Uniquement sur cette page.
  let activites: string[] = []
  try {
    const payload = await getPayloadClient()
    infos = await payload.findGlobal({ slug: 'infos-club' })
    const { docs } = await payload.find({
      collection: 'cours',
      sort: 'ordre',
      limit: 50,
      depth: 0,
      select: { nom: true },
    })
    activites = (docs as { nom?: string | null }[]).map((c) => c.nom).filter((n): n is string => !!n)
  } catch {
    // valeurs de repli ci-dessous si la base est indisponible
  }
  activites = [...activites, 'Coaching personnalisé']
  const horaires = infos?.horaires?.length
    ? infos.horaires
    : [
        { jours: 'Lundi – Vendredi', heures: '9h00 – 20h00' },
        { jours: 'Samedi', heures: '9h30 – 12h00' },
        { jours: 'Dimanche', heures: 'Fermé' },
      ]
  const adresse = infos?.adresse || '1 quai de la Loire, 37210 Rochecorbon'
  const telephone = infos?.telephone || '02.47.44.41.43'
  const telHref = 'tel:+33' + telephone.replace(/\D/g, '').replace(/^0/, '')

  const labelStyle: React.CSSProperties = {
    color: '#737373',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
    margin: '0 0 3px',
  }

  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            {/* Bannière */}
            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '170px 30px 20px' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 14px' }}>
                Séance d&rsquo;essai
              </p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 20px', maxWidth: 820 }}>
                Réservez votre séance d&rsquo;essai
              </h1>
              <p style={{ color: '#404040', fontSize: 19, lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
                La première séance de coaching est offerte. Dites-nous ce que vous cherchez, nous vous
                rappelons pour fixer le créneau et vous faire visiter le club au bord de la Loire.
              </p>
            </section>

            {/* Grille 2 colonnes : formulaire + réassurance */}
            <section
              className="bg-contact-grid"
              style={{ maxWidth: 1180, margin: '0 auto', padding: '30px 30px 20px', display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 40, alignItems: 'start' }}
            >
              <ContactForm activites={activites} />

              <aside>
                <div style={{ background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 16, padding: 30 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 18px' }}>
                    Ce qui vous attend
                  </h2>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {POINTS.map((p) => (
                      <li key={p.titre} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                        <span style={{ flexShrink: 0, color: '#376131', marginTop: 2 }} aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                            <path d="m4.5 12.5 5 5 10-11" />
                          </svg>
                        </span>
                        <span>
                          <span style={{ display: 'block', fontWeight: 700, color: '#171717', fontSize: 15.5, lineHeight: 1.4 }}>{p.titre}</span>
                          <span style={{ display: 'block', color: '#525252', fontSize: 14.5, lineHeight: 1.55, marginTop: 3 }}>{p.texte}</span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ padding: '16px 0 0' }}>
                    <p style={labelStyle}>Venir sur place</p>
                    <a
                      href={'https://www.google.com/maps?q=' + encodeURIComponent(adresse)}
                      target="_blank"
                      rel="noopener"
                      style={{ color: '#171717', fontWeight: 600, textDecoration: 'none' }}
                    >
                      {adresse}
                    </a>
                  </div>
                  <div style={{ padding: '14px 0 0' }}>
                    <p style={labelStyle}>Téléphone</p>
                    <a href={telHref} style={{ color: '#376131', fontWeight: 700, textDecoration: 'none' }}>{telephone}</a>
                  </div>
                  <div style={{ padding: '14px 0 0' }}>
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

                <a href={telHref} style={{ display: 'block', textAlign: 'center', marginTop: 16, background: '#376131', color: '#fff', fontWeight: 700, fontSize: 16, textDecoration: 'none', padding: '15px', borderRadius: 70 }}>
                  Appeler le club
                </a>
              </aside>
            </section>

            {/* Maillage : préparer sa venue */}
            <section style={{ maxWidth: 1180, margin: '0 auto', padding: '20px 30px 110px' }}>
              <h2 style={{ fontSize: 'clamp(22px,2.6vw,30px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 20px' }}>
                Avant de venir
              </h2>
              <div className="bg-cours-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                {[
                  { href: '/cours', titre: 'Nos cours', texte: 'Yoga, Pilates, Cross Training, HYROX : trouvez le cours qui vous correspond.' },
                  { href: '/planning', titre: 'Le planning', texte: 'Les créneaux de la semaine, en salle et dans la Bulle.' },
                  { href: '/tarifs', titre: 'Les tarifs', texte: 'Les formules mensuelles, les packs courte durée et le ticket à la séance.' },
                ].map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    style={{ display: 'flex', flexDirection: 'column', background: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: 14, padding: 26, textDecoration: 'none', color: 'inherit' }}
                  >
                    <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 8px' }}>{c.titre}</h3>
                    <p style={{ color: '#525252', lineHeight: 1.55, margin: '0 0 16px', flex: 1 }}>{c.texte}</p>
                    <span style={{ color: '#376131', fontWeight: 700 }}>Découvrir →</span>
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
