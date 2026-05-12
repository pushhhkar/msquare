'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Award,
  ShoppingBag,
  Home,
  Lightbulb,
  HeartPulse,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { stats } from '@/data/content'

interface CaseStudy {
  id: string
  client: string
  sector: string
  icon: React.ElementType
  title: string
  problem: string
  strategy: string
  execution: string[]
  results: { label: string; value: string; accent: 'orange' | 'blue' }[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-retail',
    client: 'Nair Retail Brands',
    sector: 'E-Commerce',
    icon: ShoppingBag,
    title: 'Elevating E-Commerce: 4.1x ROAS in 90 Days',
    problem:
      'A Bangalore-based fashion retailer was burning ad spend on broad Meta targeting, achieving under 1.8x ROAS with no attribution visibility beyond the last click.',
    strategy:
      'Rebuilt the full acquisition funnel — from creative strategy and audience architecture to landing page redesign and server-side attribution — treating media and product as a single system.',
    execution: [
      'Audience segmentation: LAL stacking + retargeting tiered by intent signal',
      'UGC-first creative framework: 12 ad variations A/B tested in 2-week sprints',
      'Next.js landing page: LCP < 1s, 68% reduction in bounce rate',
      'Server-side Meta CAPI + GA4 attribution — no more iOS 14 blind spots',
    ],
    results: [
      { label: 'ROAS', value: '4.1x', accent: 'orange' },
      { label: 'CAC Reduction', value: '44%', accent: 'blue' },
      { label: 'Timeline', value: '90 days', accent: 'orange' },
      { label: 'Ad Variants Tested', value: '12', accent: 'blue' },
    ],
  },
  {
    id: 'real-estate-leads',
    client: 'Prestige Living Spaces',
    sector: 'Real Estate / PropTech',
    icon: Home,
    title: 'Real Estate Lead Gen: 800+ MQLs in 60 Days',
    problem:
      'A premium residential developer needed high-intent qualified buyers — not form-fillers. Existing campaigns had a high volume of leads but a <3% sales-conversation rate.',
    strategy:
      'Hyper-localised Meta and Google campaigns with a multi-step qualification funnel, paired with CRM automation that enriched leads with behavioural signals before the first sales call.',
    execution: [
      'Geo-fenced Meta campaigns targeting micro-neighbourhoods of target buyers',
      'Multi-step Typeform qualification funnel with conditional logic',
      'HubSpot CRM automation: lead scoring + instant WhatsApp + email sequences',
      'CPL tracking dashboard with real-time sales team handoff alerts',
    ],
    results: [
      { label: 'MQLs Generated', value: '800+', accent: 'orange' },
      { label: 'CPL vs Industry', value: '−38%', accent: 'blue' },
      { label: 'Sales Conversation Rate', value: '11%', accent: 'orange' },
      { label: 'Timeline', value: '60 days', accent: 'blue' },
    ],
  },
  {
    id: 'saas-brand-relaunch',
    client: 'Clarix SaaS',
    sector: 'B2B SaaS',
    icon: Lightbulb,
    title: 'SaaS Brand Relaunch: 2.1x Trial-to-Paid Conversion',
    problem:
      'A B2B SaaS company was losing deals to competitors with inferior products but stronger positioning. Their homepage communicated features, not outcomes — and their brand felt generic in a crowded space.',
    strategy:
      'End-to-end brand repositioning: new narrative architecture, visual identity system, website redesign, and onboarding flow — all tested against the original in a 3-week live split.',
    execution: [
      'Competitor narrative audit and whitespace positioning analysis',
      'Brand voice guide: tone principles, messaging hierarchy, and proof structure',
      'Figma design system: 60+ components, 4 page templates',
      'Rebuilt onboarding: 6-step flow reduced to 3, with contextual tooltips',
    ],
    results: [
      { label: 'Trial → Paid Conversion', value: '2.1x', accent: 'orange' },
      { label: 'Time to First Value', value: '−52%', accent: 'blue' },
      { label: 'Demo Request Rate', value: '+89%', accent: 'orange' },
      { label: 'Design Components', value: '60+', accent: 'blue' },
    ],
  },
  {
    id: 'healthtech-automation',
    client: 'MedAssist HealthTech',
    sector: 'Healthcare / HealthTech',
    icon: HeartPulse,
    title: 'Automating 80% of Manual Processes for a HealthTech Platform',
    problem:
      'A telemedicine platform was losing 4+ hours daily to manual appointment scheduling, billing reconciliation, and patient follow-up — leading to staff burnout and patient drop-off.',
    strategy:
      'Custom automation stack built on Make (Integromat), a bespoke CRM, and a patient portal — replacing three separate SaaS tools and eliminating all manual handoffs.',
    execution: [
      'Custom patient CRM: appointment lifecycle, billing, and notes in one view',
      'Make automation: appointment booking → confirmation → reminder → follow-up, zero-touch',
      'Medical billing API integration: automated reconciliation and rejection handling',
      'Real-time analytics dashboard: capacity, utilisation, and NPS tracking',
    ],
    results: [
      { label: 'Manual Process Reduction', value: '80%', accent: 'orange' },
      { label: 'Error Rate', value: '−95%', accent: 'blue' },
      { label: 'Staff Hours Saved / Week', value: '28h', accent: 'orange' },
      { label: 'Timeline', value: '4 months', accent: 'blue' },
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ── Hero ── */}
      <section className="section-padding border-b border-zinc-900">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-medium tracking-widest uppercase mb-6">
              Proof of Work
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Real Results.
              <span className="block text-zinc-500">Real Growth.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mb-12">
              Over {new Date().getFullYear() - 1996}+ years and 100+ platforms designed, we&apos;ve
              learned that sustainable growth comes from systems — not campaigns. Here&apos;s the evidence.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className={`font-display text-3xl font-bold mb-1 ${s.accent === 'orange' ? 'text-primary-orange' : 'text-primary-blue'}`}>
                    {s.value}
                  </div>
                  <div className="text-zinc-500 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Case studies ── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              const flip = index % 2 === 1
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${flip ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Graphic panel */}
                  <div className={flip ? 'lg:col-start-2' : ''}>
                    <div className="aspect-video bg-zinc-950 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:border-primary-orange/30 transition-colors duration-300">
                      <div className="w-20 h-20 bg-primary-orange/10 border border-primary-orange/20 rounded-2xl flex items-center justify-center">
                        <Icon className="h-10 w-10 text-primary-orange" />
                      </div>
                      <div className="text-center px-8">
                        <span className="text-xs font-medium text-zinc-500 tracking-widest uppercase block mb-1">
                          {study.sector}
                        </span>
                        <span className="text-zinc-300 text-sm">{study.client}</span>
                      </div>
                    </div>

                    {/* Result chips */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {study.results.map((r) => (
                        <div
                          key={r.label}
                          className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-center"
                        >
                          <div className={`font-display text-2xl font-bold mb-0.5 ${r.accent === 'orange' ? 'text-primary-orange' : 'text-primary-blue'}`}>
                            {r.value}
                          </div>
                          <div className="text-zinc-500 text-xs">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className={flip ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-orange mb-4">
                      <BarChart3 className="h-3.5 w-3.5" />
                      {study.sector}
                    </span>

                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                      {study.title}
                    </h2>

                    <div className="space-y-5 mb-8">
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-2">
                          The Problem
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">{study.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-2">
                          Our Strategy
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">{study.strategy}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-2">
                          Execution
                        </h3>
                        <ul className="space-y-2">
                          {study.execution.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <CheckCircle2 className="h-4 w-4 text-primary-orange flex-shrink-0 mt-0.5" />
                              <span className="text-zinc-400 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-orange to-primary-blue">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="h-8 w-8 text-white" aria-hidden="true" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Join the 100+ brands that have transformed their digital presence with M Square
            across three decades of building, shipping, and growing.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            aria-label="Start your project with M Square"
            className="bg-white text-black hover:bg-zinc-100 border-white text-lg px-8 py-4 group"
          >
            <Link href="/contact">
              Scale Your Brand
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
