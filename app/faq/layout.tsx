import React from 'react'
import type { Metadata } from 'next'
import { faqs } from './faqs'

export const metadata: Metadata = {
  title: 'FAQ | Great Dane Outdoor Services',
  description: 'Detailed answers about pressure washing, junk removal, brush clearing, leaf cleanup, landscaping, Christmas lights, pricing, and scheduling in Northwest Arkansas.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
