'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Code2, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { stats as siteStats } from '@/data/content'

const TECH_ITEMS = [
  'High-performance Next.js Web Development',
  'Native-quality iOS & Android Apps',
  'Awwwards-level UI/UX Design',
  'Custom CRM & Automation Platforms',
]

const MARKETING_ITEMS = [
  'SEO, PPC & High-ROI Lead Generation',
  'Social Media, Influencer Marketing & PR',
  'OOH Advertising & Branding Kits',
  'Market Research & Competitive Analysis',
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
        <div className="absolute inset-0 bg-black/55 z-[1]" />

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
                TECH-FIRST GROWTH STUDIO
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Transforming Digital Identities
              <span className="block text-zinc-400 mt-1 sm:mt-2">into Legacies.</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-10 sm:mb-16 max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At Msquare, we build robust digital ecosystems where data-driven strategy meets
              high-end design. We empower brands to scale through cutting-edge technology and
              360° marketing solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 group" aria-label="Scale your brand — contact M Square">
                <Link href="/contact">
                  Scale Your Brand
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
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light">
              100+ platforms designed. 29+ years of visionary partnership. One focus: compounding your growth.
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
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center hover:border-zinc-700 transition-colors duration-200"
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

      {/* ── Two Pillars ── */}
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
              Two Pillars of Growth
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Cutting-edge technology and full-funnel marketing — engineered to work as one unstoppable system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tech */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-zinc-950 border border-zinc-800 hover:border-primary-blue/40 transition-all duration-300 hover:shadow-xl rounded-2xl">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <Code2 className="h-7 w-7 text-primary-blue" />
                  </div>
                  <CardTitle className="text-2xl font-display text-white">
                    Next-Gen Technology
                  </CardTitle>
                  <CardDescription className="text-base text-zinc-400">
                    High-performance digital products — web, mobile, and bespoke automation — built to scale.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {TECH_ITEMS.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary-blue flex-shrink-0" />
                        <span className="text-zinc-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Marketing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-zinc-950 border border-zinc-800 hover:border-primary-orange/40 transition-all duration-300 hover:shadow-xl rounded-2xl">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-4">
                    <Megaphone className="h-7 w-7 text-primary-orange" />
                  </div>
                  <CardTitle className="text-2xl font-display text-white">
                    Marketing Dominance
                  </CardTitle>
                  <CardDescription className="text-base text-zinc-400">
                    Full-funnel growth execution from performance media to brand narratives that command premium positioning.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {MARKETING_ITEMS.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary-orange flex-shrink-0" />
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
            Ready to Build Your Legacy?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Stop guessing. Start growing. Let&apos;s build a digital ecosystem that scales your
            brand and dominates your market.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
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
