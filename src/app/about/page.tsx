'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Target,
  Zap,
  Lightbulb,
  Users,
  HeartPulse,
  GraduationCap,
  Building2,
  Landmark,
  Quote,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { brand, stats, verticals, testimonials } from '@/data/content'

// Map icon string → Lucide component
const VERTICAL_ICONS: Record<string, React.ElementType> = {
  HeartPulse,
  GraduationCap,
  Building2,
  Landmark,
}

const VALUES = [
  {
    icon: Target,
    title: 'Results-Driven',
    description:
      'We measure success by one metric: your growth. Every strategy, every sprint, every deliverable is designed to move a number that matters to your business.',
  },
  {
    icon: Zap,
    title: 'Acceleration First',
    description:
      'We don\'t solve problems once — we build systems that prevent them from recurring and create compounding advantages over time.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation at Core',
    description:
      'From enterprise AI to Awwwards-level design, we operate at the frontier — bringing capabilities to our clients before those capabilities become commodities.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description:
      'We become an extension of your team, embedded in your goals, your cadence, and your culture. Your success is the only KPI that matters here.',
  },
]

const TIMELINE = [
  {
    year: '1996',
    title: 'Founded',
    description:
      'Msquare Professionals established with a singular mission: to become the most trusted IT solutions partner for businesses navigating digital complexity.',
  },
  {
    year: '2004',
    title: 'Enterprise Expansion',
    description:
      'Expanded into enterprise software development and embedded systems, serving clients across healthcare, education, and financial services.',
  },
  {
    year: '2012',
    title: 'Digital Marketing Arm',
    description:
      'Launched our integrated marketing division — combining performance media, SEO, and brand strategy under one roof with our engineering capabilities.',
  },
  {
    year: '2018',
    title: 'Global Reach',
    description:
      'Opened regional offices in Dubai and London, extending our reach to MENA and European markets while headquartering innovation in Bangalore.',
  },
  {
    year: '2022',
    title: 'AI-First Pivot',
    description:
      'Launched our Enterprise AI practice, embedding intelligent automation and machine learning into client workflows — from document processing to predictive analytics.',
  },
  {
    year: '2025',
    title: 'Platform Era',
    description:
      'Crossed 100+ platforms designed and deployed. Rebranded as M Square to reflect our evolution into a full-spectrum digital acceleration partner.',
  },
]

const APPROACH = [
  {
    step: '01',
    title: 'Diagnose',
    description:
      'We audit your digital ecosystem, competitive landscape, and business model to surface the highest-leverage opportunities — not symptoms.',
    color: 'text-primary-orange',
  },
  {
    step: '02',
    title: 'Architect',
    description:
      'We design a system — not a campaign. Technology, marketing, and data are planned as an integrated growth engine from day one.',
    color: 'text-primary-blue',
  },
  {
    step: '03',
    title: 'Execute',
    description:
      'We ship with precision in focused sprints, measuring every signal and compounding on what works — no set-and-forget.',
    color: 'text-primary-orange',
  },
]

export default function AboutPage() {
  const yearsActive = new Date().getFullYear() - brand.foundedYear

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ── Hero ── */}
      <section className="section-padding border-b border-zinc-900">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-medium tracking-widest uppercase mb-6">
              Our Story
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              {yearsActive}+ Years of
              <span className="block text-zinc-500">Digital Transformation</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mb-12">
              {brand.mission}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-12">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className={`font-display text-4xl font-bold mb-1 ${s.accent === 'orange' ? 'text-primary-orange' : 'text-primary-blue'}`}>
                    {s.value}
                  </div>
                  <div className="text-zinc-500 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding bg-zinc-950 border-b border-zinc-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-medium text-primary-orange tracking-widest uppercase block mb-4">
                Mission
              </span>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Why We Exist
              </h2>
              <p className="text-zinc-400 leading-relaxed">{brand.mission}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-medium text-primary-blue tracking-widest uppercase block mb-4">
                Vision
              </span>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Where We&apos;re Going
              </h2>
              <p className="text-zinc-400 leading-relaxed">{brand.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding border-b border-zinc-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4">
              Our Philosophy
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              The operating principles that guide every engagement, every build, every result.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors duration-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-orange/20 to-primary-blue/20 rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-display text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="section-padding bg-zinc-950 border-b border-zinc-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4">
              The M Square Approach
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              A three-phase methodology built for sustainable, compounding growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {APPROACH.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8"
              >
                <div className={`font-display text-5xl font-bold mb-4 ${step.color}`}>{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-padding border-b border-zinc-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Nearly three decades of building, shipping, and evolving — from IT solutions pioneer to AI-first growth studio.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-orange via-primary-blue to-primary-orange" />
            <div className="space-y-10">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8"
                >
                  <div className="w-16 h-16 bg-zinc-950 border-2 border-primary-orange rounded-full flex items-center justify-center z-10 flex-shrink-0">
                    <span className="text-xs font-bold text-primary-orange">{item.year}</span>
                  </div>
                  <div className="flex-1 bg-zinc-950 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Verticals ── */}
      <section className="section-padding bg-zinc-950 border-b border-zinc-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs font-medium text-primary-orange tracking-widest uppercase block mb-4">
              Industries We Serve
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4">
              Built for Your Sector
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Deep vertical expertise means we understand your compliance requirements, your user personas, and your competitive dynamics before we write a single line of code.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.map((v, index) => {
              const Icon = VERTICAL_ICONS[v.icon] ?? Lightbulb
              return (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-primary-orange/30 transition-colors duration-200 group"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 bg-primary-orange/10 border border-primary-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary-orange group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-zinc-500 tracking-widest uppercase block mb-1">
                        {v.sector}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-white">{v.label}</h3>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">{v.description}</p>
                  <ul className="space-y-2">
                    {v.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-zinc-500">
                        <span className="w-1 h-1 rounded-full bg-primary-orange mt-2 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding border-b border-zinc-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4">
              Client Stories
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Don&apos;t take our word for it — take theirs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-6 hover:border-zinc-700 transition-colors duration-200"
              >
                <Quote className="h-6 w-6 text-primary-orange flex-shrink-0" />
                <p className="text-zinc-400 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

                {t.metric && (
                  <div className="border-t border-zinc-800 pt-4">
                    <span className="font-display text-3xl font-bold text-primary-orange">{t.metric}</span>
                    <span className="ml-2 text-zinc-500 text-sm">{t.metricLabel}</span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-orange to-primary-blue flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-zinc-500 text-xs">{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
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
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Build Your Legacy?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our unique approach to digital acceleration can transform your business.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-black hover:bg-zinc-100 border-white text-lg px-8 py-4 group"
            aria-label="Scale your brand — contact M Square"
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
