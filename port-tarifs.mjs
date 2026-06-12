import fs from 'node:fs'
const FILE = 'src/components/sportix/Tarifs.tsx'
const lines = fs.readFileSync(FILE, 'utf8').split('\n')

const okOpen = (lines[152] || '').includes('Tarifs Cards Wrapper')
const okClose = (lines[456] || '').trim() === '</div>'
if (!okOpen || !okClose) {
  console.error('STRUCTURE INATTENDUE — abort', { okOpen, okClose, l153: lines[152], l457: lines[456] })
  process.exit(1)
}
const cardMap = [
  '                          {MENSUEL.map((f) => (',
  '                            <PriceCard key={f.name} {...f} />',
  '                          ))}',
]
// remplace les 3 cartes (lignes 154..456) par le map ; garde l'ouverture (153) et la fermeture (457+)
const newLines = [...lines.slice(0, 153), ...cardMap, ...lines.slice(456)]
let out = newLines.join('\n')

const DATA = `import { PriceCard } from './PriceCard'

const MENSUEL = [
  { name: 'FORME', price: '49 €', period: '/mois', desc: 'Pour démarrer en douceur.', features: ['1 cours collectif / semaine', 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'GOLD', price: '59 €', period: '/mois', desc: 'Pour progresser à votre rythme.', features: ['2 cours collectifs / semaine', 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'PRESTIGE', price: '69 €', period: '/mois', desc: 'Pour les plus assidus.', features: ['3 cours collectifs / semaine', 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'HYBRID', price: '69 €', period: '/mois', desc: 'HYROX & Cross Training.', features: ["Accès aux cours d'HYROX et Cross Training", 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'VIP', price: '99 €', period: '/mois', desc: "L'accès illimité, sans compromis.", features: ['Accès illimité', 'Accès salle de musculation', 'Bilan forme offert'] },
]
`
out = out.replace(`import './framer.css';`, `import './framer.css';\n${DATA}`)
fs.writeFileSync(FILE, out)
console.log('Tarifs.tsx : 3 cartes -> 5 formules OK')
