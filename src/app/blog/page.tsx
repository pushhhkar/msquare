'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Tag, SearchX } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Newsletter } from '@/components/ui/newsletter'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { readingTime } from '@/lib/utils'
import { posts, CATEGORIES } from '@/data/blog'
import type { Post, Category } from '@/data/blog'

// ─── Sub-components ───────────────────────────────────────────────────────────

function PostCard({ post, index }: { post: Post; index: number }) {
  const Icon: LucideIcon = post.categoryIcon
  const rt = readingTime(post.excerpt)
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors duration-200 cursor-pointer"
      role="article"
    >
      {/* Thumbnail placeholder */}
      <div className="aspect-video bg-zinc-900 flex items-center justify-center">
        <Icon className="h-10 w-10 text-zinc-700 group-hover:text-primary-orange transition-colors duration-200" />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-orange mb-3">
          <Tag className="h-3 w-3" />
          {post.category}
        </span>

        <h3 className="font-display text-lg font-semibold text-white mb-3 leading-snug group-hover:text-zinc-200 transition-colors duration-150">
          {post.title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>

        <div className="flex items-center justify-between text-zinc-600 text-xs">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {rt}
          </span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
      </div>
    </motion.article>
  )
}

function FeaturedPost({ post }: { post: Post }) {
  const Icon: LucideIcon = post.categoryIcon
  const rt = readingTime(post.excerpt)
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div className="aspect-video bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center">
        <Icon className="h-16 w-16 text-zinc-700 group-hover:text-primary-orange transition-colors duration-300" />
      </div>

      <div>
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-orange/10 border border-primary-orange/20 rounded-full text-primary-orange text-xs font-medium mb-4">
          <Icon className="h-3 w-3" />
          {post.category}
        </span>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-zinc-200 transition-colors duration-200">
          {post.title}
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed mb-6">{post.excerpt}</p>

        <div className="flex items-center gap-4 text-zinc-500 text-sm mb-8">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {rt}
          </span>
          <time dateTime={post.date}>{post.date}</time>
        </div>

        <Button variant="default" className="group/btn">
          Read Article
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </motion.article>
  )
}

function EmptyState({ category, onClear }: { category: string; onClear: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-24 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6">
        <SearchX className="h-7 w-7 text-zinc-600" />
      </div>
      <h3 className="font-display text-xl font-semibold text-white mb-2">
        No {category} posts yet
      </h3>
      <p className="text-zinc-500 text-sm max-w-xs mb-6">
        We&apos;re working on it. Explore other categories or check back soon.
      </p>
      <button
        onClick={onClear}
        className="px-4 py-2 rounded-full text-sm font-medium bg-zinc-950 border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white transition-colors duration-150"
      >
        Clear filter
      </button>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

// useSearchParams() requires a Suspense boundary in Next.js 14 App Router.
// BlogContent holds all the interactive logic; BlogPage wraps it.
function BlogContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const categoryParam = searchParams.get('category') as Category | null
  const activeCategory: 'All' | Category =
    categoryParam && (CATEGORIES as string[]).includes(categoryParam) ? categoryParam : 'All'

  const setCategory = (cat: 'All' | Category) => {
    const params = new URLSearchParams(searchParams.toString())
    if (cat === 'All') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    router.push(`?${params.toString()}`, { scroll: false })
  }

  const featured = posts.find((p) => p.featured)

  const gridPosts = posts.filter((p) => {
    if (activeCategory === 'All') return !p.featured
    return p.category === activeCategory
  })

  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgress />
      <Navigation />

      {/* ── Hero ── */}
      <section className="section-padding border-b border-zinc-900">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-medium tracking-widest uppercase mb-6">
              Insights &amp; Strategies
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The M Square
              <span className="block text-zinc-500">Growth Blog</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
              Tactical playbooks, case study breakdowns, and engineering deep-dives from the team
              building growth systems for ambitious businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured post (only shown on "All" tab) ── */}
      {featured && activeCategory === 'All' && (
        <section className="py-16 border-b border-zinc-900">
          <div className="container-custom">
            <p className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-8">
              Featured
            </p>
            <FeaturedPost post={featured} />
          </div>
        </section>
      )}

      {/* ── Category filter + post grid ── */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter pills */}
          <div className="flex gap-2 flex-wrap mb-12" role="group" aria-label="Filter by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${
                  activeCategory === cat
                    ? 'bg-white text-black'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid or empty state */}
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          ) : (
            <EmptyState category={activeCategory} onClear={() => setCategory('All')} />
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="section-padding border-t border-zinc-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Get insights delivered weekly
            </h2>
            <p className="text-zinc-400 mb-8">
              One email, every Friday. Tactical growth strategies, no fluff.
            </p>
            <Newsletter />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary-orange border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BlogContent />
    </Suspense>
  )
}
