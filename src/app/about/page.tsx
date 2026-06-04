'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingBag,
  Quote,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { brand, stats, verticals, testimonials, whyUs } from '@/data/content'

const VERTICAL_ICONS: Record<string, React.ElementType> = {
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingBag,
}

const TIMELINE = [
  {
    year: '2023',
    title: 'Founded',
    description:
      'MSquare Professionals was established as a partnership firm in Gurugram, India — with a clear mission: to help businesses build connected growth systems combining marketing, automation, and technology.',
  },
  {
    year: '2024',
    title: 'Growing Client Base',
    description:
      'Expanded our team and service offerings across Growth Marketing, CRM automation, and custom software development, serving startups, educational institutions, healthcare organizations, and real estate firms.',
  },
  {
    year: '2025',
    title: '100+ Platforms Built',
    description:
      'Crossed the milestone of 100+ platforms designed and deployed. Deepened expertise in lead management systems, workflow automation, and enterprise software solutions.',
  },
  {
    year: '2026',
    title: 'Incorporated as Pvt. Ltd.',
    description:
      'In response to our growing business and expanding client base, we transitioned to MSquare Professionals Pvt. Ltd. — a Private Limited Company structure built for scale.',
  },
]

export default function AboutPage() {
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
              Building Growth Infrastructure
              <span className="block text-zinc-500">for Modern Businesses.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mb-12">
              {brand.about}
            </p>

            <div className="flex flex-wrap gap-10">
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

      {/* ── The Problem We Solve ── */}
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
                The Problem
              </span>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Why We Exist
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Businesses today face a common challenge: growth is often managed through disconnected
                  systems, multiple service providers, and fragmented processes. Marketing operates on one
                  platform, customer management on another, while operations and reporting are spread across
                  different tools.
                </p>
                <p>
                  As organizations grow, these disconnected systems create inefficiencies that slow down
                  progress and limit scalability.
                </p>
                <p className="text-white font-medium">
                  MSquare Professionals Pvt. Ltd. was founded to solve this challenge.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-medium text-primary-blue tracking-widest uppercase block mb-4">
                Our Approach
              </span>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                One Connected System
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  We believe that sustainable growth is not achieved through marketing alone, nor through
                  software in isolation. True growth happens when customer acquisition, operational
                  efficiency, and technology work together as a single system.
                </p>
                <p>
                  From attracting and converting customers to automating business processes and developing
                  custom applications, we help businesses create an environment where growth becomes
                  structured, measurable, and repeatable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding border-b border-zinc-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 lg:p-10"
            >
              <span className="text-xs font-medium text-primary-orange tracking-widest uppercase block mb-4">Mission</span>
              <h2 className="font-display text-2xl font-bold text-white mb-4">What Drives Us</h2>
              <p className="text-zinc-400 leading-relaxed">{brand.mission}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 lg:p-10"
            >
              <span className="text-xs font-medium text-primary-blue tracking-widest uppercase block mb-4">Vision</span>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Where We&apos;re Going</h2>
              <p className="text-zinc-400 leading-relaxed">{brand.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why MSquare ── */}
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
              Why MSquare
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Unlike traditional marketing agencies or standalone software vendors — we combine both disciplines to create a unified growth ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 transition-colors duration-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-orange flex-shrink-0 mt-0.5" />
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed pl-8">{item.description}</p>
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
              From a partnership firm to a Private Limited Company — building growth systems for businesses across India.
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
              We work with startups, educational institutions, healthcare organizations, retail businesses, professional service firms, manufacturers, and growing enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.map((v, index) => {
              const Icon = VERTICAL_ICONS[v.icon] ?? Building2
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
            Ready to Make Growth Predictable?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our integrated approach can help your business attract customers,
            automate operations, and scale with confidence.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-black hover:bg-zinc-100 border-white text-lg px-8 py-4 group"
            aria-label="Build your growth system with MSquare"
          >
            <Link href="/contact">
              Build Your Growth System
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
