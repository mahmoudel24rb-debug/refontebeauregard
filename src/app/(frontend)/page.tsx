import Link from 'next/link'
import React from 'react'

import { BandeauPromoSection } from '@/components/BandeauPromoSection'
import { CarteVisuelle } from '@/components/CarteVisuelle'
import { TarifsTeaser } from '@/components/TarifsTeaser'
import { Temoignages } from '@/components/Temoignages'
import { getEspaces, getInfosClub, getPayloadClient, getServices } from '@/lib/data'

async function getImageHero() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'media',
    where: { alt: { equals: 'hero-accueil' } },
    limit: 1,
  })
  return docs[0] ?? null
}

export default async function Accueil() {
  const [espaces, services, infos, imageHero] = await Promise.all([
    getEspaces(),
    getServices(),
    getInfosClub(),
    getImageHero(),
  ])

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        {imageHero?.url && <img alt="" className="hero__fond" src={imageHero.url} />}
        <div className="hero__voile" />
        <div className="conteneur hero__contenu">
          <h1 className="hero__titre">
            Le sport, <strong>au cœur de la nature.</strong>
          </h1>
          <p className="hero__texte">
            Fitness, coaching et cours collectifs en bord de Loire, à Rochecorbon. Un cadre unique
            pour repousser vos limites — ou simplement vous sentir bien.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--blanc" href="/services">
              Découvrir nos services
            </Link>
            <Link className="btn btn--contour" href="/contact">
              Devenir membre
            </Link>
          </div>
        </div>
        <div className="conteneur hero__cartes">
          <div className="hero-carte hero-carte--blanche">
            <p className="hero-carte__titre">Une communauté qui avance ensemble</p>
            <p className="hero-carte__texte">
              Des adhérents de tous niveaux, encadrés par des coachs passionnés, dans un esprit
              convivial.
            </p>
          </div>
          <div className="hero-carte hero-carte--verte">
            <p className="hero-carte__titre">« L'endroit parfait pour s'entraîner. »</p>
            <p className="hero-carte__texte">Bilan personnalisé offert avec chaque formule.</p>
          </div>
          <div className="hero-carte hero-carte--verte">
            <p className="hero-carte__titre">{infos.adresse}</p>
            <p className="hero-carte__texte">À 10 minutes de Tours, parking sur place.</p>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      {services.length > 0 && (
        <section className="section">
          <div className="conteneur">
            <div className="section-entete">
              <div>
                <span className="surtitre">Nos services</span>
                <h2 className="titre-section">
                  Nous réinventons votre façon de <strong>vivre le sport.</strong>
                </h2>
              </div>
              <Link className="btn btn--vert" href="/services">
                Tous nos services
              </Link>
            </div>
            <div className="grille-cartes">
              {services.map((service) => (
                <CarteVisuelle
                  etiquette={service.accroche}
                  href={`/services/${service.slug}`}
                  image={service.imagePrincipale}
                  key={service.id}
                  titre={service.nom}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- Espaces ---------- */}
      {espaces.length > 0 && (
        <section className="section section--grise">
          <div className="conteneur">
            <div className="section-entete">
              <div>
                <span className="surtitre">Nos espaces</span>
                <h2 className="titre-section">
                  Des espaces pensés pour <strong>chaque pratique.</strong>
                </h2>
              </div>
              <Link className="btn btn--vert" href="/espaces">
                Tous nos espaces
              </Link>
            </div>
            <div className="grille-cartes">
              {espaces.map((espace) => (
                <CarteVisuelle
                  etiquette={espace.accroche}
                  href={`/espaces/${espace.slug}`}
                  image={espace.imagePrincipale}
                  key={espace.id}
                  titre={espace.nom}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- Témoignages ---------- */}
      <Temoignages />

      {/* ---------- Teaser tarifs ---------- */}
      <TarifsTeaser />

      {/* ---------- Bandeau promo / CTA contact ---------- */}
      <BandeauPromoSection />
    </>
  )
}
