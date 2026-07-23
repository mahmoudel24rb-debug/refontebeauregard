/* Peuple la collection `planning` (PROD Neon) depuis planning.ts.
   NON DESTRUCTIF : n'insère QUE si la collection est vide (count === 0).
   Prérequis : le schéma de la collection `planning` doit être poussé en base.
   Usage : npm run payload -- run scripts/seed-planning.mjs
*/
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'
import { PLANNING } from '../src/components/sportix/planning.ts'

async function run() {
  const payload = await getPayload({ config })
  const { totalDocs } = await payload.count({ collection: 'planning' })
  if (totalDocs > 0) {
    console.log(`Planning : déjà peuplé (${totalDocs} créneaux) — ignoré`)
    process.exit(0)
  }
  let n = 0
  for (const jour of PLANNING) {
    let ordre = 0
    for (const salle of jour.salles) {
      for (const c of salle.creneaux) {
        await payload.create({
          collection: 'planning',
          data: { jour: jour.jour, salle: salle.salle, heure: c.heure || undefined, cours: c.cours, ordre: ordre++, actif: true },
        })
        n++
      }
    }
  }
  console.log(`Planning : ${n} créneaux insérés`)
  process.exit(0)
}

await run()
