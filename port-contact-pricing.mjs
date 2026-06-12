import fs from 'node:fs'
const FILE = 'src/components/sportix/Contact.tsx'
const lines = fs.readFileSync(FILE, 'utf8').split('\n')

const open = lines.findIndex((l) => l.includes('Tarifs Cards Wrapper'))
if (open < 0) { console.error('grille introuvable'); process.exit(1) }
// fermeture de la grille par comptage de profondeur de <div>
let depth = 0, close = -1
for (let k = open; k < lines.length; k++) {
  const l = lines[k]
  const opens = (l.match(/<div\b/g) || []).length
  const self = (l.match(/<div\b[^>]*\/>/g) || []).length
  const closes = (l.match(/<\/div>/g) || []).length
  depth += opens - self - closes
  if (k > open && depth === 0) { close = k; break }
}
if (close < 0) { console.error('fermeture grille introuvable'); process.exit(1) }
console.log(`grille: ${open + 1}..${close + 1}`)

const map = [
  '                        {MENSUEL.map((f) => (',
  '                          <PriceCard key={f.name} {...f} />',
  '                        ))}',
]
// remplace le contenu entre l'ouverture (exclus) et la fermeture (exclus)
const newLines = [...lines.slice(0, open + 1), ...map, ...lines.slice(close)]
let out = newLines.join('\n')
out = out.replace(`import './framer.css';`, `import './framer.css';\nimport { PriceCard } from './PriceCard'\nimport { MENSUEL } from './formules'`)
fs.writeFileSync(FILE, out)
console.log('Contact.tsx : section tarifs -> 5 formules')
