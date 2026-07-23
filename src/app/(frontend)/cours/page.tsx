import React from 'react'
import CoursHub from '@/components/sportix/CoursHub'

// ISR : modifs Payload visibles sous ~60s sans rebuild
export const revalidate = 60

// /cours : page « Nos cours » (fusion espace Cours collectifs + cours).
export const metadata = { title: "Cours collectifs", description: "40 cours collectifs par semaine : yoga, pilates, boxe, cross training, HYROX, école du dos et plus encore." }

export default function CoursPage() {
  return <CoursHub />
}
