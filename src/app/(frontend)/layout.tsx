import React from 'react'

// Port fidèle Sportix : le CSS SSR exact de Framer (184 Ko) est importé ICI,
// dans le layout du groupe (frontend) UNIQUEMENT — jamais dans (payload)/admin,
// car framer.css reset `body` + styles globaux (sinon l'admin Payload casse).
import '@/components/sportix/framer.css'
import './overrides.css'
import MobileNav from '@/components/sportix/MobileNav'
import PricingToggle from '@/components/sportix/PricingToggle'

export const metadata = {
  title: 'Parc Beauregard Fitness & Coaching — Rochecorbon',
  description:
    'Salle de sport et coaching au cœur de la nature à Rochecorbon (37) : cours collectifs, entraînement fonctionnel, cross-cardio et coaching personnalisé.',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <MobileNav />
        <PricingToggle />
      </body>
    </html>
  )
}
