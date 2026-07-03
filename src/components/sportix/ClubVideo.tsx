'use client'

import React, { useEffect, useState } from 'react'

// URL de la vidéo de présentation du club.
// Accepte un lien YouTube / Vimeo / Facebook, ou un fichier .mp4/.webm placé
// dans /public (ex. "/assets/beauregard/club.mp4"). Laisser vide pour masquer.
// → À remplacer par le vrai lien fourni par le client.
const CLUB_VIDEO_URL = ''

// Icône « play » (triangle) — reprise du template Sportix.
const PlayIcon = () => (
  <div
    data-framer-name="Play Icon"
    style={{ imageRendering: 'pixelated', flexShrink: 0, fill: 'rgb(0, 0, 0)', color: 'rgb(0, 0, 0)' }}
    className="framer-1lx14sl"
    aria-hidden="true"
  >
    <div className="svgContainer" style={{ width: '100%', height: '100%', aspectRatio: 'inherit' }}>
      <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
)

const BorderEffect = () => (
  <div
    className="framer-gcbn1"
    data-border="true"
    data-framer-name="Border Effect"
    style={{
      '--border-bottom-width': '4px',
      '--border-color': 'rgb(255, 255, 255)',
      '--border-left-width': '4px',
      '--border-right-width': '4px',
      '--border-style': 'solid',
      '--border-top-width': '4px',
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      transform: 'scale(0.85)',
    } as React.CSSProperties}
  />
)

// Transforme une URL « partage » en URL embarquable.
function toEmbed(url: string): { kind: 'iframe' | 'file'; src: string } | null {
  if (!url) return null
  if (/\.(mp4|webm|mov|ogg)(\?|$)/i.test(url)) return { kind: 'file', src: url }
  let m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/)
  if (m) return { kind: 'iframe', src: `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0` }
  m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (m) return { kind: 'iframe', src: `https://player.vimeo.com/video/${m[1]}?autoplay=1` }
  if (/facebook\.com\//.test(url))
    return { kind: 'iframe', src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&autoplay=true&show_text=false` }
  return { kind: 'iframe', src: url }
}

export default function ClubVideo({ src = CLUB_VIDEO_URL }: { src?: string }) {
  const [open, setOpen] = useState(false)
  const embed = toEmbed(src)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const btnStyle: React.CSSProperties = {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: '50%',
    cursor: 'pointer',
  }

  // Pas d'URL de vidéo -> pas de bouton play (évite un bouton mort).
  if (!embed) return null

  return (
    <>
      <div className="framer-ein3b5-container" id="ein3b5">
        <div className="ssr-variant hidden-ugdvmg">
          <button
            type="button"
            onClick={() => embed && setOpen(true)}
            aria-label="Lire la vidéo de présentation du club"
            className="framer-JCmEB framer-amqr89 framer-v-amqr89"
            data-framer-name="Default"
            data-highlight="true"
            data-reset="button"
            style={btnStyle}
            tabIndex={0}
          >
            <BorderEffect />
            <PlayIcon />
          </button>
        </div>
        <div className="ssr-variant hidden-72rtr7 hidden-9md6lv">
          <button
            type="button"
            onClick={() => embed && setOpen(true)}
            aria-label="Lire la vidéo de présentation du club"
            className="framer-JCmEB framer-amqr89 framer-v-hp7z0u"
            data-framer-name="Phone"
            data-highlight="true"
            data-reset="button"
            style={btnStyle}
            tabIndex={0}
          >
            <BorderEffect />
            <PlayIcon />
          </button>
        </div>
      </div>

      {open && embed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vidéo de présentation du club"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(0,0,0,0.82)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(16px,4vw,48px)',
          }}
        >
          <button
            type="button"
            aria-label="Fermer la vidéo"
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: 18,
              right: 22,
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: 34,
              lineHeight: 1,
              cursor: 'pointer',
            }}
          >
            ×
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: 'min(960px, 100%)', aspectRatio: '16 / 9', borderRadius: 14, overflow: 'hidden', background: '#000', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          >
            {embed.kind === 'file' ? (
              <video src={embed.src} controls autoPlay playsInline style={{ width: '100%', height: '100%', display: 'block' }} />
            ) : (
              <iframe
                src={embed.src}
                title="Vidéo de présentation du club"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}
