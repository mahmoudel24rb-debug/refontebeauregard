import React from 'react'
import { notFound } from 'next/navigation'
import CoursDetail from '@/components/sportix/CoursDetail'
import { getPayloadClient } from '@/lib/payload'

export async function generateStaticParams() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'cours', limit: 100, select: { slug: true } })
  return docs.map((c) => ({ slug: c.slug }))
}

async function getCours(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'cours', where: { slug: { equals: slug } }, limit: 1 })
  return docs[0] ?? null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cours = await getCours(slug)
  return cours ? { title: `${cours.nom} — Cours`, description: cours.accroche ?? undefined } : { title: 'Cours' }
}

export default async function CoursSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cours = await getCours(slug)
  if (!cours) notFound()
  const payload = await getPayloadClient()
  const { docs: autres } = await payload.find({
    collection: 'cours',
    where: { slug: { not_equals: slug } },
    sort: 'ordre',
    limit: 3,
  })
  return <CoursDetail cours={cours} autres={autres} />
}
