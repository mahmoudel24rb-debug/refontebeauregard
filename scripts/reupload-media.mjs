/* Re-televerse les fichiers media dont l'URL ne repond plus.

   Pourquoi : les medias ont ete seedes sur le disque de Vercel, qui est
   ephemere. Les fichiers ont donc disparu au deploiement suivant et les images
   d'article sont cassees en prod, alors que les documents `media` existent
   toujours en base. Le plugin @payloadcms/storage-vercel-blob est desormais
   actif des que BLOB_READ_WRITE_TOKEN est present : re-televerser le fichier
   suffit a le poser sur le Blob store et a corriger l'URL du document.

   PREREQUIS : BLOB_READ_WRITE_TOKEN dans l'environnement (cree le store Vercel
   dans Storage > Create, puis connecte-le au projet ; copie le token dans .env
   pour un lancement en local). Sans lui le script s'arrete sans rien ecrire :
   il re-televerserait sur le disque local, ce qui ne reparerait rien.

   NON DESTRUCTIF ET IDEMPOTENT : aucune suppression, aucune creation. Pour
   chaque document media, le fichier est teste sur le site de production ; s'il
   repond, on ne touche a rien. Sinon on re-envoie le meme nom de fichier depuis
   public/assets/beauregard/, quand une source de meme nom y existe.

   Usage :
     BLOB_READ_WRITE_TOKEN=... npm run payload -- run scripts/reupload-media.mjs
     (optionnel : SITE_URL=https://... pour tester une autre origine)
*/
import fs from 'node:fs'
import path from 'node:path'
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

const SITE = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://www.parcbeauregard.com'
const SOURCES = path.resolve('public/assets/beauregard')

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error('[media] BLOB_READ_WRITE_TOKEN absent : arret avant toute ecriture.')
  console.error('[media] Cree le Blob store Vercel, connecte-le au projet, puis relance.')
  process.exit(1)
}

const repond = async (url) => {
  const absolu = url.startsWith('http') ? url : SITE.replace(/\/$/, '') + url
  try {
    const r = await fetch(absolu, { method: 'HEAD', redirect: 'follow' })
    return r.ok
  } catch {
    return false
  }
}

const payload = await getPayload({ config })

const { docs } = await payload.find({
  collection: 'media',
  limit: 500,
  pagination: false,
  depth: 0,
})

console.log(`[media] ${docs.length} document(s) a verifier (origine testee : ${SITE})`)

let repares = 0
let intacts = 0
let sansSource = 0

for (const doc of docs) {
  const etiquette = `#${doc.id} ${doc.filename}`
  if (!doc.url) {
    console.log(`[media] ${etiquette} : pas d'URL, ignore`)
    continue
  }
  if (await repond(doc.url)) {
    intacts += 1
    console.log(`[media] ${etiquette} : fichier en ligne, inchange`)
    continue
  }
  const source = path.join(SOURCES, doc.filename)
  if (!fs.existsSync(source)) {
    sansSource += 1
    console.log(`[media] ${etiquette} : MANQUANT en ligne et aucune source locale (${source})`)
    continue
  }
  const maj = await payload.update({
    collection: 'media',
    id: doc.id,
    data: {},
    filePath: source,
  })
  repares += 1
  console.log(`[media] ${etiquette} : re-televerse -> ${maj.url}`)
}

console.log(`[media] termine : ${repares} repare(s), ${intacts} intact(s), ${sansSource} sans source`)
process.exit(0)
