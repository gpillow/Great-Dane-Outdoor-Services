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

export default function AboutPage() {
  return (
    <main id="main-content" className="blueprint-page">
      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <ScrollReveal direction="left">
            <div>
              <p className="blueprint-kicker">About Great Dane</p>
              <h1>A local outdoor service company built around showing up</h1>
              <p>Great Dane Outdoor Services was built for practical property work: clear communication, honest quotes, and cleanup results homeowners can actually see.</p>
              <div className="blueprint-actions">
                <Link href="/contact">Get started now</Link>
                <a href="tel:8709951166">Call us</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="blueprint-hero-image about-logo-circle">
              <Image src="/logo-optimized.jpg" alt="Great Dane Outdoor Services logo" width={640} height={640} priority unoptimized />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell blueprint-story-layout">
          <ScrollReveal direction="left">
            <Image src="/cutdown-optimized.jpg" alt="Cleaned landscape bed after Great Dane service" width={1600} height={1200} loading="lazy" unoptimized />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <p className="blueprint-kicker">How It Started</p>
              <h2>Small company, direct standards</h2>
              <p>What started as a way to take on local outdoor work has grown into a focused service business for Northwest Arkansas homeowners.</p>
              <p>The goal is simple: quote clearly, show up, do the work right, and leave the property better than it was.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="blueprint-section">
        <div className="blueprint-shell">
          <div className="blueprint-heading">
            <p className="blueprint-kicker">What Matters</p>
            <h2>The standards behind the work</h2>
          </div>
          <div className="blueprint-value-grid">
            {[
              ['Clear quotes', 'You know what the job is expected to cost before work starts.'],
              ['Local service', 'Built for Fayetteville and surrounding Northwest Arkansas communities.'],
              ['Photo-friendly estimates', 'Send photos first so the quote process is faster and more accurate.'],
              ['Practical results', 'Focused on the cleanup, maintenance, and outdoor work homeowners actually need.'],
            ].map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
