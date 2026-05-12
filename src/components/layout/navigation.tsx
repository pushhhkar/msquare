'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
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
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-zinc-900'
          : 'bg-black border-transparent'
      }`}
    >
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo — far left */}
          <Link href="/" aria-label="M Square — home">
            <Logo size="xl" />
          </Link>

          {/* Desktop nav — center */}
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
                    active ? 'text-white' : 'text-zinc-400 hover:text-white'
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

          {/* CTA — far right */}
          <div className="hidden lg:block">
            <Button asChild variant="default" size="lg" aria-label="Start a project with M Square">
              <Link href="/contact">
                Start Project
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden p-2 rounded-md hover:bg-zinc-900 transition-colors duration-150"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          id="mobile-menu"
          initial={false}
          animate={isMobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden border-t border-zinc-900"
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
                      ? 'text-white bg-zinc-900'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
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
              <Button asChild variant="default" size="sm" className="w-full">
                <Link href="/contact" aria-label="Start a project with M Square">
                  Start Project
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
