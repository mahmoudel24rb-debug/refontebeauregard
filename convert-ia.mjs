import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const DIR = 'c:/Users/dglco/Documents/refonte parc beauregard/photos beauregard ia'
const OUT = 'public/assets/beauregard'
const files = fs.readdirSync(DIR).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort()

// Mapping par ordre (= ordre de génération = mes keepers). Chaque image IA -> 1 ou
// plusieurs fichiers webp existants à écraser (le site sert alors la nouvelle photo).
const MAP = [
  ['coach-1.webp'], // 11_29 coach intérieur (portrait) — prêt, non câblé
  ['coach-2.webp'], // 11_34 t-shirt noir
  ['coach-3.webp'], // 11_38 t-shirt bleu
  ['coach-4.webp'], // 11_41 sweat gris
  ['fonctionnel.webp', 'renfo.webp'], // 11_45 espace fonctionnel / renfo (CAF, Total Silhouette)
  ['cross.webp', 'boxe.webp', 'cardio.webp'], // 11_49 cross/boxe + espace cross-cardio
  ['nature.webp', 'stretch.webp'], // 11_52 studio cours collectifs (yoga, pilates, mob…)
  ['exterieur.webp'], // 11_55 extérieur piste+bâtiment — prêt, non câblé
  ['location.webp'], // 11_58 terrain multisport
  ['nature-accent.webp'], // 12_00 fleurs — accent, prêt
]

for (let i = 0; i < files.length; i++) {
  const src = path.join(DIR, files[i])
  const targets = MAP[i] || []
  const portrait = (await sharp(src).metadata()).width < (await sharp(src).metadata()).height
  for (const t of targets) {
    const w = portrait ? 900 : 1600
    await sharp(src).rotate().resize(w, null, { withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(OUT, t))
    const { size } = fs.statSync(path.join(OUT, t))
    console.log(`${files[i].slice(15, 24)} -> ${t.padEnd(18)} ${Math.round(size / 1024)}Ko`)
  }
}
console.log('FINI')
