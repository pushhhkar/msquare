'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Link2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export interface LegalSection {
  id: string
  title: string
  content: React.ReactNode
}

interface LegalLayoutProps {
  label: string
  title: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalLayout({ label, title, lastUpdated, sections }: LegalLayoutProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current?.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [sections])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top: y, behavior: 'smooth' })
    // Focus the h2 inside the section for keyboard users
    const h2 = el.querySelector('h2') as HTMLElement | null
    if (h2) setTimeout(() => h2.focus(), 400)
  }

  const copyAnchor = async (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`
    try {
      await navigator.clipboard.writeText(url)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 1800)
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <>
      <ScrollProgress />
      <main className="section-padding">
        <div className="container-custom">
          {/* Page header */}
          <div className="mb-12 pb-12 border-b border-zinc-900 max-w-3xl">
            <span className="text-xs font-medium text-zinc-500 tracking-widest uppercase block mb-4">
              {label}
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-zinc-400">Last updated: {lastUpdated}</p>
          </div>

          {/* Two-column layout: content + sticky sidebar */}
          <div className="flex gap-16 items-start">
            {/* ── Article body ── */}
            <article className="flex-1 min-w-0">
              {sections.map(({ id, title: sectionTitle, content }) => (
                <section key={id} id={id} className="mb-12 scroll-mt-28">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-900 group/heading">
                    <h2
                      tabIndex={-1}
                      className="font-display text-xl font-semibold text-white flex-1 focus:outline-none"
                    >
                      {sectionTitle}
                    </h2>
                    <div className="relative">
                      <button
                        onClick={() => copyAnchor(id)}
                        aria-label={`Copy link to ${sectionTitle}`}
                        className="opacity-0 group-hover/heading:opacity-100 focus:opacity-100 p-1 rounded text-zinc-600 hover:text-zinc-300 transition-opacity duration-150"
                      >
                        <Link2 className="h-3.5 w-3.5" />
                      </button>
                      {copiedId === id && (
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-800 text-zinc-300 text-xs rounded whitespace-nowrap pointer-events-none">
                          Copied!
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3 text-zinc-400 leading-relaxed [&_strong]:text-zinc-200 [&_a]:text-primary-orange [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
                    {content}
                  </div>
                </section>
              ))}
            </article>

            {/* ── Sticky "On This Page" sidebar ── */}
            <aside className="hidden xl:block w-56 flex-shrink-0">
              <div className="sticky top-32">
                <p className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-4">
                  On This Page
                </p>
                <nav aria-label="Page sections">
                  <ul className="space-y-1">
                    {sections.map(({ id, title: sectionTitle }) => {
                      const isActive = activeId === id
                      return (
                        <li key={id}>
                          <button
                            onClick={() => scrollTo(id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') scrollTo(id)
                            }}
                            className={cn(
                              'w-full text-left text-sm px-3 py-1.5 rounded-md transition-colors duration-150 leading-snug',
                              isActive
                                ? 'text-white bg-zinc-900 border-l-2 border-primary-orange pl-2.5'
                                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'
                            )}
                          >
                            {sectionTitle}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
