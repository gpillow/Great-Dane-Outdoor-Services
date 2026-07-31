import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: { absolute: 'Pressure Washing Fayetteville AR | Great Dane Junk & Brush Removal | (479) 391-4462' },
  description:
    'Pressure washing in Fayetteville, AR starting at $125. Driveways, patios, decks, brick, and siding cleaned with the right pressure for each surface. Free quotes.',
  alternates: { canonical: 'https://www.greatdaneoutdoorservices.com/pressure-washing-fayetteville-ar' },
}

const included = [
  'Driveways, walkways, and sidewalks',
  'Patios, decks, and outdoor living areas',
  'Brick, siding, and other exterior surfaces',
  'Surface-appropriate pressure and technique for each material',
  'Spot cleaning for smaller areas',
  'Photo-based quotes before scheduling',
]

const faqs = [
  {
    q: 'How much does pressure washing cost in Fayetteville, AR?',
    a: 'Pressure washing starts at $125. Small patios, walkways, and spot cleaning usually start near the minimum. Driveways, brick, decks, siding, and heavy buildup are quoted by size and surface condition. Photos help us estimate faster before scheduling.',
  },
  {
    q: 'Can pressure washing damage concrete, siding, brick, wood, or paint?',
    a: 'It can if the wrong pressure, tip, or distance is used. That is why the surface matters. Concrete can usually handle more pressure than siding, painted surfaces, older brick, or wood. We look at the material and condition before cleaning and avoid treating every surface the same way.',
  },
  {
    q: 'Do you need to use my water for pressure washing?',
    a: 'Most residential pressure washing uses the customer\'s outdoor water spigot. If water access is limited, tell us before scheduling so we can plan around it or confirm whether the job is a good fit.',
  },
  {
    q: 'How should I prepare before a pressure washing job?',
    a: 'Move vehicles, furniture, planters, doormats, and fragile items away from the work area. Make sure gates are unlocked, pets are inside, and outside outlets or items that should stay dry are pointed out ahead of time.',
  },
  {
    q: 'Are pressure washing estimates really free?',
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
  name: 'Pressure Washing',
  serviceType: 'Pressure Washing',
  areaServed: { '@type': 'City', name: 'Fayetteville', containedInPlace: { '@type': 'State', name: 'Arkansas' } },
  provider: {
    '@type': 'LocalBusiness',
    name: 'Great Dane Junk & Brush Removal',
    telephone: '+14793914462',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: 'Pressure washing starting at $125. Final quote depends on surface, size, and buildup.',
    },
  },
}

export default function PressureWashingFayettevillePage() {
  return (
    <>
      <link rel="preload" as="image" href="/afterdriveway-optimized.webp" fetchPriority="high" />
    <main id="main-content" className="blueprint-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <div>
            <p className="blueprint-kicker">Pressure Washing — Fayetteville, AR</p>
            <h1>Pressure Washing in Fayetteville, AR</h1>
            <p>
              Great Dane Junk & Brush Removal provides pressure washing in Fayetteville, AR and across Northwest Arkansas. We clean driveways, walkways, patios, decks, brick, and siding using the right pressure and technique for each surface. Pressure washing starts at $125, with free quotes based on photos of the area you want cleaned.
            </p>
            <div className="blueprint-actions">
              <Link href="#quote">Get a Free Quote</Link>
              <a href="tel:4793914462" style={{ background: '#7dff9e', color: '#0a1a0e', borderRadius: '999px', boxShadow: '0 8px 32px rgba(125,255,158,0.38)' }}>Call or Text (479) 391-4462</a>
            </div>
          </div>
          <div className="blueprint-hero-image">
            <Image src="/afterdriveway.webp" alt="Clean driveway after pressure washing in Fayetteville AR" width={525} height={700} priority />
          </div>
        </div>
      </section>

      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell">
          <div className="blueprint-heading">
            <p className="blueprint-kicker">What&apos;s Included</p>
            <h2>What our Fayetteville pressure washing covers</h2>
          </div>
          <ul className="faq-list" style={{ maxWidth: '700px', margin: '0 auto', display: 'grid', gap: '0.75rem' }}>
            {included.map((item) => (
              <li key={item} style={{ color: '#556052', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#315b3c' }}>✓</span>
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
            <h2>Pressure washing pricing in Fayetteville</h2>
            <p>Starting points, not surprise-free final invoices. Send a photo of the area for the fastest, most accurate quote.</p>
          </div>
          <div className="pricing-grid">
            <article className="pricing-card">
              <div>
                <h3>Pressure Washing</h3>
                <ul>
                  <li>Small patios, walkways, and spot cleaning usually start near the minimum.</li>
                  <li>Driveways, brick, decks, siding, and heavy buildup are quoted by size and surface condition.</li>
                  <li>Photos help us estimate faster before scheduling.</li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <span>starting at</span>
                <strong>$125</strong>
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
            <h2>Pressure washing questions, answered</h2>
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
          <h2>Get a free pressure washing quote</h2>
          <p>Send a few photos and a quick description. We will quote it clearly before work starts.</p>
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
            <Link href="/junk-removal-fayetteville-ar" style={{ background: '#f3f5ef', color: '#1d211d' }}>Junk Removal</Link>
            <Link href="/brush-removal-fayetteville-ar" style={{ background: '#f3f5ef', color: '#1d211d' }}>Brush Removal</Link>
            <Link href="/services" style={{ background: '#f3f5ef', color: '#1d211d' }}>All Services</Link>
            <Link href="/pricing" style={{ background: '#f3f5ef', color: '#1d211d' }}>Pricing Guide</Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
