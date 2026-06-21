import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Great Dane Outdoor Services',
  description: 'Common questions about Great Dane Outdoor Services — free quotes, service areas, pricing, and more. Serving all of Northwest Arkansas.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are your quotes really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — always. Every estimate is 100% free with zero pressure or obligation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Northwest Arkansas — Fayetteville, Rogers, Bentonville, Springdale, Farmington, Lowell, Centerton, Bella Vista, Cave Springs, and more.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the fastest way to get a quote?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call or text us directly at (870) 995-1166 — that\'s the fastest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I send photos of my project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Please do. Photos let us size up the job before we even pull up. Text them to (870) 995-1166.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We price by the job, not by the hour. Every property is different, so we look at the scope of work and give you a quote upfront.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you a licensed business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Great Dane Outdoor Services is a registered and licensed LLC operating in the state of Arkansas.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you get to my property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We aim to turn around quotes within 24 hours and get jobs scheduled within the week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you do one-time jobs or ongoing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. We handle everything from one-time cleanups to recurring lawn and property maintenance.',
      },
    },
  ],
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
