'use client'

import React, { useEffect, useRef } from 'react'

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
  {
    name: 'Pressure Washing',
    desc: 'Driveways, decks, siding, patios, and more — blasted clean and looking brand new. Serving all of NWA.',
    detail: 'We use professional-grade equipment to restore surfaces without damage. Perfect for preparing your home before a sale or just keeping it looking sharp year-round.',
  },
  {
    name: 'Junk Removal',
    desc: 'We haul it away so you don\'t have to. Fast, affordable junk removal in Northwest Arkansas.',
    detail: 'Old furniture, yard debris, construction scraps — if you can point to it, we can haul it. Same-day and next-day availability.',
  },
  {
    name: 'Landscaping',
    desc: 'Mulching, weed removal, flower bed installation, and bush & tree trimming. Your yard, transformed.',
    detail: 'Whether you need fresh mulch laid, overgrown beds cleaned out, new flower beds built from scratch, or shrubs and trees shaped up — we handle it all with detail-oriented results.',
  },
  {
    name: 'Brush Removal',
    desc: 'Overgrown property? We clear it out — clean and efficient.',
    detail: 'We tackle thick brush, saplings, and overgrowth that mowers can\'t handle. Great for reclaiming fence lines, hillsides, and wooded lots.',
  },
  {
    name: 'Leaf Cleanups',
    desc: 'Fall in NWA hits hard. We handle the mess so you don\'t have to.',
    detail: 'Thorough leaf removal and disposal — we don\'t just blow them to the curb. Your yard stays clean all the way through late fall.',
  },
  {
    name: 'Christmas Lights',
    desc: 'Professional holiday light installation. Let your home shine this season.',
    detail: 'We install, we take down, you enjoy. Custom layouts for any home size. Book early — holiday slots fill fast.',
  },
]

export default function ServicesPage() {
  return (
    <main id="main-content" style={{ backgroundColor: '#303030', color: '#f0f0f0', fontFamily: 'sans-serif' }}>

      {/* HERO */}
      <section className="hero-shaped" style={{ padding: '120px 20px 80px', textAlign: 'center', background: 'linear-gradient(180deg, #303030 0%, #3e4e3e 100%)', borderBottom: '1px solid #425242' }}>
        <ScrollReveal>
          <p style={{ color: '#6abf80', fontWeight: 800, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textShadow: '0 0 20px rgba(106,191,128,0.6)' }}>What We Do</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            Outdoor Services Built for<br /><span style={{ color: '#7dff9e' }}>Northwest Arkansas</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            {['Fayetteville', 'Rogers', 'Bentonville', 'Springdale', 'Farmington', 'Lowell', 'Centerton', 'Bella Vista', 'Cave Springs', 'Siloam Springs', 'Elkins', 'Prairie Grove'].map((city) => (
              <span key={city} style={{ background: 'rgba(74,124,89,0.1)', border: '1px solid #3e5a48', color: '#6abf80', padding: '0.35rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 500 }}>
                {city}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/contact" style={{ background: 'linear-gradient(135deg, #ebebeb, #b2b2b2)', color: '#303030', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', fontSize: '1rem' }}>
              Get a Free Quote
            </a>
            <a href="tel:8709951166" style={{ border: '2px solid #4a7c59', color: '#4a7c59', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              Call (870) 995-1166
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* SERVICES GRID */}
      <section className="section-shaped section-band" style={{ padding: '100px 20px', background: '#3a3a3a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          {services.map((s, i) => (
            <ScrollReveal key={s.name} direction={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}>
              <div
                className="ui-card"
                style={{ background: '#464646', border: '1px solid #565656', borderRadius: '12px', padding: '2rem', transition: 'border-color 0.3s', height: '100%' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#4a7c59')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#565656')}
              >
                <h2 style={{ color: '#ebebeb', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{s.name}</h2>
                <p style={{ color: '#b2b2b2', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1rem' }}>{s.desc}</p>
                <p style={{ color: '#989898', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1.25rem' }}>{s.detail}</p>
                <a href="/contact" style={{ display: 'inline-block', color: '#4a7c59', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Get a Quote →</a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <ScrollReveal>
        <section className="section-shaped section-band-alt" style={{ padding: '100px 20px', background: 'linear-gradient(180deg, #3e4e3e 0%, #303030 100%)', textAlign: 'center', borderTop: '1px solid #425242' }}>
          <p className="section-kicker" style={{ color: '#4a7c59', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Why Choose Us</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>Why NWA Trusts Great Dane</h2>
          <p style={{ color: '#b2b2b2', fontSize: '1rem', marginBottom: '3rem' }}>You won&apos;t forget the Great Dane Guy.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { title: 'Precision Work', desc: 'Every job done right — clean, thorough, and built to impress.' },
              { title: 'Locally Owned', desc: 'We live and work here in NWA.' },
              { title: 'Free Quotes', desc: 'No obligation, always free.' },
              { title: 'Quality Work', desc: 'Detailed results at fair prices.' },
            ].map((item) => (
              <div key={item.title} className="ui-card" style={{ padding: '1.5rem', border: '1px solid #425242', borderRadius: '12px', background: '#3c3c3c' }}>
                <h3 style={{ color: '#ebebeb', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* SERVICE AREAS */}
      <ScrollReveal>
        <section className="section-shaped section-band" style={{ padding: '100px 20px', background: '#3a3a3a', borderTop: '1px solid #464646' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#4a7c59', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Where We Work</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Serving All of Northwest Arkansas</h2>
            <p style={{ color: '#b2b2b2', marginBottom: '3rem', fontSize: '1rem' }}>If you&apos;re in NWA, we&apos;ve got you covered.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              {['Fayetteville', 'Rogers', 'Bentonville', 'Springdale', 'Farmington', 'Lowell', 'Centerton', 'Bella Vista', 'Cave Springs', 'Siloam Springs', 'Elkins', 'Prairie Grove'].map((city) => (
                <span key={city} style={{ background: '#464646', border: '1px solid #565656', color: '#ebebeb', padding: '0.5rem 1.25rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: 500 }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="cta-shaped" style={{ padding: '100px 20px', textAlign: 'center', background: '#3c3c3c', borderTop: '1px solid #425242' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ color: '#b2b2b2', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Call, text, or fill out our quick quote form. Same day quotes.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ background: 'linear-gradient(135deg, #ebebeb, #b2b2b2)', color: '#303030', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', fontSize: '1rem' }}>
              Get a Free Quote
            </a>
            <a href="tel:8709951166" style={{ border: '2px solid #4a7c59', color: '#4a7c59', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              Call (870) 995-1166
            </a>
          </div>
        </section>
      </ScrollReveal>

    </main>
  )
}
