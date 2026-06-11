import fs from 'node:fs'
const DIR = 'src/components/sportix'
// Champs de formulaire + libellés génériques (sûrs : ne matchent que si présents)
const PAIRS = [
  ['First name', 'Prénom'],
  ['Last name', 'Nom'],
  ['Your email', 'Votre email'],
  ['Your message', 'Votre message'],
  ['Send message', 'Envoyer le message'],
  ['Submit', 'Envoyer'],
  ['Phone number', 'Téléphone'],
]
PAIRS.sort((a, b) => b[0].length - a[0].length)
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  let n = 0
  for (const [en, fr] of PAIRS) {
    const parts = s.split(en)
    if (parts.length > 1) { n += parts.length - 1; s = parts.join(fr) }
  }
  if (n) { fs.writeFileSync(p, s); console.log(`${f.padEnd(16)} ${n}`) }
}
