import React from 'react'

// Port fidèle Sportix : le CSS SSR exact de Framer (184 Ko) est importé ICI,
// dans le layout du groupe (frontend) UNIQUEMENT — jamais dans (payload)/admin,
// car framer.css reset `body` + styles globaux (sinon l'admin Payload casse).
import '@/components/sportix/framer.css'
import './overrides.css'
import MobileNav from '@/components/sportix/MobileNav'
import PricingToggle from '@/components/sportix/PricingToggle'
import SvgSprite from '@/components/sportix/SvgSprite'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.parcbeauregard.com'
const DESCRIPTION =
  'Salle de sport et coaching au cœur de la nature à Rochecorbon (37) : cours collectifs, entraînement fonctionnel, cross-cardio et coaching personnalisé.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Parc Beauregard Fitness & Coaching — Rochecorbon',
    template: '%s — Parc Beauregard',
  },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Parc Beauregard Fitness & Coaching',
    title: 'Parc Beauregard Fitness & Coaching — Rochecorbon',
    description: DESCRIPTION,
    url: SITE_URL,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Parc Beauregard Fitness & Coaching' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parc Beauregard Fitness & Coaching — Rochecorbon',
    description: DESCRIPTION,
    images: ['/og.jpg'],
  },
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SvgSprite />
        {children}
        <MobileNav />
        <PricingToggle />
      </body>
    </html>
  )
}
