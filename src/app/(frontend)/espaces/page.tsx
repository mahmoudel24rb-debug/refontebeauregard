import React from 'react'
import EspacesHub from '@/components/sportix/EspacesHub'

// ISR : modifs Payload visibles sous ~60s sans rebuild
export const revalidate = 60

// /espaces — 3 espaces réels (Cours collectifs, Fonctionnel, Cross/Cardio).
export const metadata = { title: "Nos espaces", description: "Espace cours collectifs, fonctionnel et cross/cardio, en pleine nature au bord de la Loire." }

export default function EspacesPage() {
  return <EspacesHub />
}
