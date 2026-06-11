import Link from 'next/link'
import React from 'react'

import type { Media } from '@/payload-types'

type Props = {
  href: string
  titre: string
  etiquette?: string | null
  sousTitre?: string | null
  image?: Media | number | null
}

export function CarteVisuelle({ href, titre, etiquette, sousTitre, image }: Props) {
  const url = typeof image === 'object' && image?.url ? image.url : null

  return (
    <Link className="carte-visuelle" href={href}>
      {url && <img alt={typeof image === 'object' ? (image?.alt ?? titre) : titre} src={url} />}
      <div className="carte-visuelle__haut">
        {etiquette && <span className="carte-visuelle__etiquette">{etiquette}</span>}
      </div>
      <div className="carte-visuelle__bas">
        <div>
          <p className="carte-visuelle__titre">{titre}</p>
          {sousTitre && <p className="carte-visuelle__sous">{sousTitre}</p>}
        </div>
        <span aria-hidden className="carte-visuelle__fleche">
          →
        </span>
      </div>
    </Link>
  )
}
