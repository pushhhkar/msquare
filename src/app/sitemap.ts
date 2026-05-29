import type { MetadataRoute } from 'next'
import { posts } from '@/data/blog'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://msquare.agency'

// Approximate last-modified dates per section (update when content changes)
const NOW = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                        lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,          lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/case-studies`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`,              lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/about`,             lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`,           lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy`,           lastModified: NOW, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms`,             lastModified: NOW, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  // Dynamically generated from data/blog.ts — stays in sync automatically
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: post.featured ? 0.8 : 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
