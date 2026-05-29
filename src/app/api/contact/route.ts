import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// ─── Rate limiter ─────────────────────────────────────────────────────────────
interface RateLimitEntry { count: number; windowStart: number }
const rateLimitMap = new Map<string, RateLimitEntry>()
const WINDOW_MS = 60_000
const MAX_REQUESTS = 3

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

  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, company, phone, service, budget, message } = body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 422 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL ?? 'info@msquareprofessionals.com'
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
  const fromName = process.env.RESEND_FROM_NAME ?? 'M Square Website'

  // If no API key, log locally and succeed (useful during dev before key is set)
  if (!apiKey || apiKey === 're_your_api_key_here') {
    console.info('[contact] No Resend API key set. Enquiry received:', {
      name, email, company, phone, service, budget, message,
    })
    return NextResponse.json({ success: true }, { status: 200 })
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111;">
          <div style="background:#f97316;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:20px;">New Website Enquiry</h1>
            <p style="color:#fff;margin:4px 0 0;font-size:14px;opacity:0.85;">MSquare Professionals Pvt Ltd</p>
          </div>
          <div style="background:#fff;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#f97316;">${email}</a></td></tr>
              ${company ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Company</td><td style="padding:8px 0;">${company}</td></tr>` : ''}
              ${phone ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Phone</td><td style="padding:8px 0;"><a href="tel:${phone}" style="color:#f97316;">${phone}</a></td></tr>` : ''}
              ${service ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Service</td><td style="padding:8px 0;">${service}</td></tr>` : ''}
              ${budget ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Budget</td><td style="padding:8px 0;">${budget}</td></tr>` : ''}
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
            <h3 style="margin:0 0 12px;font-size:14px;color:#374151;">Message</h3>
            <p style="margin:0;line-height:1.6;color:#374151;white-space:pre-wrap;">${message}</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
            <p style="margin:0;font-size:12px;color:#9ca3af;">Submitted at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST · IP: ${ip}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[contact] Resend error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email us directly.' },
      { status: 502 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
