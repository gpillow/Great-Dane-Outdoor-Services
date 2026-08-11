import React from 'react'
import type { Metadata } from 'next'
import { faqs } from './faqs'

export const metadata: Metadata = {
  title: 'FAQ | Great Dane Junk & Brush Removal',
  description: 'Answers to common questions about junk removal, pressure washing & outdoor services in NW Arkansas. Free quotes. (479) 391-4462.',
  alternates: { canonical: 'https://www.greatdaneoutdoorservices.com/faq' },
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
