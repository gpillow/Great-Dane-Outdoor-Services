'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

function ScrollReveal({ children, direction = 'up' }: { children: React.ReactNode, direction?: 'up' | 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal-${direction}`}>{children}</div>
}

const cities = ['Fayetteville', 'Rogers', 'Bentonville', 'Springdale', 'Farmington', 'Lowell', 'Centerton', 'Bella Vista']

const serviceGroups = [
  {
    label: 'Homes',
    title: 'Clean, usable outdoor spaces',
    text: 'Driveways, beds, yards, and rough edges cleaned up so the property feels maintained again.',
  },
  {
    label: 'Cleanups',
    title: 'Overgrowth, debris, and seasonal mess',
    text: 'Brush, leaves, junk, and yard waste removed with clear pricing before work begins.',
  },
  {
    label: 'Seasonal Work',
    title: 'Property help when the season changes',
    text: 'Fall leaf removal, spring refreshes, and holiday light installs for local homes.',
  },
]

const services = [
  { name: 'Pressure Washing', desc: 'Driveways, walkways, brick, decks, siding, and patios cleaned with care.' },
  { name: 'Junk Removal', desc: 'Old furniture, yard debris, clutter, and unwanted items hauled off fast.' },
  { name: 'Landscaping', desc: 'Mulch, trimming, flower beds, weed removal, and property refresh work.' },
  { name: 'Brush Removal', desc: 'Dense overgrowth, fence lines, saplings, and rough areas cleared out.' },
  { name: 'Leaf Cleanups', desc: 'Seasonal leaf removal and disposal so your yard stays under control.' },
  { name: 'Christmas Lights', desc: 'Holiday light installation and takedown without the ladder headache.' },
]

const trustPoints = [
  'Free quotes',
  'Licensed LLC',
  'Call or text directly',
  'Serving Northwest Arkansas',
]

export default function HomePage() {
  return (
    <main id="main-content" className="home-page">
      <section className="home-hero" aria-label="Great Dane Outdoor Services hero">
        <Image
          src="/logo-optimized.jpg"
          alt=""
          aria-hidden="true"
          className="home-hero-bg"
          width={640}
          height={640}
          priority
          unoptimized
        />
        <div className="home-hero-overlay" />
        <div className="home-shell home-hero-grid">
          <ScrollReveal direction="left">
            <div className="home-hero-copy">
              <p className="home-kicker">Fayetteville • Northwest Arkansas</p>
              <h1>Outdoor services for cleaner, better-kept properties</h1>
              <p className="home-hero-lede">
                Pressure washing, brush removal, junk hauling, landscaping, leaf cleanups, and seasonal work for homeowners who want the job handled without the runaround.
              </p>
              <div className="home-hero-actions">
                <a href="/contact" className="home-btn home-btn-primary">Get a Free Quote</a>
                <a href="tel:8709951166" className="home-btn home-btn-secondary">Call (870) 995-1166</a>
              </div>
              <div className="home-city-row" aria-label="Service areas">
                {cities.map((city) => <span key={city}>{city}</span>)}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="home-hero-card">
              <Image
                src="/afterdriveway-optimized.jpg"
                alt="Clean driveway after pressure washing in Northwest Arkansas"
                width={1600}
                height={1200}
                priority
                unoptimized
              />
              <div className="home-hero-card-caption">
                <span>Recent work</span>
                <strong>Surface cleaning and property cleanup</strong>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="home-trust-strip">
        <div className="home-shell home-trust-inner">
          {trustPoints.map((point) => <span key={point}>{point}</span>)}
        </div>
      </section>

      <section className="home-section home-section-light">
        <div className="home-shell">
          <ScrollReveal>
            <div className="home-section-heading">
              <p className="home-kicker">What We Handle</p>
              <h2>Practical outdoor work, done cleanly</h2>
              <p>Start with one project or combine a few. Every quote is based on your property, your photos, and the actual scope of work.</p>
            </div>
          </ScrollReveal>

          <div className="home-category-grid">
            {serviceGroups.map((group) => (
              <ScrollReveal key={group.label}>
                <article className="home-category-card">
                  <span>{group.label}</span>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-story-section">
        <div className="home-shell home-story-grid">
          <ScrollReveal direction="left">
            <div className="home-image-stack">
              <Image src="/overgrown-optimized.jpg" alt="Overgrown property before cleanup" width={1600} height={1200} loading="lazy" unoptimized />
              <Image src="/cutdown-optimized.jpg" alt="Property after brush and landscaping cleanup" width={1600} height={1200} loading="lazy" unoptimized />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="home-story-copy">
              <p className="home-kicker">Local and Direct</p>
              <h2>A small outdoor service company built around showing up</h2>
              <p>
                Great Dane is starting with the kind of work homeowners actually need: clean driveways, reclaimed yards, cleared brush, hauled junk, and yards that feel usable again.
              </p>
              <p>
                You do not need a big maintenance contract to get professional communication. Call, text, or send photos and you will get a straightforward quote.
              </p>
              <a href="/about" className="home-text-link">Learn about Great Dane →</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="home-section home-section-light">
        <div className="home-shell">
          <ScrollReveal>
            <div className="home-section-heading">
              <p className="home-kicker">Services</p>
              <h2>The core work homeowners ask for most</h2>
              <p>Clear service options, no inflated promises, and a direct path to getting on the schedule.</p>
            </div>
          </ScrollReveal>

          <div className="home-service-grid">
            {services.map((service, index) => (
              <ScrollReveal key={service.name}>
                <article className="home-service-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                  <a href="/contact">Get a quote →</a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-project-section">
        <div className="home-shell">
          <ScrollReveal>
            <div className="home-section-heading">
              <p className="home-kicker">Project Proof</p>
              <h2>Before and after work you can inspect</h2>
              <p>Real property photos say more than stock imagery ever could.</p>
            </div>
          </ScrollReveal>

          <div className="home-project-grid">
            <ScrollReveal direction="left">
              <div className="gallery-frame">
                <p className="home-project-label">Driveway Restoration</p>
                <BeforeAfterSlider before="/beforedriveway-optimized.jpg" after="/afterdriveway-optimized.jpg" beforeAlt="Before driveway pressure washing in Northwest Arkansas" afterAlt="After driveway pressure washing in Northwest Arkansas" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="gallery-frame">
                <p className="home-project-label">Brush and Yard Cleanup</p>
                <BeforeAfterSlider before="/overgrown-optimized.jpg" after="/cutdown-optimized.jpg" beforeAlt="Before overgrown yard cleanup in Northwest Arkansas" afterAlt="After overgrown yard cleanup in Northwest Arkansas" />
              </div>
            </ScrollReveal>
          </div>

          <div className="home-center-action">
            <a href="/gallery" className="home-btn home-btn-secondary">View More Projects</a>
          </div>
        </div>
      </section>

      <section className="home-section home-cta-section">
        <div className="home-shell home-cta-panel">
          <p className="home-kicker">Ready When You Are</p>
          <h2>Tell us what needs done. We&apos;ll quote it clearly.</h2>
          <p>Call, text, or use the quote form. Photos are welcome and can help speed up the estimate.</p>
          <div className="home-hero-actions">
            <a href="/contact" className="home-btn home-btn-primary">Get a Free Quote</a>
            <a href="tel:8709951166" className="home-btn home-btn-secondary">Call (870) 995-1166</a>
          </div>
        </div>
      </section>
    </main>
  )
}
