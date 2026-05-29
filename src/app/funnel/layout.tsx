import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Your Growth Strategy | M Square',
  description: 'Answer a few quick questions and get a custom digital growth strategy from M Square.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
