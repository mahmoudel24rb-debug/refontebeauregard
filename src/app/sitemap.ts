import type { MetadataRoute } from 'next'
import { getPayloadClient } from '@/lib/payload'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.parcbeauregard.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const statiques = ['', '/espaces', '/services', '/cours', '/coaching', '/location-de-terrain', '/planning', '/evenements', '/faq', '/blog', '/tarifs', '/contact', '/mentions-legales']
  const now = new Date()
  const base: MetadataRoute.Sitemap = statiques.map((r) => ({ url: `${SITE_URL}${r}`, lastModified: now }))
  try {
    const payload = await getPayloadClient()
    const [cours, espaces, articles] = await Promise.all([
      payload.find({ collection: 'cours', limit: 100, select: { slug: true } }),
      payload.find({ collection: 'espaces', where: { pageDetail: { equals: true } }, limit: 50, select: { slug: true } }),
      payload.find({ collection: 'articles', where: { publie: { equals: true } }, limit: 200, select: { slug: true } }),
    ])
    base.push(...cours.docs.map((c) => ({ url: `${SITE_URL}/cours/${c.slug}`, lastModified: now })))
    base.push(...espaces.docs.map((e) => ({ url: `${SITE_URL}/espaces/${e.slug}`, lastModified: now })))
    base.push(...articles.docs.map((a) => ({ url: `${SITE_URL}/blog/${a.slug}`, lastModified: now })))
  } catch {
    // base seule si la DB est indisponible au build
  }
  return base
}
