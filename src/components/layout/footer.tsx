'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { contact } from '@/data/content'

const SERVICES = [
  { label: 'Performance Marketing', href: '/services' },
  { label: 'Lead Generation', href: '/services' },
  { label: 'CRM Solutions', href: '/services' },
  { label: 'Workflow Automation', href: '/services' },
  { label: 'Custom Software Development', href: '/services' },
  { label: 'Web & Mobile Applications', href: '/services' },
]

const SOCIAL = [
  { label: 'LinkedIn', Icon: Linkedin, href: '#' },
  { label: 'Twitter / X', Icon: Twitter, href: '#' },
  { label: 'Instagram', Icon: Instagram, href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900" aria-label="Site footer">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Logo size="lg" className="mb-6" />
            <p className="text-zinc-400 mb-6 max-w-md leading-relaxed text-sm">
              One Partner. One Ecosystem. Unlimited Growth.<br />
              We help businesses attract customers, automate operations, and scale through connected technology ecosystems.
            </p>
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              {SOCIAL.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  role="listitem"
                  aria-label={`M Square on ${label}`}
                  className="text-zinc-600 hover:text-white transition-colors duration-150"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium text-white mb-6 text-sm tracking-wide">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-zinc-500 hover:text-white transition-colors duration-150 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium text-white mb-6 text-sm tracking-wide">Get Started</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-zinc-400">
                <div className="w-8 h-8 bg-zinc-900 rounded-md flex items-center justify-center" aria-hidden="true">
                  <Mail className="h-4 w-4 text-zinc-300" />
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm hover:text-white transition-colors duration-150"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <div className="w-8 h-8 bg-zinc-900 rounded-md flex items-center justify-center" aria-hidden="true">
                  <Phone className="h-4 w-4 text-zinc-300" />
                </div>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="text-sm hover:text-white transition-colors duration-150"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <div className="w-8 h-8 bg-zinc-900 rounded-md flex items-center justify-center" aria-hidden="true">
                  <MapPin className="h-4 w-4 text-zinc-300" />
                </div>
                <span className="text-sm">Gurugram, Haryana, India</span>
              </div>
            </div>
            <Button
              asChild
              variant="default"
              className="w-full"
              size="sm"
              aria-label="Start a project with M Square"
            >
              <Link href="/contact">
                Scale Your Brand
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-zinc-900 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">
              © {currentYear} MSquare Professionals Pvt. Ltd. All rights reserved.
            </p>
            <nav aria-label="Legal links" className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-zinc-600 hover:text-white text-sm transition-colors duration-150"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-zinc-600 hover:text-white text-sm transition-colors duration-150"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
