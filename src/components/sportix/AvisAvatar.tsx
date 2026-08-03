import fs from 'node:fs'
import path from 'node:path'
import React from 'react'

// Avatar d'un auteur d'avis Google (cartes témoignages de la home).
// Server component : le fichier est choisi AU RENDU (pas de requête 404 côté
// navigateur). Ordre de repli, du plus au moins souhaitable :
//   1. la photo réelle si le fichier existe dans /public/assets/beauregard/avis/
//      (nommé d'après l'auteur, ex. christele-p.webp) ;
//   2. l'avatar ILLUSTRÉ (buste flat aux couleurs de la DA, illu-1/2/3.svg) ;
//   3. le monogramme (initiales sur pastille verte), ultime secours.
// Les photos de profil Google ne sont pas récupérables sans l'API Places :
// déposer le fichier dans le dossier suffit (visible au revalidate ISR),
// aucun code à changer.

const PASTILLE: React.CSSProperties = {
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  flexShrink: 0,
}

const existe = (url?: string) => {
  if (!url) return false
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', url.replace(/^\//, '')))
  } catch {
    return false
  }
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
  const src = existe(photo) ? photo : existe(illu) ? illu : null

  if (!src) {
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
    />
  )
}
