// ─── Brand & Mission ─────────────────────────────────────────────────────────

export const brand = {
  name: 'M Square',
  legalName: 'Msquare Professionals',
  tagline: 'Transforming Digital Identities into Legacies.',
  mission:
    'To be the most trusted digital acceleration partner for ambitious brands — fusing cutting-edge engineering with data-driven strategy to build ecosystems that don\'t just perform, but endure.',
  vision:
    'A world where every business, regardless of scale, has access to enterprise-grade technology and marketing intelligence that compounds their competitive advantage over time.',
  about:
    'At M Square, we build robust digital ecosystems where data-driven strategy meets high-end design. Founded on the belief that technology and creativity are not opposing forces but a single, unified growth engine, we empower brands to scale through cutting-edge technology and 360° marketing solutions.',
  foundedYear: 1996,
}

// ─── Stats & Social Proof ─────────────────────────────────────────────────────

export const stats = [
  { value: '100+', label: 'Platforms Designed', accent: 'orange' as const },
  { value: `${new Date().getFullYear() - 1996}+`, label: 'Years of Visionary Partnership', accent: 'blue' as const },
  { value: '98%', label: 'Client Retention', accent: 'orange' as const },
  { value: '3.2x', label: 'Average ROI Delivered', accent: 'blue' as const },
]

// ─── Contact & Offices ────────────────────────────────────────────────────────

export const contact = {
  email: 'hello@msquareprofessionals.com',
  legalEmail: 'legal@msquare.agency',
  privacyEmail: 'privacy@msquare.agency',
  phone: '+91 98765 43210',
  responseTime: '24 hours',
}

export const offices = [
  {
    city: 'Bangalore',
    country: 'India',
    region: 'Headquarters',
    address: 'Koramangala, Bangalore — 560 034, Karnataka, India',
    phone: '+91 98765 43210',
    email: 'hello@msquareprofessionals.com',
    timezone: 'IST (UTC +5:30)',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    region: 'Middle East',
    address: 'Business Bay, Dubai, United Arab Emirates',
    phone: '+971 4 000 0000',
    email: 'mena@msquareprofessionals.com',
    timezone: 'GST (UTC +4)',
  },
  {
    city: 'London',
    country: 'UK',
    region: 'Europe',
    address: 'Canary Wharf, London E14, United Kingdom',
    phone: '+44 20 0000 0000',
    email: 'europe@msquareprofessionals.com',
    timezone: 'GMT (UTC +0 / +1)',
  },
]

// ─── Industry Verticals ───────────────────────────────────────────────────────

export interface Vertical {
  id: string
  label: string
  sector: string
  headline: string
  description: string
  capabilities: string[]
  icon: string
}

export const verticals: Vertical[] = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    sector: 'Telemedicine & HealthTech',
    headline: 'Digital Health that Scales',
    description:
      'We build HIPAA-aligned telemedicine platforms, patient engagement portals, and clinical workflow automation that reduce overhead and extend care to more patients.',
    capabilities: [
      'Telemedicine platform development',
      'EHR & medical billing integrations',
      'Appointment scheduling automation',
      'Patient data analytics & reporting',
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'education',
    label: 'Education',
    sector: 'EdTech & LMS',
    headline: 'Learning Systems Built for Outcomes',
    description:
      'From university LMS deployments to D2C e-learning platforms, we engineer adaptive learning experiences and content delivery pipelines that drive completion rates and revenue.',
    capabilities: [
      'Custom LMS development',
      'Live & async video infrastructure',
      'Gamification & engagement loops',
      'Performance analytics dashboards',
    ],
    icon: 'GraduationCap',
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    sector: 'PropTech',
    headline: 'PropTech that Converts',
    description:
      'High-intent lead generation, virtual property tour infrastructure, and CRM automation for developers and agencies — turning browsers into buyers at scale.',
    capabilities: [
      'Hyper-local performance marketing',
      'Virtual tour & 3D walkthrough integration',
      'Lead scoring & CRM automation',
      'Inventory & listing management systems',
    ],
    icon: 'Building2',
  },
  {
    id: 'fintech',
    label: 'Financial Services',
    sector: 'Fintech',
    headline: 'Compliant, Scalable, Fast',
    description:
      'We engineer fintech interfaces, KYC/onboarding flows, and data dashboards that meet regulatory standards while delivering the seamless UX that modern users expect.',
    capabilities: [
      'KYC & digital onboarding flows',
      'Secure payment gateway integrations',
      'Regulatory-compliant UI/UX',
      'Real-time financial data dashboards',
    ],
    icon: 'Landmark',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  industry: string
  quote: string
  metric?: string
  metricLabel?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'retail-01',
    name: 'Priya Nair',
    role: 'Founder & CEO',
    company: 'Nair Retail Brands',
    industry: 'E-Commerce',
    quote:
      'M Square didn\'t just run our ads — they rebuilt our entire funnel. ROAS went from 1.8x to 4.1x in under three months. The automation they layered on top means our team spends zero time on manual reporting.',
    metric: '4.1x',
    metricLabel: 'ROAS',
  },
  {
    id: 'realestate-01',
    name: 'Arjun Mehta',
    role: 'Director of Sales',
    company: 'Prestige Living Spaces',
    industry: 'Real Estate',
    quote:
      'We needed qualified buyers, not form-fillers. M Square delivered 800+ MQLs in 60 days at a CPL 38% below our previous agency. The CRM integration meant our sales team had context on every lead before the first call.',
    metric: '800+',
    metricLabel: 'MQLs / 60 days',
  },
  {
    id: 'saas-01',
    name: 'Kiran Bose',
    role: 'Head of Growth',
    company: 'Clarix SaaS',
    industry: 'B2B SaaS',
    quote:
      'The brand relaunch M Square executed was transformative. Trial-to-paid conversion doubled within six weeks. They understood positioning, not just design — and that\'s rare.',
    metric: '2.1x',
    metricLabel: 'Trial → Paid Conversion',
  },
  {
    id: 'healthtech-01',
    name: 'Dr. Sunita Rao',
    role: 'Co-Founder',
    company: 'MedAssist HealthTech',
    industry: 'Healthcare',
    quote:
      'Our manual patient scheduling was costing us hours every day. M Square built a custom automation stack that eliminated 80% of that overhead in four months — and our error rate dropped to near zero.',
    metric: '80%',
    metricLabel: 'Manual Process Reduction',
  },
]

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const seoMeta = {
  home: {
    title: 'M Square — Tech-First Digital Growth Studio | Bangalore',
    description:
      'M Square is a tech-first growth studio that combines high-performance web development, app engineering, and full-funnel marketing to scale ambitious brands. Based in Bangalore, serving globally.',
    keywords:
      'digital growth agency, performance marketing agency India, Next.js development, web development Bangalore, SEO agency India, automation agency, UI UX design agency, brand strategy',
  },
  about: {
    title: 'About M Square — 26+ Years of Digital Innovation',
    description:
      'Since 1996, M Square has been at the forefront of digital transformation. Learn about our mission, values, industry verticals, and the team building growth ecosystems for global brands.',
    keywords:
      'about M Square, digital agency Bangalore, IT solutions partner India, growth studio, digital transformation agency',
  },
  services: {
    title: 'Services — Enterprise AI, Full-Stack Engineering & Strategic Marketing | M Square',
    description:
      'Explore M Square\'s full service catalog: Enterprise AI, web & app development, UI/UX design, SEO, performance marketing, social media management, and business automation.',
    keywords:
      'web development services India, performance marketing services, SEO services Bangalore, app development agency, UI UX design services, business automation, AI solutions India',
  },
  blog: {
    title: 'Growth Blog — Insights, Case Studies & Playbooks | M Square',
    description:
      'Tactical growth playbooks, engineering deep-dives, and case study breakdowns from the M Square team. Published weekly.',
    keywords:
      'digital marketing blog India, growth hacking, Next.js blog, automation case studies, performance marketing playbook, SEO tips',
  },
  contact: {
    title: 'Contact M Square — Let\'s Scale Your Brand',
    description:
      'Get in touch with M Square. We respond within 24 hours. Offices in Bangalore, Dubai, and London. Email: hello@msquareprofessionals.com',
    keywords:
      'contact M Square, digital agency contact Bangalore, hire growth agency India, web development quote',
  },
  privacy: {
    title: 'Privacy Policy | M Square',
    description:
      'How M Square collects, uses, and protects your personal data. GDPR and CCPA compliant. Data controller: privacy@msquare.agency',
    keywords: 'M Square privacy policy, GDPR compliant, data protection',
  },
  terms: {
    title: 'Terms of Service | M Square',
    description:
      'Terms and conditions governing your use of M Square services and website. Governed by Indian law, Bangalore jurisdiction.',
    keywords: 'M Square terms of service, service agreement, terms and conditions',
  },
}
