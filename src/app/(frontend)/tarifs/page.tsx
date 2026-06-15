import React from 'react'

import Tarifs from '@/components/sportix/Tarifs'
import { getPayloadClient } from '@/lib/payload'

// ISR : modifs Payload visibles sous ~60s sans rebuild
export const revalidate = 60

export const metadata = { title: 'Tarifs & abonnements', description: 'Formules mensuelles, courtes durées et tickets du Parc Beauregard. Accès salle, cours collectifs et bilan forme offert.' }

type FormuleDoc = { nom: string; prix: number; suffixePrix?: string | null; accroche?: string | null; avantages?: { texte: string }[] | null; type: string }

const toCard = (f: FormuleDoc) => ({
  name: f.nom,
  price: `${f.prix} €`,
  period: f.suffixePrix || '',
  desc: f.accroche || '',
  features: (f.avantages || []).map((a) => a.texte),
})

export default async function TarifsPage() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'formules', sort: 'ordre', limit: 100 })
  const mensuel = docs.filter((f) => f.type === 'mensuelle').map(toCard)
  const courtes = docs.filter((f) => f.type !== 'mensuelle').map(toCard)
  return <Tarifs mensuel={mensuel} courtes={courtes} />
}
