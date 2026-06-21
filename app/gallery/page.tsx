'use client'

import React, { useEffect, useRef } from 'react'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

function ScrollReveal({ children, direction = 'up' }: { children: React.ReactNode, direction?: 'up' | 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal-${direction}`}>{children}</div>
}

export default function GalleryPage() {
  return (
    <main id="main-content" style={{ backgroundColor: '#303030', color: '#f0f0f0', fontFamily: 'sans-serif' }}>

      {/* HERO */}
      <section style={{ padding: '120px 20px 80px', textAlign: 'center', background: 'linear-gradient(180deg, #303030 0%, #3e4e3e 100%)', borderBottom: '1px solid #425242' }}>
        <ScrollReveal>
          <p style={{ color: '#6abf80', fontWeight: 800, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textShadow: '0 0 20px rgba(106,191,128,0.6)' }}>Our Work</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            See the Great Dane<br /><span style={{ color: '#7dff9e' }}>Difference</span>
          </h1>
          <p style={{ color: '#b2b2b2', maxWidth: '480px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Real results from real NWA properties. Drag the sliders to reveal every transformation.
          </p>
        </ScrollReveal>
      </section>

      {/* PRESSURE WASHING */}
      <section style={{ padding: '100px 20px', background: '#3a3a3a' }}>
        <ScrollReveal>
          <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', textAlign: 'center', marginBottom: '0.75rem' }}>✦ Pressure Washing ✦</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '4rem' }}>Surface Cleaning & Restoration</h2>
        </ScrollReveal>

        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          <ScrollReveal direction="up">
            <p style={{ color: '#b2b2b2', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Brick &amp; Surface Cleaning</p>
            <BeforeAfterSlider before="/beforebrick.jpg" after="/afterbrick.jpg" beforeAlt="Before pressure washing brick NWA" afterAlt="After pressure washing brick NWA" />
          </ScrollReveal>
          <ScrollReveal direction="up">
            <p style={{ color: '#b2b2b2', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Driveway Restoration</p>
            <BeforeAfterSlider before="/beforedriveway.jpg" after="/afterdriveway.jpg" beforeAlt="Before driveway pressure washing NWA" afterAlt="After driveway pressure washing NWA" />
          </ScrollReveal>
          <ScrollReveal direction="up">
            <p style={{ color: '#b2b2b2', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Walkway Cleaning</p>
            <BeforeAfterSlider before="/beforewalkway.jpg" after="/afterwalkway.jpg" beforeAlt="Before walkway pressure washing NWA" afterAlt="After walkway pressure washing NWA" />
          </ScrollReveal>
        </div>
      </section>

      {/* LANDSCAPING */}
      <section style={{ padding: '100px 20px', background: '#303030', borderTop: '1px solid #464646' }}>
        <ScrollReveal>
          <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', textAlign: 'center', marginBottom: '0.75rem' }}>✦ Landscaping ✦</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '4rem' }}>Property Transformation</h2>
        </ScrollReveal>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal direction="up">
            <BeforeAfterSlider before="/overgrown.jpg" after="/cutdown.jpg" beforeAlt="Before landscaping NWA" afterAlt="After landscaping NWA" />
          </ScrollReveal>
        </div>
      </section>

      {/* BRUSH REMOVAL */}
      <section style={{ padding: '100px 20px', background: '#3a3a3a', borderTop: '1px solid #464646' }}>
        <ScrollReveal>
          <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', textAlign: 'center', marginBottom: '0.75rem' }}>✦ Brush Removal ✦</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '4rem' }}>Land Clearing</h2>
        </ScrollReveal>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 50px 120px rgba(0,0,0,0.9)' }}>
          <ScrollReveal direction="left">
            <img src="/brushcompost.jpg" alt="Brush removal NWA" style={{ width: '100%', height: 'clamp(260px, 28vw, 480px)', objectFit: 'cover', display: 'block' }} />
          </ScrollReveal>
          <ScrollReveal direction="up">
            <img src="/morebrush.jpg" alt="Brush removal results NWA" style={{ width: '100%', height: 'clamp(260px, 28vw, 480px)', objectFit: 'cover', display: 'block' }} />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <img src="/IMG_8222.png" alt="Brush removal NWA" style={{ width: '100%', height: 'clamp(260px, 28vw, 480px)', objectFit: 'cover', display: 'block' }} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ padding: '100px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #3e4e3e 0%, #303030 100%)', borderTop: '1px solid #425242' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Want Results Like These?</h2>
          <p style={{ color: '#b2b2b2', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Same day quotes. No obligation.</p>
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
