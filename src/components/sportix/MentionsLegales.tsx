import React from 'react'
import Header from './Header'
import Footer from './Footer'

// Page Mentions légales (/mentions-legales) — page légale propre (remplace le
// gabarit blog Sportix). Contenu à compléter/valider juridiquement si besoin.

const SHELL = 'framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7'

const SECTIONS: { t: string; c: React.ReactNode }[] = [
  {
    t: 'Éditeur du site',
    c: (
      <>
        Parc Beauregard Fitness &amp; Coaching<br />
        1 quai de la Loire, 37210 Rochecorbon<br />
        Téléphone : 02.47.44.41.43<br />
        E-mail : rochecorbon@parcbeauregard.com
      </>
    ),
  },
  {
    t: 'Hébergement',
    c: <>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com.</>,
  },
  {
    t: 'Propriété intellectuelle',
    c: <>L'ensemble des contenus du site (textes, visuels, logo, photographies) est la propriété du Parc Beauregard ou de ses partenaires. Toute reproduction, totale ou partielle, sans autorisation préalable est interdite.</>,
  },
  {
    t: 'Données personnelles',
    c: <>Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre demande. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données : il suffit de nous écrire à rochecorbon@parcbeauregard.com.</>,
  },
  {
    t: 'Cookies',
    c: <>Le site peut utiliser des cookies destinés à mesurer l'audience et à améliorer votre navigation. Vous pouvez configurer votre navigateur pour les refuser.</>,
  },
]

export default function MentionsLegales() {
  return (
    <div id="main">
      <div className="framer-9MYi8 framer-13v9dm1" style={{ minHeight: '100vh', width: 'auto' }}>
        <div className={SHELL} style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Header />
          <main style={{ background: '#fff', fontFamily: '"Inter", sans-serif' }}>
            <section style={{ maxWidth: 820, margin: '0 auto', padding: '170px 30px 110px' }}>
              <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 14px' }}>Parc Beauregard</p>
              <h1 style={{ fontSize: 'clamp(34px,5vw,56px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 40px' }}>Mentions légales</h1>
              {SECTIONS.map((s) => (
                <div key={s.t} style={{ marginBottom: 34 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 12px' }}>{s.t}</h2>
                  <p style={{ color: '#404040', fontSize: 17, lineHeight: 1.75, margin: 0 }}>{s.c}</p>
                </div>
              ))}
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
