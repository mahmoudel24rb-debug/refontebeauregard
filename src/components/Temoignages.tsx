import React from 'react'

import { getTemoignages } from '@/lib/data'

export async function Temoignages() {
  const temoignages = await getTemoignages()

  if (temoignages.length === 0) return null

  return (
    <section className="section section--grise">
      <div className="conteneur">
        <div className="section-entete section-entete--centree">
          <span className="surtitre">Témoignages</span>
          <h2 className="titre-section">
            <strong>Nos adhérents</strong> en parlent mieux que nous.
          </h2>
        </div>
        <div className="temoignages-grille">
          {temoignages.map((t) => (
            <article className="temoignage" key={t.id}>
              <p aria-label={`${t.note ?? 5} étoiles sur 5`} className="temoignage__etoiles">
                {'★'.repeat(t.note ?? 5)}
              </p>
              <p className="temoignage__texte">« {t.texte} »</p>
              <p className="temoignage__auteur">{t.auteur}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
