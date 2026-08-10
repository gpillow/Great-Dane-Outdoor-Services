import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: { absolute: 'Christmas Lights Fayetteville AR | Great Dane Junk & Brush Removal | (479) 391-4462' },
  description:
    'Christmas light installation and takedown in Fayetteville, AR starting at $499. Professional holiday lighting for homes across Northwest Arkansas. Free quotes.',
  alternates: { canonical: 'https://www.greatdaneoutdoorservices.com/christmas-lights-fayetteville-ar' },
}

const included = [
  'Roofline, gutter, and eave lighting',
  'Tree and shrub wrapping',
  'Professional installation with secure clips',
  'Takedown and storage at the end of the season',
  'Bulb replacement for lights that go out',
  'Photo-based quotes before scheduling',
]

const faqs = [
  {
    q: 'How much does Christmas light installation cost in Fayetteville, AR?',
    a: 'Christmas light installation starts at $499. Pricing depends on the size of the home, the areas being lit (roofline, trees, shrubs), and the amount of material needed. Send photos of the front of your home for the fastest, most accurate quote.',
  },
  {
    q: 'Do you supply the lights or do I need to provide them?',
    a: 'We can supply commercial-grade lights as part of the job or work with lights you already own. Let us know your preference when you reach out and we will factor it into the quote.',
  },
  {
    q: 'When should I book Christmas light installation?',
    a: 'October and early November fill up fastest in Northwest Arkansas. If you want lights up before Thanksgiving, reach out as early as possible. We do take bookings through December but availability gets limited quickly.',
  },
  {
    q: 'Does the service include takedown at the end of the season?',
    a: 'Yes. Takedown and storage is included. We schedule removal after the holidays so you do not have to climb a ladder or figure out storage on your own.',
  },
  {
    q: 'What if some bulbs go out after installation?',
    a: 'We replace bulbs that go out as part of the service. If something stops working, let us know and we will come back out to fix it.',
  },
  {
    q: 'Do you install Christmas lights outside of Fayetteville?',
    a: 'Yes. Great Dane serves Fayetteville, Springdale, Rogers, Bentonville, Farmington, Johnson, Lowell, Centerton, Bella Vista, Cave Springs, Siloam Springs, Elkins, and nearby Northwest Arkansas communities. Send your address if you are not sure we cover your area.',
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
  name: 'Christmas Light Installation',
  serviceType: 'Christmas Light Installation',
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
      description: 'Christmas light installation starting at $499. Final quote depends on home size and scope.',
    },
  },
}

export default function ChristmasLightsFayettevillePage() {
  return (
    <>
      <link rel="preload" as="image" href="/afterdriveway-optimized.webp" fetchPriority="high" />
    <main id="main-content" className="blueprint-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <div>
            <p className="blueprint-kicker">Christmas Lights — Fayetteville, AR</p>
            <h1>Christmas Light Installation in Fayetteville, AR</h1>
            <p>
              Great Dane Junk & Brush Removal installs and removes Christmas lights for homes in Fayetteville, AR and across Northwest Arkansas. We handle rooflines, gutters, trees, and shrubs — professionally installed with secure clips and taken down at the end of the season. Holiday lighting starts at $499, with free quotes based on photos of your home.
            </p>
            <div className="blueprint-actions">
              <Link href="#quote">Get a Free Quote</Link>
              <a href="tel:4793914462" style={{ background: '#7dff9e', color: '#0a1a0e', borderRadius: '999px', boxShadow: '0 8px 32px rgba(125,255,158,0.38)' }}>Call or Text (479) 391-4462</a>
            </div>
          </div>
          <div className="blueprint-hero-image">
            <Image src="/christmas-lights.webp" alt="Christmas lights installed on a home in Fayetteville AR" width={525} height={700} priority />
          </div>
        </div>
      </section>

      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell">
          <div className="blueprint-heading">
            <p className="blueprint-kicker">What&apos;s Included</p>
            <h2>What our Fayetteville Christmas light service covers</h2>
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
            <h2>Christmas light pricing in Fayetteville</h2>
            <p>Starting points, not surprise-free final invoices. Send a photo of your home for the fastest, most accurate quote.</p>
          </div>
          <div className="pricing-grid">
            <article className="pricing-card">
              <div>
                <h3>Christmas Light Installation</h3>
                <ul>
                  <li>Smaller homes with basic roofline lighting start near the base rate.</li>
                  <li>Larger homes, trees, shrubs, and custom displays are quoted by scope and materials needed.</li>
                  <li>Takedown and storage included — no extra charge at the end of the season.</li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <span>starting at</span>
                <strong>$499</strong>
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
            <h2>Christmas light questions, answered</h2>
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
          <h2>Get a free Christmas lights quote</h2>
          <p>Send a photo of your home and we will quote it clearly before work starts. Slots fill up fast — book early.</p>
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
