import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Outdoor Service Pricing | Great Dane Outdoor Services Fayetteville AR',
  description:
    'Starting prices and estimate guidance for Great Dane Outdoor Services in Northwest Arkansas. Pressure washing, brush removal, junk hauling, landscaping, leaf cleanup, and Christmas lights.',
}

const pricingItems = [
  {
    name: 'Pressure Washing',
    startingAt: '$149',
    unit: 'starting at',
    bullets: [
      'Small patios, walkways, and spot cleaning usually start near the minimum.',
      'Driveways, brick, decks, siding, and heavy buildup are quoted by size and surface condition.',
      'Photos help us estimate faster before scheduling.',
    ],
  },
  {
    name: 'Junk Removal',
    startingAt: '$125',
    unit: 'starting at',
    bullets: [
      'Single-item pickup and small loads start near the base rate.',
      'Furniture, yard debris, garage cleanouts, and larger loads are quoted by volume and disposal needs.',
      'Text a photo of the pile for the fastest quote.',
    ],
  },
  {
    name: 'Landscaping Refresh',
    startingAt: '$149',
    unit: 'starting at',
    bullets: [
      'Mulch, weed removal, trimming, flower bed cleanup, and small bed refreshes.',
      'New installs, larger beds, and heavy cleanup are quoted after seeing the property.',
      'Great for getting curb appeal back before listing or hosting.',
    ],
  },
  {
    name: 'Brush Removal',
    startingAt: '$225',
    unit: 'starting at',
    bullets: [
      'Fence lines, overgrown beds, saplings, and rough yard areas.',
      'Pricing depends on access, density, hauling, and disposal.',
      'Before photos help us understand the size of the cleanup.',
    ],
  },
  {
    name: 'Leaf Cleanup',
    startingAt: '$175',
    unit: 'starting at',
    bullets: [
      'Small residential leaf cleanups start near the base rate.',
      'Large yards, heavy fall buildup, and haul-off increase the estimate.',
      'Seasonal scheduling fills quickly during peak leaf drop.',
    ],
  },
  {
    name: 'Christmas Lights',
    startingAt: '$499',
    unit: 'starting at',
    bullets: [
      'Basic roofline installs start near the base rate.',
      'Larger homes, custom layouts, trees, and takedown/storage needs change pricing.',
      'Early booking helps lock in a better installation window.',
    ],
  },
]

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Outdoor Service Pricing',
  url: 'https://www.greatdaneoutdoorservices.com/pricing',
  description:
    'Starting price guidance for outdoor services from Great Dane Outdoor Services in Northwest Arkansas.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Great Dane Outdoor Services',
    telephone: '+18709951166',
    areaServed: 'Northwest Arkansas',
  },
  mainEntity: {
    '@type': 'OfferCatalog',
    name: 'Great Dane Outdoor Services Pricing',
    itemListElement: pricingItems.map((item) => ({
      '@type': 'Offer',
      name: item.name,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        description: `${item.name} ${item.unit} ${item.startingAt}. Final quote depends on property conditions and scope.`,
      },
      itemOffered: {
        '@type': 'Service',
        name: item.name,
        areaServed: 'Northwest Arkansas',
        provider: { '@type': 'LocalBusiness', name: 'Great Dane Outdoor Services' },
      },
    })),
  },
}

export default function PricingPage() {
  return (
    <main id="main-content" className="pricing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <section className="pricing-hero">
        <div className="pricing-shell pricing-hero-grid">
          <div>
            <p className="pricing-kicker">Pricing Guide</p>
            <h1>Outdoor service pricing in Northwest Arkansas</h1>
            <p>
              These are starting points, not surprise-free final invoices. Every property is different, so Great Dane gives clear quotes based on photos, access, size, hauling, and the actual scope of work.
            </p>
            <div className="pricing-actions">
              <Link href="/contact">Get an Estimate</Link>
              <a href="tel:8709951166">Call (870) 995-1166</a>
            </div>
          </div>
          <div className="pricing-hero-photo">
            <Image
              src="/afterbrick-optimized.jpg"
              alt="Clean brick surface after pressure washing"
              width={1600}
              height={1200}
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-shell">
          <div className="pricing-heading">
            <p className="pricing-kicker">Common Starting Points</p>
            <h2>Service cost guide</h2>
            <p>Use these numbers to understand the usual entry point. The fastest way to get a real number is to send photos and a short description.</p>
          </div>

          <div className="pricing-grid">
            {pricingItems.map((item) => (
              <article key={item.name} className="pricing-card">
                <div>
                  <h3>{item.name}</h3>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
                <div className="pricing-card-footer">
                  <span>{item.unit}</span>
                  <strong>{item.startingAt}</strong>
                  <Link href="/contact">Get estimate</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-proof">
        <div className="pricing-shell pricing-proof-grid">
          <div>
            <p className="pricing-kicker">Why Quotes Vary</p>
            <h2>Fair pricing starts with seeing the job</h2>
            <p>
              Two jobs with the same service name can take completely different amounts of time. Overgrowth density, square footage, disposal fees, water access, slope, and surface condition all matter.
            </p>
            <p>
              That is why Great Dane keeps the estimate process direct: send the address, a few photos, and what you want handled.
            </p>
          </div>
          <div className="pricing-photo-pair">
            <Image src="/overgrown-optimized.jpg" alt="Overgrown yard before cleanup" width={1600} height={1200} loading="lazy" unoptimized />
            <Image src="/cutdown-optimized.jpg" alt="Yard after brush removal and cleanup" width={1600} height={1200} loading="lazy" unoptimized />
          </div>
        </div>
      </section>

      <section className="pricing-area">
        <div className="pricing-shell">
          <h2>Service Area</h2>
          <p>
            Great Dane Outdoor Services provides pressure washing, brush removal, junk removal, landscaping refreshes, leaf cleanups, and seasonal outdoor work across Northwest Arkansas, including Fayetteville, Springdale, Rogers, Bentonville, Farmington, and Johnson.
          </p>
          <Link href="/contact">Request a free quote</Link>
        </div>
      </section>
    </main>
  )
}
