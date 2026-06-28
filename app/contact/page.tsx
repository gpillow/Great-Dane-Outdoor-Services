import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Get a Free Quote | Great Dane Outdoor Services | (870) 995-1166',
  description:
    'Request a free, no-obligation quote from Great Dane Outdoor Services. Serving all of Northwest Arkansas. Call, text, or fill out our quick form.',
}

export default function ContactPage() {
  return (
    <main id="main-content" className="blueprint-page">
      <section className="blueprint-hero contact-blueprint-hero">
        <div className="blueprint-shell">
          <p className="blueprint-kicker">Contact Great Dane</p>
          <h1>Send the details. Get a clear quote.</h1>
          <p>Call, text, or fill out the form. Photos are welcome and usually help speed up the estimate.</p>
          <div className="blueprint-actions">
            <a href="tel:8709951166">Call (870) 995-1166</a>
            <a href="mailto:leads@greatdaneoutdoorservices.com">Email us</a>
          </div>
        </div>
      </section>

      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell contact-blueprint-grid">
          <aside className="contact-info-panel">
            <h2>Reach us directly</h2>
            <div>
              <span>Call or text</span>
              <a href="tel:8709951166">(870) 995-1166</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:leads@greatdaneoutdoorservices.com">leads@greatdaneoutdoorservices.com</a>
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
  )
}
