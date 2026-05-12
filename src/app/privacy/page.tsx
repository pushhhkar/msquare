import React from 'react'
import type { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { LegalLayout } from '@/components/ui/legal-layout'
import type { LegalSection } from '@/components/ui/legal-layout'

export const metadata: Metadata = {
  title: 'Privacy Policy | M Square',
  description:
    'How M Square collects, uses, and protects your personal data. GDPR and CCPA compliant. Data controller: privacy@msquare.agency',
  keywords: 'M Square privacy policy, GDPR compliant, data protection, CCPA',
}

const LAST_UPDATED = 'May 12, 2025'
const EMAIL = 'privacy@msquare.agency'

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    title: '1. Who We Are',
    content: (
      <>
        <p>
          M Square (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a
          tech-first growth studio headquartered in Bangalore, India. We operate the website{' '}
          <strong>msquare.agency</strong> and related digital services.
        </p>
        <p>
          For questions about this policy, contact our data controller at{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    content: (
      <>
        <p>We collect information you provide directly to us, including:</p>
        <ul>
          <li>
            <strong>Contact and identity data</strong> — name, email address, phone number, and
            company name submitted via our contact or funnel forms.
          </li>
          <li>
            <strong>Usage data</strong> — pages visited, time on site, browser type, and referring
            URLs collected automatically via server logs and analytics.
          </li>
          <li>
            <strong>Communications data</strong> — emails, messages, and other correspondence you
            send us.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal data to third parties.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: (
      <>
        <p>We use collected data to:</p>
        <ul>
          <li>Respond to enquiries and deliver requested services.</li>
          <li>Send transactional communications related to our engagement.</li>
          <li>Improve our website and service offerings through aggregate analytics.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <p>
          Where we rely on your consent for marketing communications, you may withdraw that consent
          at any time by emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: '4. Legal Basis for Processing (GDPR)',
    content: (
      <>
        <p>
          For users in the European Economic Area, our legal bases for processing personal data are:
        </p>
        <ul>
          <li>
            <strong>Legitimate interests</strong> — to respond to enquiries and operate our
            business.
          </li>
          <li>
            <strong>Contract performance</strong> — to deliver services you have engaged us for.
          </li>
          <li>
            <strong>Consent</strong> — for marketing emails and cookies (where applicable).
          </li>
          <li>
            <strong>Legal obligation</strong> — where required by applicable law.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    title: '5. Cookies',
    content: (
      <p>
        We use essential cookies required for the site to function. We may also use analytics
        cookies (e.g., to measure page performance) with your consent, which you can manage through
        your browser settings.
      </p>
    ),
  },
  {
    id: 'data-sharing',
    title: '6. Data Sharing',
    content: (
      <>
        <p>We share your data only with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> — hosting, analytics, and email platforms acting on
            our instructions under data processing agreements.
          </li>
          <li>
            <strong>Legal authorities</strong> — if required by law or to protect our legal rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: '7. Data Retention',
    content: (
      <p>
        We retain personal data for as long as necessary to fulfil the purposes described in this
        policy, or as required by law. Contact form submissions are retained for up to 3 years
        unless an ongoing service relationship exists.
      </p>
    ),
  },
  {
    id: 'your-rights',
    title: '8. Your Rights',
    content: (
      <>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data (&quot;right to erasure&quot;).</li>
          <li>Object to or restrict our processing.</li>
          <li>Data portability (receive your data in a structured format).</li>
          <li>Opt out of the sale of personal information (CCPA / California residents).</li>
        </ul>
        <p>
          To exercise any of these rights, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will
          respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: '9. Security',
    content: (
      <p>
        We implement industry-standard technical and organisational measures to protect your data,
        including TLS encryption in transit, access controls, and regular security reviews. No
        method of transmission over the internet is 100% secure; we cannot guarantee absolute
        security.
      </p>
    ),
  },
  {
    id: 'third-party-links',
    title: '10. Third-Party Links',
    content: (
      <p>
        Our website may contain links to third-party sites. We are not responsible for the privacy
        practices of those sites and encourage you to review their policies.
      </p>
    ),
  },
  {
    id: 'childrens-privacy',
    title: "11. Children's Privacy",
    content: (
      <p>
        Our services are not directed to individuals under 16 years of age. We do not knowingly
        collect personal data from children. If you believe we have inadvertently collected such
        data, contact us immediately.
      </p>
    ),
  },
  {
    id: 'changes',
    title: '12. Changes to This Policy',
    content: (
      <p>
        We may update this policy periodically. When we do, we will revise the &quot;Last
        updated&quot; date at the top and, where appropriate, notify you by email. Continued use of
        our services after changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <LegalLayout
        label="Legal"
        title="Privacy Policy"
        lastUpdated={LAST_UPDATED}
        sections={sections}
      />
      <Footer />
    </div>
  )
}
