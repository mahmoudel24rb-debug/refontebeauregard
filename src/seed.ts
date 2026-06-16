/* Remplit la base à partir du contenu réel actuel (fichiers de données du front)
   pour éviter toute re-saisie. Usage : npm run seed
   NB : repartir d'une base vide (supprimer parcbeauregard.db) si le schéma a changé. */
import { getPayload } from 'payload'

import config from './payload.config'
import { COURS } from './components/sportix/cours'
import { ESPACES } from './components/sportix/espaces'
import { MENSUEL, COURTES } from './components/sportix/formules'

const prix = (s: string) => parseInt(s.replace(/[^0-9]/g, ''), 10) || 0

async function seed() {
  const payload = await getPayload({ config })

  // ---------- Purge du contenu dérivé du code (évite les restes d'anciens seeds :
  // ex. espace « Kid Fitness », formules aux anciens noms). On NE purge PAS les
  // témoignages (le client pourra en ajouter de vrais) ni les médias/users. ----------
  for (const collection of ['espaces', 'cours', 'coachs', 'formules', 'services'] as const) {
    await payload.delete({ collection, where: { id: { exists: true } } })
  }
  payload.logger.info('Contenu purgé (espaces, cours, coachs, formules, services)')

  // ---------- Espaces (3 réels) ----------
  for (const [i, e] of ESPACES.entries()) {
    const existe = await payload.find({ collection: 'espaces', where: { slug: { equals: e.slug } }, limit: 1 })
    const data = {
      nom: e.name,
      slug: e.slug,
      accroche: e.short,
      description: e.desc,
      image: e.img,
      lien: e.href,
      pageDetail: e.detail,
      ordre: i + 1,
    }
    if (existe.docs[0]) await payload.update({ collection: 'espaces', id: existe.docs[0].id, data })
    else await payload.create({ collection: 'espaces', data })
  }
  payload.logger.info(`Espaces : ${ESPACES.length}`)

  // ---------- Cours (11 réels) ----------
  for (const [i, c] of COURS.entries()) {
    const existe = await payload.find({ collection: 'cours', where: { slug: { equals: c.slug } }, limit: 1 })
    const data = {
      nom: c.name,
      slug: c.slug,
      accroche: c.short,
      description: c.desc,
      image: c.img,
      espace: c.espace,
      ordre: i + 1,
    }
    if (existe.docs[0]) await payload.update({ collection: 'cours', id: existe.docs[0].id, data })
    else await payload.create({ collection: 'cours', data })
  }
  payload.logger.info(`Cours : ${COURS.length}`)

  // ---------- Coachs (photos actuelles prêtes ; nom/rôle/bio à compléter avec Bastien) ----------
  for (let i = 1; i <= 4; i++) {
    await payload.create({ collection: 'coachs', data: { photo: `/assets/beauregard/coach-${i}.webp`, ordre: i } })
  }
  payload.logger.info('Coachs : 4 (portraits, à nommer)')

  // ---------- Formules (mensuelles + courtes durées + tickets) ----------
  const toFormule = (f: { name: string; price: string; period: string; desc: string; features: string[] }, type: string, ordre: number) => ({
    nom: f.name,
    type,
    prix: prix(f.price),
    suffixePrix: f.period,
    accroche: f.desc,
    avantages: f.features.map((t) => ({ texte: t })),
    misEnAvant: f.name === 'GOLD',
    ordre,
  })
  const formules = [
    ...MENSUEL.map((f, i) => toFormule(f, 'mensuelle', i + 1)),
    ...COURTES.map((f, i) => toFormule(f, /MOIS/i.test(f.name) ? 'courte-duree' : 'ticket', 100 + i)),
  ]
  for (const f of formules) {
    const existe = await payload.find({ collection: 'formules', where: { nom: { equals: f.nom } }, limit: 1 })
    if (existe.docs[0]) await payload.update({ collection: 'formules', id: existe.docs[0].id, data: f })
    else await payload.create({ collection: 'formules', data: f })
  }
  payload.logger.info(`Formules : ${formules.length}`)

  // ---------- Témoignages (vrais avis Google Maps 5★, repris à l'identique) ----------
  // On purge les anciens placeholders puis on insère les avis réels.
  const placeholders = ['Marie L.', 'Thomas R.', 'Sophie D.']
  for (const auteur of placeholders) {
    await payload.delete({ collection: 'temoignages', where: { auteur: { equals: auteur } } })
  }
  const temoignages = [
    { auteur: 'Christele P.', note: 5, texte: 'Super bien ! Les coachs sont très pro et sympa, très bonne ambiance !', visible: true },
    { auteur: 'Jemsa F.', note: 5, texte: "Super club de sport, le personnel est à votre écoute pour vous aider à atteindre vos objectifs : perte de poids, reprise du sport, amélioration des performances…", visible: true },
    { auteur: 'Janelle L.', note: 5, texte: "J'ai découvert ce club lors de l'événement avec Romain Prevedello. J'adore ! Le lieu est magnifique, avec un espace extérieur très agréable et calme. Je recommande !", visible: true },
  ]
  for (const t of temoignages) {
    const existe = await payload.find({ collection: 'temoignages', where: { auteur: { equals: t.auteur } }, limit: 1 })
    if (existe.docs[0]) await payload.update({ collection: 'temoignages', id: existe.docs[0].id, data: t })
    else await payload.create({ collection: 'temoignages', data: t })
  }
  payload.logger.info('Témoignages : ' + temoignages.length + ' (vrais avis Google)')

  // ---------- Globals : Infos club + Bandeau promo (éditables dans l'admin) ----------
  await payload.updateGlobal({
    slug: 'infos-club',
    data: {
      nom: 'Parc Beauregard Fitness & Coaching',
      adresse: '1 quai de la Loire, 37210 Rochecorbon',
      telephone: '02.47.44.41.43',
      email: 'rochecorbon@parcbeauregard.com',
      reseaux: {
        facebook: 'https://www.facebook.com/parcbeauregard',
        instagram: 'https://www.instagram.com/parcbeauregard/',
      },
      horaires: [
        { jours: 'Lundi – Vendredi', heures: '9h00 – 20h00' },
        { jours: 'Samedi', heures: '9h30 – 12h00' },
        { jours: 'Dimanche', heures: 'Fermé' },
      ],
    },
  })
  await payload.updateGlobal({
    slug: 'bandeau-promo',
    data: {
      actif: true,
      titre: 'Offre découverte',
      texte: 'Votre première séance de coaching est offerte — venez essayer le Parc Beauregard !',
      cta: { label: 'Nous rejoindre', url: '/contact' },
    },
  })
  payload.logger.info('Globals : infos-club + bandeau-promo')

  payload.logger.info('Seed terminé ✔')
  process.exit(0)
}

await seed()
