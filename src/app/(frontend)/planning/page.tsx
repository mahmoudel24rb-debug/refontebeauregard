import React from 'react'
import PlanningPage from '@/components/sportix/PlanningPage'

// /planning — planning des cours collectifs (rentrée septembre 2026).
// Données statiques : src/components/sportix/planning.ts (récap client).

export const metadata = {
  title: 'Planning des cours',
  description:
    'Le planning hebdomadaire des cours collectifs du Parc Beauregard : Salle Fitness, Salle Cross et Bulle, du lundi au samedi. Rentrée septembre 2026.',
}

export default function Page() {
  return <PlanningPage />
}
