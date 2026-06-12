import React from 'react'
import { redirect, notFound } from 'next/navigation'
import EspaceDetail from '@/components/sportix/EspaceDetail'
import { ESPACES, espaceBySlug } from '@/components/sportix/espaces'

export function generateStaticParams() {
  return ESPACES.filter((e) => e.detail).map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const espace = espaceBySlug(slug)
  return espace ? { title: espace.name, description: espace.short } : { title: 'Espace' }
}

export default async function EspaceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (slug === 'cours-collectifs') redirect('/services/cours')
  const espace = espaceBySlug(slug)
  if (!espace || !espace.detail) notFound()
  return <EspaceDetail espace={espace} />
}
