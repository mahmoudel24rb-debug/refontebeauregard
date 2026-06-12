import fs from 'node:fs'
const FILE = 'src/components/sportix/Tarifs.tsx'
let content = fs.readFileSync(FILE, 'utf8')
const lines = content.split('\n')

// Garde-fous : structure attendue (sinon on n'écrit rien)
const okOpen = (lines[168] || '').includes('Tarifs Cards Wrapper')
const okGridClose = (lines[472] || '').trim() === '</div>'
const okSection = (lines[476] || '').trim() === '</section>'
if (!okOpen || !okGridClose || !okSection) {
  console.error('STRUCTURE INATTENDUE — abort', { okOpen, okGridClose, okSection })
  process.exit(1)
}

const cardMap = [
  '                          {MENSUEL.map((f) => (',
  '                            <PriceCard key={f.name} {...f} />',
  '                          ))}',
]

const extra = [
  '      <section style={{ padding: "10px 0 90px" }}>',
  '        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 30px" }}>',
  '          <h2 style={{ textAlign: "center", fontSize: "clamp(28px,3.4vw,44px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Courtes durées</h2>',
  '          <p style={{ textAlign: "center", color: "#6b6b6b", margin: "0 0 40px" }}>Sans engagement — accès illimité.</p>',
  '          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>',
  '            {COURTES.map((f) => (<PriceCard key={f.name} {...f} />))}',
  '          </div>',
  '        </div>',
  '      </section>',
  '      <section style={{ padding: "0 0 110px" }}>',
  '        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 30px" }}>',
  '          <h2 style={{ textAlign: "center", fontSize: "clamp(28px,3.4vw,44px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Tickets</h2>',
  '          <p style={{ textAlign: "center", color: "#6b6b6b", margin: "0 0 40px" }}>À la séance, sans abonnement.</p>',
  '          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>',
  '            {TICKETS.map((f) => (<PriceCard key={f.name} {...f} />))}',
  '          </div>',
  '        </div>',
  '      </section>',
]

const newLines = [
  ...lines.slice(0, 169), // jusqu'à l'ouverture de la grille incluse
  ...cardMap,
  ...lines.slice(472, 477), // fermeture grille + wrappers + </section>
  ...extra,
  ...lines.slice(477),
]
let out = newLines.join('\n')

// import + données (niveau module, avant export default)
const DATA = `import { PriceCard } from './PriceCard'

const MENSUEL = [
  { name: 'FORME', price: '49 €', period: '/mois', desc: 'Pour démarrer en douceur.', features: ['1 cours collectif / semaine', 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'GOLD', price: '59 €', period: '/mois', desc: 'Pour progresser à votre rythme.', features: ['2 cours collectifs / semaine', 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'PRESTIGE', price: '69 €', period: '/mois', desc: 'Pour les plus assidus.', features: ['3 cours collectifs / semaine', 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'HYBRID', price: '69 €', period: '/mois', desc: 'HYROX & Cross Training.', features: ["Accès aux cours d'HYROX et Cross Training", 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'VIP', price: '99 €', period: '/mois', desc: "L'accès illimité, sans compromis.", features: ['Accès illimité', 'Accès salle de musculation', 'Bilan forme offert'] },
]
const COURTES = [
  { name: '3 MOIS', price: '300 €', period: '/ 3 mois', desc: 'Accès illimité, sans engagement.', features: ['Accès illimité', 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: '6 MOIS', price: '600 €', period: '/ 6 mois', desc: 'Accès illimité sur 6 mois.', features: ['Accès illimité', 'Accès salle de musculation', 'Bilan forme offert'] },
]
const TICKETS = [
  { name: "À L'UNITÉ", price: '20 €', period: '/ séance', desc: 'La séance à l’unité.', features: ['Accès salle de musculation', 'Sans engagement'], cta: 'Réserver' },
  { name: '10 TICKETS', price: '180 €', period: '/ carnet', desc: '18 € la séance.', features: ['10 séances', 'Valable sur tous les cours'], cta: 'Réserver' },
  { name: '30 TICKETS', price: '480 €', period: '/ carnet', desc: '16 € la séance.', features: ['30 séances', 'Le meilleur tarif'], cta: 'Réserver' },
]
`
out = out.replace(`import './framer.css';`, `import './framer.css';\n${DATA}`)

fs.writeFileSync(FILE, out)
console.log('Tarifs.tsx : grille -> 5 formules + sections courtes durées & tickets')
