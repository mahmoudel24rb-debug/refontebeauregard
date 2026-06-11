# Parc Beauregard — Refonte du site

Refonte du site [parcbeauregard.com](https://parcbeauregard.com) (Parc Beauregard Fitness & Coaching, Rochecorbon) en **Next.js + Payload CMS**, sur la base design du template Sportix.

## Stack

- **Front** : Next.js 16 (App Router, Server Components, Local API Payload)
- **CMS** : Payload 3 — full code : les pages sont codées en dur, Payload gère uniquement le contenu et les accès
- **BDD** : SQLite en local (zéro dépendance) · Postgres via Docker, Neon (previews Vercel) ou VPS (prod)
- **Plugins Payload** : form-builder (formulaire contact), SEO (méta par fiche), redirects (301 depuis l'ancien site)

## Installation locale

```bash
git clone https://github.com/mahmoudel24rb-debug/refontebeauregard.git
cd refontebeauregard
cp .env.example .env   # puis renseigner PAYLOAD_SECRET
npm install
npm run dev
```

- Site : http://localhost:3000
- Admin Payload : http://localhost:3000/admin (le premier compte créé est l'admin)

Par défaut la base est un fichier SQLite (`parcbeauregard.db`, ignoré par Git) : aucune installation requise.

### Postgres local (optionnel, conforme au brief)

```bash
docker compose up -d
# puis dans .env :
# DATABASE_URL=postgres://payload:payload@localhost:5432/parcbeauregard
```

## Modèle de contenu

| Type | Slug | Rôle |
|---|---|---|
| Collection | `espaces` | Espaces du club (cours collectifs, fonctionnel, cross-cardio, kid fitness) → fiches `/espaces/[slug]` |
| Collection | `services` | Offres (Beauregard Coaching, Beauregard Cours…) → fiches `/services/[slug]` |
| Collection | `formules` | Tarifs : mensuels (FORME→VIP), courtes durées, tickets |
| Collection | `temoignages` | Témoignages clients (accueil) |
| Collection | `media` | Images (photos des espaces…) |
| Collection | `users` | Comptes admin (DGL) / éditeur (client) |
| Global | `header` / `footer` | Navigation et pied de page |
| Global | `infos-club` | Adresse, téléphone, email, horaires, réseaux — source unique réutilisée partout |
| Global | `bandeau-promo` | Bandeau promotionnel activable |

## Environnements

| Environnement | Usage | BDD |
|---|---|---|
| Local | Dev quotidien | SQLite (ou Postgres Docker) |
| Vercel | Previews / démo client uniquement | Neon ou Vercel Postgres |
| VPS (plus tard) | Production | Postgres |

## Commandes utiles

```bash
npm run dev                 # dev server
npm run build               # build de prod
npm run generate:types      # régénérer payload-types.ts après modif des collections
npm run lint
```
