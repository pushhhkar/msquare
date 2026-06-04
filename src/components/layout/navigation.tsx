'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { ContactModal } from '@/components/ui/contact-modal'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`sticky top-0 z-50 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-zinc-200'
            : 'bg-white border-zinc-200'
        }`}
      >
        <div className="w-full px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo size="lg" />

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center space-x-8" role="list">
              {NAV_LINKS.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    role="listitem"
                    aria-current={active ? 'page' : undefined}
                    className={`relative text-lg font-medium transition-colors duration-150 group ${
                      active ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary-orange transition-all duration-200 ${
                        active
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )
              })}
            </div>

            {/* CTA — opens modal */}
            <div className="hidden lg:block">
              <Button
                variant="default"
                size="lg"
                aria-label="Start a project with MSquare Professionals"
                onClick={() => setIsModalOpen(true)}
              >
                Start Project
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden p-2 rounded-md hover:bg-zinc-100 transition-colors duration-150"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-zinc-900" />
              ) : (
                <Menu className="h-5 w-5 text-zinc-900" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <motion.div
            id="mobile-menu"
            initial={false}
            animate={isMobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-zinc-200"
          >
            <div className="py-4 space-y-1">
              {NAV_LINKS.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors duration-150 px-4 py-3 rounded-md ${
                      active
                        ? 'text-zinc-900 bg-zinc-100'
                        : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                  >
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-orange flex-shrink-0" aria-hidden="true" />
                    )}
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4 px-4">
                <Button
                  variant="default"
                  size="sm"
                  className="w-full"
                  aria-label="Start a project with MSquare Professionals"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsModalOpen(true)
                  }}
                >
                  Start Project
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Contact modal — rendered outside nav so it overlays everything */}
      <ContactModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
