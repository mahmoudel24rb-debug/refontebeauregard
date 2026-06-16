import fs from 'node:fs'
const DIR = 'src/components/sportix'

for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.tsx'))) {
  const p = `${DIR}/${f}`
  let s = fs.readFileSync(p, 'utf8')
  const o = s

  // 1) Icônes réseaux sociaux : nom accessible via alt (le lien ne contient que l'icône)
  s = s.split('Iuxn2IKqLv969r5YSTa6R0gGvk.svg"} alt={"Icon"}').join('Iuxn2IKqLv969r5YSTa6R0gGvk.svg"} alt={"Instagram"}')
  s = s.split('sHD949ZXROnvjFnhglMci6beA.svg"} alt={"Icon"}').join('sHD949ZXROnvjFnhglMci6beA.svg"} alt={"Facebook"}')

  // 2) alt génériques restants -> descriptif marque ou vide (décoratif)
  s = s.split('alt={"Logo Company"}').join('alt={"Parc Beauregard"}')
  s = s.split('alt={"Icon"}').join('alt={""}')
  s = s.split('alt={"Hero Banner"}').join('alt={""}')
  s = s.split('alt={"Avatar"}').join('alt={""}')
  s = s.split('alt={"Athlete"}').join('alt={""}')
  s = s.split('alt={null}').join('alt={""}') // alt={null} = pas d'attribut alt (défaut a11y) -> alt vide

  // 3) Burger mobile : rôle + nom accessible
  s = s.split('data-framer-name={"Mobile Menu Icon"}').join('data-framer-name={"Mobile Menu Icon"} role="button" aria-label="Ouvrir le menu"')

  if (s !== o) { fs.writeFileSync(p, s); console.log(`${f.padEnd(16)} maj`) }
}
console.log('a11y : alt + réseaux + burger corrigés')
