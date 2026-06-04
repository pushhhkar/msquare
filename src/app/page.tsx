'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, TrendingUp, Cog, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { stats as siteStats, brand } from '@/data/content'

const MARKETING_ITEMS = [
  'Performance Marketing & Lead Generation',
  'SEO, SEM & Search Dominance',
  'Social Media Marketing',
  'Branding & Digital Strategy',
]

const AUTOMATION_ITEMS = [
  'CRM Solutions & Lead Management',
  'Workflow & Sales Automation',
  'Attendance Management Systems',
  'Process Digitization',
]

const TECH_ITEMS = [
  'Custom Software & Web Applications',
  'Mobile Apps (iOS & Android)',
  'Enterprise Software Solutions',
  'API Integrations & Automation Platforms',
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative min-h-[600px] flex items-center pt-1 pb-10 sm:pt-2 sm:pb-12 md:pt-3 md:pb-14 lg:pt-4 lg:pb-20 overflow-hidden">
        <Image
          src="/msquarebg.png"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="container-custom relative z-10 w-full">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-3 sm:mb-4"
            >
              <span className="inline-block px-4 py-2 bg-primary-orange/10 border border-primary-orange/20 rounded-full text-primary-orange text-xs sm:text-sm font-medium tracking-wide">
                BUSINESS GROWTH INFRASTRUCTURE COMPANY
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Building Growth Infrastructure
              <span className="block text-zinc-400 mt-1 sm:mt-2">for Modern Businesses.</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-10 sm:mb-16 max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {brand.positioning}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 group" aria-label="Build your growth system with MSquare">
                <Link href="/contact">
                  Build Your Growth System
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light">
              From startups to enterprises — we build the systems that make growth predictable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:border-zinc-700 transition-colors duration-200"
              >
                <div className={`font-display text-5xl font-bold mb-2 ${stat.accent === 'orange' ? 'text-primary-orange' : 'text-primary-blue'}`}>
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
              One Partner. One Ecosystem.
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Marketing, automation, and technology — designed to work together as a single, connected growth system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Growth Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-zinc-950 border border-zinc-800 hover:border-primary-orange/40 transition-all duration-300 rounded-2xl">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-7 w-7 text-primary-orange" />
                  </div>
                  <CardTitle className="text-xl font-display text-white">Growth Marketing</CardTitle>
                  <CardDescription className="text-sm text-zinc-400">
                    Attract the right customers and generate qualified leads through data-driven marketing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {MARKETING_ITEMS.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary-orange flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Automation */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-zinc-950 border border-zinc-800 hover:border-primary-blue/40 transition-all duration-300 rounded-2xl">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <Cog className="h-7 w-7 text-primary-blue" />
                  </div>
                  <CardTitle className="text-xl font-display text-white">Business Automation</CardTitle>
                  <CardDescription className="text-sm text-zinc-400">
                    Eliminate manual work and build connected systems that scale your operations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {AUTOMATION_ITEMS.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Technology Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-zinc-950 border border-zinc-800 hover:border-zinc-600/40 transition-all duration-300 rounded-2xl">
                <CardHeader>
                  <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
                    <Code2 className="h-7 w-7 text-zinc-300" />
                  </div>
                  <CardTitle className="text-xl font-display text-white">Technology Solutions</CardTitle>
                  <CardDescription className="text-sm text-zinc-400">
                    Custom software, web and mobile apps, and enterprise platforms built for your business.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {TECH_ITEMS.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
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
            Stop managing disconnected systems. Let&apos;s build a connected growth ecosystem that
            attracts customers, automates operations, and scales with confidence.
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
