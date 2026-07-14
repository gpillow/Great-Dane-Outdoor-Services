'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const BeforeAfterSlider = dynamic(() => import('@/components/BeforeAfterSlider'))

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



const services = [
  { name: 'Junk Removal', desc: 'Old furniture, yard debris, clutter, and unwanted items hauled off fast.' },
  { name: 'Brush Removal', desc: 'Dense overgrowth, fence lines, saplings, and rough areas cleared out.' },
  { name: 'Pressure Washing', desc: 'Driveways, walkways, brick, decks, siding, and patios cleaned with care.' },
  { name: 'Landscaping', desc: 'Mulch, trimming, flower beds, weed removal, and property refresh work.' },
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
        <div className="home-hero-overlay" />
        <div className="home-shell home-hero-grid">
          <ScrollReveal direction="left">
            <div className="home-hero-copy">
              <p className="home-kicker">Fayetteville • Northwest Arkansas</p>
              <p className="home-hero-stars">⭐⭐⭐⭐⭐ 5-Star Rated on Google</p>
              <h1>Outdoor services for cleaner, better-kept properties</h1>
              <p className="home-hero-trust-line">Same-day service available · Free quotes in minutes</p>
              <div className="home-hero-services">
                <span>Junk Removal</span>
                <span>Brush Removal</span>
                <span>Pressure Washing</span>
                <span>Landscaping</span>
              </div>
              <p className="home-hero-lede">
                Locally owned and operated in NW Arkansas. Free quotes, fair pricing, and work that gets done right.
              </p>
              <div className="home-hero-actions">
                <a href="tel:8709951166" className="home-btn home-btn-call">Call or Text (870) 995-1166</a>
                <a href="/contact" className="home-btn home-btn-secondary">Get a Free Quote</a>
              </div>
              <p className="home-hero-services-text">Junk Removal · Pressure Washing · Landscaping · Brush Removal</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="home-hero-card">
              <Image
                src="/junk-removal.webp"
                alt="Great Dane Outdoor Services truck and dump trailer ready for junk removal"
                width={3024}
                height={4032}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="home-hero-card-caption">
                <span>Recent work</span>
                <strong>Junk removal and hauling</strong>
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
              <p className="home-kicker">Google Reviews</p>
              <h2>What customers are saying</h2>
            </div>
          </ScrollReveal>
          <div className="home-reviews-grid">
            <ScrollReveal direction="left">
              <article className="home-review-card">
                <div className="home-review-stars">★★★★★</div>
                <p className="home-review-text">&ldquo;Gibson has been a hard-working help to me, with maintaining my properties with power washing and yard work. He communicates well and is professional in his interactions; he is punctual and fair in pricing. He and his teammate completed all the tasks within the timeframe we agreed upon.&rdquo;</p>
                <div className="home-review-author">
                  <span className="home-review-name">Michelle Rofkahr</span>
                  <span className="home-review-source">Google Review</span>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <article className="home-review-card">
                <div className="home-review-stars">★★★★★</div>
                <p className="home-review-text">&ldquo;Gibson did a great job of ordering and installing and removing my Christmas lights! He also did power washing for me and some yard maintenance. I will be using Great Dane in the future for sure.&rdquo;</p>
                <div className="home-review-author">
                  <span className="home-review-name">Becky Maxwell</span>
                  <span className="home-review-source">Google Review</span>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>


      <section className="home-section home-story-section">
        <div className="home-shell home-story-grid">
          <ScrollReveal direction="left">
            <div className="home-image-stack">
              <Image src="/garage-before.webp" alt="Garage full of junk and clutter before removal" width={900} height={1200} loading="lazy" />
              <Image src="/garage-after.webp" alt="Clean garage after junk removal" width={900} height={1200} loading="lazy" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="home-story-copy">
              <p className="home-kicker">Local and Direct</p>
              <h2>An outdoor service company built on great service and big results</h2>
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
                <BeforeAfterSlider before="/beforedriveway.webp" after="/afterdriveway.webp" beforeAlt="Before driveway pressure washing in Northwest Arkansas" afterAlt="After driveway pressure washing in Northwest Arkansas" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="gallery-frame">
                <p className="home-project-label">Brush and Yard Cleanup</p>
                <BeforeAfterSlider before="/overgrown.webp" after="/cutdown.webp" beforeAlt="Before overgrown yard cleanup in Northwest Arkansas" afterAlt="After overgrown yard cleanup in Northwest Arkansas" />
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
            <a href="tel:8709951166" className="home-btn home-btn-secondary">Call or Text (870) 995-1166</a>
          </div>
        </div>
      </section>
    </main>
  )
}
