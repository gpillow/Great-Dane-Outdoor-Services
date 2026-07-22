import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: { absolute: 'Junk Removal Fayetteville AR | Great Dane Outdoor Services | (479) 391-4462' },
  description:
    'Junk removal in Fayetteville, AR starting at $149. Furniture, garage cleanouts, appliances, and yard debris hauled away — same day or next day service available. Free quotes.',
  alternates: { canonical: 'https://www.greatdaneoutdoorservices.com/junk-removal-fayetteville-ar' },
}

const included = [
  'Furniture, mattresses, and appliance removal',
  'Garage, basement, attic, and estate cleanouts',
  'Yard debris and general household clutter',
  'Construction scraps and remodeling debris',
  'Loading and hauling — we do the lifting',
  'No dumping fees passed to you',
]

const faqs = [
  {
    q: 'How much does junk removal cost in Fayetteville, AR?',
    a: 'Junk removal starts at $149. Pricing is based on volume, weight, disposal requirements, loading time, and access. A single-item pickup costs less than a garage cleanout, construction debris pile, or mixed outdoor cleanup. A photo of the pile is the fastest way to get an exact number.',
  },
  {
    q: 'What items do you not accept?',
    a: 'Some items may need special disposal or may not be accepted, including hazardous chemicals, paint, fuel, oils, asbestos, medical waste, and certain tires or batteries. Send photos and a list of what you have, and we will confirm what can be hauled before booking.',
  },
  {
    q: 'Do you offer same-day junk removal in Fayetteville, AR?',
    a: 'Same day or next day service is available. Text photos or videos to (479) 391-4462 with the address and what you need hauled, and we will confirm the soonest available slot.',
  },
  {
    q: 'Are junk removal estimates really free?',
    a: 'Yes. Quotes are free with no pressure to book. If the job is straightforward, photos are usually enough. For larger or unclear jobs, we may ask a few follow-up questions or schedule a quick look before giving the final number.',
  },
  {
    q: 'Do you offer junk removal outside of Fayetteville?',
    a: 'Yes. Great Dane serves Fayetteville, Springdale, Rogers, Bentonville, Farmington, Johnson, Lowell, Centerton, Bella Vista, Cave Springs, Siloam Springs, Elkins, and nearby Northwest Arkansas communities. If you are close but not sure, send the address and we will confirm.',
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
  name: 'Junk Removal',
  serviceType: 'Junk Removal',
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
      description: 'Junk removal starting at $149. Final quote depends on volume, access, and disposal needs.',
    },
  },
}

export default function JunkRemovalFayettevillePage() {
  return (
    <>
      <link rel="preload" as="image" href="/afterdriveway-optimized.webp" fetchPriority="high" />
    <main id="main-content" className="blueprint-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <div>
            <p className="blueprint-kicker">Junk Removal — Fayetteville, AR</p>
            <h1>Junk Removal in Fayetteville, AR</h1>
            <p>
              Great Dane Outdoor Services provides junk removal in Fayetteville, AR and across Northwest Arkansas. From single-item pickups to full garage, basement, and estate cleanouts, we haul away furniture, appliances, yard debris, and construction scraps — same day or next day service available. Junk removal starts at $149, with free quotes by phone, text, or photo.
            </p>
            <div className="blueprint-actions">
              <Link href="#quote">Get a Free Quote</Link>
              <a href="tel:4793914462" style={{ background: '#7dff9e', color: '#0a1a0e', borderRadius: '999px', boxShadow: '0 8px 32px rgba(125,255,158,0.38)' }}>Call or Text (479) 391-4462</a>
            </div>
          </div>
          <div className="blueprint-hero-image">
            <Image src="/junk-removal.webp" alt="Great Dane truck and dump trailer loaded for junk removal in Fayetteville AR" width={525} height={700} priority />
          </div>
        </div>
      </section>

      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell">
          <div className="blueprint-heading">
            <p className="blueprint-kicker">What&apos;s Included</p>
            <h2>What our Fayetteville junk removal covers</h2>
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
            <h2>Junk removal pricing in Fayetteville</h2>
            <p>Starting points, not surprise-free final invoices. Send a photo of the pile for the fastest, most accurate quote.</p>
          </div>
          <div className="pricing-grid">
            <article className="pricing-card">
              <div>
                <h3>Junk Removal</h3>
                <ul>
                  <li>Single-item pickup and small loads start near the base rate.</li>
                  <li>Furniture, yard debris, garage cleanouts, and larger loads are quoted by volume and disposal needs.</li>
                  <li>Text a photo of the pile for the fastest quote.</li>
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
            <h2>Junk removal questions, answered</h2>
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
          <h2>Get a free junk removal quote</h2>
          <p>Send a few photos and a quick description. Same day or next day service available.</p>
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
            <Link href="/pressure-washing-fayetteville-ar" style={{ background: '#f3f5ef', color: '#1d211d' }}>Pressure Washing</Link>
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
