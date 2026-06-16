import React from 'react'
import MentionsLegales from '@/components/sportix/MentionsLegales'

// ISR : bandeau promo / infos club éditables visibles sous ~60s
export const revalidate = 60

export const metadata = { title: 'Mentions légales — Parc Beauregard' }

export default function MentionsLegalesPage() {
  return <MentionsLegales />
}
