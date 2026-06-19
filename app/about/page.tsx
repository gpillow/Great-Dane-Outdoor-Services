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

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#303030', color: '#f0f0f0', fontFamily: 'sans-serif' }}>

      {/* HERO */}
      <section style={{ padding: '120px 20px 80px', textAlign: 'center', background: 'linear-gradient(180deg, #303030 0%, #3e4e3e 100%)', borderBottom: '1px solid #425242' }}>
        <ScrollReveal>
          <p style={{ color: '#6abf80', fontWeight: 800, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textShadow: '0 0 20px rgba(106,191,128,0.6)' }}>Our Story</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            Built From the<br /><span style={{ color: '#7dff9e' }}>Ground Up</span>
          </h1>
          <p style={{ color: '#b2b2b2', maxWidth: '580px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Great Dane Outdoor Services started as a college side hustle and grew into something real — a business built on hard work, honest pricing, and a name people actually remember.
          </p>
        </ScrollReveal>
      </section>

      {/* STORY */}
      <section style={{ padding: '100px 20px', background: '#3a3a3a' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <ScrollReveal direction="left">
            <div style={{ background: '#464646', border: '1px solid #565656', borderRadius: '12px', padding: '2.5rem' }}>
              <h2 style={{ color: '#ebebeb', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Where It Started</h2>
              <p style={{ color: '#b2b2b2', lineHeight: 1.8, fontSize: '1rem' }}>
                What began as a way to make extra money during college turned into a full operation with real equipment, real clients, and real results. We built this thing from nothing — no family business to inherit, no big startup capital. Just hustle, a truck, and a commitment to showing up and doing the job right.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div style={{ background: '#464646', border: '1px solid #565656', borderRadius: '12px', padding: '2.5rem' }}>
              <h2 style={{ color: '#ebebeb', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>What We Stand For</h2>
              <p style={{ color: '#b2b2b2', lineHeight: 1.8, fontSize: '1rem' }}>
                Affordable doesn&apos;t mean cutting corners. It means you get premium work without the premium markup. Every job we take on gets the same attention to detail — whether it&apos;s a quick leaf cleanup or a full property transformation. We&apos;re proud of the work we put out, and we want you to be too.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div style={{ background: '#464646', border: '1px solid #565656', borderRadius: '12px', padding: '2.5rem' }}>
              <h2 style={{ color: '#ebebeb', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Why Northwest Arkansas</h2>
              <p style={{ color: '#b2b2b2', lineHeight: 1.8, fontSize: '1rem' }}>
                NWA is home. We know the communities, we know the properties, and we know the seasons. Fayetteville, Rogers, Bentonville, Springdale, Farmington — this is where we live and where we work. Supporting local means everything to us, and we bring that same energy to every yard, driveway, and property we touch.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATS / FACTS */}
      <ScrollReveal>
        <section style={{ padding: '80px 20px', background: '#3c3c3c', borderTop: '1px solid #425242', borderBottom: '1px solid #425242' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {[
              { stat: '2+ Years', label: 'Serving NWA' },
              { stat: 'Licensed LLC', label: 'Fully Legitimate' },
              { stat: 'Free Quotes', label: 'No Obligation' },
              { stat: 'Local', label: 'Fayetteville, AR' },
            ].map((item) => (
              <div key={item.stat}>
                <p style={{ color: '#7dff9e', fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.25rem' }}>{item.stat}</p>
                <p style={{ color: '#989898', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ padding: '100px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #3e4e3e 0%, #303030 100%)', borderTop: '1px solid #425242' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Ready to Work With Us?</h2>
          <p style={{ color: '#b2b2b2', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Reach out for a free quote — no pressure, no obligation.</p>
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
