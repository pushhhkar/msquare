import { NextRequest, NextResponse } from 'next/server'

// ─── In-process rate limiter ──────────────────────────────────────────────────
// Keyed by IP. Stores { count, windowStart } per IP.
// Window: 10 requests per 60 seconds. Resets automatically.
// For multi-instance deployments (Vercel Edge), swap this map for
// an Upstash Redis store using the same interface.

interface RateLimitEntry {
  count: number
  windowStart: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()
const WINDOW_MS = 60_000   // 1 minute
const MAX_REQUESTS = 5     // max 5 subscribe attempts per IP per minute

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    // First request in this window
    rateLimitMap.set(ip, { count: 1, windowStart: now })
    return false
  }

  if (entry.count >= MAX_REQUESTS) return true

  entry.count++
  return false
}

// ─── Email validation ─────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)

  // 1. Rate limit
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a minute and try again.' },
      { status: 429 }
    )
  }

  // 2. Parse body
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const email = typeof (body as Record<string, unknown>).email === 'string'
    ? ((body as Record<string, unknown>).email as string).trim().toLowerCase()
    : ''

  // 3. Validate email
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 422 })
  }

  // 4. Forward to email provider
  // Replace the block below with your provider SDK call.
  // Examples:
  //   Mailchimp:   POST to /3.0/lists/{listId}/members
  //   ConvertKit:  POST to /v3/forms/{formId}/subscribe
  //   Loops.so:    POST to /v1/contacts/create
  //   Brevo:       POST to /v3/contacts

  const PROVIDER_URL = process.env.NEWSLETTER_PROVIDER_URL
  const PROVIDER_KEY = process.env.NEWSLETTER_API_KEY

  if (PROVIDER_URL && PROVIDER_KEY) {
    try {
      const providerRes = await fetch(PROVIDER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${PROVIDER_KEY}`,
        },
        body: JSON.stringify({ email }),
      })

      if (providerRes.status === 409 || providerRes.status === 400) {
        // Provider treats duplicate emails as 409/400
        return NextResponse.json(
          { error: "You're already subscribed." },
          { status: 409 }
        )
      }

      if (!providerRes.ok) {
        console.error('[newsletter] Provider error', providerRes.status)
        return NextResponse.json(
          { error: 'Subscription failed. Please try again.' },
          { status: 502 }
        )
      }
    } catch (err) {
      console.error('[newsletter] Network error reaching provider', err)
      return NextResponse.json(
        { error: 'Subscription failed. Please try again.' },
        { status: 502 }
      )
    }
  } else {
    // No provider configured — log and succeed in development
    console.info('[newsletter] No provider configured. Would subscribe:', email)
  }

  return NextResponse.json({ success: true }, { status: 200 })
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
