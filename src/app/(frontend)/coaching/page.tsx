import React from 'react'
import CoachingPage from '@/components/sportix/CoachingPage'

// ISR : bandeau promo / infos club éditables visibles sous ~60s
export const revalidate = 60

export const metadata = { title: "Coaching personnalisé", description: "Un suivi sur-mesure avec nos coachs diplômés. Première séance offerte." }

export default function Page() {
  return <CoachingPage />
}
