import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Case Studies — Real Results, Real Growth',
  description:
    'Explore M Square case studies: 4.1x e-commerce ROAS, 800+ real estate MQLs, 2.1x SaaS trial conversion, and 80% HealthTech process automation — across 100+ platforms designed since 1996.',
  keywords: [
    'M Square case studies',
    'digital marketing results India',
    'e-commerce ROAS improvement',
    'real estate lead generation India',
    'SaaS brand strategy results',
    'HealthTech automation case study',
    'performance marketing case study',
    'web development portfolio India',
  ],
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies — Real Results, Real Growth | M Square',
    description:
      '100+ platforms. Decades of proof. See how M Square transforms brands with measurable, compounding results.',
    url: '/case-studies',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'M Square Case Studies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | M Square',
    description: '100+ platforms. Decades of proof. Measurable results.',
    images: ['/og-default.png'],
  },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Case Studies', href: '/case-studies' }]} />
      {children}
    </>
  )
}
