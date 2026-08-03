import React from 'react'

import SeanceEssaiPage from '@/components/sportix/SeanceEssaiPage'

// ISR : infos club éditables visibles sous ~60s
export const revalidate = 60

// /seance-essai : cible du CTA principal du header (bannière + formulaire +
// colonne réassurance + maillage cours/planning/tarifs).
export const metadata = {
  title: "Séance d'essai",
  description:
    "Réservez votre séance d'essai au Parc Beauregard Fitness & Coaching à Rochecorbon (37). La première séance de coaching est offerte.",
}

export default function Page() {
  return <SeanceEssaiPage />
}
