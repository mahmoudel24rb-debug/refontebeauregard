'use client'

import { useState } from 'react'

type Promo = { titre?: string | null; texte?: string | null; cta?: { label?: string | null; url?: string | null } | null }

// Bandeau promo éditable (Payload global « bandeau-promo »), fermable par le visiteur.
export default function PromoBanner({ promo }: { promo: Promo }) {
  const [hidden, setHidden] = useState(false)
  if (hidden || !promo?.texte) return null
  return (
    <div
      role="region"
      aria-label="Annonce"
      style={{
        background: '#376131',
        color: '#fff',
        fontFamily: '"Inter", sans-serif',
        fontSize: 14,
        lineHeight: 1.4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        flexWrap: 'wrap',
        padding: '10px 44px',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <span>
        {promo.titre ? <strong>{promo.titre} — </strong> : null}
        {promo.texte}
      </span>
      {promo.cta?.url && promo.cta?.label ? (
        <a href={promo.cta.url} style={{ color: '#fff', fontWeight: 700, textDecoration: 'underline', whiteSpace: 'nowrap' }}>
          {promo.cta.label}
        </a>
      ) : null}
      <button
        onClick={() => setHidden(true)}
        aria-label="Fermer l'annonce"
        style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: '#fff', fontSize: 20, lineHeight: 1, cursor: 'pointer', padding: 4 }}
      >
        ×
      </button>
    </div>
  )
}
