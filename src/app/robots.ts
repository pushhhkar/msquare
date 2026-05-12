import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://msquare.agency'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers on all public routes
        userAgent: '*',
        allow: '/',
        // Block internal/utility routes from indexing
        disallow: ['/funnel', '/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    // Prevent the legacy domain from being treated as canonical
    host: BASE_URL,
  }
}
