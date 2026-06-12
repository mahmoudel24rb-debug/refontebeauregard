import React from 'react'

import Tarifs from '@/components/sportix/Tarifs'

// /tarifs — port fidèle de pricing.html (à adapter : 3→5 formules + courtes durées + tickets + Payload).
export const metadata = { title: "Tarifs & abonnements", description: "Formules mensuelles, courtes durées et tickets du Parc Beauregard. Accès salle, cours collectifs et bilan forme offert." }

export default function TarifsPage() {
  return <Tarifs />
}
