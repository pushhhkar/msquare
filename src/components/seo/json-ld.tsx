// Server component — renders JSON-LD <script> tags with zero client JS.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://msquare.agency'
const LOGO_URL = `${SITE_URL}/msplg.jpeg`

// ─── Organization (root — used on every page via layout) ─────────────────────
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MSquare Professionals',
    alternateName: 'MSquare Professionals Pvt. Ltd.',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 256,
      height: 64,
    },
    description:
      'MSquare Professionals Pvt. Ltd. is a Business Growth Infrastructure Company helping businesses attract customers, automate operations, and scale through connected marketing, automation, and technology ecosystems. Headquartered in Gurugram, Haryana.',
    foundingDate: '2023',
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
      'Performance Marketing',
      'Lead Generation',
      'CRM Solutions',
      'Business Automation',
      'Workflow Automation',
      'Custom Software Development',
      'Web Application Development',
      'Mobile App Development',
      'SEO & SEM',
      'Sales Automation',
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
        name: 'When was MSquare Professionals founded?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MSquare Professionals was founded in 2023 as a partnership firm in Gurugram, India. In 2026, the company transitioned to a Private Limited Company — MSquare Professionals Pvt. Ltd. — in response to its growing business and expanding client base.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does MSquare Professionals do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MSquare Professionals Pvt. Ltd. is a Business Growth Infrastructure Company offering three core services: Growth Marketing (performance marketing, lead generation, SEO, social media), Business Automation (CRM solutions, workflow automation, lead management, sales automation, attendance management), and Technology Solutions (custom software, web applications, mobile apps, enterprise software, API integrations).',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is MSquare Professionals located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MSquare Professionals Pvt. Ltd. is headquartered at SCO 40, 4th Floor, Civil Line, Sector 15, Gurugram, Haryana 122002, India.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who does MSquare Professionals work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MSquare works with startups, educational institutions, healthcare organizations, retail businesses, professional service firms, manufacturers, and growing enterprises that are looking to modernize operations and accelerate growth through technology.',
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
