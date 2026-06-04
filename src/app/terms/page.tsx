import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export const metadata: Metadata = {
  title: 'Terms of Service | MSquare Professionals',
  description:
    'Terms and conditions governing your use of MSquare Professionals Pvt. Ltd. services and website. Governed by Indian law, Gurugram jurisdiction.',
  keywords: ['MSquare terms of service', 'service agreement', 'terms and conditions India'],
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | MSquare Professionals',
    description: 'Terms and conditions governing your use of MSquare Professionals services.',
    url: '/terms',
    type: 'website',
  },
  robots: { index: true, follow: false },
}

const COMPANY = 'MSquare Professionals Pvt. Ltd.'
const WEBSITE = 'msquareprofessionals.com'
const EMAIL = 'info@msquareprofessionals.com'
const ADDRESS = 'SCO 40, 4th Floor, Civil Line, Sector 15, Gurugram, Haryana 122002, India'
const LAST_UPDATED = 'June 1, 2025'
const EFFECTIVE_DATE = 'June 1, 2025'

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: `By accessing or using the ${COMPANY} website at ${WEBSITE}, engaging our services, or submitting an enquiry, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services. For questions, contact us at ${EMAIL}.`,
  },
  {
    id: 'services',
    title: 'Description of Services',
    content: `${COMPANY} is a Business Growth Infrastructure Company providing integrated Growth Marketing, Business Automation, and Technology Solutions. Our services include but are not limited to:`,
    items: [
      { label: 'Growth Marketing', detail: 'Performance marketing, lead generation, SEO & SEM, social media marketing, and branding & digital strategy.' },
      { label: 'Business Automation', detail: 'CRM solutions, lead management systems, workflow automation, sales automation, attendance management systems, and process digitization.' },
      { label: 'Technology Solutions', detail: 'Custom software development, web applications, mobile applications, website design & development, enterprise software solutions, and API integrations.' },
    ],
    note: 'Specific deliverables, timelines, scope, and fees are governed by individual service agreements or Statements of Work ("SOW") signed between the Company and the client.',
  },
  {
    id: 'client-obligations',
    title: 'Client Responsibilities',
    content: 'Clients engaging our services agree to:',
    items: [
      { label: 'Timely Cooperation', detail: 'Provide accurate, complete, and timely information, assets, feedback, and approvals necessary for project delivery.' },
      { label: 'Payment Compliance', detail: 'Make payments in accordance with agreed schedules as outlined in the SOW or invoice.' },
      { label: 'Legal Content', detail: 'Ensure all content, assets, branding, and materials provided to us do not infringe any third-party intellectual property, privacy, or other legal rights.' },
      { label: 'Authorised Representative', detail: 'Ensure that the individual engaging our services has authority to bind the organisation to these Terms.' },
    ],
  },
  {
    id: 'use-of-website',
    title: 'Acceptable Use of Website',
    content: 'You agree not to use our website or services to:',
    items: [
      { label: 'Unlawful Activities', detail: 'Engage in any activity that violates applicable laws, regulations, or third-party rights.' },
      { label: 'Unauthorised Access', detail: 'Attempt to gain unauthorised access to our systems, servers, databases, or any connected networks.' },
      { label: 'Harmful Content', detail: 'Transmit any harmful, offensive, defamatory, fraudulent, or otherwise objectionable content.' },
      { label: 'Data Scraping', detail: 'Scrape, harvest, or systematically collect data from our website without our prior written consent.' },
      { label: 'System Disruption', detail: 'Introduce malware, viruses, or any code designed to disrupt, damage, or impair our systems or services.' },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    items: [
      { label: 'Company IP', detail: 'All content on this website — including text, graphics, logos, design elements, and code — is the property of MSquare Professionals Pvt. Ltd. or its licensors, protected by applicable copyright and trademark laws.' },
      { label: 'Client Deliverables', detail: 'Upon receipt of full payment, clients receive a licence to use deliverables produced under a SOW as specified therein. Ownership transfer (if applicable) will be explicitly stated in the SOW.' },
      { label: 'Portfolio Rights', detail: 'MSquare retains the right to display completed work in its portfolio, case studies, and marketing materials unless otherwise agreed in writing.' },
      { label: 'Client Assets', detail: 'All assets, data, and intellectual property provided by the client remain the property of the client.' },
    ],
  },
  {
    id: 'payment',
    title: 'Payment Terms',
    content: 'Payment schedules are defined in individual SOWs or invoices. Unless otherwise stated:',
    items: [
      { label: 'Payment Due', detail: 'Invoices are due within 15 days of issue.' },
      { label: 'Late Payment', detail: 'Late payments may attract a fee of 2% per month on the outstanding balance from the due date.' },
      { label: 'Work Suspension', detail: 'MSquare reserves the right to suspend work on overdue accounts after providing written notice.' },
      { label: 'Taxes', detail: 'All fees are exclusive of applicable taxes (GST, TDS, etc.) unless explicitly stated. Taxes will be applied as required by law.' },
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    content: 'Both parties agree to maintain the confidentiality of non-public business information, trade secrets, technical data, pricing, and client information disclosed during the engagement. This obligation:',
    items: [
      { label: 'Duration', detail: 'Survives termination of the service relationship by two (2) years.' },
      { label: 'Exceptions', detail: 'Does not apply to information that is publicly available, independently developed, or required to be disclosed by law.' },
      { label: 'NDA', detail: 'Where a separate Non-Disclosure Agreement (NDA) is executed, its terms shall govern over this clause.' },
    ],
  },
  {
    id: 'warranties',
    title: 'Warranties & Disclaimers',
    items: [
      { label: 'Website "As Is"', detail: 'The website and its content are provided "as is" without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.' },
      { label: 'No Guaranteed Results', detail: 'We do not guarantee specific business results (revenue, rankings, leads, ROI) from our services. All projections and estimates are based on historical data and industry benchmarks and are not binding commitments.' },
      { label: 'Service Availability', detail: 'We do not warrant that the website will be error-free, uninterrupted, or free of viruses or other harmful components.' },
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: 'To the maximum extent permitted by applicable law:',
    items: [
      { label: 'Exclusion of Indirect Damages', detail: 'MSquare shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of our services or website.' },
      { label: 'Liability Cap', detail: "Our total aggregate liability to any client shall not exceed the total fees paid by that client to MSquare in the three (3) months immediately preceding the claim." },
      { label: 'Force Majeure', detail: 'We are not liable for delays or failures resulting from circumstances beyond our reasonable control, including natural disasters, government actions, internet outages, or third-party service failures.' },
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    items: [
      { label: 'Notice Period', detail: 'Either party may terminate a service engagement with 30 days written notice, unless a different notice period is specified in the SOW.' },
      { label: 'Immediate Termination', detail: 'MSquare may terminate immediately for material breach, non-payment exceeding 30 days, or conduct that violates these Terms.' },
      { label: 'Upon Termination', detail: 'The client is responsible for payment of all work completed and expenses incurred up to the effective termination date. Non-refundable deposits or advance payments shall be retained by MSquare.' },
      { label: 'Data Handover', detail: 'Upon termination, both parties will cooperate in good faith to transfer any client-owned assets, data, or deliverables within 15 business days.' },
    ],
  },
  {
    id: 'dispute-resolution',
    title: 'Dispute Resolution',
    items: [
      { label: 'Good Faith', detail: 'Both parties agree to attempt to resolve any dispute through good-faith negotiation within 30 days of written notice of the dispute.' },
      { label: 'Mediation', detail: 'If negotiation fails, the parties agree to attempt mediation before initiating legal proceedings.' },
      { label: 'Arbitration', detail: 'Unresolved disputes may be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996.' },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Jurisdiction',
    content: `These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana, India.`,
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    content: 'We reserve the right to update these Terms at any time. Material changes will be communicated by updating the "Last Updated" date on this page and, where appropriate, by email notification. Continued use of our services after changes constitutes your acceptance of the updated Terms.',
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgress />
      <Navigation />

      {/* ── Hero ── */}
      <section className="border-b border-zinc-900 py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-medium tracking-widest uppercase mb-6">
              Legal
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Please read these terms carefully before using our website or engaging our services.
              By proceeding, you agree to be bound by these Terms of Service.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-orange" />
                <span className="text-zinc-500">Effective: <span className="text-zinc-300">{EFFECTIVE_DATE}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-blue" />
                <span className="text-zinc-500">Last Updated: <span className="text-zinc-300">{LAST_UPDATED}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="flex gap-16 items-start">

            {/* ── Main content ── */}
            <article className="flex-1 min-w-0 space-y-12">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 pb-12 border-b border-zinc-900 last:border-0 last:pb-0"
                >
                  <h2 className="font-display text-2xl font-bold text-white mb-5 pb-4 border-b border-zinc-900">
                    {section.title}
                  </h2>

                  {section.content && (
                    <p className="text-zinc-400 leading-relaxed mb-5">{section.content}</p>
                  )}

                  {section.items && (
                    <div className="space-y-4">
                      {section.items.map((item) => (
                        <div
                          key={item.label}
                          className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors duration-150"
                        >
                          <p className="text-white font-semibold text-sm mb-1.5">{item.label}</p>
                          <p className="text-zinc-400 text-sm leading-relaxed">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.note && (
                    <div className="mt-5 flex gap-3 bg-primary-orange/5 border border-primary-orange/20 rounded-xl p-4">
                      <span className="text-primary-orange text-lg leading-none flex-shrink-0">ⓘ</span>
                      <p className="text-zinc-400 text-sm leading-relaxed">{section.note}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Contact block */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
                <h2 className="font-display text-xl font-bold text-white mb-2">Questions about these Terms?</h2>
                <p className="text-zinc-400 text-sm mb-5">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-white font-medium">{COMPANY}</p>
                  <p className="text-zinc-500">{ADDRESS}</p>
                  <a href={`mailto:${EMAIL}`} className="text-primary-orange hover:underline">{EMAIL}</a>
                </div>
                <div className="mt-6 pt-6 border-t border-zinc-900">
                  <p className="text-zinc-500 text-xs">
                    Also see our{' '}
                    <Link href="/privacy" className="text-primary-orange hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    for information on how we handle your personal data.
                  </p>
                </div>
              </div>
            </article>

            {/* ── Sticky sidebar TOC ── */}
            <aside className="hidden xl:block w-56 flex-shrink-0">
              <div className="sticky top-28">
                <p className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-4">
                  On This Page
                </p>
                <nav aria-label="Terms of service sections">
                  <ul className="space-y-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="block text-xs text-zinc-500 hover:text-white px-3 py-2 rounded-lg hover:bg-zinc-900 transition-colors duration-150 leading-snug"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-8 pt-6 border-t border-zinc-900">
                  <Link
                    href="/privacy"
                    className="block text-xs text-zinc-600 hover:text-primary-orange transition-colors duration-150"
                  >
                    → Privacy Policy
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-xs text-zinc-600 hover:text-primary-orange transition-colors duration-150 mt-2"
                  >
                    → Contact Us
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
