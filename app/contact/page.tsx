import React from 'react'
import QuoteForm from '@/components/QuoteForm'

export const metadata = {
  title: 'Get a Free Quote | Great Dane Outdoor Services | (870) 995-1166',
  description:
    'Request a free, no-obligation quote from Great Dane Outdoor Services. Serving all of Northwest Arkansas. Call, text, or fill out our quick form — we respond fast.',
}

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#111', color: '#fff', padding: '60px 20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Get a Free Quote
      </h1>
      <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '2.5rem' }}>
        No obligation. Fast response. Serving all of Northwest Arkansas.
      </p>
      <QuoteForm />
    </main>
  )
}