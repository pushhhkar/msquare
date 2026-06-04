import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export const metadata: Metadata = {
  title: 'Privacy Policy | MSquare Professionals',
  description:
    'MSquare Professionals Pvt. Ltd. Privacy Policy — how we collect, use, store, and protect your personal data. GDPR and Indian IT Act compliant.',
  keywords: ['MSquare privacy policy', 'data protection India', 'GDPR compliant'],
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | MSquare Professionals',
    description: 'How MSquare Professionals collects, uses, and protects your personal data.',
    url: '/privacy',
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
    id: 'overview',
    title: 'Overview',
    content: `This Privacy Policy describes how ${COMPANY} ("Company", "we", "us", or "our") collects, uses, stores, and protects information about you when you visit our website at ${WEBSITE}, use our services, or communicate with us. By accessing our website or engaging our services, you agree to the practices described in this policy.`,
  },
  {
    id: 'information-collected',
    title: 'Information We Collect',
    items: [
      {
        label: 'Contact & Identity Data',
        detail: 'Name, email address, phone number, and company name submitted through contact forms, project enquiry forms, or newsletter subscriptions.',
      },
      {
        label: 'Business Information',
        detail: 'Details about your business, industry, project requirements, and budget shared during the enquiry or onboarding process.',
      },
      {
        label: 'Usage & Technical Data',
        detail: 'IP address, browser type, operating system, pages visited, time on site, and referring URLs — collected automatically via server logs and analytics tools.',
      },
      {
        label: 'Communications Data',
        detail: 'Emails, messages, meeting notes, and other correspondence exchanged between you and our team.',
      },
      {
        label: 'Payment Information',
        detail: 'Billing details processed through our payment partners. We do not store card numbers or sensitive payment credentials directly.',
      },
    ],
    note: 'We do not sell, rent, or trade your personal data to third parties under any circumstances.',
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    items: [
      { label: 'Service Delivery', detail: 'To respond to enquiries, onboard clients, and deliver the services you have engaged us for.' },
      { label: 'Communication', detail: 'To send project updates, invoices, and service-related notifications.' },
      { label: 'Marketing', detail: 'To send newsletters or growth insights — only with your consent. You may unsubscribe at any time.' },
      { label: 'Improvement', detail: 'To analyse website usage and improve our services, content, and user experience.' },
      { label: 'Legal Compliance', detail: 'To comply with applicable laws, regulations, and legal obligations.' },
      { label: 'Security', detail: 'To detect, prevent, and address fraud, abuse, or security incidents.' },
    ],
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing & Disclosure',
    content: `We do not sell your data. We share your information only in the following limited circumstances:`,
    items: [
      { label: 'Service Providers', detail: 'Trusted third-party vendors (hosting, analytics, email delivery, payment processing) who process data on our behalf under strict data processing agreements.' },
      { label: 'Legal Requirements', detail: 'When required by law, court order, or government authority, or to protect our legal rights and the safety of others.' },
      { label: 'Business Transfers', detail: 'In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction with prior notice.' },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking',
    content: 'Our website uses cookies to enhance your experience:',
    items: [
      { label: 'Essential Cookies', detail: 'Required for the website to function correctly. Cannot be disabled.' },
      { label: 'Analytics Cookies', detail: 'Used to understand how visitors interact with our site (e.g., page views, session duration). Collected only with consent.' },
      { label: 'Marketing Cookies', detail: 'Used to display relevant advertisements. Only activated with your explicit consent.' },
    ],
    note: 'You can manage or disable cookies through your browser settings at any time. Disabling essential cookies may affect site functionality.',
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: 'We retain personal data only as long as necessary:',
    items: [
      { label: 'Enquiry / Contact Form Data', detail: 'Retained for up to 3 years from the date of submission.' },
      { label: 'Client Project Data', detail: 'Retained for the duration of the engagement plus 5 years for legal and audit purposes.' },
      { label: 'Newsletter Subscribers', detail: 'Retained until you unsubscribe. Removed within 30 days of unsubscription.' },
      { label: 'Analytics Data', detail: 'Aggregated and anonymised data may be retained indefinitely.' },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: `Depending on your jurisdiction, you have the following rights regarding your personal data. To exercise any right, email us at ${EMAIL} and we will respond within 30 days.`,
    items: [
      { label: 'Right to Access', detail: 'Request a copy of the personal data we hold about you.' },
      { label: 'Right to Rectification', detail: 'Request correction of inaccurate or incomplete data.' },
      { label: 'Right to Erasure', detail: 'Request deletion of your personal data ("right to be forgotten"), subject to legal obligations.' },
      { label: 'Right to Restriction', detail: 'Request that we restrict processing of your data in certain circumstances.' },
      { label: 'Right to Portability', detail: 'Receive your data in a structured, machine-readable format.' },
      { label: 'Right to Object', detail: 'Object to processing based on legitimate interests or for direct marketing.' },
      { label: 'Withdraw Consent', detail: 'Where processing is based on consent, withdraw it at any time without affecting prior processing.' },
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    content: 'We implement industry-standard technical and organisational security measures to protect your data:',
    items: [
      { label: 'Encryption', detail: 'All data transmitted between your browser and our servers is encrypted using TLS/SSL.' },
      { label: 'Access Controls', detail: 'Data access is restricted to authorised personnel on a need-to-know basis.' },
      { label: 'Secure Infrastructure', detail: 'Our systems are hosted on enterprise-grade, ISO-certified cloud infrastructure.' },
      { label: 'Regular Audits', detail: 'We conduct periodic security reviews and vulnerability assessments.' },
    ],
    note: 'No method of internet transmission is 100% secure. While we employ industry best practices, we cannot guarantee absolute security.',
  },
  {
    id: 'third-party',
    title: 'Third-Party Links & Services',
    content: 'Our website may contain links to third-party websites or integrate with external platforms. We are not responsible for the privacy practices or content of those third parties. We encourage you to review the privacy policies of any third-party services you use.',
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    content: 'Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected data from a minor, please contact us immediately at ' + EMAIL + ' and we will delete it promptly.',
  },
  {
    id: 'grievance',
    title: 'Grievance Officer',
    content: `In accordance with the Information Technology Act, 2000 and the rules made thereunder, the name and contact details of the Grievance Officer are:`,
    contact: {
      name: 'Grievance Officer',
      company: COMPANY,
      address: ADDRESS,
      email: EMAIL,
    },
    note: 'We will address your grievance within 30 days of receipt.',
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Jurisdiction',
    content: `This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana.`,
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: 'We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by updating the "Last Updated" date at the top of this page and, where appropriate, via email. Continued use of our services after changes constitutes acceptance of the updated policy.',
  },
]

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {COMPANY} is committed to protecting your privacy. This policy explains how we handle
              your personal data with transparency and care.
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

                  {'contact' in section && section.contact && (
                    <div className="mt-5 bg-zinc-950 border border-zinc-800 rounded-xl p-6 space-y-2 text-sm">
                      <p className="text-white font-semibold">{section.contact.name}</p>
                      <p className="text-zinc-400">{section.contact.company}</p>
                      <p className="text-zinc-400">{section.contact.address}</p>
                      <a href={`mailto:${section.contact.email}`} className="text-primary-orange hover:underline block">
                        {section.contact.email}
                      </a>
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
                <h2 className="font-display text-xl font-bold text-white mb-2">Questions?</h2>
                <p className="text-zinc-400 text-sm mb-4">
                  If you have any questions about this Privacy Policy or how we handle your data, contact us:
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-white font-medium">{COMPANY}</p>
                  <p className="text-zinc-500">{ADDRESS}</p>
                  <a href={`mailto:${EMAIL}`} className="text-primary-orange hover:underline">{EMAIL}</a>
                </div>
              </div>
            </article>

            {/* ── Sticky sidebar TOC ── */}
            <aside className="hidden xl:block w-56 flex-shrink-0">
              <div className="sticky top-28">
                <p className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-4">
                  On This Page
                </p>
                <nav aria-label="Privacy policy sections">
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
                    href="/terms"
                    className="block text-xs text-zinc-600 hover:text-primary-orange transition-colors duration-150"
                  >
                    → Terms of Service
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
