import React from 'react'
import { notFound } from 'next/navigation'
import CoursDetail from '@/components/sportix/CoursDetail'
import { COURS, coursBySlug } from '@/components/sportix/cours'

export function generateStaticParams() {
  return COURS.map((c) => ({ slug: c.slug }))
}

export default async function CoursSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cours = coursBySlug(slug)
  if (!cours) notFound()
  return <CoursDetail cours={cours} />
}
