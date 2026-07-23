/* Peuple la collection `faq` (PROD Neon) avec des Q/R rédigées à partir des
   données réelles du repo (formules, coaching, horaires, planning, location,
   accès). NON DESTRUCTIF : n'insère QUE si la collection est vide.
   Prérequis : schéma `faq` poussé en base.
   Usage : npm run payload -- run scripts/seed-faq.mjs
*/
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

const FAQ = [
  {
    question: 'Où se trouve le Parc Beauregard ?',
    reponse: "Le club est situé au 1 quai de la Loire, 37210 Rochecorbon, en pleine nature au bord de la Loire. Vous pouvez nous joindre au 02.47.44.41.43.",
  },
  {
    question: "Quels sont les horaires d'ouverture ?",
    reponse: "Le club est ouvert du lundi au vendredi de 9h00 à 20h00 et le samedi de 9h30 à 12h00. Il est fermé le dimanche.",
  },
  {
    question: 'La première séance de coaching est-elle vraiment offerte ?',
    reponse: "Oui, votre première séance de coaching est offerte. Appelez-nous pour la réserver ou passez directement sur place pour visiter les lieux, rencontrer nos coachs et prendre rendez-vous.",
  },
  {
    question: "Quelles formules d'abonnement proposez-vous ?",
    reponse: "Nous proposons des abonnements mensuels de FORME (49 €/mois) à VIP (99 €/mois), la formule HYBRID (59 €/mois, accès illimité aux cours Hyrox, Cross Training et Boxe), des formats courte durée (3 mois à 300 €, 6 mois à 600 €) ainsi que des tickets à la séance (20 €) et des carnets. Le détail est sur la page Tarifs.",
  },
  {
    question: 'Faut-il un abonnement pour venir à un seul cours ?',
    reponse: "Non. Vous pouvez venir à la séance avec un ticket à 20 €, sans engagement, ou choisir un carnet de séances si vous venez plus régulièrement.",
  },
  {
    question: 'Quels cours collectifs proposez-vous ?',
    reponse: "Yoga, Pilates, Boxe, École du dos, Renfo Fit, Cross Training, Total Silhouette, HYROX et Mob & Stretch, répartis sur la semaine en Salle Fitness, Salle Cross et dans la Bulle. Consultez le planning pour les horaires de la rentrée de septembre 2026.",
  },
  {
    question: 'Proposez-vous du coaching personnalisé ?',
    reponse: "Oui. Nos coachs diplômés vous accompagnent avec un programme personnalisé, élaboré à partir d'un entretien individuel et adapté à vos objectifs, vos contraintes et votre niveau. La première séance est offerte.",
  },
  {
    question: 'Peut-on louer un terrain de football ?',
    reponse: "Oui. Le Parc Beauregard met à disposition des terrains de football en pelouse synthétique, en plein air au bord de la Loire, pour jouer entre amis, en famille ou entre collègues.",
  },
]

async function run() {
  const payload = await getPayload({ config })
  const { totalDocs } = await payload.count({ collection: 'faq' })
  if (totalDocs > 0) {
    console.log(`FAQ : déjà peuplée (${totalDocs} questions) — ignorée`)
    process.exit(0)
  }
  let n = 0
  for (const [i, qr] of FAQ.entries()) {
    await payload.create({ collection: 'faq', data: { ...qr, ordre: i + 1 } })
    n++
  }
  console.log(`FAQ : ${n} questions insérées`)
  process.exit(0)
}

await run()
