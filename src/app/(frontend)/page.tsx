import React from 'react'

import HomePage from '@/components/sportix/HomePage'
import { getPayloadClient } from '@/lib/payload'

// ISR : infos club / contenus éditables visibles sous ~60s
export const revalidate = 60

type FormuleDoc = { nom: string; prix: number; suffixePrix?: string | null; accroche?: string | null; avantages?: { texte: string }[] | null; type: string }

const toCard = (f: FormuleDoc) => ({
  name: f.nom,
  price: `${f.prix} €`,
  period: f.suffixePrix || '',
  desc: f.accroche || '',
  features: (f.avantages || []).map((a) => a.texte),
})

// Port fidèle du DOM HYDRATÉ de la home Sportix. Les formules sont lues depuis
// Payload (comme /tarifs), avec fallback statique dans le composant si la base
// est vide/indisponible.
export default async function Home() {
  let mensuel: ReturnType<typeof toCard>[] = []
  let courtes: ReturnType<typeof toCard>[] = []
  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({ collection: 'formules', sort: 'ordre', limit: 100 })
    mensuel = (docs as FormuleDoc[]).filter((f) => f.type === 'mensuelle').map(toCard)
    courtes = (docs as FormuleDoc[]).filter((f) => f.type !== 'mensuelle').map(toCard)
  } catch {
    // fallback statique géré dans HomePage
  }
  return <HomePage mensuel={mensuel} courtes={courtes} />
}
