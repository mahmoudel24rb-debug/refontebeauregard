import React from 'react'
import CoursHub from '@/components/sportix/CoursHub'

// /services/cours — page « Nos cours » (fusion espace Cours collectifs + cours).
export const metadata = { title: "Nos cours collectifs", description: "Plus de 40 cours par semaine : yoga, pilates, boxe, cross training, HYROX, école du dos et plus encore." }

export default function CoursPage() {
  return <CoursHub />
}
