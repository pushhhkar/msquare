'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Status = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const STORAGE_KEY = 'msquare_subscribed'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      setStatus('success')
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg('')

    if (!EMAIL_RE.test(email)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        localStorage.setItem(STORAGE_KEY, '1')
        setStatus('success')
      } else if (res.status === 409) {
        localStorage.setItem(STORAGE_KEY, '1')
        setErrorMsg("You're already subscribed.")
        setStatus('idle')
      } else {
        setErrorMsg('Something went wrong. Please try again.')
        setStatus('idle')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection.')
      setStatus('idle')
    }
  }

  return (
    <div className="max-w-md mx-auto w-full">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 py-4"
          >
            <CheckCircle2 className="h-10 w-10 text-primary-orange" />
            <p className="text-white font-medium text-lg">You&apos;re on the list.</p>
            <p className="text-zinc-400 text-sm text-center">
              Expect your first insight this Friday. No spam, ever.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errorMsg) setErrorMsg('')
                }}
                placeholder="you@company.com"
                aria-label="Email address"
                aria-describedby={errorMsg ? 'newsletter-error' : undefined}
                disabled={status === 'loading'}
                className={`w-full px-4 py-3 bg-zinc-900 border text-white rounded-lg placeholder-zinc-500 focus:outline-none transition-colors duration-150 text-sm disabled:opacity-50 ${
                  errorMsg ? 'border-red-500 focus:border-red-400' : 'border-zinc-800 focus:border-zinc-600'
                }`}
              />
              {errorMsg && (
                <p id="newsletter-error" role="alert" className="mt-1.5 text-xs text-red-400">
                  {errorMsg}
                </p>
              )}
            </div>
            <Button
              type="submit"
              variant="default"
              disabled={status === 'loading'}
              className="shrink-0"
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Subscribe'
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
