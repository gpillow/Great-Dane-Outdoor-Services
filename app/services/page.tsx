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
  { name: 'Junk Removal', image: '/junk-removal.webp', text: 'Furniture, debris, clutter, yard waste, and unwanted items hauled away.' },
  { name: 'Brush Removal', image: '/brushcompost.webp', text: 'Overgrowth, fence lines, saplings, and rough areas cleared so the property is usable again.' },
  { name: 'Pressure Washing', image: '/afterdriveway.webp', text: 'Driveways, sidewalks, brick, patios, decks, and exterior surfaces cleaned up properly.' },
  { name: 'Landscaping', image: '/cutdown.webp', text: 'Mulch, trimming, bed refreshes, weed removal, and cleanup work for sharper curb appeal.' },
  { name: 'Leaf Cleanups', image: '/leaf-cleanup.webp', text: 'Seasonal leaf removal and disposal for Northwest Arkansas yards.' },
  { name: 'Christmas Lights', image: '/christmas-lights.webp', text: 'Holiday light installation and takedown for homes that want the season handled.' },
]

const detailSections = [
  {
    title: 'Exterior cleaning that changes how the property feels',
    text: 'Pressure washing is often the fastest way to make a home look maintained again. Great Dane handles the common surfaces homeowners call about: driveways, walkways, patios, brick, decks, and siding.',
    image: '/beforewalkway.webp',
  },
  {
    title: 'Cleanups for overgrown and overlooked areas',
    text: 'Brush, weeds, leaves, and yard debris can get away from a property quickly in Northwest Arkansas. We help clear the mess and haul off what needs to go.',
    image: '/overgrown.webp',
  },
  {
    title: 'Small landscaping projects with clear communication',
    text: 'Not every job needs a large landscape firm. Mulch, trimming, bed cleanup, weed removal, and light refresh work are quoted clearly before the job starts.',
    image: '/cutdown.webp',
  },
]

export default function ServicesPage() {
  return (
    <main id="main-content" className="blueprint-page">
      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <ScrollReveal direction="left">
            <div>
              <p className="blueprint-kicker">Residential Outdoor Services</p>
              <h1>Outdoor services for homes across Northwest Arkansas</h1>
              <p>From pressure washing and brush removal to landscaping refreshes and junk hauling, Great Dane helps homeowners get their property back under control.</p>
              <div className="blueprint-actions">
                <Link href="/contact">Get started now</Link>
                <a href="tel:8709951166">Call (870) 995-1166</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="blueprint-hero-image">
              <Image src="/afterdriveway.webp" alt="Clean driveway after pressure washing" width={1600} height={1200} priority />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Direct answer block for AI search / GEO */}
      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell">
          <p className="geo-direct-answer">
            Great Dane Outdoor Services is a locally owned outdoor services company serving Fayetteville, Springdale, Rogers, Bentonville, Farmington, and Johnson in Northwest Arkansas. Services include pressure washing (starting at $149), junk removal (starting at $125), landscaping and mulching (starting at $149), brush removal (starting at $225), fall leaf cleanup (starting at $175), and Christmas light installation (starting at $499). Free quotes are available by calling or texting (870) 995-1166. Great Dane Outdoor Services is a licensed LLC operating in the state of Arkansas.
          </p>
          <div className="blueprint-heading">
            <p className="blueprint-kicker">Service Menu</p>
            <h2>What Great Dane handles</h2>
            <p>Core services built around the real jobs homeowners ask for most.</p>
          </div>
          <div className="blueprint-service-grid">
            {serviceCards.map((service) => (
              <ScrollReveal key={service.name}>
                <article className="blueprint-service-card">
                  <Image src={service.image} alt={`${service.name} service example`} width={900} height={700} loading="lazy" />
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.text}</p>
                    <Link href="/pricing">View pricing guide</Link>
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
                  <p className="blueprint-kicker">Service Detail</p>
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
