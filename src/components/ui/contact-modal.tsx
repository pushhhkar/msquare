'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contact } from '@/data/content'

type FormStatus = 'idle' | 'loading' | 'success'

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service area' },
  { value: 'performance-marketing', label: 'Performance Marketing & Lead Generation' },
  { value: 'seo-sem', label: 'SEO & SEM' },
  { value: 'social-media', label: 'Social Media Marketing' },
  { value: 'crm', label: 'CRM Solutions' },
  { value: 'workflow-automation', label: 'Workflow & Sales Automation' },
  { value: 'custom-software', label: 'Custom Software Development' },
  { value: 'web-app', label: 'Website / Web Application' },
  { value: 'mobile-app', label: 'Mobile App (iOS / Android)' },
  { value: 'full-ecosystem', label: 'Full Growth Ecosystem' },
]

const field =
  'w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 text-white rounded-xl placeholder-zinc-600 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange/20 transition-all duration-150 text-sm'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setTimeout(() => { setStatus('idle'); setErrorMsg('') }, 300)
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg('')
    setStatus('loading')
    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement)?.value ?? '',
      email:   (form.elements.namedItem('email')   as HTMLInputElement)?.value ?? '',
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value ?? '',
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement)?.value ?? '',
      service: (form.elements.namedItem('service') as HTMLSelectElement)?.value ?? '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '',
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.')
        setStatus('idle')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection.')
      setStatus('idle')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        /* Full-screen fixed overlay — flex centers the panel */
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">

          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel — sits above backdrop, never taller than viewport */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Start a project enquiry"
            className="relative w-full max-w-lg max-h-[90vh] flex flex-col bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Accent bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-primary-orange to-primary-blue flex-shrink-0" />

            {/* Header */}
            <div className="flex items-start justify-between px-7 pt-6 pb-5 border-b border-zinc-900 flex-shrink-0">
              <div>
                <h2 className="font-display text-2xl font-bold text-white tracking-tight">
                  Start a Project
                </h2>
                <p className="text-zinc-500 text-sm mt-1">
                  We respond within {contact.responseTime}. No sales scripts.
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close form"
                className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors duration-150 ml-4 flex-shrink-0"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 px-7 py-6">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-10 gap-5"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary-orange/10 border border-primary-orange/20 flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-primary-orange" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
                        We&apos;ll be in touch within 24 hours at{' '}
                        <span className="text-primary-orange">{contact.email}</span>.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="mt-1 px-6 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-xl text-sm transition-colors duration-150"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-widest uppercase">
                          Full Name <span className="text-primary-orange">*</span>
                        </label>
                        <input name="name" type="text" required placeholder="Jane Smith" className={field} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-widest uppercase">
                          Company
                        </label>
                        <input name="company" type="text" placeholder="Acme Corp" className={field} />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-widest uppercase">
                          Email <span className="text-primary-orange">*</span>
                        </label>
                        <input name="email" type="email" required placeholder="jane@company.com" className={field} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-widest uppercase">
                          Phone
                        </label>
                        <input name="phone" type="tel" placeholder="+91 98XXXXXXXX" className={field} />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-widest uppercase">
                        Service Area
                      </label>
                      <select name="service" className={field}>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-widest uppercase">
                        How can we help? <span className="text-primary-orange">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={3}
                        placeholder="Tell us about your business, challenge, and goals..."
                        className={field}
                      />
                    </div>

                    {errorMsg && (
                      <p role="alert" className="text-red-400 text-xs px-1">{errorMsg}</p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>

                    <p className="text-center text-zinc-600 text-xs pb-1">
                      By submitting you agree to our{' '}
                      <a href="/privacy" className="hover:text-zinc-400 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
