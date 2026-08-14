/* Aligne la collection `temoignages` sur les avis Google reellement affiches
   sur la home (parite de donnees : la collection n'est PAS consommee par le
   front, elle sert de reference cote admin).
   NON DESTRUCTIF : ne met a jour un document que si son auteur correspond
   encore au nom tronque, et ne cree Herve Maquet que s'il est absent.
   Aucune suppression, aucun autre champ touche.
   Usage : npm run payload -- run scripts/maj-temoignages-reels.mjs
*/
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

// nom tronque encore en base -> nom complet de la fiche Google
const RENOMMAGES = [
  { court: 'Christele P.', complet: 'Christele Pourrat' },
  { court: 'Jemsa F.', complet: 'Jemsa Fruchmy' },
  { court: 'Janelle L.', complet: 'Janelle Lauvray' },
]

const NOUVEAU = {
  auteur: 'Hervé Maquet',
  texte: "Coachs super sympa et motivant. Je m'abonne.",
  note: 5,
  visible: true,
}

const payload = await getPayload({ config })

const parAuteur = async (auteur) => {
  const { docs } = await payload.find({
    collection: 'temoignages',
    where: { auteur: { equals: auteur } },
    limit: 1,
    pagination: false,
  })
  return docs[0]
}

let majs = 0
for (const { court, complet } of RENOMMAGES) {
  if (await parAuteur(complet)) {
    console.log(`= deja a jour : ${complet}`)
    continue
  }
  const doc = await parAuteur(court)
  if (!doc) {
    console.log(`! introuvable, rien fait : « ${court} » / « ${complet} »`)
    continue
  }
  await payload.update({
    collection: 'temoignages',
    id: doc.id,
    data: { auteur: complet },
  })
  majs += 1
  console.log(`> auteur mis a jour : « ${court} » -> « ${complet} » (id ${doc.id})`)
}

let creations = 0
const existant = await parAuteur(NOUVEAU.auteur)
if (existant) {
  console.log(`= deja present, rien fait : ${NOUVEAU.auteur} (id ${existant.id})`)
} else {
  const cree = await payload.create({ collection: 'temoignages', data: NOUVEAU })
  creations += 1
  console.log(`+ cree : ${NOUVEAU.auteur} (id ${cree.id})`)
}

const { docs } = await payload.find({
  collection: 'temoignages',
  limit: 100,
  pagination: false,
  sort: 'auteur',
})
console.log(`\n${majs} mise(s) a jour, ${creations} creation(s).`)
console.log(`Collection temoignages (${docs.length} doc(s)) :`)
for (const d of docs) console.log(`  - ${d.auteur} | note ${d.note} | visible ${d.visible}`)

process.exit(0)
