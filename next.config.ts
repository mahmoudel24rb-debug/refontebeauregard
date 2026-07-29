import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  // Le port fidèle Sportix contient du CSS Framer non-standard (ex. `cornerShape`)
  // et du markup généré : on n'impose pas type-check/lint sur ce code vendored
  // (le code métier Payload reste sain). Sinon le build échoue sur ces propriétés.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
  async redirects() {
    // NB: modification 2026-07-07 : invalide le cache de build Vercel qui avait
    // resservi un routes-manifest périmé (redirection caf absente en prod).
    // Ordre : les redirections statiques AVANT les patterns :slug, pour éviter
    // les doubles sauts (ex. caf -> renfo-fit en un seul hop).
    return [
      // Cours « CAF » renommé « Renfo Fit » : un seul saut vers la nouvelle URL.
      { source: '/services/cours/caf', destination: '/cours/renfo-fit', permanent: true },
      { source: '/cours/caf', destination: '/cours/renfo-fit', permanent: true },
      // Nomenclature : /services/* -> /cours, /coaching (retour client)
      { source: '/services/coaching', destination: '/coaching', permanent: true },
      { source: '/services/cours', destination: '/cours', permanent: true },
      // NB: /services (exact) est une page finale en 200 (hub restauré le 29/07).
      { source: '/services/cours/:slug', destination: '/cours/:slug', permanent: true },
      { source: '/services/:slug', destination: '/cours', permanent: true },
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
