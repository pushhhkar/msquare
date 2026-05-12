import type { Metadata } from 'next'
import { seoMeta } from '@/data/content'

export const metadata: Metadata = {
  title: seoMeta.about.title,
  description: seoMeta.about.description,
  keywords: seoMeta.about.keywords,
  openGraph: {
    title: seoMeta.about.title,
    description: seoMeta.about.description,
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
