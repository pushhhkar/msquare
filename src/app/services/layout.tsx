import type { Metadata } from 'next'
import { seoMeta } from '@/data/content'

export const metadata: Metadata = {
  title: seoMeta.services.title,
  description: seoMeta.services.description,
  keywords: seoMeta.services.keywords,
  openGraph: {
    title: seoMeta.services.title,
    description: seoMeta.services.description,
    type: 'website',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
