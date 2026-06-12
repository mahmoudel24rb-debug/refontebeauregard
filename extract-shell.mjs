import fs from 'node:fs'
const SRC = 'src/components/sportix/HomePage.tsx'
const lines = fs.readFileSync(SRC, 'utf8').split('\n')

function block(marker) {
  const open = lines.findIndex((l) => l.includes(marker))
  if (open < 0) throw new Error('introuvable: ' + marker)
  let depth = 0
  for (let k = open; k < lines.length; k++) {
    const l = lines[k]
    const o = (l.match(/<div\b/g) || []).length
    const s = (l.match(/<div\b[^>]*\/>/g) || []).length
    const c = (l.match(/<\/div>/g) || []).length
    depth += o - s - c
    if (k > open && depth === 0) return lines.slice(open, k + 1).join('\n')
  }
  throw new Error('close introuvable: ' + marker)
}

const header = block('framer-ugsd3w-container')
const footer = block('framer-70fgct-container')

const wrap = (name, jsx) => `import React from 'react'

// Extrait fidèle du header/footer Sportix porté (HomePage.tsx) pour réutilisation
// sur les nouvelles pages (cours hub + sous-pages). Stylé par framer.css global.
// Burger mobile câblé globalement par MobileNav. NE PAS éditer à la main : régénérer
// via extract-shell.mjs après un re-port.
export default function ${name}() {
  return (
${jsx
  .split('\n')
  .map((l) => '    ' + l)
  .join('\n')}
  )
}
`

fs.writeFileSync('src/components/sportix/Header.tsx', wrap('Header', header))
fs.writeFileSync('src/components/sportix/Footer.tsx', wrap('Footer', footer))
console.log('Header.tsx', header.length, 'octets ; Footer.tsx', footer.length, 'octets')
