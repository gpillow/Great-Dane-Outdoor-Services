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
  { name: 'Landscaping', image: '/cutdown.webp', text: 'Mulch, trimming, bed refreshes, weed removal, and cleanup work for sharper curb appeal.', link: '/pricing', linkText: 'View pricing guide' },
  { name: 'Leaf Cleanups', image: '/leaf-cleanup.webp', text: 'Seasonal leaf removal and disposal for Northwest Arkansas yards.', link: '/pricing', linkText: 'View pricing guide' },
  { name: 'Christmas Lights', image: '/christmas-lights.webp', text: 'Holiday light installation and takedown for homes that want the season handled.', link: '/pricing', linkText: 'View pricing guide' },
]

const detailSections = [
  {
    title: 'Junk removal done the same week you call',
    text: 'Old furniture, appliances, yard debris, construction scraps, and general clutter — hauled off fast. We load it, we haul it, and we leave the space clean. No dumping fees passed to you.',
    image: '/junk-removal.webp',
    kicker: 'Junk Removal',
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

export default function ServicesPage() {
  return (
    <main id="main-content" className="blueprint-page">
      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <ScrollReveal direction="left">
            <div>
              <p className="blueprint-kicker">Junk Removal &amp; Brush Removal — Northwest Arkansas</p>
              <h1>Haul it off. Clear it out. Get your property back.</h1>
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
            Great Dane Outdoor Services is a locally owned outdoor services company serving Fayetteville, Springdale, Rogers, Bentonville, Farmington, and Johnson in Northwest Arkansas. Services include pressure washing (starting at $125), junk removal (starting at $149), landscaping and mulching (starting at $149), brush removal (starting at $225), fall leaf cleanup (starting at $175), and Christmas light installation (starting at $499). Free quotes are available by calling or texting (479) 391-4462. Great Dane Outdoor Services is a licensed LLC operating in the state of Arkansas.
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
                  <Link href="/contact">Request an estimate</Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
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
  )
}
