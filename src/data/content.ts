// ─── Brand & Mission ─────────────────────────────────────────────────────────

export const brand = {
  name: 'MSquare',
  legalName: 'MSquare Professionals Pvt. Ltd.',
  tagline: 'One Partner. One Ecosystem. Unlimited Growth.',
  positioning:
    'MSquare Professionals Pvt. Ltd. is a Business Growth Infrastructure Company that helps organizations attract customers, automate operations, and scale through connected technology ecosystems.',
  mission:
    'To empower businesses with integrated marketing, automation, and technology solutions that transform growth from a challenge into a predictable and scalable process.',
  vision:
    'To become the most trusted Business Growth Infrastructure Company, enabling organizations to build intelligent, connected systems that simplify operations, accelerate growth, and create lasting competitive advantages.',
  about:
    'Businesses today face a common challenge: growth is managed through disconnected systems, multiple service providers, and fragmented processes. MSquare was founded to solve this. We bring together Growth Marketing, Business Automation, and Custom Software Development under one roof — creating connected ecosystems that drive measurable business outcomes.',
  foundedYear: 2023,
  incorporatedYear: 2026,
}

// ─── Stats & Social Proof ─────────────────────────────────────────────────────

export const stats = [
  { value: '100+', label: 'Platforms Built', accent: 'orange' as const },
  { value: '3', label: 'Core Practice Areas', accent: 'blue' as const },
  { value: '98%', label: 'Client Retention', accent: 'orange' as const },
  { value: '3.2x', label: 'Average ROI Delivered', accent: 'blue' as const },
]

// ─── Contact & Offices ────────────────────────────────────────────────────────

export const contact = {
  email: 'info@msquareprofessionals.com',
  legalEmail: 'info@msquareprofessionals.com',
  privacyEmail: 'info@msquareprofessionals.com',
  phone: '+91 9870202444',
  responseTime: '24 hours',
}

export const offices = [
  {
    city: 'Gurugram',
    country: 'India',
    region: 'Headquarters',
    address: 'SCO 40, 4th Floor, Civil Line, Sector 15, Gurugram, Haryana 122002',
    phone: '+91 9870202444',
    email: 'info@msquareprofessionals.com',
    timezone: 'IST (UTC +5:30)',
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
    sector: 'Healthcare Organizations',
    headline: 'Growth Systems for Healthcare',
    description:
      'Patient acquisition, CRM automation, appointment management, and digital presence for hospitals, clinics, and health-tech companies.',
    capabilities: [
      'Patient lead generation & nurturing',
      'Healthcare CRM & appointment systems',
      'Telemedicine platform development',
      'Healthcare SEO & digital marketing',
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'education',
    label: 'Education',
    sector: 'Educational Institutions',
    headline: 'EdTech & Institutional Growth',
    description:
      'Student enrollment marketing, LMS platforms, fee management automation, and digital transformation for schools, colleges, and edtech companies.',
    capabilities: [
      'Student enrollment campaigns',
      'LMS & learning platform development',
      'Fee collection & ERP automation',
      'Brand building for institutions',
    ],
    icon: 'GraduationCap',
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    sector: 'Real Estate & PropTech',
    headline: 'PropTech That Converts Buyers',
    description:
      'High-intent lead generation, CRM pipelines, site visit automation, and digital marketing for developers, brokers, and property management firms.',
    capabilities: [
      'High-intent buyer lead generation',
      'Real estate CRM & pipeline automation',
      'Site visit scheduling systems',
      'Performance marketing for developers',
    ],
    icon: 'Building2',
  },
  {
    id: 'retail',
    label: 'Retail & Manufacturing',
    sector: 'Retail & Manufacturing',
    headline: 'Operations & Growth for Retailers',
    description:
      'Inventory management, sales automation, e-commerce development, and performance marketing for retail businesses and manufacturers.',
    capabilities: [
      'E-commerce development & marketing',
      'Inventory & order management systems',
      'Sales team automation & CRM',
      'Supply chain digitization',
    ],
    icon: 'ShoppingBag',
  },
]

// ─── Why MSquare ──────────────────────────────────────────────────────────────

export const whyUs = [
  {
    title: 'One Partner. One Ecosystem.',
    description:
      'Marketing, automation, and technology solutions designed to work together seamlessly — no more juggling multiple vendors.',
  },
  {
    title: 'Growth-Focused Approach',
    description:
      'Every solution is built around improving business performance, operational efficiency, and customer acquisition.',
  },
  {
    title: 'Technology-Led Execution',
    description:
      'Strong software development and automation expertise enable us to solve business challenges beyond conventional marketing.',
  },
  {
    title: 'End-to-End Capability',
    description:
      'From generating leads to managing customers and automating operations, we support the complete growth journey.',
  },
  {
    title: 'Customized Solutions',
    description:
      'Every business is different. Our strategies, systems, and applications are tailored to specific goals and requirements.',
  },
  {
    title: 'Measurable Business Impact',
    description:
      'We focus on delivering solutions that create tangible improvements in growth, efficiency, productivity, and profitability.',
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
    industry: 'Retail',
    quote:
      'MSquare didn\'t just run our ads — they rebuilt our entire growth system. Lead quality improved dramatically and our sales team now works from a single automated pipeline. The results were visible within 60 days.',
    metric: '3.8x',
    metricLabel: 'Revenue Growth',
  },
  {
    id: 'realestate-01',
    name: 'Arjun Mehta',
    role: 'Director of Sales',
    company: 'Prestige Living Spaces',
    industry: 'Real Estate',
    quote:
      'We needed qualified buyers, not form-fillers. MSquare delivered 800+ MQLs in 60 days at a CPL 38% below our previous agency. The CRM integration meant our sales team had full context on every lead before the first call.',
    metric: '800+',
    metricLabel: 'MQLs in 60 days',
  },
  {
    id: 'education-01',
    name: 'Dr. Rajesh Kumar',
    role: 'Director',
    company: 'Horizon Academy',
    industry: 'Education',
    quote:
      'From student enrollment campaigns to automating our fee collection and attendance systems — MSquare transformed how our institution operates. We now run leaner and grow faster.',
    metric: '2.4x',
    metricLabel: 'Enrollment Growth',
  },
  {
    id: 'healthtech-01',
    name: 'Dr. Sunita Rao',
    role: 'Co-Founder',
    company: 'MedAssist HealthTech',
    industry: 'Healthcare',
    quote:
      'Our manual patient scheduling was costing us hours every day. MSquare built a custom automation stack that eliminated 80% of that overhead in four months — and our error rate dropped to near zero.',
    metric: '80%',
    metricLabel: 'Process Automation',
  },
]

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const seoMeta = {
  home: {
    title: 'MSquare Professionals — Business Growth Infrastructure Company | Gurugram',
    description:
      'MSquare Professionals Pvt. Ltd. helps businesses attract customers, automate operations, and scale through connected technology ecosystems. Growth Marketing, Business Automation & Custom Software — Gurugram, India.',
    keywords:
      'business growth infrastructure, performance marketing Gurugram, CRM solutions India, business automation, custom software development, lead generation India, workflow automation, web development Gurugram',
  },
  about: {
    title: 'About MSquare — Building Growth Infrastructure Since 2023',
    description:
      'Learn about MSquare Professionals Pvt. Ltd. — our mission, vision, and approach to building connected growth ecosystems for startups, enterprises, educational institutions, and healthcare organizations.',
    keywords:
      'about MSquare Professionals, business growth company Gurugram, IT solutions partner India, growth infrastructure company',
  },
  services: {
    title: 'Services — Growth Marketing, Business Automation & Technology Solutions | MSquare',
    description:
      'MSquare offers Growth Marketing (SEO, SEM, Lead Gen), Business Automation (CRM, Workflow, Sales Automation), and Technology Solutions (Custom Software, Web, Mobile Apps) — all under one roof.',
    keywords:
      'performance marketing India, CRM solutions Gurugram, workflow automation, custom software development India, lead management system, web application development, mobile app development',
  },
  blog: {
    title: 'Insights — Growth, Automation & Technology | MSquare',
    description:
      'Practical insights on business growth, marketing automation, CRM implementation, and technology from the MSquare team.',
    keywords:
      'business growth blog India, marketing automation insights, CRM tips, software development blog, lead generation strategies',
  },
  contact: {
    title: "Contact MSquare — Let's Build Your Growth System",
    description:
      'Get in touch with MSquare Professionals Pvt. Ltd. Office: SCO 40, 4th Floor, Civil Line, Sector 15, Gurugram, Haryana 122002. Email: info@msquareprofessionals.com | +91 9870202444.',
    keywords:
      'contact MSquare Professionals, business growth company Gurugram, hire automation agency India',
  },
  privacy: {
    title: 'Privacy Policy | MSquare Professionals',
    description:
      'How MSquare Professionals Pvt. Ltd. collects, uses, and protects your personal data. GDPR and CCPA compliant.',
    keywords: 'MSquare privacy policy, data protection India',
  },
  terms: {
    title: 'Terms of Service | MSquare Professionals',
    description:
      'Terms and conditions governing your use of MSquare Professionals services and website. Governed by Indian law, Gurugram jurisdiction.',
    keywords: 'MSquare terms of service, service agreement',
  },
}
