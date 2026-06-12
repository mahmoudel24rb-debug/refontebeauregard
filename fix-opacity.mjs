import fs from 'node:fs'
const DIR = 'src/components/sportix'
// Le port SSR conserve les états INITIAUX des animations d'apparition Framer
// (opacity:0, révélé au scroll par le JS Framer non porté) -> ces blocs restent
// invisibles. On neutralise opacity:"0" -> "1". Les transform translate(-50%)
// sont des centrages légitimes : on n'y touche pas.
let total = 0
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  const n = (s.match(/opacity: "0"/g) || []).length
  if (n) {
    s = s.split('opacity: "0"').join('opacity: "1"')
    fs.writeFileSync(p, s)
    total += n
    console.log(`${f.padEnd(16)} ${n}`)
  }
}
console.log(`Total opacity:0 -> 1 : ${total}`)
