import type { Metadata } from 'next'
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Contact M Square — Let's Scale Your Brand",
  description:
    'Get in touch with M Square. We respond within 24 hours. Office: SCO 40, 4th Floor, Civil Line, Sector 15, Gurugram, Haryana 122002. Email: info@msquareprofessionals.com | +91 9870202444.',
  keywords: [
    'contact M Square',
    'digital agency contact Bangalore',
    'hire growth agency India',
    'web development quote India',
    'performance marketing agency contact',
    'M Square Bangalore office',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Contact M Square — Let's Scale Your Brand",
    description:
      'Get in touch with M Square. 24-hour response guarantee. Offices in Bangalore, Dubai, and London.',
    url: '/contact',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Contact M Square' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact M Square',
    description: '24-hour response guarantee. Offices in Bangalore, Dubai, and London.',
    images: ['/og-default.png'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Contact', href: '/contact' }]} />
      <LocalBusinessJsonLd />
      {children}
    </>
  )
}
