/* Remplit la base locale avec les données du brief (tarifs sept. 2025, à valider)
   et, si la copie locale du template est présente, quelques photos placeholder
   (à remplacer par les vraies photos du club avant toute mise en ligne).
   Usage : npm run seed */
import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'

import config from './payload.config'

const dirname = path.dirname(fileURLToPath(import.meta.url))
// Copie locale du template Sportix (hors repo) : source d'images placeholder
const dossierTemplate = path.resolve(dirname, '../../sportix-local/assets/framerusercontent.com/images')

async function creerMediaPlaceholder(
  payload: Awaited<ReturnType<typeof getPayload>>,
  alt: string,
): Promise<number | null> {
  if (!fs.existsSync(dossierTemplate)) return null
  const dejaLa = await payload.find({ collection: 'media', where: { alt: { equals: alt } }, limit: 1 })
  if (dejaLa.docs[0]) return dejaLa.docs[0].id
  // une image au hasard parmi les grandes images du template
  const fichiers = fs
    .readdirSync(dossierTemplate)
    .filter((f) => f.endsWith('.jpg') && !f.includes('_q'))
  if (fichiers.length === 0) return null
  const fichier = fichiers[Math.floor(Math.random() * fichiers.length)]
  const media = await payload.create({
    collection: 'media',
    data: { alt },
    filePath: path.join(dossierTemplate, fichier),
  })
  return media.id
}

async function seed() {
  const payload = await getPayload({ config })

  // ---------- Espaces ----------
  const espaces = [
    { nom: 'Cours collectifs', slug: 'cours-collectifs', accroche: 'Yoga, Pilates, École du dos', ordre: 1 },
    { nom: 'Espace fonctionnel', slug: 'fonctionnel', accroche: 'Force et mouvement', ordre: 2 },
    { nom: 'Cross & Cardio', slug: 'cross-cardio', accroche: 'Dépassement de soi', ordre: 3 },
    { nom: 'Kid Fitness', slug: 'kid-fitness', accroche: 'Dès 3 mois', ordre: 4 },
  ]
  for (const espace of espaces) {
    const existe = await payload.find({
      collection: 'espaces',
      where: { slug: { equals: espace.slug } },
      limit: 1,
    })
    if (existe.docs.length === 0) {
      const imagePrincipale = await creerMediaPlaceholder(payload, `espace-${espace.slug}`)
      await payload.create({
        collection: 'espaces',
        data: { ...espace, ...(imagePrincipale ? { imagePrincipale } : {}) },
      })
      payload.logger.info(`Espace créé : ${espace.nom}`)
    }
  }

  // ---------- Services ----------
  const services = [
    { nom: 'Beauregard Coaching', slug: 'coaching', accroche: 'Accompagnement personnalisé', ordre: 1 },
    { nom: 'Beauregard Cours', slug: 'cours', accroche: '≈ 40 cours par semaine', ordre: 2 },
    { nom: 'Location de terrain', slug: 'location-terrain', accroche: 'Pour vos événements sportifs', ordre: 3 },
  ]
  for (const service of services) {
    const existe = await payload.find({
      collection: 'services',
      where: { slug: { equals: service.slug } },
      limit: 1,
    })
    if (existe.docs.length === 0) {
      const imagePrincipale = await creerMediaPlaceholder(payload, `service-${service.slug}`)
      await payload.create({
        collection: 'services',
        data: { ...service, ...(imagePrincipale ? { imagePrincipale } : {}) },
      })
      payload.logger.info(`Service créé : ${service.nom}`)
    }
  }

  // ---------- Formules (réf. sept. 2025, à valider) ----------
  const socle = [{ texte: 'Accès espace musculation' }, { texte: 'Bilan personnalisé offert' }]
  const formules = [
    { nom: 'FORME', type: 'mensuelle', prix: 49, suffixePrix: '/mois', accroche: 'Pour démarrer en toute liberté', avantages: socle, ordre: 1 },
    { nom: 'GOLD', type: 'mensuelle', prix: 59, suffixePrix: '/mois', accroche: "L'équilibre parfait", avantages: socle, ordre: 2, misEnAvant: true },
    { nom: 'PRESTIGE', type: 'mensuelle', prix: 69, suffixePrix: '/mois', accroche: 'Le club sans limites', avantages: socle, ordre: 3 },
    { nom: 'HYBRID', type: 'mensuelle', prix: 69, suffixePrix: '/mois', accroche: 'Le meilleur des deux mondes', avantages: socle, ordre: 4 },
    { nom: 'VIP', type: 'mensuelle', prix: 99, suffixePrix: '/mois', accroche: "L'expérience premium", avantages: socle, ordre: 5 },
    { nom: '3 mois', type: 'courte-duree', prix: 300, suffixePrix: 'les 3 mois', ordre: 6 },
    { nom: '6 mois', type: 'courte-duree', prix: 600, suffixePrix: 'les 6 mois', ordre: 7 },
    { nom: "Ticket à l'unité", type: 'ticket', prix: 20, suffixePrix: '', ordre: 8 },
    { nom: 'Carnet 10 tickets', type: 'ticket', prix: 180, suffixePrix: '', ordre: 9 },
    { nom: 'Carnet 30 tickets', type: 'ticket', prix: 480, suffixePrix: '', ordre: 10 },
  ] as const
  for (const formule of formules) {
    const existe = await payload.find({
      collection: 'formules',
      where: { nom: { equals: formule.nom } },
      limit: 1,
    })
    if (existe.docs.length === 0) {
      await payload.create({ collection: 'formules', data: { ...formule, avantages: [...(('avantages' in formule && formule.avantages) || [])] } })
      payload.logger.info(`Formule créée : ${formule.nom}`)
    }
  }

  // ---------- Témoignages (placeholder, à remplacer par de vrais avis) ----------
  const temoignages = [
    { auteur: 'Marie L.', note: 5, texte: "Un cadre exceptionnel au bord de la Loire. Les coachs sont à l'écoute et le suivi est vraiment personnalisé." },
    { auteur: 'Thomas R.', note: 5, texte: "La meilleure décision de l'année : les cours collectifs sont variés et l'ambiance est familiale." },
    { auteur: 'Sophie D.', note: 5, texte: 'Ma fille adore le Kid Fitness pendant que je fais mon cours de Pilates. Tout est pensé pour les familles.' },
  ]
  for (const temoignage of temoignages) {
    const existe = await payload.find({
      collection: 'temoignages',
      where: { auteur: { equals: temoignage.auteur } },
      limit: 1,
    })
    if (existe.docs.length === 0) {
      await payload.create({ collection: 'temoignages', data: temoignage })
      payload.logger.info(`Témoignage créé : ${temoignage.auteur}`)
    }
  }

  // ---------- Image du hero ----------
  await creerMediaPlaceholder(payload, 'hero-accueil')

  // ---------- Globals ----------
  await payload.updateGlobal({
    slug: 'header',
    data: {
      navigation: [
        { label: 'Accueil', url: '/' },
        { label: 'Nos espaces', url: '/espaces' },
        { label: 'Services', url: '/services' },
        { label: 'Tarifs', url: '/tarifs' },
        { label: 'Contact', url: '/contact' },
      ],
      cta: { label: 'Nous rejoindre', url: '/contact' },
    },
  })

  await payload.updateGlobal({
    slug: 'footer',
    data: {
      baseline: 'Fitness & coaching au cœur de la nature, à Rochecorbon.',
      colonnes: [
        {
          titre: 'Le club',
          liens: [
            { label: 'Nos espaces', url: '/espaces' },
            { label: 'Services', url: '/services' },
            { label: 'Tarifs', url: '/tarifs' },
          ],
        },
        {
          titre: 'Informations',
          liens: [
            { label: 'Contact', url: '/contact' },
            { label: 'Mentions légales', url: '/mentions-legales' },
          ],
        },
      ],
    },
  })

  await payload.updateGlobal({
    slug: 'bandeau-promo',
    data: {
      actif: true,
      titre: 'Offre de lancement',
      texte: 'Inscrivez-vous aujourd’hui et profitez d’une séance de coaching personnalisée offerte.',
      cta: { label: 'Commencer maintenant', url: '/contact' },
    },
  })

  payload.logger.info('Seed terminé ✔')
  process.exit(0)
}

await seed()
