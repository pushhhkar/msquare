import type { Metadata } from 'next'
import { seoMeta } from '@/data/content'

export const metadata: Metadata = {
  title: seoMeta.contact.title,
  description: seoMeta.contact.description,
  keywords: seoMeta.contact.keywords,
  openGraph: {
    title: seoMeta.contact.title,
    description: seoMeta.contact.description,
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
