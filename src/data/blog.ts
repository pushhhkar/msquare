import { Zap, TrendingUp, BarChart3, Lightbulb, Home, ShoppingBag } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Category = 'Automation' | 'Marketing' | 'Tech' | 'Brand' | 'Case Study'

export interface Post {
  slug: string
  category: Category
  categoryIcon: LucideIcon
  title: string
  excerpt: string
  date: string
  featured?: boolean
}

export const posts: Post[] = [
  // ── Featured Project Spotlight ──────────────────────────────────────────────
  {
    slug: 'ecommerce-retail-brand-elevation',
    category: 'Case Study',
    categoryIcon: ShoppingBag,
    title: 'Elevating E-Commerce for a Mid-Size Retail Brand: 4.1x ROAS in 90 Days',
    excerpt:
      'A Bangalore-based fashion retailer was burning budget on broad targeting with under 1.8x ROAS. We rebuilt their funnel from creative to landing page — slashing CAC by 44% and pushing ROAS to 4.1x within one quarter.',
    date: 'April 28, 2025',
    featured: true,
  },

  // ── Project Spotlights ───────────────────────────────────────────────────────
  {
    slug: 'real-estate-lead-gen-strategies',
    category: 'Case Study',
    categoryIcon: Home,
    title: 'Real Estate Lead Gen: How We Generated 800+ Qualified Leads in 60 Days',
    excerpt:
      'A premium residential developer needed high-intent buyers, not form-fillers. Our hyper-localised Meta campaigns combined with a CRM automation pipeline delivered 800+ MQLs — at a cost per lead 38% below the industry average.',
    date: 'March 15, 2025',
  },
  {
    slug: 'saas-brand-identity-relaunch',
    category: 'Case Study',
    categoryIcon: Lightbulb,
    title: 'From Generic to Premium: SaaS Brand Identity Relaunch That Doubled Trial Signups',
    excerpt:
      'When a B2B SaaS client struggled to differentiate in a crowded market, we rebuilt their visual identity, messaging framework, and onboarding flow — resulting in a 2.1x lift in free-trial-to-paid conversion within six weeks of launch.',
    date: 'February 10, 2025',
  },

  // ── Insight Articles ─────────────────────────────────────────────────────────
  {
    slug: 'how-automation-drives-3x-roi',
    category: 'Automation',
    categoryIcon: Zap,
    title: 'How Business Automation Delivered 3x ROI for Our Clients in 2024',
    excerpt:
      'We analysed 40+ automation projects and found one pattern that separates 2x results from 10x results. It starts before a single line of code is written.',
    date: 'May 2, 2025',
  },
  {
    slug: 'performance-marketing-playbook',
    category: 'Marketing',
    categoryIcon: TrendingUp,
    title: 'The Performance Marketing Playbook for D2C Brands in India',
    excerpt:
      'CAC is rising. Attention spans are shrinking. Here is the framework we use to keep ROAS above 4x across Meta, Google, and YouTube Shorts simultaneously.',
    date: 'April 18, 2025',
  },
  {
    slug: 'nextjs-vs-wordpress-agency-sites',
    category: 'Tech',
    categoryIcon: BarChart3,
    title: 'Next.js vs WordPress for Agency Websites: A Performance Breakdown',
    excerpt:
      'We migrated a 200-page client site from WordPress to Next.js. LCP dropped from 4.2s to 0.8s. Here is everything we measured, and why it matters for SEO.',
    date: 'April 5, 2025',
  },
  {
    slug: 'crm-automation-without-code',
    category: 'Automation',
    categoryIcon: Zap,
    title: 'Building a Full CRM Automation Stack Without Writing a Single Line of Code',
    excerpt:
      'Using Make, Airtable, and a few webhooks we replaced a ₹4L/yr software subscription for a client — and improved their pipeline visibility in the process.',
    date: 'March 8, 2025',
  },
  {
    slug: 'viral-reels-formula',
    category: 'Marketing',
    categoryIcon: TrendingUp,
    title: 'The Anatomy of a Viral Reel: 12 Million Views, One Framework',
    excerpt:
      'We reverse-engineered 300 viral reels across industries and distilled the hook, body, and CTA patterns that consistently outperform paid reach.',
    date: 'February 19, 2025',
  },
]

export const CATEGORIES: Array<'All' | Category> = [
  'All',
  'Case Study',
  'Automation',
  'Marketing',
  'Tech',
  'Brand',
]
