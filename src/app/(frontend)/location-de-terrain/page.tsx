import React from 'react'
import LocationPage from '@/components/sportix/LocationPage'

// ISR : bandeau promo / infos club éditables visibles sous ~60s
export const revalidate = 60

export const metadata = { title: "Location de terrain de foot", description: "2 terrains de football synthétiques à louer entre amis, en famille ou entre collègues." }

export default function Page() {
  return <LocationPage />
}
