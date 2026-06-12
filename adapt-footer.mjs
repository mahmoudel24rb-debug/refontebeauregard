import fs from 'node:fs'
const DIR = 'src/components/sportix'
const MAPS = 'href={"https://www.google.com/maps?q=1+quai+de+la+Loire,+37210+Rochecorbon"}'
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  const o = s
  // Footer : retrait du crédit template "Designed by fourtwelve"
  s = s.split(' Designed by').join('')
  s = s.replace(/href=\{"https:\/\/fourtwelve\.co\/"\}/g, 'href={"/"}')
  s = s.split('fourtwelve.').join('').split('fourtwelve').join('')
  // Contact : adresse / téléphone / lien maps Londres -> Rochecorbon + heading FR
  s = s.replace(/href=\{"https:\/\/www\.google\.com\/maps\/place\/14\+Tottenham[^"]*"\}/g, MAPS)
  s = s.split('14 Tottenham Road, London, England').join('1 quai de la Loire, 37210 Rochecorbon')
  s = s.split('tel:+1 212 425 8617').join('tel:+33247444143')
  s = s.split('+1 212 425 8617').join('02.47.44.41.43')
  s = s.split('Send us a message').join('Envoyez-nous un message')
  if (s !== o) { fs.writeFileSync(p, s); console.log(`${f.padEnd(16)} maj`) }
}
