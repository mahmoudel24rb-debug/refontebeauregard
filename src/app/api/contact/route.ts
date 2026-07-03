import { NextResponse } from 'next/server'

// Reçoit le formulaire de contact, valide côté serveur, puis transmet au webhook
// Make (URL en variable d'env -> jamais exposée au navigateur). Même logique que
// le plugin WordPress GymFit (DGL Agency), adaptée single-club.

const PHONE = /^(?:0|\+33 ?|0?0?33 ?|)([1-9] ?(?:[0-9] ?){8})$/
const EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, message: 'Requête invalide.' }, { status: 400 })
  }

  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '')
  const prenom = str(body.prenom)
  const nom = str(body.nom)
  const telephone = str(body.telephone)
  const email = str(body.email)
  const message = str(body.message)
  const honeypot = str(body.website) // champ piège anti-spam (doit rester vide)

  // Bot détecté (honeypot rempli) : on renvoie un succès silencieux sans rien envoyer.
  if (honeypot) return NextResponse.json({ success: true })

  const errors: Record<string, string> = {}
  if (prenom.length < 2) errors.prenom = 'Le prénom est obligatoire.'
  if (nom.length < 2) errors.nom = 'Le nom est obligatoire.'
  if (!PHONE.test(telephone)) errors.telephone = 'Le numéro de téléphone n’est pas valide.'
  if (!EMAIL.test(email)) errors.email = 'L’adresse email n’est pas valide.'
  if (message.length < 10) errors.message = 'Le message doit contenir au moins 10 caractères.'
  if (Object.keys(errors).length) {
    return NextResponse.json({ success: false, errors }, { status: 422 })
  }

  const payload = {
    prenom,
    nom,
    telephone,
    email,
    message,
    source: 'site_web_parcbeauregard',
    timestamp: new Date().toISOString(),
    utm: body.utm ?? null,
  }

  const webhook = process.env.MAKE_WEBHOOK_URL
  if (webhook) {
    try {
      const r = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!r.ok) console.error('[contact] webhook Make non-2xx:', r.status)
    } catch (e) {
      // On ne bloque pas l'utilisateur si Make est injoignable (le message est loggé).
      console.error('[contact] webhook Make erreur:', e)
    }
  } else {
    // Ne JAMAIS logger le payload (données personnelles) — seulement un signal horodaté.
    console.warn('[contact] MAKE_WEBHOOK_URL absente — lead non transmis (reçu à ' + new Date().toISOString() + ')')
  }

  return NextResponse.json({ success: true })
}
