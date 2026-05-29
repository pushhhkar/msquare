'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { contact, offices, stats } from '@/data/content'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service area' },
  { value: 'ai', label: 'Enterprise AI & Automation' },
  { value: 'web', label: 'Web Development (Next.js)' },
  { value: 'app', label: 'App Development (iOS / Android)' },
  { value: 'design', label: 'UI/UX Design' },
  { value: 'marketing', label: 'Performance Marketing & SEO' },
  { value: 'social', label: 'Social Media & Influencer Marketing' },
  { value: 'brand', label: 'Branding & Strategy' },
  { value: 'full', label: 'Full Growth System (All of the above)' },
  { value: 'consultation', label: 'Strategy Consultation' },
]

const BUDGET_OPTIONS = [
  { value: '', label: 'Select a budget range' },
  { value: 'under-5', label: 'Under ₹5 Lakhs' },
  { value: '5-15', label: '₹5 – 15 Lakhs' },
  { value: '15-50', label: '₹15 – 50 Lakhs' },
  { value: '50-plus', label: '₹50 Lakhs+' },
  { value: 'enterprise', label: 'Enterprise (discuss)' },
]

const inputClass =
  'w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg placeholder-zinc-600 focus:outline-none focus:border-primary-orange transition-colors duration-150 text-sm'

const selectClass =
  'w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg focus:outline-none focus:border-primary-orange transition-colors duration-150 text-sm appearance-none'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg('')
    setFormStatus('loading')

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement)?.value ?? '',
      email:   (form.elements.namedItem('email')   as HTMLInputElement)?.value ?? '',
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value ?? '',
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement)?.value ?? '',
      service: (form.elements.namedItem('service') as HTMLSelectElement)?.value ?? '',
      budget:  (form.elements.namedItem('budget')  as HTMLSelectElement)?.value ?? '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setFormStatus('success')
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.')
        setFormStatus('idle')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection.')
      setFormStatus('idle')
    }
  }

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
              Let&apos;s Talk
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Scale Your Brand.
              <span className="block text-zinc-500">Start Here.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
              Tell us about your growth goals. We respond within {contact.responseTime} — no
              boilerplate, no sales scripts. Just a focused conversation with someone who can actually help.
            </p>

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

      {/* ── Contact channels ── */}
      <section className="section-padding bg-zinc-950 border-b border-zinc-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: 'Email',
                detail: contact.email,
                href: `mailto:${contact.email}`,
                note: 'Responds within 24 hours',
                accent: 'text-primary-orange',
              },
              {
                icon: Phone,
                title: 'Phone',
                detail: contact.phone,
                href: `tel:${contact.phone.replace(/\s/g, '')}`,
                note: 'Mon – Fri, 9 AM – 7 PM IST',
                accent: 'text-primary-blue',
              },
              {
                icon: Clock,
                title: 'Response Guarantee',
                detail: '< 24 hours',
                href: null,
                note: 'On every inquiry, no exceptions',
                accent: 'text-primary-orange',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className={`h-6 w-6 ${item.accent}`} />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className={`text-lg font-medium ${item.accent} hover:underline block mb-1`}>
                    {item.detail}
                  </a>
                ) : (
                  <p className={`text-lg font-medium ${item.accent} mb-1`}>{item.detail}</p>
                )}
                <p className="text-zinc-500 text-sm">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section className="section-padding border-b border-zinc-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Fill in the details below and our team will put together a customised growth
                strategy scoped to your business — before the first call.
              </p>

              <div className="space-y-4">
                {[
                  { icon: CheckCircle2, text: 'Free strategy consultation, no commitment' },
                  { icon: CheckCircle2, text: 'Response within 24 hours, guaranteed' },
                  { icon: CheckCircle2, text: 'Customised plan — not a template pitch deck' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-primary-orange flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-400 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-zinc-950 border border-zinc-800 rounded-2xl p-10 text-center"
                  >
                    <CheckCircle2 className="h-12 w-12 text-primary-orange mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent</h3>
                    <p className="text-zinc-400 text-sm">
                      We&apos;ll be in touch within 24 hours. Check your inbox at{' '}
                      <span className="text-primary-orange">{contact.email}</span>.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                          Full Name *
                        </label>
                        <input name="name" type="text" required placeholder="Jane Smith" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                          Company
                        </label>
                        <input name="company" type="text" placeholder="Acme Corp" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                          Email *
                        </label>
                        <input name="email" type="email" required placeholder="jane@company.com" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                          Phone
                        </label>
                        <input name="phone" type="tel" placeholder="+91 9870202444" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                        Service Area *
                      </label>
                      <select name="service" required className={selectClass}>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                        Budget Range
                      </label>
                      <select name="budget" className={selectClass}>
                        {BUDGET_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your business, goals, and timeline..."
                        className={inputClass}
                      />
                    </div>

                    {errorMsg && (
                      <p role="alert" className="text-red-400 text-sm">{errorMsg}</p>
                    )}

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="w-4 h-4 mt-0.5 accent-primary-orange border-zinc-700 rounded bg-zinc-900"
                      />
                      <label htmlFor="newsletter" className="text-xs text-zinc-500 leading-relaxed">
                        I&apos;d like to receive weekly growth insights from M Square. No spam, unsubscribe anytime.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group"
                      disabled={formStatus === 'loading'}
                    >
                      {formStatus === 'loading' ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Global offices ── */}
      <section className="section-padding bg-zinc-950 border-b border-zinc-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Office
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Visit us at our headquarters in Gurugram, Haryana.
            </p>
          </motion.div>

          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* ── Details panel ── */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary-orange/10 border border-primary-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-orange" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary-orange tracking-widest uppercase block mb-0.5">
                        {office.region}
                      </span>
                      <h3 className="text-white text-xl font-semibold">{office.city}, {office.country}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-2">Address</p>
                      <p className="text-zinc-300 text-sm leading-relaxed">{office.address}</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-2">Phone</p>
                        <a
                          href={`tel:${office.phone.replace(/\s/g, '')}`}
                          className="text-zinc-300 text-sm hover:text-white transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-2">Email</p>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-primary-orange text-sm hover:underline break-all"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-2">Timezone</p>
                        <p className="text-zinc-400 text-sm">{office.timezone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Map CTA panel ── */}
                <a
                  href="https://maps.google.com/?q=SCO+40+4th+Floor+Civil+Line+Sector+15+Gurugram+Haryana+122002"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open office location in Google Maps"
                  className="group relative flex flex-col items-center justify-center gap-4 min-h-[240px] lg:min-h-0 bg-zinc-900 border-t lg:border-t-0 lg:border-l border-zinc-800 hover:bg-zinc-800 transition-colors duration-200 p-8"
                >
                  <div className="w-16 h-16 bg-primary-orange/10 border border-primary-orange/20 rounded-full flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors duration-200">
                    <MapPin className="h-8 w-8 text-primary-orange" />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium mb-1">View on Google Maps</p>
                    <p className="text-zinc-500 text-sm">SCO 40, Sector 15, Gurugram</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary-orange text-xs font-medium mt-1 group-hover:gap-2.5 transition-all duration-200">
                    <span>Get Directions</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
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
            <Clock className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
            We Respond Fast
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Every inquiry gets a personal response within 24 hours — from someone who can actually help, not a bot.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-black hover:bg-zinc-100 border-white text-lg px-8 py-4 group"
          >
            <Link href={`mailto:${contact.email}`}>
              Email Us Directly
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
