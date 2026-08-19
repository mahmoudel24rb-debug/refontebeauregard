/* Attribue un horaire PROVISOIRE aux créneaux du planning restés sans heure
   (demande utilisateur du 15/08 : plus de rangée « Horaire à confirmer »,
   tout dans la grille ; Bastien ajuste ou supprime dans l'admin).
   NON DESTRUCTIF : ne touche que les docs dont `heure` est vide. Idempotent.
   Usage : npm run payload -- run scripts/fixe-horaires-provisoires.mjs */
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

// clé : `${jour}|${salle}|${cours}` -> { heure, duree? }
const PROVISOIRES = {
  'Lundi|Salle Cross|Pole Dance': { heure: '18h' },
  'Mercredi|Salle Fitness|Renfo Fit': { heure: '17h30' },
  'Mercredi|Salle Cross|Pole Dance': { heure: '18h' },
  'Mercredi|Bulle|Journée enfants': { heure: '9h', duree: 480 },
}

const payload = await getPayload({ config })
const { docs } = await payload.find({ collection: 'planning', limit: 500 })
let maj = 0
for (const d of docs) {
  if (d.heure) continue
  const cible = PROVISOIRES[`${d.jour}|${d.salle}|${d.cours}`]
  if (!cible) {
    console.log(`- ignoré (sans heure, pas de règle) : ${d.jour} ${d.salle} ${d.cours}`)
    continue
  }
  await payload.update({ collection: 'planning', id: d.id, data: cible })
  console.log(`- MAJ ${d.jour} ${d.salle} ${d.cours} -> ${cible.heure}${cible.duree ? ` (${cible.duree} min)` : ''}`)
  maj++
}
console.log(`Terminé : ${maj} mise(s) à jour sur ${docs.length} créneaux.`)
process.exit(0)
