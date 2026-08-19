/* Renseigne la duree par defaut (60 min) des creneaux du planning.

   NON DESTRUCTIF ET IDEMPOTENT : ne touche QUE les documents dont `duree` est
   absente (null / undefined). Un creneau deja renseigne (meme a 30 ou 90) n'est
   jamais ecrase, donc le script peut etre rejoue sans effet.
   Aucune suppression, aucun autre champ modifie.

   Usage : npm run payload -- run scripts/fill-duree-planning.mjs
*/
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

const DUREE_DEFAUT = 60

const payload = await getPayload({ config })

const { docs } = await payload.find({
  collection: 'planning',
  limit: 1000,
  pagination: false,
  depth: 0,
})

console.log(`[duree] ${docs.length} creneau(x) en base`)

let majs = 0
let deja = 0
for (const doc of docs) {
  const etiquette = `${doc.jour} ${doc.heure || '(sans heure)'} ${doc.cours} [${doc.salle}]`
  if (doc.duree !== null && doc.duree !== undefined) {
    deja += 1
    console.log(`[duree] inchange (${doc.duree} min) : ${etiquette}`)
    continue
  }
  await payload.update({
    collection: 'planning',
    id: doc.id,
    data: { duree: DUREE_DEFAUT },
  })
  majs += 1
  console.log(`[duree] ${DUREE_DEFAUT} min pose sur : ${etiquette}`)
}

console.log(`[duree] termine : ${majs} mise(s) a jour, ${deja} deja renseigne(s)`)
process.exit(0)
