// Server component — renders JSON-LD <script> tags with zero client JS.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://msquare.agency'
const LOGO_URL = `${SITE_URL}/msplg.jpeg`

// ─── Organization (root — used on every page via layout) ─────────────────────
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'M Square',
    alternateName: 'MSquare Professionals Pvt Ltd',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 256,
      height: 64,
    },
    description:
      'M Square is a tech-first digital growth studio combining Enterprise AI, full-stack engineering, and strategic marketing to scale ambitious brands globally. Headquartered in Gurugram, Haryana since 1996.',
    foundingDate: '1996',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SCO 40, 4th Floor, Civil Line, Sector 15',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122002',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9870202444',
      contactType: 'customer service',
      email: 'info@msquareprofessionals.com',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://linkedin.com/company/msquare',
      'https://twitter.com/msquare',
      'https://instagram.com/msquare',
    ],
    areaServed: ['IN', 'AE', 'GB', 'US'],
    knowsAbout: [
      'Digital Marketing',
      'Web Development',
      'App Development',
      'Enterprise AI',
      'Business Automation',
      'UI/UX Design',
      'SEO',
      'Performance Marketing',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── WebSite (root — enables Sitelinks Search Box in Google) ─────────────────
export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'M Square',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?category={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── BreadcrumbList (per-page) ────────────────────────────────────────────────
interface BreadcrumbItem {
  name: string
  href: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.href}`,
      })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── LocalBusiness (contact page) ────────────────────────────────────────────
export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'M Square',
    image: LOGO_URL,
    url: SITE_URL,
    telephone: '+91-9870202444',
    email: 'info@msquareprofessionals.com',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SCO 40, 4th Floor, Civil Line, Sector 15',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122002',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4595,
      longitude: 77.0266,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    serviceArea: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── Service (services page) ──────────────────────────────────────────────────
export function ServiceJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'M Square Services',
    url: `${SITE_URL}/services`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Enterprise AI & Automation',
          provider: { '@type': 'Organization', name: 'M Square' },
          description: 'AI strategy, intelligent process automation, data engineering, and AI-powered SEO for enterprise brands.',
          url: `${SITE_URL}/services`,
          areaServed: 'Worldwide',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Full-Stack Engineering',
          provider: { '@type': 'Organization', name: 'M Square' },
          description: 'High-performance Next.js web development, React Native app development, UI/UX design, and custom software solutions.',
          url: `${SITE_URL}/services`,
          areaServed: 'Worldwide',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Strategic Marketing',
          provider: { '@type': 'Organization', name: 'M Square' },
          description: 'Performance marketing, SEO, social media management, influencer marketing, PR, and OOH advertising.',
          url: `${SITE_URL}/services`,
          areaServed: 'Worldwide',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── FAQPage (about page) — helps capture rich results ───────────────────────
export function FaqJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When was M Square founded?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MSquare Professionals Pvt Ltd was founded in 1996, making it one of the longest-standing digital growth studios in India. The company is headquartered in Gurugram, Haryana.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does M Square offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'M Square offers three core service pillars: Enterprise AI & Automation (AI strategy, process automation, data engineering), Full-Stack Engineering (web development, app development, UI/UX design, software solutions), and Strategic Marketing (performance marketing, SEO, social media, influencer marketing, branding).',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is M Square located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'M Square is headquartered at SCO 40, 4th Floor, Civil Line, Sector 15, Gurugram, Haryana 122002, India, with regional offices in Dubai, UAE and London, UK.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many platforms has M Square designed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'M Square has designed and deployed 100+ digital platforms across healthcare, education, real estate, fintech, e-commerce, and SaaS industries.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
