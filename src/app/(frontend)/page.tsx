import React from 'react'

import HomePage, { type HeroPromo } from '@/components/sportix/HomePage'
import { getPayloadClient } from '@/lib/payload'

// ISR : badge promo / infos club éditables visibles sous ~60s
export const revalidate = 60

// Port fidèle du DOM HYDRATÉ de la home Sportix (page entière, #main inclus).
export default async function Home() {
  let promo: HeroPromo | null = null
  try {
    const payload = await getPayloadClient()
    const bp = await payload.findGlobal({ slug: 'bandeau-promo' })
    if (bp?.actif && (bp.titre || bp.texte)) {
      promo = { titre: bp.titre, texte: bp.texte, url: bp.cta?.url }
    }
  } catch {
    // badge ignoré si la base est indisponible
  }
  return <HomePage promo={promo} />
}
