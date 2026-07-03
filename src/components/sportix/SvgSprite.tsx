import React from 'react'

// Sprite SVG global : le port Framer référence via <use href="#..."> des symboles
// que le crawl SSR n'a jamais émis (étoiles des avis + chevron de l'entrée Contact
// en nav tablette). On les définit ici, une seule fois, dans le layout (frontend).
export default function SvgSprite() {
  return (
    <svg aria-hidden="true" focusable="false" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
      {/* Étoile pleine 5 branches (avis) */}
      <symbol id="svg-1111057538_458" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
      </symbol>
      {/* Chevron (icône du lien Contact, nav tablette) */}
      <symbol id="svg1231980477_257" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
      </symbol>
    </svg>
  )
}
