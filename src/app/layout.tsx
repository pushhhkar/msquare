import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/json-ld'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'

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
    default: 'MSquare Professionals — Business Growth Infrastructure Company | Gurugram',
    template: '%s | MSquare Professionals',
  },
  description:
    'MSquare Professionals Pvt. Ltd. helps businesses attract customers, automate operations, and scale through connected technology ecosystems. Growth Marketing, Business Automation & Custom Software — Gurugram, India.',
  keywords: [
    'business growth infrastructure India',
    'performance marketing Gurugram',
    'CRM solutions India',
    'business automation company',
    'custom software development Gurugram',
    'lead generation India',
    'workflow automation',
    'web development Gurugram',
    'MSquare Professionals',
    'growth infrastructure company',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MSquare Professionals — Business Growth Infrastructure Company',
    description:
      'Growth Marketing, Business Automation, and Technology Solutions under one roof. Building connected ecosystems that make growth predictable.',
    type: 'website',
    url: BASE_URL,
    siteName: 'MSquare Professionals',
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
    title: 'MSquare Professionals — Business Growth Infrastructure Company',
    description:
      'Growth Marketing, Business Automation & Technology Solutions under one roof. 100+ platforms built. Gurugram, India.',
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
        <WhatsAppButton />
      </body>
    </html>
  )
}
