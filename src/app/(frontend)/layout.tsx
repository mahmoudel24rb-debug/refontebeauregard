import React from 'react'

// Port fidèle Sportix : le CSS SSR exact de Framer (184 Ko) est importé ICI,
// dans le layout du groupe (frontend) UNIQUEMENT — jamais dans (payload)/admin,
// car framer.css reset `body` + styles globaux (sinon l'admin Payload casse).
import '@/components/sportix/framer.css'
import './overrides.css'

export const metadata = {
  title: 'Parc Beauregard Fitness & Coaching — Rochecorbon',
  description:
    'Salle de sport et coaching au cœur de la nature à Rochecorbon (37) : cours collectifs, espace fonctionnel, cross-cardio et kid fitness.',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
