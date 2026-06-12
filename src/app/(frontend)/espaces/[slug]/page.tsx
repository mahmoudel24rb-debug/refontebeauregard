import React from 'react'
import { redirect } from 'next/navigation'

import FicheEspace from '@/components/sportix/FicheEspace'

// /espaces/[slug] — gabarit fiche espace.
// « cours-collectifs » est fusionné avec la page Cours -> redirection.
export default async function FicheEspacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (slug === 'cours-collectifs') redirect('/services/cours')
  return <FicheEspace />
}
