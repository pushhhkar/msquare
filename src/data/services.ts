import {
  BrainCircuit,
  Bot,
  DatabaseZap,
  ScanSearch,
  Code2,
  Smartphone,
  Palette,
  Cog,
  TrendingUp,
  Share2,
  Megaphone,
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
    id: 'enterprise-ai',
    label: 'Pillar I',
    headline: 'Enterprise AI',
    subtext:
      'We embed intelligent automation and machine-learning capabilities directly into your business workflows — turning data into decisions and manual effort into scalable systems.',
    accentColor: 'purple',
    services: [
      {
        id: 'ai-strategy',
        icon: BrainCircuit,
        title: 'AI Strategy & Consulting',
        description:
          'We audit your operations, identify high-ROI automation opportunities, and build an AI adoption roadmap aligned to your business outcomes — not vendor roadmaps.',
        features: [
          'AI readiness assessment',
          'Use-case prioritisation & ROI modelling',
          'LLM selection & prompt engineering',
          'Responsible AI governance framework',
        ],
      },
      {
        id: 'ai-automation',
        icon: Bot,
        title: 'Intelligent Process Automation',
        description:
          'Replace repetitive workflows with AI-powered bots — from document processing to customer support triage — integrated seamlessly with your existing stack.',
        features: [
          'RPA & AI workflow design',
          'Conversational AI & chatbot development',
          'Document intelligence (OCR + NLP)',
          'Automated reporting & alerting',
        ],
      },
      {
        id: 'data-analytics',
        icon: DatabaseZap,
        title: 'Data Engineering & Analytics',
        description:
          'We design data pipelines, build unified dashboards, and surface predictive insights so your leadership can act on reality — not guesswork.',
        features: [
          'Data warehouse design & ETL',
          'Real-time analytics dashboards',
          'Predictive modelling & forecasting',
          'Business intelligence (BI) integrations',
        ],
      },
      {
        id: 'ai-search-seo',
        icon: ScanSearch,
        title: 'AI-Powered SEO',
        description:
          'Semantic search optimisation, AI content scaling, and technical SEO engineered to dominate both traditional search and emerging AI search surfaces.',
        features: [
          'Semantic & entity-based SEO',
          'AI content strategy & production',
          'Core Web Vitals & technical SEO',
          'AI search (SGE/GEO) optimisation',
        ],
      },
    ],
  },
  {
    id: 'full-stack-engineering',
    label: 'Pillar II',
    headline: 'Full-Stack Engineering',
    subtext:
      'We architect high-performance digital products — from blazing-fast web experiences and native-quality mobile apps to embedded systems and bespoke enterprise software.',
    accentColor: 'blue',
    services: [
      {
        id: 'web-development',
        icon: Code2,
        title: 'Web Development',
        description:
          'High-performance Next.js sites engineered for sub-second load times, perfect Core Web Vitals, and conversion-optimised UX at any scale.',
        features: [
          'Next.js 14 & React Server Components',
          'E-commerce & Headless CMS',
          'API & third-party integrations',
          'Performance & Core Web Vitals optimisation',
        ],
      },
      {
        id: 'app-development',
        icon: Smartphone,
        title: 'App Development',
        description:
          'Native-quality iOS & Android solutions built with React Native — one codebase, zero compromise on feel, responsiveness, or offline capability.',
        features: [
          'Cross-platform React Native',
          'Offline-first architecture',
          'Push notifications & deep linking',
          'App Store Optimisation (ASO)',
        ],
      },
      {
        id: 'ui-ux-design',
        icon: Palette,
        title: 'UI/UX Design',
        description:
          'Awwwards-level interface design rooted in user psychology — every pixel earns its place by advancing the conversion goal.',
        features: [
          'User research & journey mapping',
          'Figma prototyping & design systems',
          'Conversion rate optimisation (CRO)',
          'Accessibility (WCAG 2.1 AA)',
        ],
      },
      {
        id: 'software-solutions',
        icon: Cog,
        title: 'Software Solutions',
        description:
          'Custom CRM, ERP, embedded systems, and automation platforms that eliminate manual overhead and scale with your operations.',
        features: [
          'Workflow & process automation',
          'CRM & ERP development',
          'Embedded systems & IoT',
          'Legacy system modernisation',
        ],
      },
    ],
  },
  {
    id: 'strategic-marketing',
    label: 'Pillar III',
    headline: 'Strategic Marketing',
    subtext:
      'Full-funnel growth execution — from performance media that compounds ROAS, to viral content, influencer ecosystems, and brand narratives that command premium positioning.',
    accentColor: 'orange',
    services: [
      {
        id: 'performance-marketing',
        icon: TrendingUp,
        title: 'Performance Marketing',
        description:
          'SEO, PPC, and high-ROI lead generation across Meta, Google, and YouTube — data-driven from first impression to closed deal, with attribution that actually works.',
        features: [
          'Google Ads & Meta Ads management',
          'Technical SEO & content strategy',
          'Conversion tracking & attribution',
          'CPA optimisation & scaling playbooks',
        ],
      },
      {
        id: 'social-mastery',
        icon: Share2,
        title: 'Social Mastery',
        description:
          'Community-building, influencer partnerships, and PR amplification that turn your brand into a category authority with compounding organic reach.',
        features: [
          'Social media management (SMM)',
          'Influencer & creator partnerships',
          'PR & media outreach',
          'Viral reels & short-form content',
        ],
      },
      {
        id: 'traditional-edge',
        icon: Megaphone,
        title: 'Traditional Edge',
        description:
          'Out-of-home advertising, comprehensive branding kits, and market research that anchor your digital momentum in the physical world.',
        features: [
          'OOH & DOOH advertising',
          'Brand identity & style guides',
          'Market research & competitive analysis',
          'Print & collateral design',
        ],
      },
    ],
  },
]
