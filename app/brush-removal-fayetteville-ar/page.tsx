import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: { absolute: 'Brush Removal Fayetteville AR | Great Dane Outdoor Services | (479) 391-4462' },
  description:
    'Brush removal in Fayetteville, AR starting at $225. Overgrown fence lines, saplings, vines, and rough yard areas cleared and hauled off. Free quotes.',
  alternates: { canonical: 'https://www.greatdaneoutdoorservices.com/brush-removal-fayetteville-ar' },
}

const included = [
  'Overgrown fence lines and property borders',
  'Saplings, vines, and thick undergrowth',
  'Rough, unused yard areas cleared and usable again',
  'Cutting and clearing, or full debris haul-off',
  'Access and density-based quotes before work starts',
  'Before photos help us scope the cleanup',
]

const faqs = [
  {
    q: 'How much does brush removal cost in Fayetteville, AR?',
    a: 'Brush removal starts at $225. Pricing depends on access, density, hauling, and disposal. Fence lines, overgrown beds, saplings, and rough yard areas all vary in scope, so before photos help us understand the size of the cleanup and give an accurate number.',
  },
  {
    q: 'Can you clear overgrown fence lines, saplings, vines, and rough yard areas?',
    a: 'Yes. Brush removal is a good fit for fence lines, overgrown beds, saplings, vines, and areas that have become hard to use. Pricing depends on density, access, whether material needs to be hauled away, and how much cutting or cleanup is involved.',
  },
  {
    q: 'Will you haul away brush and yard debris or leave it curbside?',
    a: 'Either can be discussed. Some customers only need material cut and stacked, while others want full haul-off. Haul-off changes the estimate because it adds loading, transport, and disposal time.',
  },
  {
    q: 'Can rain or wet ground delay brush removal?',
    a: 'Yes. Wet weather can affect brush and land clearing work. We try to schedule efficiently, but muddy ground, active rain, or unsafe conditions may require rescheduling so the job is done properly.',
  },
  {
    q: 'Are brush removal estimates really free?',
    a: 'Yes. Quotes are free, and there is no pressure to book. If the project is simple, photos may be enough. If the scope is unclear, we may ask a few follow-up questions or schedule a quick look before giving the final number.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Brush Removal',
  serviceType: 'Brush Removal',
  areaServed: { '@type': 'City', name: 'Fayetteville', containedInPlace: { '@type': 'State', name: 'Arkansas' } },
  provider: {
    '@type': 'LocalBusiness',
    name: 'Great Dane Outdoor Services',
    telephone: '+14793914462',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: 'Brush removal starting at $225. Final quote depends on density, access, and haul-off needs.',
    },
  },
}

export default function BrushRemovalFayettevillePage() {
  return (
    <main id="main-content" className="blueprint-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <div>
            <p className="blueprint-kicker">Brush Removal — Fayetteville, AR</p>
            <h1>Brush Removal in Fayetteville, AR</h1>
            <p>
              Great Dane Outdoor Services provides brush removal in Fayetteville, AR and across Northwest Arkansas. We clear overgrown fence lines, saplings, vines, and rough yard areas that have become hard to use, then haul off the debris. Brush removal starts at $225, with free quotes based on photos of the area.
            </p>
            <div className="blueprint-actions">
              <Link href="#quote">Get a Free Quote</Link>
              <a href="tel:4793914462">Call or Text (479) 391-4462</a>
            </div>
          </div>
          <div className="blueprint-hero-image">
            <Image src="/cutdown.webp" alt="Yard after brush removal and clearing in Fayetteville AR" width={525} height={700} priority />
          </div>
        </div>
      </section>

      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell">
          <div className="blueprint-heading">
            <p className="blueprint-kicker">What&apos;s Included</p>
            <h2>What our Fayetteville brush removal covers</h2>
          </div>
          <ul className="faq-list" style={{ maxWidth: '700px', margin: '0 auto', display: 'grid', gap: '0.75rem' }}>
            {included.map((item) => (
              <li key={item} style={{ color: 'var(--muted, #b2b2b2)', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#7dff9e' }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-shell">
          <div className="pricing-heading">
            <p className="pricing-kicker">Pricing</p>
            <h2>Brush removal pricing in Fayetteville</h2>
            <p>Starting points, not surprise-free final invoices. Send before photos for the fastest, most accurate quote.</p>
          </div>
          <div className="pricing-grid">
            <article className="pricing-card">
              <div>
                <h3>Brush Removal</h3>
                <ul>
                  <li>Fence lines, overgrown beds, saplings, and rough yard areas.</li>
                  <li>Pricing depends on access, density, hauling, and disposal.</li>
                  <li>Before photos help us understand the size of the cleanup.</li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <span>starting at</span>
                <strong>$225</strong>
                <Link href="#quote">Get estimate</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-shell">
          <div className="blueprint-heading faq-heading">
            <p className="blueprint-kicker">FAQ</p>
            <h2>Brush removal questions, answered</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary className="faq-question"><span>{faq.q}</span></summary>
                <div className="faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="blueprint-cta" id="quote">
        <div className="blueprint-shell">
          <h2>Get a free brush removal quote</h2>
          <p>Send a few before photos and a quick description. We will clear it and haul it off.</p>
          <QuoteForm />
        </div>
      </section>

      <section className="blueprint-section">
        <div className="blueprint-shell">
          <div className="blueprint-heading">
            <p className="blueprint-kicker">Other Services</p>
            <h2>More ways Great Dane can help</h2>
          </div>
          <div className="blueprint-actions" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/junk-removal-fayetteville-ar">Junk Removal</Link>
            <Link href="/pressure-washing-fayetteville-ar">Pressure Washing</Link>
            <Link href="/services">All Services</Link>
            <Link href="/pricing">Pricing Guide</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
