'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const BeforeAfterSlider = dynamic(() => import('@/components/BeforeAfterSlider'))

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

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
    <>
      {/* Preload the correct hero background per screen width — homepage only */}
      <link rel="preload" as="image" href="/hero-mob-v5.webp" fetchPriority="high" type="image/webp" media="(max-width: 640px)" />
      <link rel="preload" as="image" href="/hero-v2.webp" fetchPriority="high" type="image/webp" media="(min-width: 641px)" />
    <main id="main-content" className="home-page">
      <section className="home-hero" aria-label="Great Dane Junk & Brush Removal hero">
        <div className="home-hero-overlay" />
        <div className="home-shell home-hero-grid">
          <ScrollReveal direction="left">
            <div className="home-hero-copy">
              <p className="home-hero-stars">⭐⭐⭐⭐⭐ 100% 5-Star Rated on Google</p>
              <p className="home-kicker">Junk Removal & Brush Removal — Northwest Arkansas</p>
              <h1>Junk Removal & Outdoor Services in Northwest Arkansas</h1>
              <p className="home-hero-lede">Great Dane specializes in junk removal and brush clearing for homeowners across NW Arkansas. We also handle pressure washing, landscaping, leaf cleanups, and Christmas lights.</p>
              <div className="home-hero-actions">
                <a href="/contact" className="home-btn home-btn-secondary">Get started now</a>
                <a href="tel:4793914462" className="home-btn home-btn-call">Call or Text (479) 391-4462</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="home-hero-right">
              <Image src="/logo3.webp" alt="Great Dane Junk & Brush Removal" width={750} height={500} priority sizes="(max-width: 980px) 0px, 45vw" />
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
              <h2>What Our Customers Are Saying</h2>
              <p className="home-reviews-subhead">⭐⭐⭐⭐⭐ 100% 5-Star Rated on Google</p>
            </div>
          </ScrollReveal>
          <div className="home-reviews-grid">
            <ScrollReveal direction="left">
              <article className="home-review-card">
                <div className="home-review-header">
                  <div className="home-review-stars">★★★★★</div>
                  <GoogleIcon />
                </div>
                <p className="home-review-text">&ldquo;We have been extremely pleased with Gibson&apos;s work. He helps us with flower-bed maintenance and a wide variety of yard projects, including mulching, weeding, planting, and general cleanup. He is dependable, hardworking, and pays close attention to detail. Our landscaping always looks noticeably better after he has been here, and we appreciate his willingness to handle whatever needs to be done. We highly recommend him to anyone looking for reliable, high-quality outdoor services.&rdquo;</p>
                <div className="home-review-author">
                  <span className="home-review-name">Vanessa Hardin Branch</span>
                  <span className="home-review-timeframe">6 weeks ago</span>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal>
              <article className="home-review-card">
                <div className="home-review-header">
                  <div className="home-review-stars">★★★★★</div>
                  <GoogleIcon />
                </div>
                <p className="home-review-text">&ldquo;Gibson has been a hard-working help to me, with maintaining my properties with power washing and yard work. He communicates well and is professional in his interactions; he is punctual and fair in pricing. He and his teammate completed all the tasks within the timeframe we agreed upon.&rdquo;</p>
                <div className="home-review-author">
                  <span className="home-review-name">Michelle Rofkahr</span>
                  <span className="home-review-timeframe">11 weeks ago</span>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <article className="home-review-card">
                <div className="home-review-header">
                  <div className="home-review-stars">★★★★★</div>
                  <GoogleIcon />
                </div>
                <p className="home-review-text">&ldquo;Five stars!!!! Gibson was very helpful with my move. He is very respectful, timely, and has a great work ethic! He also went above and beyond doing some extra things that I had not initially requested when I hired him. I have moved MANY times and Gibson was by far the best help I have ever had. Highly recommend!!!&rdquo;</p>
                <div className="home-review-author">
                  <span className="home-review-name">Amy Moore</span>
                  <span className="home-review-timeframe">8 weeks ago</span>
                </div>
              </article>
            </ScrollReveal>
          </div>
          <div className="home-center-action">
            <a href="/reviews" className="home-btn home-btn-secondary">Read All Reviews</a>
          </div>
        </div>
      </section>


      <section className="home-section home-story-section">
        <div className="home-shell home-story-grid">
          <ScrollReveal direction="left">
            <div className="home-image-stack">
              <Image src="/garage-before.webp" alt="Garage full of junk and clutter before removal" width={900} height={1200} loading="lazy" sizes="(max-width: 768px) 100vw, 40vw" />
              <Image src="/garage-after.webp" alt="Clean garage after junk removal" width={900} height={1200} loading="lazy" sizes="(max-width: 768px) 100vw, 40vw" />
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
            <a href="tel:4793914462" className="home-btn home-btn-call">Call or Text (479) 391-4462</a>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
