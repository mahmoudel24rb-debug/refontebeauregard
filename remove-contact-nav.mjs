import fs from 'node:fs'
const DIR = 'src/components/sportix'
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  const lines = fs.readFileSync(p, 'utf8').split('\n')
  const i = lines.findIndex((l) => l.includes('id={"undefined-'))
  if (i < 0) { console.log(`${f.padEnd(16)} (rien)`) ; continue }
  // ce conteneur (ex-"All Pages"/Contact) est le dernier enfant de la nav :
  // on retire de son ouverture jusqu'au </div> juste avant </nav>.
  const j = lines.findIndex((l, k) => k > i && l.trim() === '</nav>')
  if (j < 0 || lines[j - 1].trim() !== '</div>') {
    console.log(`${f.padEnd(16)} STRUCTURE INATTENDUE — skip`); continue
  }
  const out = [...lines.slice(0, i), ...lines.slice(j)].join('\n')
  fs.writeFileSync(p, out)
  console.log(`${f.padEnd(16)} item Contact retiré (lignes ${i + 1}..${j})`)
}
