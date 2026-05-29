import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Growth Blog — Insights, Case Studies & Playbooks',
  description:
    'Tactical growth playbooks, engineering deep-dives, and case study breakdowns from the M Square team. Performance marketing, AI automation, web development, and brand strategy — published weekly.',
  keywords: [
    'digital marketing blog India',
    'growth hacking strategies',
    'Next.js performance blog',
    'automation case studies',
    'performance marketing playbook',
    'SEO tips India',
    'business automation insights',
    'AI marketing blog',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Growth Blog — Insights, Case Studies & Playbooks | M Square',
    description:
      'Tactical growth playbooks, engineering deep-dives, and case study breakdowns from the M Square team.',
    url: '/blog',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'M Square Growth Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Blog | M Square',
    description: 'Tactical playbooks and case studies from the M Square team.',
    images: ['/og-default.png'],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Blog', href: '/blog' }]} />
      {children}
    </>
  )
}
