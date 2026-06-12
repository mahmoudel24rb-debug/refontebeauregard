import fs from 'node:fs'
const FILE = 'src/components/sportix/Contact.tsx'
const lines = fs.readFileSync(FILE, 'utf8').split('\n')
if ((lines[231] || '').trim() !== '</section>') {
  console.error('STRUCTURE INATTENDUE ligne 232 — abort:', JSON.stringify(lines[231]))
  process.exit(1)
}
const sec = `      <section style={{ padding: "90px 0", background: "#f5f5f5" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 30px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          <div>
            <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 24px" }}>Nous trouver</h2>
            <p style={{ color: "#404040", lineHeight: 1.7, margin: "0 0 8px" }}><strong>Parc Beauregard Fitness &amp; Coaching</strong></p>
            <p style={{ color: "#404040", lineHeight: 1.7, margin: "0 0 4px" }}>1 quai de la Loire, 37210 Rochecorbon</p>
            <p style={{ color: "#404040", lineHeight: 1.7, margin: "0 0 4px" }}>02 47 44 41 43</p>
            <p style={{ color: "#404040", lineHeight: 1.7, margin: "0 0 28px" }}>rochecorbon@parcbeauregard.com</p>
            <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 14px" }}>Horaires d'ouverture</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, maxWidth: "360px" }}>
              {[["Lundi – Vendredi", "6h00 – 22h00"], ["Samedi", "8h00 – 20h00"], ["Dimanche", "8h00 – 13h00"]].map(([d, h]) => (
                <li key={d} style={{ display: "flex", justifyContent: "space-between", padding: "11px 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                  <span style={{ color: "#404040" }}>{d}</span>
                  <strong>{h}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ minHeight: "400px", borderRadius: "16px", overflow: "hidden" }}>
            <iframe
              title="Plan d'accès Parc Beauregard"
              src="https://www.google.com/maps?q=1%20quai%20de%20la%20Loire%2C%2037210%20Rochecorbon&output=embed"
              style={{ width: "100%", height: "100%", minHeight: "400px", border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>`
const out = [...lines.slice(0, 232), sec, ...lines.slice(232)].join('\n')
fs.writeFileSync(FILE, out)
console.log('Contact.tsx : section Carte + Horaires insérée')
