import type { Metadata } from 'next'
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'About M Square — 26+ Years of Digital Innovation',
  description:
    'Since 1996, M Square has been at the forefront of digital transformation. Learn about our mission, values, industry verticals, and the team building growth ecosystems for global brands.',
  keywords: [
    'about M Square',
    'digital agency Bangalore',
    'IT solutions partner India',
    'growth studio since 1996',
    'digital transformation agency India',
    'Msquare Professionals history',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About M Square — 26+ Years of Digital Innovation',
    description:
      'Since 1996, M Square has been at the forefront of digital transformation. Learn about our mission, values, and the team building growth ecosystems for global brands.',
    url: '/about',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'About M Square' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About M Square — 26+ Years of Digital Innovation',
    description: 'Since 1996, M Square has been at the forefront of digital transformation.',
    images: ['/og-default.png'],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'About', href: '/about' }]} />
      <FaqJsonLd />
      {children}
    </>
  )
}
