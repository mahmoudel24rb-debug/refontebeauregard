import fs from 'node:fs'
const FILE = process.argv[2] || 'src/components/sportix/Contact.tsx'
let lines = fs.readFileSync(FILE, 'utf8').split('\n')

function findClose(open) {
  let depth = 0
  for (let k = open; k < lines.length; k++) {
    const l = lines[k]
    const opens = (l.match(/<div\b/g) || []).length
    const self = (l.match(/<div\b[^>]*\/>/g) || []).length
    const closes = (l.match(/<\/div>/g) || []).length
    depth += opens - self - closes
    if (k > open && depth === 0) return k
  }
  return -1
}
const map = [
  '                        {MENSUEL.map((f) => (',
  '                          <PriceCard key={f.name} {...f} />',
  '                        ))}',
]
let count = 0
while (count < 12) {
  let open = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Tarifs Cards Wrapper')) {
      const c = findClose(i)
      if (c > 0 && !lines.slice(i + 1, c).join('\n').includes('MENSUEL.map')) { open = i; break }
    }
  }
  if (open < 0) break
  const close = findClose(open)
  lines = [...lines.slice(0, open + 1), ...map, ...lines.slice(close)]
  count++
}
let out = lines.join('\n')
if (!out.includes('import { PriceCard }')) {
  out = out.replace(`import './framer.css';`, `import './framer.css';\nimport { PriceCard } from './PriceCard'\nimport { MENSUEL } from './formules'`)
}
fs.writeFileSync(FILE, out)
console.log(`${FILE.split('/').pop()} : ${count} grille(s) pricing -> 5 formules`)
