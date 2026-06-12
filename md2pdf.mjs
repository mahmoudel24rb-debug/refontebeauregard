import { chromium } from '@playwright/test'
import fs from 'node:fs'

const SRC = process.argv[2] || 'BRIEF-PHOTOS-BEAUREGARD.md'
const OUT = process.argv[3] || SRC.replace(/\.md$/, '.pdf')
const md = fs.readFileSync(SRC, 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const inline = (s) =>
  esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')

const lines = md.split('\n')
let html = ''
let i = 0
const flushTable = () => {
  const rows = []
  while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(lines[i++])
  if (!rows.length) return
  const cells = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim())
  const head = cells(rows[0])
  const body = rows.slice(2).map(cells)
  html += '<table><thead><tr>' + head.map((h) => `<th>${inline(h)}</th>`).join('') + '</tr></thead><tbody>'
  for (const r of body) html += '<tr>' + r.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>'
  html += '</tbody></table>'
}
while (i < lines.length) {
  const l = lines[i]
  const t = l.trim()
  if (t.startsWith('|')) { flushTable(); continue }
  if (/^###\s+/.test(t)) html += `<h3>${inline(t.replace(/^###\s+/, ''))}</h3>`
  else if (/^##\s+/.test(t)) html += `<h2>${inline(t.replace(/^##\s+/, ''))}</h2>`
  else if (/^#\s+/.test(t)) html += `<h1>${inline(t.replace(/^#\s+/, ''))}</h1>`
  else if (/^---+$/.test(t)) html += '<hr>'
  else if (/^>\s?/.test(t)) html += `<blockquote>${inline(t.replace(/^>\s?/, ''))}</blockquote>`
  else if (/^(\d+)\.\s+/.test(t)) {
    html += '<ol>'
    while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) { html += `<li>${inline(lines[i].trim().replace(/^\d+\.\s+/, ''))}</li>`; i++ }
    html += '</ol>'; continue
  } else if (/^[-*]\s+/.test(t)) {
    html += '<ul>'
    while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) { html += `<li>${inline(lines[i].trim().replace(/^[-*]\s+/, ''))}</li>`; i++ }
    html += '</ul>'; continue
  } else if (t) html += `<p>${inline(t)}</p>`
  i++
}

const doc = `<!doctype html><html><head><meta charset="utf-8"><style>
  @page { margin: 18mm 16mm; }
  * { box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; font-size: 11.5px; line-height: 1.5; }
  h1 { color: #1f5e3a; font-size: 24px; border-bottom: 3px solid #376131; padding-bottom: 8px; margin: 0 0 14px; }
  h2 { color: #1f5e3a; font-size: 16px; margin: 22px 0 8px; border-left: 4px solid #376131; padding-left: 10px; }
  h3 { color: #2a2a2a; font-size: 13px; margin: 14px 0 6px; }
  p { margin: 7px 0; }
  ul, ol { margin: 7px 0; padding-left: 20px; }
  li { margin: 3px 0; }
  hr { border: none; border-top: 1px solid #ddd; margin: 16px 0; }
  blockquote { background: #f0f6ee; border-left: 4px solid #376131; margin: 8px 0; padding: 8px 14px; color: #355; }
  table { border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 10.5px; }
  th { background: #376131; color: #fff; text-align: left; padding: 7px 9px; }
  td { border: 1px solid #ddd; padding: 6px 9px; vertical-align: top; }
  tr:nth-child(even) td { background: #f6f8f5; }
  code { background: #eef2ec; padding: 1px 5px; border-radius: 4px; font-family: Consolas, monospace; }
  strong { color: #14331f; }
  a { color: #376131; }
  table, tr, blockquote, h2 { page-break-inside: avoid; }
</style></head><body>${html}</body></html>`

const b = await chromium.launch({ channel: 'chrome' })
const p = await b.newPage()
await p.setContent(doc, { waitUntil: 'load' })
await p.pdf({ path: OUT, format: 'A4', printBackground: true })
if (process.argv.includes('--png')) { await p.setViewportSize({ width: 820, height: 1160 }); await p.screenshot({ path: 'c:/tmp/y-brief.png', fullPage: false }) }
await b.close()
console.log('PDF ->', OUT)
