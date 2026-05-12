'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { pillars } from '@/data/services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ── Page Header ── */}
      <section className="section-padding border-b border-zinc-900">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-medium tracking-widest uppercase mb-6">
              What We Do
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Services That
              <span className="block text-zinc-500">Drive Growth</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
              We combine cutting-edge technology with full-funnel marketing to build scalable
              digital ecosystems for ambitious brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Pillars ── */}
      {pillars.map((pillar, pillarIndex) => {
        const isOrange = pillar.accentColor === 'orange'
        const accentText = isOrange ? 'text-primary-orange' : 'text-primary-blue'
        const accentBg = isOrange ? 'bg-primary-orange/10' : 'bg-primary-blue/10'
        const accentBorder = isOrange ? 'border-primary-orange/20' : 'border-primary-blue/20'
        const accentHover = isOrange ? 'hover:border-primary-orange/30' : 'hover:border-primary-blue/30'
        const checkColor = isOrange ? 'text-primary-orange' : 'text-primary-blue'

        return (
          <section
            key={pillar.id}
            className={`section-padding ${pillarIndex % 2 === 0 ? 'bg-zinc-950' : 'bg-black'} border-b border-zinc-900`}
          >
            <div className="container-custom">
              {/* Pillar heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-14"
              >
                <span className={`text-xs font-medium tracking-widest uppercase ${accentText} block mb-3`}>
                  {pillar.label}
                </span>
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4">
                  {pillar.headline}
                </h2>
                <p className="text-zinc-400 text-lg max-w-2xl">{pillar.subtext}</p>
              </motion.div>

              {/* Service cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pillar.services.map((service, serviceIndex) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: serviceIndex * 0.08, duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`bg-zinc-950 border border-zinc-800 ${accentHover} rounded-2xl p-8 transition-colors duration-200 group`}
                    >
                      <div className={`w-12 h-12 ${accentBg} border ${accentBorder} rounded-xl flex items-center justify-center mb-5`}>
                        <Icon className={`h-6 w-6 ${accentText} group-hover:scale-110 transition-transform duration-200`} />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <CheckCircle2 className={`h-4 w-4 ${checkColor} flex-shrink-0 mt-0.5`} />
                            <span className="text-zinc-400 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary-orange to-primary-blue">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            Tell us your growth goals. We&apos;ll build the system that gets you there.
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
