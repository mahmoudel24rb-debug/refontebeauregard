import React from 'react'

import FicheEspace from '@/components/sportix/FicheEspace'

// /espaces/[slug] — gabarit fiche espace (port de facilities--gym-training-zones.html).
// Pour l'instant statique ; sera branché sur la collection `espaces` (×4) en phase Payload.
export default function FicheEspacePage() {
  return <FicheEspace />
}
