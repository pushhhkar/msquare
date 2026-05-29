import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// ─── Rate limiter ─────────────────────────────────────────────────────────────
interface RateLimitEntry { count: number; windowStart: number }
const rateLimitMap = new Map<string, RateLimitEntry>()
const WINDOW_MS = 60_000
const MAX_REQUESTS = 5

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a minute and try again.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const email =
    typeof (body as Record<string, unknown>).email === 'string'
      ? ((body as Record<string, unknown>).email as string).trim().toLowerCase()
      : ''

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 422 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL ?? 'info@msquareprofessionals.com'
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
  const fromName = process.env.RESEND_FROM_NAME ?? 'M Square Website'

  if (!apiKey || apiKey === 're_your_api_key_here') {
    console.info('[newsletter] No Resend API key. Would subscribe:', email)
    return NextResponse.json({ success: true }, { status: 200 })
  }

  const resend = new Resend(apiKey)

  try {
    // Notify the team
    await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: toEmail,
      subject: `New Newsletter Subscriber — ${email}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;">
          <div style="background:#f97316;padding:20px 28px;border-radius:8px 8px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:18px;">New Subscriber</h2>
          </div>
          <div style="background:#fff;padding:28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <p style="margin:0;font-size:16px;"><strong>${email}</strong> just subscribed to the M Square Growth Blog.</p>
            <p style="margin:12px 0 0;font-size:12px;color:#9ca3af;">Received at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
          </div>
        </div>
      `,
    })

    // Send welcome email to subscriber
    await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: email,
      replyTo: toEmail,
      subject: "You're on the M Square list.",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#111;">
          <div style="background:#000;padding:28px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:22px;">M Square</h1>
            <p style="color:#f97316;margin:4px 0 0;font-size:13px;letter-spacing:0.05em;">TECH-FIRST GROWTH STUDIO</p>
          </div>
          <div style="background:#fff;padding:36px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <h2 style="margin:0 0 16px;font-size:20px;">You&rsquo;re on the list.</h2>
            <p style="margin:0 0 16px;line-height:1.6;color:#374151;">
              Every Friday we send one focused insight — performance marketing tactics,
              engineering deep-dives, or case study breakdowns from our work with real clients.
              No fluff, no filler.
            </p>
            <p style="margin:0 0 24px;line-height:1.6;color:#374151;">
              Your first email arrives this Friday.
            </p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 24px;" />
            <p style="margin:0;font-size:12px;color:#9ca3af;">
              MSquare Professionals Pvt Ltd · SCO 40, 4th Floor, Sector 15, Gurugram 122002<br/>
              <a href="mailto:info@msquareprofessionals.com" style="color:#f97316;">info@msquareprofessionals.com</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[newsletter] Resend error:', err)
    return NextResponse.json(
      { error: 'Subscription failed. Please try again.' },
      { status: 502 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
