import type { Metadata } from 'next'
import { seoMeta } from '@/data/content'

export const metadata: Metadata = {
  title: seoMeta.blog.title,
  description: seoMeta.blog.description,
  keywords: seoMeta.blog.keywords,
  openGraph: {
    title: seoMeta.blog.title,
    description: seoMeta.blog.description,
    type: 'website',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
