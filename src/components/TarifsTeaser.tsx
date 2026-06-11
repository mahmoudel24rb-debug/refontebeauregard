import Link from 'next/link'
import React from 'react'

import { getFormules } from '@/lib/data'

export async function TarifsTeaser() {
  const formules = await getFormules()
  const mensuelles = formules.filter((f) => f.type === 'mensuelle').slice(0, 3)

  if (mensuelles.length === 0) return null

  return (
    <section className="section">
      <div className="conteneur">
        <div className="section-entete section-entete--centree">
          <span className="surtitre">Tarifs</span>
          <h2 className="titre-section">
            Votre chemin vers une <strong>forme physique et mentale</strong> au sommet.
          </h2>
        </div>
        <div className="tarifs-grille">
          {mensuelles.map((f) => (
            <article className={`tarif${f.misEnAvant ? ' tarif--vedette' : ''}`} key={f.id}>
              <span className="tarif__nom">{f.nom}</span>
              <p className="tarif__prix">
                {f.prix}&nbsp;€<span>{f.suffixePrix}</span>
              </p>
              {f.accroche && <p className="tarif__accroche">{f.accroche}</p>}
              <ul className="tarif__avantages">
                {(f.avantages ?? []).map((a) => (
                  <li key={a.id}>{a.texte}</li>
                ))}
              </ul>
              <Link className={`btn ${f.misEnAvant ? 'btn--blanc' : 'btn--vert'}`} href="/tarifs">
                Choisir {f.nom}
              </Link>
            </article>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <Link className="btn btn--noir" href="/tarifs">
            Voir tous les tarifs
          </Link>
        </div>
      </div>
    </section>
  )
}
