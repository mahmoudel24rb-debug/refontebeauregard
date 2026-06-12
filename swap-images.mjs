import fs from 'node:fs'
const DIR = 'src/components/sportix'

// Map : base de hash Sportix -> photo Beauregard (.webp dans /assets/beauregard).
// Remplace src ET srcSet (toutes résolutions) sur toutes les pages.
const MAP = {
  AxxZOHJZQfJYLqNoCfdTmXe4IdQ: 'hero.webp', // hero accueil
  UStfeNRfnYKdGEcem4SqWsexo: 'coaching.webp', // teaser Beauregard Coaching
  cLQx5GnwMFcU0Y20UyhLIJLroYw: 'cours.webp', // teaser Beauregard Cours (+ à-propos)
  mAoTVgQO8Czxkujh2Ajl040Ss: 'location.webp', // teaser Location de terrain
  asXBjX6lSqrSzPpN4ys9CGLCRQ: 'events.webp', // bannière Événements
  '83MkgWL0bWkjdeLkeVHDwSeSwAY': 'community.webp', // bannière finale
  '7gYjRUgjlhaXumcRN2YT1Wr70': 'nature.webp', // à-propos image principale
  vehqrBvSbQwv8aUNqjlsr45an4: 'fonctionnel.webp', // à-propos
  MEZU2zY9V9HRlV6SSqEY5jDBzq8: 'cardio-alt.webp', // à-propos
  Aa4fwpgQE0WV8l77HP6jPMubguQ: 'coachs-group.webp', // à-propos
  '6Mol68dteZicHFjIehFVq4UKsY': 'hero-alt.webp', // à-propos
  EnRbsBgnRO5ycOlZVjs4EHrH50: 'events.webp', // vignette vidéo
  '1GA5QtbzpBsMXENehcytyJBBiYE': 'community.webp', // section témoignages
  M75AObMqvO6gtALTSpnf6s0J1I: 'avatar-1.webp', // avatars carrousel hero
  iCHl1N0KZwoUWPJ43Xxpw83Ctsg: 'avatar-2.webp',
  UIAlXXsdhRK4mxf3k1hS6LOGmI: 'avatar-3.webp',
  fmCUEtIRuzpdy4syVv5eURZul4g: 'avatar-4.webp',
  // Tarifs
  vEaXU388Y31oyruvuQ3plm3etM: 'nature.webp',
  // Mentions légales (template blog réutilisé)
  '9zAMe7elCsyzFYNlo2bjRg8Gqu0': 'cardio.webp',
  AivNybUmLdbEaE4eC2hVHYVWkk: 'nature.webp',
  CSAoHoLmF9Dt3Qy9cdT5MyPttc: 'fonctionnel.webp',
  jayutf6QGOdy1YT6p1Fv882Dtaw: 'location.webp',
  n1kVnB6bjxKiORFERqtZhiggos: 'community.webp',
}

let total = 0
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  let n = 0
  for (const [base, webp] of Object.entries(MAP)) {
    const reSrc = new RegExp(`src=\\{"/assets/framerusercontent.com/images/${base}[^"]*"\\}`, 'g')
    const reSet = new RegExp(`srcSet=\\{"[^"]*${base}[^"]*"\\}`, 'g')
    n += (s.match(reSrc) || []).length + (s.match(reSet) || []).length
    s = s.replace(reSrc, `src={"/assets/beauregard/${webp}"}`).replace(reSet, `srcSet={"/assets/beauregard/${webp}"}`)
  }
  if (n) { fs.writeFileSync(p, s); total += n; console.log(`${f.padEnd(16)} ${n}`) }
}
console.log('remplacements:', total)
