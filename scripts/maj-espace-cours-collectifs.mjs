/* Donne sa vraie fiche a l'espace « Cours Collectifs ».

   Jusqu'ici sa carte du hub /espaces renvoyait directement vers /cours et
   /espaces/cours-collectifs redirigeait. Decision client : l'espace merite sa
   page comme les deux autres.

   NON DESTRUCTIF ET IDEMPOTENT : un seul document cible (slug =
   cours-collectifs), deux champs touches (pageDetail -> true, lien -> vide).
   Le script relit et affiche l'avant / apres, et ne fait rien si la valeur est
   deja la. Aucune suppression, aucun autre champ modifie.

   Usage : npm run payload -- run scripts/maj-espace-cours-collectifs.mjs
*/
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

const SLUG = 'cours-collectifs'

const payload = await getPayload({ config })

const { docs } = await payload.find({
  collection: 'espaces',
  where: { slug: { equals: SLUG } },
  limit: 1,
  pagination: false,
  depth: 0,
})

const doc = docs[0]
if (!doc) {
  console.error(`[espaces] aucun document slug=${SLUG} : rien a faire`)
  process.exit(1)
}

console.log(`[espaces] avant : pageDetail=${doc.pageDetail} lien=${JSON.stringify(doc.lien)}`)

if (doc.pageDetail === true && !doc.lien) {
  console.log('[espaces] deja a jour, aucune ecriture')
  process.exit(0)
}

const maj = await payload.update({
  collection: 'espaces',
  id: doc.id,
  data: { pageDetail: true, lien: '' },
})

console.log(`[espaces] apres : pageDetail=${maj.pageDetail} lien=${JSON.stringify(maj.lien)}`)
console.log('[espaces] la carte du hub pointe desormais vers /espaces/cours-collectifs')
process.exit(0)
