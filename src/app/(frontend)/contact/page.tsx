import React from 'react'

import ContactPage from '@/components/sportix/ContactPage'

// ISR : infos club éditables visibles sous ~60s
export const revalidate = 60

// /contact : bannière + formulaire + colonne réassurance + carte (ContactPage).
export const metadata = { title: "Contact", description: "Contactez le Parc Beauregard Fitness & Coaching à Rochecorbon (37) : adresse, horaires, téléphone et formulaire." }

export default function Page() {
  return <ContactPage />
}
