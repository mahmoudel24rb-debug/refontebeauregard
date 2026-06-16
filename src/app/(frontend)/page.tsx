import React from 'react'

import HomePage from '@/components/sportix/HomePage'

// ISR : bandeau promo / infos club éditables visibles sous ~60s
export const revalidate = 60

// Port fidèle du DOM HYDRATÉ de la home Sportix (page entière, #main inclus).
export default function Home() {
  return <HomePage />
}
