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
    <>
      <link rel="preload" as="image" href="/afterdriveway-optimized.webp" fetchPriority="high" />
    <main id="main-content" className="blueprint-page">
      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <ScrollReveal direction="left">
            <div>
              <p className="blueprint-kicker">About Great Dane Junk & Brush Removal</p>
              <h1>A truck, some free time, and a willingness to get my hands dirty</h1>
              <p>Great Dane Junk & Brush Removal didn&apos;t start with a business plan. It started with honest work and grew into something real.</p>
              <div className="blueprint-actions">
                <Link href="/contact">Get a free quote</Link>
                <a href="tel:4793914462" style={{ background: '#7dff9e', color: '#0a1a0e', borderRadius: '999px', boxShadow: '0 8px 32px rgba(125,255,158,0.38)' }}>Call or Text (479) 391-4462</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="blueprint-hero-image about-logo-circle">
              <Image src="/logo3.webp" alt="Great Dane Junk & Brush Removal logo" width={750} height={500} sizes="min(820px, 66vw)" priority />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell">
          <div className="blueprint-prose">
            <ScrollReveal direction="up">
              <p>I&apos;m Gibson Pillow, the owner and founder. Back in 2024, I was a college student looking for a way to make some extra cash on the side. I started picking up odd jobs — hauling junk, clearing brush, cleaning driveways — nothing fancy, just honest work. But somewhere along the way, something clicked. I started noticing the look on people&apos;s faces when a cluttered garage became clean again, or when a driveway that hadn&apos;t seen its original color in years came back to life after a good pressure wash. Customers started telling me how much it meant to them. That feedback stuck with me.</p>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <p>By the time I finished college in May 2026, I knew I didn&apos;t want to stop. I wanted to build something real around the work I&apos;d grown to love — so I made it official and launched Great Dane Junk & Brush Removal LLC.</p>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <p>The name wasn&apos;t chosen at random. I&apos;ve grown up around Great Danes my entire life. They&apos;re strong, loyal, and dependable — and honestly, those are the same qualities I want every customer to associate with my work. When I show up to your property, you&apos;re getting someone who takes pride in what they do and won&apos;t leave until the job is done right.</p>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <p>Today, Great Dane Junk & Brush Removal provides junk removal, brush clearing, pressure washing, landscaping, and Christmas light installation across the Fayetteville area and throughout NW Arkansas. Whether you need a one-time cleanout or ongoing outdoor maintenance, I&apos;m here to handle the work you don&apos;t have time for — and make your property something you&apos;re proud of again.</p>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <p className="blueprint-signoff">Thanks for supporting a locally owned, NW Arkansas business. It means more than you know.<br /><strong>— Gibson, Owner &amp; Founder</strong></p>
            </ScrollReveal>
          </div>
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
    </>
  )
}
