import fs from 'node:fs'
const d = 'src/components/sportix'
for (const f of fs.readdirSync(d).filter((x) => x.endsWith('.tsx'))) {
  let s = fs.readFileSync(`${d}/${f}`, 'utf8')
  // 1) retirer l'item de sous-menu nav "Kid Fitness"
  s = s.split('<a href="/espaces/kid-fitness">Kid Fitness</a>').join('')
  // 2) footer : "Yoga & Pilates" -> "Pilates" (evite doublon), puis "Kid Fitness" -> "Yoga"
  s = s.split('Yoga & Pilates').join('Pilates')
  s = s.split('Kid Fitness').join('Yoga')
  fs.writeFileSync(`${d}/${f}`, s)
  const left = (s.match(/Kid Fitness|kid-fitness/g) || []).length
  console.log(`${f.padEnd(16)} reste: ${left}`)
}
