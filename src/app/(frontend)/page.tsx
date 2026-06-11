import Link from 'next/link'
import React from 'react'

import { CarteVisuelle } from '@/components/CarteVisuelle'
import { TarifsTeaser } from '@/components/TarifsTeaser'
import { Temoignages } from '@/components/Temoignages'
import { getBandeauPromo, getEspaces, getPayloadClient, getServices } from '@/lib/data'

async function getMediaParAlt(alt: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'media',
    where: { alt: { equals: alt } },
    limit: 1,
  })
  return docs[0] ?? null
}

export default async function Accueil() {
  const [espaces, services, bandeau, imageHero] = await Promise.all([
    getEspaces(),
    getServices(),
    getBandeauPromo(),
    getMediaParAlt('hero-accueil'),
  ])

  const couleursAvatars = ['#376131', '#1c3917', '#7aa371', '#404040']

  return (
    <>
      {/* ---------- Hero plein écran ---------- */}
      <section className="hero">
        {imageHero?.url && <img alt="" className="hero__fond" src={imageHero.url} />}
        <div className="hero__voile" />
        <div className="conteneur hero__contenu">
          <h1 className="hero__titre">
            Le meilleur du <strong>sport &amp; de la nature.</strong>
          </h1>
          <p className="hero__texte">
            Parc Beauregard est votre destination fitness, bien-être et coaching en bord de Loire,
            à Rochecorbon.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--blanc" href="/services">
              Nos cours
            </Link>
            <Link className="btn btn--contour" href="/contact">
              Devenir membre
            </Link>
          </div>
        </div>
        <div className="conteneur hero__cartes">
          <div className="hero-carte hero-carte--blanche">
            <p className="hero-carte__texte" style={{ color: 'var(--gris-900)' }}>
              Rejoignez une communauté d&apos;adhérents, de sportifs et de passionnés qui se
              dépassent chaque jour à nos côtés.
            </p>
            <div className="hero-carte__pied">
              <div aria-hidden className="avatars">
                {couleursAvatars.map((couleur, i) => (
                  <span key={i} style={{ background: couleur }}>
                    {'PBFC'[i]}
                  </span>
                ))}
              </div>
              <div className="hero-carte__stat">
                <strong>1200+</strong>
                <small>adhérents actifs</small>
              </div>
            </div>
          </div>
          <div className="hero-carte hero-carte--verte">
            <p className="hero-carte__titre">« L&apos;endroit parfait pour s&apos;entraîner et se retrouver ! »</p>
            <p className="hero-carte__texte">Marie, adhérente depuis 2023</p>
          </div>
          <div className="hero-carte hero-carte--verte hero-carte--video">
            <p className="hero-carte__titre">Découvrez le club en vidéo.</p>
            <div className="hero-carte__pied">
              <span aria-hidden className="hero-carte__play">
                ▶
              </span>
              <p className="hero-carte__texte">2 min pour visiter le Parc Beauregard</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Ce que nous faisons (services) ---------- */}
      {services.length > 0 && (
        <section className="section">
          <div className="conteneur">
            <div className="section-entete">
              <div>
                <span className="surtitre">Ce que nous faisons</span>
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

      {/* ---------- À propos + badges ronds ---------- */}
      <section className="section">
        <div className="conteneur">
          <div className="section-entete section-entete--centree" style={{ marginBottom: 0 }}>
            <div>
              <span className="surtitre">À propos</span>
              <h2 className="titre-section">
                La destination ultime pour le <strong>sport &amp; le bien-être.</strong>
              </h2>
              <p className="section-sous-titre">
                Bien plus qu&apos;une salle de sport : une communauté construite autour du
                mouvement, de la motivation et de l&apos;excellence, au cœur de la nature.
              </p>
            </div>
          </div>
          <div className="badges-rangee">
            {[
              ['🏆', 'Excellence sportive'],
              ['🤝', 'Communauté & entraide'],
              ['♿', 'Accessible à tous'],
              ['📈', 'Progression continue'],
              ['🌿', 'Bien-être & nature'],
            ].map(([icone, label], i, tous) => (
              <React.Fragment key={label}>
                <div className="badge-rond">
                  <span aria-hidden className="badge-rond__cercle">
                    {icone}
                  </span>
                  <span className="badge-rond__label">{label}</span>
                </div>
                {i < tous.length - 1 && (
                  <span aria-hidden className="badges-rangee__plus">
                    +
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <Link className="btn btn--vert" href="/contact">
              Nous découvrir
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Nos valeurs (liste + image) ---------- */}
      <section className="section">
        <div className="conteneur valeurs">
          <div>
            <span className="surtitre">Nos valeurs</span>
            <h2 className="titre-section">
              Une communauté portée par la <strong>passion, la performance et le progrès.</strong>
            </h2>
            <div className="valeurs__liste">
              {[
                ['🥇', 'Excellence', 'Des coachs diplômés et un accompagnement exigeant.'],
                ['🤝', 'Communauté', 'Un esprit familial où chacun trouve sa place.'],
                ['⚡', 'Motivation', 'Des programmes qui donnent envie de revenir.'],
                ['🌿', 'Bien-être & équilibre', 'Le sport dans un cadre naturel unique en bord de Loire.'],
              ].map(([icone, titre, texte]) => (
                <div className="valeurs__item" key={titre}>
                  <span aria-hidden className="valeurs__icone">
                    {icone}
                  </span>
                  <div>
                    <h3>{titre}</h3>
                    <p>{texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="valeurs__image">
            {espaces[0]?.imagePrincipale &&
              typeof espaces[0].imagePrincipale === 'object' &&
              espaces[0].imagePrincipale.url && (
                <img alt={espaces[0].imagePrincipale.alt ?? ''} src={espaces[0].imagePrincipale.url} />
              )}
          </div>
        </div>
      </section>

      {/* ---------- Nos espaces ---------- */}
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

      {/* ---------- Bandeau sombre événements ---------- */}
      <section className="section">
        <div className="conteneur">
          <div className="bandeau-sombre">
            <span className="surtitre">Événements</span>
            <h2>Les prochains rendez-vous du club</h2>
            <p>
              Challenges, séances découverte, stages enfants : toute l&apos;année, le Parc
              Beauregard vit au rythme de sa communauté.
            </p>
            <Link className="btn btn--blanc" href="/contact">
              Être informé des événements
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Tarifs ---------- */}
      <TarifsTeaser />

      {/* ---------- Offre limitée ---------- */}
      {bandeau.actif && bandeau.titre && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="conteneur">
            <div className="promo">
              <div className="promo__contenu">
                <span aria-hidden className="promo__badge">
                  🔥
                </span>
                <h2 className="promo__titre">{bandeau.titre}</h2>
                {bandeau.texte && <p className="promo__texte">{bandeau.texte}</p>}
                <Link className="btn btn--blanc" href={bandeau.cta?.url ?? '/contact'}>
                  {bandeau.cta?.label ?? 'En profiter'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
