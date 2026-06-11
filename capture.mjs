import { chromium } from '@playwright/test'
import fs from 'node:fs'

// Pages template → capture du DOM HYDRATÉ (JS exécuté, appear révélé).
const PAGES = [
  { name: 'Espaces', file: 'facilities.html' },
  { name: 'FicheEspace', file: 'facilities--gym-training-zones.html' },
  { name: 'Services', file: 'classes.html' },
  { name: 'FicheService', file: 'classes--strength-power-training.html' },
  { name: 'Tarifs', file: 'pricing.html' },
  { name: 'Contact', file: 'contact-us.html' },
  { name: 'PageTexte', file: 'blog--the-power-of-running.html' },
]

const OUT = 'c:/tmp/hyd'
fs.mkdirSync(OUT, { recursive: true })

const b = await chromium.launch({ channel: 'chrome' })
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } })

for (const pg of PAGES) {
  try {
    await p.goto(`http://localhost:5000/${pg.file}`, { waitUntil: 'networkidle', timeout: 60000 })
    await p.evaluate(async () => { if (document.fonts) await document.fonts.ready })
    await p.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 40)) }
      scrollTo(0, 0)
    })
    await p.waitForTimeout(1400)
    let html = await p.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML)
    html = html.replace(/https?:\/\/localhost:5000/g, '')
    fs.writeFileSync(`${OUT}/${pg.name}.html`, html)
    const diag = await p.evaluate(() => document.querySelectorAll('[style*="opacity:0"],[style*="opacity: 0"]').length)
    console.log(`OK ${pg.name.padEnd(14)} ${(html.length / 1024).toFixed(0)}Ko  opacity0=${diag}`)
  } catch (e) {
    console.log(`XX ${pg.name.padEnd(14)} ${e.message}`)
  }
}
await b.close()
