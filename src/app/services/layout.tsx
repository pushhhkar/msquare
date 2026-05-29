import type { Metadata } from 'next'
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Services — Enterprise AI, Full-Stack Engineering & Strategic Marketing',
  description:
    "Explore M Square's full service catalog: Enterprise AI & automation, Next.js web development, iOS & Android apps, UI/UX design, SEO, performance marketing, social media management, and business automation.",
  keywords: [
    'web development services India',
    'enterprise AI consulting Bangalore',
    'performance marketing services',
    'SEO services Bangalore',
    'app development agency India',
    'UI UX design services',
    'business automation India',
    'digital marketing agency',
    'Next.js development',
    'React Native development',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services — Enterprise AI, Full-Stack Engineering & Strategic Marketing | M Square',
    description:
      "M Square's full service catalog: Enterprise AI, web & app development, UI/UX design, SEO, performance marketing, and business automation.",
    url: '/services',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'M Square Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | M Square',
    description: 'Enterprise AI, full-stack engineering, and strategic marketing under one roof.',
    images: ['/og-default.png'],
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Services', href: '/services' }]} />
      <ServiceJsonLd />
      {children}
    </>
  )
}
