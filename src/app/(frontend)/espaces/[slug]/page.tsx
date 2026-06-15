import React from 'react'
import { redirect, notFound } from 'next/navigation'
import EspaceDetail from '@/components/sportix/EspaceDetail'
import { getPayloadClient } from '@/lib/payload'

export async function generateStaticParams() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'espaces', where: { pageDetail: { equals: true } }, limit: 50, select: { slug: true } })
  return docs.map((e) => ({ slug: e.slug }))
}

async function getEspace(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'espaces', where: { slug: { equals: slug } }, limit: 1 })
  return docs[0] ?? null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const espace = await getEspace(slug)
  return espace ? { title: espace.nom, description: espace.accroche ?? undefined } : { title: 'Espace' }
}

export default async function EspaceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const espace = await getEspace(slug)
  if (!espace) notFound()
  if (!espace.pageDetail) redirect(espace.lien || '/espaces')
  return <EspaceDetail espace={espace} />
}
