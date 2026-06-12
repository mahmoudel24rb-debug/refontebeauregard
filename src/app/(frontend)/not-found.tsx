import React from 'react'

// 404 brandé Beauregard (autonome, styles inline -> robuste quel que soit le layout).
export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px', fontFamily: '"Inter", system-ui, sans-serif', background: '#fff', color: '#1a1a1a' }}>
      <img src="/assets/framerusercontent.com/images/eMs4EJNenduD63PdYh3FSUcrWk.svg" alt="Parc Beauregard" width={160} style={{ marginBottom: 36 }} />
      <p style={{ color: '#376131', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: 14, margin: '0 0 14px' }}>Erreur 404</p>
      <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Page introuvable</h1>
      <p style={{ color: '#525252', fontSize: 18, lineHeight: 1.6, maxWidth: 520, margin: '0 0 32px' }}>
        La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez tout sur la page d'accueil.
      </p>
      <a href="/" style={{ background: '#376131', color: '#fff', fontWeight: 700, fontSize: 17, textDecoration: 'none', padding: '16px 36px', borderRadius: 70 }}>
        Retour à l'accueil
      </a>
    </div>
  )
}
