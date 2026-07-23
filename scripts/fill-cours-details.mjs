/* Remplit les champs benefices / pourQui de la collection `cours` (PROD Neon)
   à partir des textes par défaut de cours.ts, UNIQUEMENT si le champ est vide.
   NON DESTRUCTIF : n'écrase jamais un contenu déjà saisi. Log de chaque écriture.

   Prérequis : le schéma (colonnes benefices, pour_qui) doit être poussé en base.
   Usage : npm run payload -- run scripts/fill-cours-details.mjs
*/
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'
import { coursBySlug } from '../src/components/sportix/cours.ts'

const changes = []

async function run() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'cours', limit: 1000, depth: 0 })
  for (const doc of docs) {
    const src = coursBySlug(doc.slug)
    if (!src) continue
    const data = {}
    if (!(doc.benefices && String(doc.benefices).trim())) {
      data.benefices = src.benefices.join('\n')
    }
    if (!(doc.pourQui && String(doc.pourQui).trim())) {
      data.pourQui = src.pourQui
    }
    if (Object.keys(data).length > 0) {
      await payload.update({ collection: 'cours', id: doc.id, data })
      changes.push(`cours#${doc.id} (${doc.slug}) <- ${Object.keys(data).join(', ')}`)
    }
  }
  console.log('\n===== fill-cours-details : ' + changes.length + ' fiche(s) complétée(s) =====')
  for (const c of changes) console.log('  ' + c)
  if (changes.length === 0) console.log('  (rien à compléter, champs déjà renseignés)')
  process.exit(0)
}

await run()
