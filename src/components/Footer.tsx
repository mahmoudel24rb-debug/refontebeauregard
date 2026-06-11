import Link from 'next/link'
import React from 'react'

import { getFooter, getInfosClub } from '@/lib/data'

export async function Footer() {
  const [footer, infos] = await Promise.all([getFooter(), getInfosClub()])

  return (
    <footer className="footer">
      <div className="conteneur">
        <div className="footer__haut">
          <div className="footer__logo">
            parc<span>beauregard</span>
          </div>
          <p className="footer__question">
            Une question ? <a href={`mailto:${infos.email}`}>{infos.email}</a>
          </p>
        </div>

        <div className="footer__colonnes">
          <div>
            <div className="footer__logo">
              parc<span>beauregard</span>
            </div>
            {footer.baseline && <p className="footer__baseline">{footer.baseline}</p>}
          </div>
          {(footer.colonnes ?? []).map((colonne) => (
            <div className="footer__col" key={colonne.id}>
              <p className="footer__col-titre">{colonne.titre}</p>
              <ul>
                {(colonne.liens ?? []).map((lien) => (
                  <li key={lien.id}>
                    <Link href={lien.url}>{lien.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer__col">
            <p className="footer__col-titre">Contact</p>
            <ul>
              {infos.adresse && <li>{infos.adresse}</li>}
              {infos.telephone && (
                <li>
                  <a href={`tel:${infos.telephone.replace(/\s/g, '')}`}>{infos.telephone}</a>
                </li>
              )}
              {infos.reseaux?.facebook && (
                <li>
                  <a href={infos.reseaux.facebook} rel="noopener noreferrer" target="_blank">
                    Facebook
                  </a>
                </li>
              )}
              {infos.reseaux?.instagram && (
                <li>
                  <a href={infos.reseaux.instagram} rel="noopener noreferrer" target="_blank">
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="footer__bas">
          <p>{footer.mentionsBas}</p>
          <p>
            <Link href="/mentions-legales">Mentions légales</Link>
            {' · '}
            <Link href="/vie-privee">Vie privée</Link>
            {' · '}
            <Link href="/cookies">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
