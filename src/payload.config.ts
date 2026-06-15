import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { fr } from '@payloadcms/translations/languages/fr'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Cours } from './collections/Cours'
import { Espaces } from './collections/Espaces'
import { Formules } from './collections/Formules'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Temoignages } from './collections/Temoignages'
import { Users } from './collections/Users'
import { BandeauPromo } from './globals/BandeauPromo'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { InfosClub } from './globals/InfosClub'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// SQLite en local (zéro dépendance), Postgres dès que DATABASE_URL pointe
// vers un serveur (Docker local, Neon pour les previews Vercel, VPS en prod)
const databaseUrl = process.env.DATABASE_URL || 'file:./parcbeauregard.db'
const db = databaseUrl.startsWith('postgres')
  ? postgresAdapter({ pool: { connectionString: databaseUrl } })
  : sqliteAdapter({ client: { url: databaseUrl } })

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  i18n: {
    supportedLanguages: { fr },
    fallbackLanguage: 'fr',
  },
  collections: [Espaces, Cours, Services, Formules, Temoignages, Media, Users],
  globals: [Header, Footer, InfosClub, BandeauPromo],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db,
  sharp,
  plugins: [
    // Formulaire de contact administrable (page Contact)
    formBuilderPlugin({
      fields: { payment: false },
    }),
    // Méta titre/description par fiche (SEO local du brief)
    seoPlugin({
      collections: ['espaces', 'services'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc?.nom ?? ''} — Parc Beauregard Fitness & Coaching`,
    }),
    // Redirections 301 depuis les URLs de l'ancien site WordPress
    redirectsPlugin({
      collections: ['espaces', 'services'],
    }),
    // Sur Vercel le filesystem est éphémère : les uploads partent sur Blob
    // (actif uniquement si BLOB_READ_WRITE_TOKEN est défini, donc pas en local)
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            collections: { media: true },
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
        ]
      : []),
  ],
})
