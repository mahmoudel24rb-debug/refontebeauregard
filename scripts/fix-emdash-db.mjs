/* Corrige les tirets cadratins « — » déjà présents en base (PROD Neon).
   NON DESTRUCTIF : ne met à jour QUE les champs contenant un « — », champ par
   champ, avec log de chaque changement. Ne touche à rien d'autre.
   Les demi-cadratins « – » (horaires, tranches d'âge) sont CONSERVÉS.

   Usage : npm run payload -- run scripts/fix-emdash-db.mjs
*/
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

const EM = '—' // —
const hasEm = (v) => typeof v === 'string' && v.includes(EM)
// Texte courant : « — » → « , » ; titres/mentions : « — » → « | »
const toComma = (s) => s.replace(/\s*—\s*/g, ', ').replace(/\s{2,}/g, ' ').trim()
const toPipe = (s) => s.replace(/\s*—\s*/g, ' | ').replace(/\s{2,}/g, ' ').trim()

const changes = []

async function run() {
  const payload = await getPayload({ config })

  // ---- Global footer : mentionsBas → « | »
  try {
    const footer = await payload.findGlobal({ slug: 'footer' })
    if (hasEm(footer?.mentionsBas)) {
      const next = toPipe(footer.mentionsBas)
      await payload.updateGlobal({ slug: 'footer', data: { mentionsBas: next } })
      changes.push(`[footer.mentionsBas] "${footer.mentionsBas}" -> "${next}"`)
    }
  } catch (e) {
    console.warn('footer:', e?.message)
  }

  // ---- Collections : champs texte → « , »
  const targets = {
    cours: ['nom', 'accroche', 'description', 'espace'],
    espaces: ['nom', 'accroche', 'description', 'image', 'lien'],
    formules: ['nom', 'suffixePrix', 'accroche'],
    temoignages: ['auteur', 'texte'],
  }

  for (const [collection, fields] of Object.entries(targets)) {
    const { docs } = await payload.find({ collection, limit: 1000, depth: 0 })
    for (const doc of docs) {
      const data = {}
      for (const f of fields) {
        if (hasEm(doc[f])) {
          const next = toComma(doc[f])
          data[f] = next
          changes.push(`[${collection}#${doc.id}.${f}] "${doc[f]}" -> "${next}"`)
        }
      }
      // avantages[].texte (formules)
      if (collection === 'formules' && Array.isArray(doc.avantages)) {
        let touched = false
        const av = doc.avantages.map((a) => {
          if (hasEm(a?.texte)) {
            const next = toComma(a.texte)
            changes.push(`[formules#${doc.id}.avantages.texte] "${a.texte}" -> "${next}"`)
            touched = true
            return { ...a, texte: next }
          }
          return a
        })
        if (touched) data.avantages = av
      }
      if (Object.keys(data).length > 0) {
        await payload.update({ collection, id: doc.id, data })
      }
    }
  }

  console.log('\n===== fix-emdash-db : ' + changes.length + ' champ(s) corrigé(s) =====')
  for (const c of changes) console.log('  ' + c)
  if (changes.length === 0) console.log('  (aucun « — » trouvé en base)')
  process.exit(0)
}

await run()
