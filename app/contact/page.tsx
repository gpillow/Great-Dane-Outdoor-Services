import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: { absolute: 'Get a Free Quote | Great Dane Outdoor Services | (479) 391-4462' },
  description:
    'Request a free, no-obligation quote from Great Dane Outdoor Services. Serving all of Northwest Arkansas. Call, text, or fill out our quick form.',
}

export default function ContactPage() {
  return (
    <>
      <link rel="preload" as="image" href="/afterdriveway-optimized.jpg" fetchPriority="high" />
    <main id="main-content" className="blueprint-page">
      <section className="blueprint-hero contact-blueprint-hero">
        <div className="blueprint-shell">
          <p className="blueprint-kicker">Contact Great Dane</p>
          <h1>Send the details. Get a clear quote.</h1>
          <p>Call, text, or fill out the form. Photos are welcome and usually help speed up the estimate.</p>
          <div className="blueprint-actions">
            <a href="tel:4793914462" style={{ background: '#7dff9e', color: '#0a1a0e', borderRadius: '999px', boxShadow: '0 8px 32px rgba(125,255,158,0.38)' }}>Call or Text (479) 391-4462</a>
            <a href="mailto:gibson@greatdaneoutdoorservices.com">Email us</a>
          </div>
        </div>
      </section>

      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell contact-blueprint-grid">
          <aside className="contact-info-panel">
            <h2>Reach us directly</h2>
            <div>
              <span>Call or text</span>
              <a href="tel:4793914462">(479) 391-4462</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:gibson@greatdaneoutdoorservices.com">gibson@greatdaneoutdoorservices.com</a>
            </div>
            <div>
              <span>Service area</span>
              <p>Fayetteville, Springdale, Rogers, Bentonville, Farmington, and Johnson.</p>
            </div>
            <ul>
              <li>Free estimates</li>
              <li>Photos welcome</li>
              <li>No commitment until you approve the quote</li>
              <li>Pricing depends on access, size, and scope</li>
            </ul>
            <Link href="/pricing">View pricing guide</Link>
          </aside>
          <div className="contact-form-panel">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
