import { NextRequest, NextResponse } from 'next/server'

// ─── Rate limiter (shared pattern with /api/newsletter) ───────────────────────
interface RateLimitEntry { count: number; windowStart: number }
const rateLimitMap = new Map<string, RateLimitEntry>()
const WINDOW_MS = 60_000
const MAX_REQUESTS = 3   // stricter: 3 form submissions per IP per minute

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
    rateLimitMap.set(ip, { count: 1, windowStart: now })
    return false
  }
  if (entry.count >= MAX_REQUESTS) return true
  entry.count++
  return false
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please wait a minute and try again.' },
      { status: 429 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, service, message } = body as Record<string, string>

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 422 })
  }

  // Forward to your CRM / email handler
  // E.g. Resend, SendGrid, Nodemailer, HubSpot Forms API
  // Replace the env vars in .env.local:
  //   CONTACT_WEBHOOK_URL=https://hooks.zapier.com/...
  //   CONTACT_NOTIFY_EMAIL=hello@msquareprofessionals.com

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service, message, submittedAt: new Date().toISOString() }),
      })
    } catch (err) {
      console.error('[contact] Webhook error', err)
      // Don't block the user — log and continue
    }
  } else {
    console.info('[contact] No webhook configured. Submission:', { name, email, service })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
