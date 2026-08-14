/* Remplit la base à partir du contenu réel actuel (fichiers de données du front)
   pour éviter toute re-saisie. Usage : npm run seed
   NON DESTRUCTIF : chaque collection n'est peuplée que si elle est VIDE (count === 0),
   pour ne jamais écraser le contenu édité dans l'admin. Idem pour les globals. */
import { getPayload } from 'payload'

import config from './payload.config'
import { COURS } from './components/sportix/cours'
import { ESPACES } from './components/sportix/espaces'
import { MENSUEL, COURTES } from './components/sportix/formules'

const prix = (s: string) => parseInt(s.replace(/[^0-9]/g, ''), 10) || 0

async function seed() {
  const payload = await getPayload({ config })

  const estVide = async (collection: 'espaces' | 'cours' | 'coachs' | 'formules' | 'temoignages') => {
    const { totalDocs } = await payload.count({ collection })
    return totalDocs === 0
  }

  // ---------- Espaces (3 réels) ----------
  if (await estVide('espaces')) {
    for (const [i, e] of ESPACES.entries()) {
      await payload.create({
        collection: 'espaces',
        data: {
          nom: e.name,
          slug: e.slug,
          accroche: e.short,
          description: e.desc,
          image: e.img,
          lien: e.href,
          pageDetail: e.detail,
          ordre: i + 1,
        },
      })
    }
    payload.logger.info(`Espaces : ${ESPACES.length}`)
  } else {
    payload.logger.info('Espaces : déjà peuplés — ignorés')
  }

  // ---------- Cours (11 réels) ----------
  if (await estVide('cours')) {
    for (const [i, c] of COURS.entries()) {
      await payload.create({
        collection: 'cours',
        data: {
          nom: c.name,
          slug: c.slug,
          accroche: c.short,
          description: c.desc,
          image: c.img,
          espace: c.espace,
          ordre: i + 1,
        },
      })
    }
    payload.logger.info(`Cours : ${COURS.length}`)
  } else {
    payload.logger.info('Cours : déjà peuplés — ignorés')
  }

  // ---------- Coachs (3 réels — source : parcbeauregard.com) ----------
  if (await estVide('coachs')) {
    const coachs = [
      {
        nom: 'Matéo Nozal',
        role: 'Hyrox / Cours collectifs fitness',
        bio: "Coach spécialisé Hyrox et cours collectifs fitness, Matéo accompagne les adhérents avec une approche exigeante et bienveillante. Passionné par l'entraînement fonctionnel, il aime pousser chacun à dépasser ses limites tout en respectant son niveau.",
      },
      {
        nom: 'Alexandre Bourdet',
        role: 'Boxe / Cours collectifs fitness',
        bio: "Coach de boxe et cours collectifs fitness, Alexandre transmet sa passion du combat à travers des séances dynamiques et structurées. Toujours à l'écoute, il adapte ses cours pour que débutants comme confirmés progressent à leur rythme.",
      },
      {
        nom: 'Marie Lise',
        role: 'Yoga / Cours collectifs fitness',
        bio: "Coach de yoga et cours collectifs fitness, Marie Lise propose des séances axées sur l'équilibre entre le corps et l'esprit. Son approche douce et attentive en fait une référence pour ceux qui cherchent à se recentrer tout en travaillant leur forme physique.",
      },
    ]
    for (const [i, c] of coachs.entries()) {
      await payload.create({
        collection: 'coachs',
        // photo placeholder — vraies photos à venir (client)
        data: { ...c, photo: `/assets/beauregard/coach-${i + 1}.webp`, ordre: i + 1 },
      })
    }
    payload.logger.info(`Coachs : ${coachs.length}`)
  } else {
    payload.logger.info('Coachs : déjà peuplés — ignorés')
  }

  // ---------- Formules (mensuelles + courtes durées + tickets) ----------
  if (await estVide('formules')) {
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
      await payload.create({ collection: 'formules', data: f })
    }
    payload.logger.info(`Formules : ${formules.length}`)
  } else {
    payload.logger.info('Formules : déjà peuplées — ignorées')
  }

  // ---------- Témoignages (vrais avis Google Maps 5★, repris à l'identique) ----------
  if (await estVide('temoignages')) {
    const temoignages = [
      { auteur: 'Christele Pourrat', note: 5, texte: 'Super bien ! Les coachs sont très pro et sympa, très bonne ambiance !', visible: true },
      { auteur: 'Jemsa Fruchmy', note: 5, texte: "Super club de sport, le personnel est à votre écoute pour vous aider à atteindre vos objectifs : perte de poids, reprise du sport, amélioration des performances…", visible: true },
      { auteur: 'Janelle Lauvray', note: 5, texte: "J'ai découvert ce club lors de l'événement avec Romain Prevedello. J'adore ! Le lieu est magnifique, avec un espace extérieur très agréable et calme. Je recommande !", visible: true },
      { auteur: 'Hervé Maquet', note: 5, texte: "Coachs super sympa et motivant. Je m'abonne.", visible: true },
    ]
    for (const t of temoignages) {
      await payload.create({ collection: 'temoignages', data: t })
    }
    payload.logger.info('Témoignages : ' + temoignages.length + ' (vrais avis Google)')
  } else {
    payload.logger.info('Témoignages : déjà peuplés — ignorés')
  }

  // ---------- Globals : Infos club + Bandeau promo (uniquement s'ils sont vierges) ----------
  const infos = await payload.findGlobal({ slug: 'infos-club' })
  if (!infos?.nom) {
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
    payload.logger.info('Global infos-club : initialisé')
  } else {
    payload.logger.info('Global infos-club : déjà renseigné — ignoré')
  }

  const bandeau = await payload.findGlobal({ slug: 'bandeau-promo' })
  if (!bandeau?.titre) {
    await payload.updateGlobal({
      slug: 'bandeau-promo',
      data: {
        actif: true,
        titre: '1ʳᵉ séance offerte',
        texte: 'Votre première séance de coaching est offerte : venez essayer le Parc Beauregard !',
        cta: { label: 'En profiter', url: '/contact' },
      },
    })
    payload.logger.info('Global bandeau-promo : initialisé')
  } else {
    payload.logger.info('Global bandeau-promo : déjà renseigné — ignoré')
  }

  payload.logger.info('Seed terminé')
  process.exit(0)
}

await seed()
