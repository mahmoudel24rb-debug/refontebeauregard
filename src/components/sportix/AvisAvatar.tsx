'use client'

import React, { useState } from 'react'

// Avatar d'un auteur d'avis Google (cartes témoignages de la home).
// Ordre de repli, du plus au moins souhaitable :
//   1. la photo réelle si le fichier existe dans /public/assets/beauregard/avis/
//      (nommé d'après l'auteur, ex. christele-p.webp) ;
//   2. l'avatar ILLUSTRÉ (buste flat aux couleurs de la DA, illu-1/2/3.svg) ;
//   3. le monogramme (initiales sur pastille verte), ultime secours.
// Les photos de profil Google ne sont pas récupérables sans l'API Places :
// déposer les fichiers manuellement suffit, aucun code à changer.

const PASTILLE: React.CSSProperties = {
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  flexShrink: 0,
}

export default function AvisAvatar({
  initiales,
  photo,
  illu,
  auteur,
}: {
  initiales: string
  photo: string
  illu?: string
  auteur: string
}) {
  // 0 = photo, 1 = illustration, 2 = initiales
  const [etape, setEtape] = useState(0)
  const src = etape === 0 ? photo : illu

  if (etape > 1 || !src) {
    return (
      <span
        aria-hidden="true"
        style={{
          ...PASTILLE,
          backgroundColor: 'rgb(55, 97, 49)',
          color: 'rgb(255, 255, 255)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '13px',
          fontFamily: '"Inter", sans-serif',
        }}
      >
        {initiales}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={`Photo de ${auteur}`}
      width={34}
      height={34}
      loading="lazy"
      style={{ ...PASTILLE, objectFit: 'cover', display: 'block' }}
      onError={() => setEtape((e) => e + 1)}
    />
  )
}
