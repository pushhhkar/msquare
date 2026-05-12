import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Real Results, Real Growth | M Square',
  description:
    'Explore M Square case studies: e-commerce ROAS wins, real estate lead gen, SaaS brand relaunches, and HealthTech automation across 100+ platforms designed since 1996.',
  keywords:
    'M Square case studies, digital marketing results India, e-commerce growth, real estate lead generation, SaaS branding, HealthTech automation',
  openGraph: {
    title: 'Case Studies — Real Results, Real Growth | M Square',
    description:
      '100+ platforms. Decades of proof. See how M Square transforms brands with measurable, compounding results.',
    type: 'website',
  },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
