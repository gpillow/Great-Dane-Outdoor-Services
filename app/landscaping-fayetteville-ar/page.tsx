import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: { absolute: 'Landscaping Fayetteville AR | Great Dane Junk & Brush Removal | (479) 391-4462' },
  description:
    'Landscaping in Fayetteville, AR starting at $149. Mulch installation, flower bed cleanup, trimming, weed removal, and property refresh work. Free quotes from a locally owned crew.',
  alternates: { canonical: 'https://www.greatdaneoutdoorservices.com/landscaping-fayetteville-ar' },
}

const included = [
  'Mulch installation and bed edging',
  'Flower bed cleanup and weed removal',
  'Shrub and ornamental trimming',
  'Seasonal property refresh and cleanup',
  'Debris hauling after landscaping work',
  'Photo-based quotes before scheduling',
]

const faqs = [
  {
    q: 'How much does landscaping cost in Fayetteville, AR?',
    a: 'Landscaping starts at $149. Small bed cleanups and weed pulls usually start near the base rate. Mulch installation, large trimming jobs, and full property refreshes are quoted by scope, size, and materials needed. Send a few photos and a description for the fastest estimate.',
  },
  {
    q: 'Do you supply mulch or do I need to order it separately?',
    a: 'We can source and deliver mulch as part of the job or work with material you already have on site. Let us know when you reach out and we will factor it into the quote.',
  },
  {
    q: 'Can you handle ongoing seasonal maintenance?',
    a: 'Yes. Spring cleanups, fall bed prep, and recurring trim work can be scheduled on a regular basis. Reach out by phone or text to discuss what your property needs and how often.',
  },
  {
    q: 'What types of properties do you landscape?',
    a: 'Residential homes, rental properties, and small commercial properties across Northwest Arkansas. Most requests are bed cleanups, mulching, trimming, and weed control — the kind of recurring upkeep that keeps a property looking sharp.',
  },
  {
    q: 'Are landscaping estimates really free?',
    a: 'Yes. Quotes are free with no commitment required. Photos of the beds, yard, or area you want worked on make it faster to give an accurate number before scheduling.',
  },
  {
    q: 'Do you offer landscaping outside of Fayetteville?',
    a: 'Yes. Great Dane serves Fayetteville, Springdale, Rogers, Bentonville, Farmington, Johnson, Lowell, Centerton, Bella Vista, Cave Springs, Siloam Springs, Elkins, and nearby Northwest Arkansas communities. Send your address if you are not sure.',
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
  name: 'Landscaping',
  serviceType: 'Landscaping',
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
      description: 'Landscaping starting at $149. Final quote depends on scope, size, and materials.',
    },
  },
}

export default function LandscapingFayettevillePage() {
  return (
    <>
      <link rel="preload" as="image" href="/afterdriveway-optimized.webp" fetchPriority="high" />
    <main id="main-content" className="blueprint-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <div>
            <p className="blueprint-kicker">Landscaping — Fayetteville, AR</p>
            <h1>Landscaping in Fayetteville, AR</h1>
            <p>
              Great Dane Junk & Brush Removal provides landscaping in Fayetteville, AR and across Northwest Arkansas. We handle mulch installation, flower bed cleanups, shrub trimming, weed removal, and seasonal property refresh work — the kind of upkeep that keeps a yard looking sharp. Landscaping starts at $149, with free quotes based on photos of the area.
            </p>
            <div className="blueprint-actions">
              <Link href="#quote">Get a Free Quote</Link>
              <a href="tel:4793914462" style={{ background: '#7dff9e', color: '#0a1a0e', borderRadius: '999px', boxShadow: '0 8px 32px rgba(125,255,158,0.38)' }}>Call or Text (479) 391-4462</a>
            </div>
          </div>
          <div className="blueprint-hero-image">
            <Image src="/cutdown.webp" alt="Landscaping and yard cleanup work in Fayetteville AR" width={525} height={700} priority />
          </div>
        </div>
      </section>

      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell">
          <div className="blueprint-heading">
            <p className="blueprint-kicker">What&apos;s Included</p>
            <h2>What our Fayetteville landscaping covers</h2>
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
            <h2>Landscaping pricing in Fayetteville</h2>
            <p>Starting points, not surprise-free final invoices. Send a photo of the area for the fastest, most accurate quote.</p>
          </div>
          <div className="pricing-grid">
            <article className="pricing-card">
              <div>
                <h3>Landscaping</h3>
                <ul>
                  <li>Small bed cleanups and weed pulls usually start near the base rate.</li>
                  <li>Mulch installation, large trimming jobs, and full property refreshes are quoted by scope and materials.</li>
                  <li>Send photos of the area for the fastest estimate.</li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <span>starting at</span>
                <strong>$149</strong>
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
            <h2>Landscaping questions, answered</h2>
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
          <h2>Get a free landscaping quote</h2>
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
            <Link href="/pressure-washing-fayetteville-ar" style={{ background: '#f3f5ef', color: '#1d211d' }}>Pressure Washing</Link>
            <Link href="/services" style={{ background: '#f3f5ef', color: '#1d211d' }}>All Services</Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
