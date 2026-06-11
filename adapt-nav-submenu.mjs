import fs from 'node:fs'
import path from 'node:path'

const DIR = 'src/components/sportix'

// Sous-menus à injecter dans les liens nav "Nos espaces" (/espaces) et "Services" (/services).
const SUBMENUS = {
  '/espaces': [
    ['Cours collectifs', '/espaces/cours-collectifs'],
    ['Entraînement fonctionnel', '/espaces/fonctionnel'],
    ['Cross / Cardio', '/espaces/cross-cardio'],
    ['Kid Fitness', '/espaces/kid-fitness'],
  ],
  '/services': [
    ['Beauregard Coaching', '/services/coaching'],
    ['Beauregard Cours', '/services/cours'],
    ['Location de terrain', '/services/location-terrain'],
  ],
}
const LABEL = { '/espaces': 'Nos espaces', '/services': 'Services' }

const menuJsx = (href) =>
  `<div data-bg-submenu="true">` +
  SUBMENUS[href].map(([t, u]) => `<a href="${u}">${t}</a>`).join('') +
  `</div>`

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.tsx'))
const report = []
for (const f of files) {
  const p = path.join(DIR, f)
  let s = fs.readFileSync(p, 'utf8')
  let n = 0
  for (const href of Object.keys(SUBMENUS)) {
    // cible l'ANCRE nav (href + libellé exact) puis insère le sous-menu entre </p> et </div>
    const re = new RegExp(
      `(href=\\{"${href}"\\}>\\s*${LABEL[href]}\\s*</a>\\s*</p>)(\\s*</div>)`,
      'g',
    )
    s = s.replace(re, (m, a, b) => {
      n++
      return a + menuJsx(href) + b
    })
  }
  if (n) fs.writeFileSync(p, s)
  report.push(`${f.padEnd(16)} sous-menus:${n}`)
}
console.log(report.join('\n'))
