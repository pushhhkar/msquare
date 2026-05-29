import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/json-ld'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
})

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'M Square — Tech-First Digital Growth Studio | Bangalore',
    template: '%s | M Square',
  },
  description:
    'M Square is a tech-first growth studio combining high-performance web & app development, Enterprise AI, and full-funnel marketing to scale ambitious brands globally. Headquartered in Bangalore since 1996.',
  keywords: [
    'digital growth agency India',
    'performance marketing agency Bangalore',
    'Next.js development agency',
    'Enterprise AI consulting',
    'web development Bangalore',
    'SEO agency India',
    'business automation',
    'UI UX design agency',
    'brand strategy',
    'Msquare Professionals',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'M Square — Tech-First Digital Growth Studio',
    description:
      'Combining Enterprise AI, full-stack engineering, and strategic marketing to build digital ecosystems that scale. Based in Bangalore, serving globally.',
    type: 'website',
    url: BASE_URL,
    siteName: 'M Square',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'M Square — Tech-First Digital Growth Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M Square — Tech-First Digital Growth Studio',
    description:
      'Enterprise AI, full-stack engineering, and strategic marketing under one roof. 100+ platforms designed since 1996.',
    images: ['/og-default.png'],
    creator: '@msquare',
    site: '@msquare',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification token when available
    // google: 'your-google-verification-token',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
