import fs from 'node:fs'
const DIR = 'src/components/sportix'
// Repointe tous les liens « cours » vers la page fusionnée /services/cours.
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  const o = s
  // 1) sous-menu Header (HTML brut) + cartes espaces -> cours-collectifs fusionné
  s = s.split('href="/espaces/cours-collectifs"').join('href="/services/cours"')
  s = s.split('href={"/espaces/cours-collectifs"}').join('href={"/services/cours"}')
  // 2) footer « Cours collectifs » (href /espaces) -> /services/cours (ciblé par le texte)
  s = s.replace(/href=\{"\/espaces"\}([^>]*)>(\s*)Cours collectifs/g, 'href={"/services/cours"}$1>$2Cours collectifs')
  // 3) footer « Beauregard Cours » (href /services) -> /services/cours
  s = s.replace(/href=\{"\/services"\}([^>]*)>(\s*)Beauregard Cours/g, 'href={"/services/cours"}$1>$2Beauregard Cours')
  if (s !== o) { fs.writeFileSync(p, s); console.log(`${f.padEnd(16)} maj`) }
}
console.log('liens cours repointés')
