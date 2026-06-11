import fs from 'node:fs'
import path from 'node:path'

const DIR = 'src/components/sportix'
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.tsx'))

// (A) Libellés de la nav HEADER, ciblés par data-framer-name="Navigation Link" (non hashé),
//     keyés sur le TEXTE du libellé template (stable quel que soit le hash de page).
const BY_LABEL = {
  'Home': ['/', 'Accueil'],
  'About Us': ['/espaces', 'Nos espaces'],
  'Programs &amp; Classes': ['/services', 'Services'],
  'Events': ['/tarifs', 'Tarifs'],
}
const navRe =
  /(data-framer-name=\{"Navigation Link"\}[\s\S]*?href=\{")([^"]*)("\}>\s*)([\s\S]*?)(\s*<\/a>)/g

// (B) Remap GLOBAL des hrefs restants (./ ET ../) → routes Beauregard.
const HREF_REGEX = [
  [/href=\{"\.\.?\/classes\/[^"]*"\}/g, 'href={"/services"}'],
  [/href=\{"\.\.?\/facilities\/[^"]*"\}/g, 'href={"/espaces"}'],
]
const EXACT = {
  './contact-us': '/contact', '../contact-us': '/contact',
  './pricing': '/tarifs', '../pricing': '/tarifs',
  './about-us': '/espaces', '../about-us': '/espaces',
  './our-mission': '/espaces', '../our-mission': '/espaces',
  './our-team': '/espaces', '../our-team': '/espaces',
  './faq': '/contact', '../faq': '/contact',
  './events': '/tarifs', '../events': '/tarifs',
  './classes': '/services', '../classes': '/services',
  './facilities': '/espaces', '../facilities': '/espaces',
  './': '/', '../': '/',
}
// (C) Libellés ponctuels uniques au header (dropdown + CTA)
const LABELTEXT = {
  'All Pages': 'Contact',
  'Join us today': 'Nous rejoindre',
}

const report = []
for (const f of files) {
  const p = path.join(DIR, f)
  let s = fs.readFileSync(p, 'utf8')
  let nav = 0
  s = s.replace(navRe, (m, a, href, b, label, c) => {
    const t = BY_LABEL[label.trim()]
    if (!t) return m
    nav++
    return `${a}${t[0]}${b}${t[1]}${c}`
  })
  let hrefs = 0
  for (const [re, rep] of HREF_REGEX) s = s.replace(re, () => (hrefs++, rep))
  for (const [from, to] of Object.entries(EXACT)) {
    const token = `href={"${from}"}`
    const parts = s.split(token)
    hrefs += parts.length - 1
    s = parts.join(`href={"${to}"}`)
  }
  for (const [from, to] of Object.entries(LABELTEXT)) s = s.split(from).join(to)
  fs.writeFileSync(p, s)
  report.push(`${f.padEnd(16)} nav-labels:${nav} hrefs:${hrefs}`)
}
console.log(report.join('\n'))
