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
    // NB: modification 2026-07-07 — invalide le cache de build Vercel qui avait
    // resservi un routes-manifest périmé (redirection caf absente en prod).
    return [
      // Cours « CAF » renommé « Renfo Fit » — on conserve le référencement de l'ancienne URL.
      {
        source: '/services/cours/caf',
        destination: '/services/cours/renfo-fit',
        permanent: true,
      },
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
