import Link from 'next/link'
import React from 'react'

import { getBandeauPromo } from '@/lib/data'

export async function BandeauPromoSection() {
  const bandeau = await getBandeauPromo()

  if (!bandeau.actif || !bandeau.titre) return null

  return (
    <section className="section">
      <div className="conteneur">
        <div className="promo">
          <div>
            <h2 className="promo__titre">{bandeau.titre}</h2>
            {bandeau.texte && <p className="promo__texte">{bandeau.texte}</p>}
          </div>
          <Link className="btn btn--blanc" href={bandeau.cta?.url ?? '/contact'}>
            {bandeau.cta?.label ?? 'En profiter'}
          </Link>
        </div>
      </div>
    </section>
  )
}
