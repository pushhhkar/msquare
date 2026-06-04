import {
  TrendingUp,
  Search,
  Share2,
  Megaphone,
  Target,
  Palette,
  Cog,
  Users,
  ClipboardList,
  Workflow,
  ShoppingCart,
  CalendarCheck,
  Code2,
  Smartphone,
  Globe,
  Building2,
  Puzzle,
  LayoutDashboard,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export interface ServicePillar {
  id: string
  label: string
  headline: string
  subtext: string
  accentColor: 'orange' | 'blue' | 'purple'
  services: Service[]
}

export const pillars: ServicePillar[] = [
  {
    id: 'growth-marketing',
    label: 'Pillar I',
    headline: 'Growth Marketing',
    subtext:
      'Data-driven marketing strategies that attract the right customers, generate qualified leads, and build brands that command attention — all measured by business impact, not vanity metrics.',
    accentColor: 'orange',
    services: [
      {
        id: 'performance-marketing',
        icon: TrendingUp,
        title: 'Performance Marketing',
        description:
          'Paid advertising across Google, Meta, and YouTube engineered for maximum ROI — from first click to closed deal, with full attribution.',
        features: [
          'Google Ads & Meta Ads management',
          'YouTube & programmatic advertising',
          'Conversion tracking & attribution',
          'CPA optimisation & scaling',
        ],
      },
      {
        id: 'lead-generation',
        icon: Target,
        title: 'Lead Generation',
        description:
          'End-to-end lead generation systems that fill your pipeline with high-intent prospects — not just form-fillers.',
        features: [
          'Inbound & outbound lead strategies',
          'Landing page design & optimisation',
          'Lead scoring & qualification',
          'Lead nurturing & drip campaigns',
        ],
      },
      {
        id: 'seo-sem',
        icon: Search,
        title: 'SEO & SEM',
        description:
          'Dominate search results organically and through paid search — capturing demand when buyers are actively looking.',
        features: [
          'Technical & on-page SEO',
          'Keyword strategy & content planning',
          'Search Engine Marketing (SEM)',
          'Local SEO for multi-location businesses',
        ],
      },
      {
        id: 'social-media',
        icon: Share2,
        title: 'Social Media Marketing',
        description:
          'Platform-native content, community management, and paid social campaigns that build audiences and drive conversions.',
        features: [
          'Content strategy & creation',
          'Community management',
          'Influencer & creator partnerships',
          'Paid social campaigns',
        ],
      },
      {
        id: 'branding',
        icon: Palette,
        title: 'Branding & Digital Strategy',
        description:
          'Brand identity, messaging frameworks, and digital strategy that position your business as the clear choice in your market.',
        features: [
          'Brand identity & visual design',
          'Messaging & positioning strategy',
          'Digital marketing roadmaps',
          'Competitive analysis',
        ],
      },
    ],
  },
  {
    id: 'business-automation',
    label: 'Pillar II',
    headline: 'Business Automation',
    subtext:
      'We eliminate manual, repetitive work by building connected automation systems — from CRM and lead management to sales pipelines, workflows, and attendance — so your team focuses on what moves the business forward.',
    accentColor: 'blue',
    services: [
      {
        id: 'crm-solutions',
        icon: Users,
        title: 'CRM Solutions',
        description:
          'Custom CRM implementations that centralize customer data, automate follow-ups, and give your team full visibility into every relationship.',
        features: [
          'CRM setup, customisation & migration',
          'Sales pipeline automation',
          'Customer segmentation & tagging',
          'Reporting & analytics dashboards',
        ],
      },
      {
        id: 'lead-management',
        icon: ClipboardList,
        title: 'Lead Management Systems',
        description:
          'End-to-end systems that capture, score, route, and nurture leads automatically — so no opportunity slips through the cracks.',
        features: [
          'Lead capture & routing automation',
          'Automated follow-up sequences',
          'Lead scoring & prioritisation',
          'CRM & marketing platform integrations',
        ],
      },
      {
        id: 'workflow-automation',
        icon: Workflow,
        title: 'Workflow Automation',
        description:
          'Map and automate your business processes — from approvals and notifications to data sync and reporting — reducing errors and saving hours every week.',
        features: [
          'Business process mapping & design',
          'No-code & custom automation builds',
          'Cross-platform data synchronisation',
          'Automated reporting & alerts',
        ],
      },
      {
        id: 'sales-automation',
        icon: ShoppingCart,
        title: 'Sales Automation',
        description:
          'Automate repetitive sales tasks so your team spends more time closing and less time on manual follow-up and data entry.',
        features: [
          'Automated outreach sequences',
          'Proposal & quote automation',
          'Sales activity tracking',
          'Revenue forecasting dashboards',
        ],
      },
      {
        id: 'attendance-management',
        icon: CalendarCheck,
        title: 'Attendance Management Systems',
        description:
          'Digital attendance, leave management, and HR automation systems for schools, enterprises, and field-based teams.',
        features: [
          'Biometric & app-based attendance',
          'Leave & holiday management',
          'Payroll integration',
          'Compliance & audit reports',
        ],
      },
    ],
  },
  {
    id: 'technology-solutions',
    label: 'Pillar III',
    headline: 'Technology Solutions',
    subtext:
      'From websites and mobile apps to enterprise software and API integrations — we build technology that solves real business problems, scales with your growth, and integrates with everything you already use.',
    accentColor: 'purple',
    services: [
      {
        id: 'custom-software',
        icon: Code2,
        title: 'Custom Software Development',
        description:
          'Bespoke software applications built around your exact business requirements — not generic off-the-shelf tools that almost fit.',
        features: [
          'Requirements analysis & architecture',
          'Full-stack application development',
          'Legacy system modernisation',
          'Ongoing maintenance & support',
        ],
      },
      {
        id: 'web-applications',
        icon: LayoutDashboard,
        title: 'Web Applications',
        description:
          'High-performance web applications — from customer portals and dashboards to complex multi-tenant SaaS platforms.',
        features: [
          'React / Next.js frontend development',
          'Scalable backend & API development',
          'Database design & optimisation',
          'Performance & security audits',
        ],
      },
      {
        id: 'mobile-apps',
        icon: Smartphone,
        title: 'Mobile Applications',
        description:
          'Native-quality iOS and Android apps that deliver smooth, reliable experiences — built for real users, not just to check a box.',
        features: [
          'Cross-platform React Native development',
          'Offline-first architecture',
          'Push notifications & deep linking',
          'App Store & Play Store deployment',
        ],
      },
      {
        id: 'website-development',
        icon: Globe,
        title: 'Website Design & Development',
        description:
          'Fast, conversion-optimised websites that represent your brand professionally and turn visitors into enquiries.',
        features: [
          'UI/UX design & prototyping',
          'Next.js & CMS development',
          'SEO-ready architecture',
          'Core Web Vitals optimisation',
        ],
      },
      {
        id: 'enterprise-software',
        icon: Building2,
        title: 'Enterprise Software Solutions',
        description:
          'ERP, inventory management, multi-branch operations, and enterprise-grade platforms built for scale and reliability.',
        features: [
          'ERP design & implementation',
          'Multi-location & multi-user systems',
          'Role-based access & permissions',
          'Enterprise security & compliance',
        ],
      },
      {
        id: 'api-integrations',
        icon: Puzzle,
        title: 'API Integrations & Automation Platforms',
        description:
          'Connect your existing tools and platforms so data flows automatically — eliminating manual data entry and system silos.',
        features: [
          'REST & GraphQL API development',
          'Third-party integrations (CRMs, ERPs, payment gateways)',
          'Zapier / Make / n8n automation builds',
          'Webhook & event-driven architectures',
        ],
      },
    ],
  },
]
