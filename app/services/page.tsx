'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ScrollReveal({ children, direction = 'up' }: { children: React.ReactNode, direction?: 'up' | 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal-${direction}`}>{children}</div>
}

const serviceCards = [
  { name: 'Junk Removal', image: '/garage-before.webp', text: 'Furniture, debris, clutter, yard waste, and unwanted items hauled away.', link: '/junk-removal-fayetteville-ar', linkText: 'Junk removal in Fayetteville' },
  { name: 'Brush Removal', image: '/brushcompost.webp', text: 'Overgrowth, fence lines, saplings, and rough areas cleared so the property is usable again.', link: '/brush-removal-fayetteville-ar', linkText: 'Brush removal in Fayetteville' },
  { name: 'Pressure Washing', image: '/afterdriveway.webp', text: 'Driveways, sidewalks, brick, patios, decks, and exterior surfaces cleaned up properly.', link: '/pressure-washing-fayetteville-ar', linkText: 'Pressure washing in Fayetteville' },
  { name: 'Landscaping', image: '/cutdown.webp', text: 'Mulch, trimming, bed refreshes, weed removal, and cleanup work for sharper curb appeal.', link: '/landscaping-fayetteville-ar', linkText: 'Landscaping in Fayetteville' },
  { name: 'Leaf Cleanups', image: '/leaf-cleanup.webp', text: 'Seasonal leaf removal and disposal for Northwest Arkansas yards.', link: '/pricing', linkText: 'View pricing guide' },
  { name: 'Christmas Lights', image: '/christmas-lights.webp', text: 'Holiday light installation and takedown for homes that want the season handled.', link: '/christmas-lights-fayetteville-ar', linkText: 'Christmas lights in Fayetteville' },
]

const detailSections = [
  {
    title: 'Junk removal done the same week you call',
    text: 'Old furniture, appliances, yard debris, construction scraps, and general clutter — hauled off fast. We load it, we haul it, and we leave the space clean. No dumping fees passed to you. We serve Fayetteville, Springdale, Rogers, Bentonville, Farmington, and Johnson.',
    image: '/junk-removal.webp',
    kicker: 'Junk Removal',
    hauledItems: [
      'Furniture & mattresses',
      'Appliances & electronics',
      'Garage & basement cleanouts',
      'Yard debris & brush',
      'Construction & remodeling scraps',
      'Hot tubs & swing sets',
      'Estate cleanouts',
      'General household clutter',
    ],
  },
  {
    title: 'Brush and overgrowth cleared to the ground',
    text: 'Dense fence lines, overgrown back yards, saplings taking over, and rough areas that haven\'t been touched in years. We clear it out and haul off the debris so the property is usable again.',
    image: '/overgrown.webp',
    kicker: 'Brush Removal',
  },
  {
    title: 'Pressure washing and outdoor cleanup work too',
    text: 'Driveways, walkways, patios, brick, and exterior surfaces cleaned up properly. Mulch, trimming, bed refreshes, and light landscaping also available — quoted clearly before work starts.',
    image: '/afterdriveway.webp',
    kicker: 'Other Services',
  },
]

const junkPricingTiers = [
  { label: 'Small load', desc: 'Single items, a few bags, or a small pile', price: '$149+' },
  { label: 'Quarter truck', desc: 'A few pieces of furniture or appliances', price: '$225+' },
  { label: 'Half truck', desc: 'Garage cleanout, shed contents, or a mid-size job', price: '$375+' },
  { label: 'Full truck', desc: 'Full garage, large estate cleanout, or a big haul', price: '$575+' },
]

const junkFaqs = [
  {
    q: 'How much does junk removal cost in Northwest Arkansas?',
    a: 'Junk removal in Northwest Arkansas starts at $149 for small loads. A full truck load runs $575 or more. The exact price depends on the volume, weight, loading time, and disposal requirements. Text a photo of your pile to (479) 391-4462 for the fastest quote.',
  },
  {
    q: 'What items does Great Dane Junk & Brush Removal haul away?',
    a: 'We haul furniture, mattresses, appliances, electronics, yard debris, construction scraps, and general household clutter. We also handle full garage, basement, and estate cleanouts. Hazardous materials like paint, chemicals, and certain batteries require special disposal and may not be accepted.',
  },
  {
    q: 'Do you offer same-day junk removal in Northwest Arkansas?',
    a: 'Yes. Same-day and next-day junk removal is available across Fayetteville, Springdale, Rogers, Bentonville, Farmington, and Johnson. Text photos and your address to (479) 391-4462 and we will confirm the earliest available slot.',
  },
  {
    q: 'Do I need to move items to the curb before you arrive?',
    a: 'No. We handle the lifting from wherever items are on your property — garage, backyard, upstairs rooms, or anywhere else on-site. Just point us to the pile.',
  },
  {
    q: 'Are junk removal quotes really free?',
    a: 'Yes. Quotes are free and there is no pressure to book. For most jobs a photo is enough to give an accurate number. For larger or unusual loads we may ask a few follow-up questions before confirming the price.',
  },
]

const junkFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: junkFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <link rel="preload" as="image" href="/afterdriveway-optimized.webp" fetchPriority="high" />
    <main id="main-content" className="blueprint-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(junkFaqSchema) }} />

      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <ScrollReveal direction="left">
            <div>
              <p className="blueprint-kicker">Junk Removal &amp; Brush Removal — Northwest Arkansas</p>
              <h1>Junk Removal &amp; Outdoor Services in Northwest Arkansas</h1>
              <p>Great Dane specializes in junk removal and brush clearing for homeowners across NW Arkansas. We also handle pressure washing, landscaping, leaf cleanups, and Christmas lights.</p>
              <div className="blueprint-actions">
                <Link href="/contact">Get started now</Link>
                <a href="tel:4793914462" style={{ background: '#7dff9e', color: '#0a1a0e', borderRadius: '999px', boxShadow: '0 8px 32px rgba(125,255,158,0.38)' }}>Call or Text (479) 391-4462</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="blueprint-hero-image">
              <Image src="/junk-removal.webp" alt="Great Dane truck and dump trailer ready for junk removal" width={525} height={700} priority />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Direct answer block for AI search / GEO */}
      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell">
          <p className="geo-direct-answer">
            Great Dane Junk & Brush Removal is a locally owned outdoor services company serving Fayetteville, Springdale, Rogers, Bentonville, Farmington, and Johnson in Northwest Arkansas. Services include pressure washing (starting at $125), junk removal (starting at $149), landscaping and mulching (starting at $149), brush removal (starting at $225), fall leaf cleanup (starting at $175), and Christmas light installation (starting at $499). Free quotes are available by calling or texting (479) 391-4462. Great Dane Junk & Brush Removal is a licensed LLC operating in the state of Arkansas.
          </p>
          <div className="blueprint-heading">
            <p className="blueprint-kicker">Service Menu</p>
            <h2>Junk removal, brush clearing, and more</h2>
            <p>Every service is quoted before work starts. No surprise charges.</p>
          </div>
          <div className="blueprint-service-grid">
            {serviceCards.map((service) => (
              <ScrollReveal key={service.name}>
                <article className="blueprint-service-card">
                  <Image src={service.image} alt={`${service.name} service example`} width={900} height={700} loading="lazy" />
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.text}</p>
                    <Link href={service.link}>{service.linkText}</Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="blueprint-section">
        <div className="blueprint-shell blueprint-detail-list">
          {detailSections.map((section, index) => (
            <ScrollReveal key={section.title} direction={index % 2 === 0 ? 'left' : 'right'}>
              <article className="blueprint-detail-row">
                <Image src={section.image} alt={section.title} width={1600} height={1200} loading="lazy" />
                <div>
                  <p className="blueprint-kicker">{section.kicker}</p>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                  {'hauledItems' in section && section.hauledItems && (
                    <ul className="blueprint-haul-list">
                      {section.hauledItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <Link href="/contact">Request an estimate</Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-shell">
          <div className="pricing-heading">
            <p className="pricing-kicker">Junk Removal Pricing</p>
            <h2>How junk removal is priced in NW Arkansas</h2>
            <p>Pricing is based on the amount of space your load takes in the truck. Text a photo of the pile and we will quote it before we come out.</p>
          </div>
          <div className="pricing-grid">
            {junkPricingTiers.map((tier) => (
              <article key={tier.label} className="pricing-card">
                <div>
                  <h3>{tier.label}</h3>
                  <ul>
                    <li>{tier.desc}</li>
                  </ul>
                </div>
                <div className="pricing-card-footer">
                  <span>starting at</span>
                  <strong>{tier.price}</strong>
                  <Link href="/contact">Get estimate</Link>
                </div>
              </article>
            ))}
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
            {junkFaqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary className="faq-question"><span>{faq.q}</span></summary>
                <div className="faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="blueprint-cta">
        <div className="blueprint-shell">
          <h2>Need help choosing the right service?</h2>
          <p>Send a few photos and a quick description. We will tell you what makes sense and quote the work clearly.</p>
          <div className="blueprint-actions">
            <Link href="/contact">Get a free quote</Link>
            <Link href="/gallery">See project examples</Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
