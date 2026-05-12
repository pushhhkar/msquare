import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  // metadataBase drives all relative OG/Twitter/canonical URLs.
  // On production this comes from the env var; locally it falls back to localhost.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  title: {
    default: 'M Square — Tech-First Digital Growth Studio | Bangalore',
    template: '%s | M Square',
  },
  // Canonical URL prevents duplicate-content penalty between
  // msquareprofessionals.com (legacy) and msquare.agency (new).
  alternates: {
    canonical: '/',
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
  openGraph: {
    title: 'M Square — Tech-First Digital Growth Studio',
    description:
      'Combining Enterprise AI, full-stack engineering, and strategic marketing to build digital ecosystems that scale. Based in Bangalore, serving globally.',
    type: 'website',
    url: 'https://msquare.agency',
    siteName: 'M Square',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M Square — Tech-First Digital Growth Studio',
    description:
      'Enterprise AI, full-stack engineering, and strategic marketing under one roof. 100+ platforms designed since 1996.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
