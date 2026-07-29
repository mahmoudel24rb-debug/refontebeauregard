'use client'

import React, { useState } from 'react'

// Avatar d'un auteur d'avis Google (cartes témoignages de la home).
// Affiche la photo si le fichier existe dans /public/assets/beauregard/avis/
// (nommé d'après l'auteur, ex. christele-p.webp), sinon retombe sur le
// monogramme (initiales sur pastille verte) : jamais d'image vide ou cassée.
// Les photos de profil Google ne sont pas récupérables sans l'API Places :
// déposer les fichiers manuellement suffit, aucun code à changer.

const PASTILLE: React.CSSProperties = {
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  flexShrink: 0,
}

export default function AvisAvatar({ initiales, photo, auteur }: { initiales: string; photo: string; auteur: string }) {
  const [enErreur, setEnErreur] = useState(false)

  if (enErreur) {
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
      src={photo}
      alt={`Photo de ${auteur}`}
      width={34}
      height={34}
      loading="lazy"
      style={{ ...PASTILLE, objectFit: 'cover', display: 'block' }}
      onError={() => setEnErreur(true)}
    />
  )
}
