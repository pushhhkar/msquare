import React from 'react'
import type { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { LegalLayout } from '@/components/ui/legal-layout'
import type { LegalSection } from '@/components/ui/legal-layout'

export const metadata: Metadata = {
  title: 'Terms of Service | M Square',
  description:
    'Terms and conditions governing your use of M Square services and website. Governed by Indian law, Bangalore jurisdiction.',
  keywords: 'M Square terms of service, service agreement, terms and conditions',
}

const LAST_UPDATED = 'May 12, 2025'
const EMAIL = 'legal@msquare.agency'

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: (
      <>
        <p>
          By accessing or using the M Square website at <strong>msquare.agency</strong> or engaging
          our services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you
          do not agree, please do not use our site or services.
        </p>
        <p>
          For questions, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'description',
    title: '2. Description of Services',
    content: (
      <p>
        M Square provides digital growth services including performance marketing, web development,
        business process automation, UI/UX design, brand strategy, and SEO. Specific deliverables,
        timelines, and fees are governed by individual service agreements or statements of work
        (&quot;SOW&quot;) signed between M Square and the client.
      </p>
    ),
  },
  {
    id: 'use-of-site',
    title: '3. Use of the Website',
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site for any unlawful purpose or in violation of any applicable regulations.</li>
          <li>
            Attempt to gain unauthorised access to any part of the site or its infrastructure.
          </li>
          <li>Transmit any harmful, offensive, or disruptive content.</li>
          <li>
            Scrape, harvest, or systematically collect data from the site without our express
            written consent.
          </li>
          <li>
            Reproduce, duplicate, or resell any part of our services without authorisation.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: '4. Intellectual Property',
    content: (
      <>
        <p>
          All content on this website — including text, graphics, logos, and code — is the property
          of M Square or its licensors and is protected by applicable copyright and trademark laws.
        </p>
        <p>
          Upon full payment, clients receive a licence to use deliverables produced under a SOW as
          specified therein. M Square retains the right to display work in its portfolio unless
          otherwise agreed in writing.
        </p>
      </>
    ),
  },
  {
    id: 'client-responsibilities',
    title: '5. Client Responsibilities',
    content: (
      <>
        <p>Clients engaging our services agree to:</p>
        <ul>
          <li>
            Provide accurate, complete, and timely information, assets, and approvals necessary for
            project delivery.
          </li>
          <li>Make payments in accordance with agreed schedules.</li>
          <li>
            Ensure that content or assets provided do not infringe third-party rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'payment',
    title: '6. Payment Terms',
    content: (
      <p>
        Payment schedules are defined in individual SOWs. Unless stated otherwise, invoices are due
        within 15 days of issue. Late payments may attract a fee of 2% per month on the outstanding
        balance. M Square reserves the right to suspend work on overdue accounts.
      </p>
    ),
  },
  {
    id: 'confidentiality',
    title: '7. Confidentiality',
    content: (
      <p>
        Both parties agree to keep confidential any non-public business information disclosed during
        the engagement. This obligation survives termination of the service relationship by two (2)
        years.
      </p>
    ),
  },
  {
    id: 'disclaimers',
    title: '8. Disclaimers',
    content: (
      <>
        <p>
          The website and its content are provided &quot;as is&quot; without warranties of any
          kind, express or implied. M Square does not warrant that the site will be error-free,
          uninterrupted, or free of viruses.
        </p>
        <p>
          We do not guarantee specific business results (revenue, rankings, ROI) from our services.
          All projections are estimates based on historical data and are not binding commitments.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    content: (
      <>
        <p>
          To the maximum extent permitted by law, M Square shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages arising out of or related to your
          use of our services or website, even if we have been advised of the possibility of such
          damages.
        </p>
        <p>
          Our total liability to any client shall not exceed the total fees paid by that client to
          M Square in the three (3) months preceding the claim.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    title: '10. Termination',
    content: (
      <>
        <p>
          Either party may terminate a service engagement with 30 days&apos; written notice unless
          a different notice period is specified in the SOW. M Square may terminate immediately for
          material breach, non-payment, or conduct that violates these Terms.
        </p>
        <p>
          Upon termination, clients are responsible for payment of all work completed to the
          termination date.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: '11. Governing Law',
    content: (
      <p>
        These Terms are governed by the laws of India, and any disputes shall be subject to the
        exclusive jurisdiction of the courts of Bangalore, Karnataka.
      </p>
    ),
  },
  {
    id: 'changes',
    title: '12. Changes to These Terms',
    content: (
      <p>
        We reserve the right to update these Terms at any time. We will notify users of material
        changes by updating the &quot;Last updated&quot; date and, where appropriate, via email.
        Continued use of our services after changes constitutes your acceptance.
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <LegalLayout
        label="Legal"
        title="Terms of Service"
        lastUpdated={LAST_UPDATED}
        sections={sections}
      />
      <Footer />
    </div>
  )
}
