import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = 'c:/Users/dglco/Documents/refonte parc beauregard/PHOTOS'
const OUT = 'public/assets/beauregard'
fs.mkdirSync(OUT, { recursive: true })

// [chemin relatif depuis PHOTOS, nom de sortie, largeur, carré?]
const JOBS = [
  ['PHOTOS/2022 - Weekend fitness Rochecorbon/_DSC4941.jpg', 'hero.webp', 1920, false],
  ['PHOTOS/2022 - Weekend fitness Rochecorbon/_DSC4945.jpg', 'hero-alt.webp', 1920, false],
  ['PHOTOS/2022 - Weekend fitness Rochecorbon/_DSC4792.jpg', 'community.webp', 1400, false],
  ['PHOTOS/2022 - Weekend fitness Rochecorbon/_DSC4800.jpg', 'events.webp', 1600, false],
  ['PHOTOS/COACHS/DSC02458.jpg', 'coaching.webp', 1200, false],
  ['PHOTOS/COACHS/_DSC9939.jpg', 'coachs-group.webp', 1500, false],
  ['PHOTOS/COURS/BOXE/_DSC0007.jpg', 'cours.webp', 1200, false],
  ['PHOTOS/COURS/BOXE/_DSC9960.jpg', 'fonctionnel.webp', 1200, false],
  ['PHOTOS/city stade/image00009.jpeg', 'location.webp', 1500, false],
  ['Images/IMG_7390.JPG', 'cardio.webp', 1200, false],
  ['Images/IMG_7583.JPG', 'nature.webp', 1500, false],
  ['PHOTOS/Equipe/DSC01802.JPG', 'avatar-1.webp', 256, true],
  ['PHOTOS/Equipe/DSC01804.JPG', 'avatar-2.webp', 256, true],
  ['PHOTOS/Equipe/DSC01793.JPG', 'avatar-3.webp', 256, true],
  ['PHOTOS/Equipe/DSC01798.JPG', 'avatar-4.webp', 256, true],
]

for (const [rel, out, w, square] of JOBS) {
  const src = path.join(ROOT, rel)
  if (!fs.existsSync(src)) { console.log('MANQUANT', rel); continue }
  const img = sharp(src).rotate()
  const resized = square ? img.resize(w, w, { fit: 'cover' }) : img.resize(w, null, { withoutEnlargement: true })
  await resized.webp({ quality: 80 }).toFile(path.join(OUT, out))
  const { size } = fs.statSync(path.join(OUT, out))
  console.log(`${out.padEnd(20)} ${(size / 1024).toFixed(0)} Ko`)
}
console.log('FINI')
