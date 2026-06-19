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
  { name: 'Pressure Washing', desc: 'Driveways, decks, siding, patios — blasted clean and looking brand new.' },
  { name: 'Junk Removal', desc: 'We haul it away so you don\'t have to. Fast and affordable.' },
  { name: 'Landscaping', desc: 'Mowing, trimming, cleanup and more. Your yard, upgraded.' },
  { name: 'Brush Removal', desc: 'Overgrown property? We clear it out clean and efficient.' },
  { name: 'Leaf Cleanups', desc: 'Fall in NWA hits hard. We handle the mess.' },
  { name: 'Christmas Lights', desc: 'Professional holiday light installation. Let your home shine.' },
]

export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#d0d0d0', fontFamily: 'sans-serif' }}>

      {/* HERO */}
<section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 20px', background: 'linear-gradient(180deg, #0a0a0a 0%, #0f1a0f 100%)', position: 'relative', overflow: 'hidden' }}>
<img src="/logo.png" alt="" aria-hidden="true" style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', objectFit: 'cover', opacity: 0.35, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} />        <p style={{ color: '#6abf80', fontWeight: 800, letterSpacing: '0.2em', fontSize: '0.95rem', textTransform: 'uppercase', marginBottom: '1rem', textShadow: '0 0 20px rgba(106,191,128,0.8)' }}>Serving Northwest Arkansas</p>
<h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '900px', textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000' }}>
  NWA&apos;s Most Memorable<br /><span style={{ color: '#7dff9e' }}>Outdoor Services Company</span>
</h1>        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/contact" style={{ background: 'linear-gradient(135deg, #C0C0C0, #888)', color: '#0a0a0a', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', fontSize: '1rem' }}>
            Get a Free Quote
          </a>
          <a href="tel:8709951166" style={{ border: '2px solid #4a7c59', color: '#4a7c59', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
            Call (870) 995-1166
          </a>
        </div>
      </section>

      {/* TRUST BAR */}
      <ScrollReveal>
        <section style={{ background: '#111', borderTop: '1px solid #222', borderBottom: '1px solid #222', padding: '1.5rem 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {['Locally Owned & Operated', 'Free Quotes — No Obligation', 'Licensed LLC', '2+ Years Serving NWA'].map((item) => (
              <span key={item} style={{ color: '#C0C0C0', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em' }}>✦ {item}</span>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* SERVICES */}
      <section style={{ padding: '100px 20px', background: '#0d0d0d' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#4a7c59', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What We Do</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Built for Northwest Arkansas</h2>
            <p style={{ color: '#888', maxWidth: '500px', margin: '0 auto' }}>Serving Fayetteville, Rogers, Bentonville, Springdale & Farmington</p>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
          {services.map((s) => (
            <ScrollReveal key={s.name}>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '2rem', transition: 'border-color 0.3s', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#4a7c59')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a2a')}>
                <h3 style={{ color: '#C0C0C0', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>{s.name}</h3>
                <p style={{ color: '#888', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
                <a href="/contact" style={{ display: 'inline-block', marginTop: '1rem', color: '#4a7c59', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Get a Quote →</a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
{/* GALLERY PREVIEW */}
      <section style={{ padding: '120px 20px', background: '#0a0a0a' }}>
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p style={{ color: '#4a7c59', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our Work</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>See the Great Dane Difference</h2>
            <p style={{ color: '#888', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}>Real results from real NWA properties</p>
          </div>
        </ScrollReveal>

        {/* Pressure Washing */}
        <div style={{ maxWidth: '1200px', margin: '0 auto 10rem' }}>
          <ScrollReveal direction="up">
            <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', textAlign: 'center', marginBottom: '3rem' }}>✦ Pressure Washing ✦</p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }}>
            <ScrollReveal direction="left">
              <div style={{ position: 'relative' }}>
                <p style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.7)', color: '#888', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 1 }}>Before</p>
                <img src="/beforebrick.jpg" alt="Before pressure washing Fayetteville AR" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block', filter: 'brightness(0.7)' }} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div style={{ position: 'relative' }}>
                <p style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(74,124,89,0.85)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 1 }}>After</p>
                <img src="/afterbrick.jpg" alt="After pressure washing Fayetteville AR" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Driveway */}
        <div style={{ maxWidth: '1200px', margin: '0 auto 10rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }}>
            <ScrollReveal direction="left">
              <div style={{ position: 'relative' }}>
                <p style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.7)', color: '#888', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 1 }}>Before</p>
                <img src="/beforedriveway.jpg" alt="Before driveway pressure washing NWA" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block', filter: 'brightness(0.7)' }} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div style={{ position: 'relative' }}>
                <p style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(74,124,89,0.85)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 1 }}>After</p>
                <img src="/afterdriveway.jpg" alt="After driveway pressure washing NWA" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Landscaping */}
        <div style={{ maxWidth: '1200px', margin: '0 auto 10rem' }}>
          <ScrollReveal direction="up">
            <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', textAlign: 'center', marginBottom: '3rem' }}>✦ Landscaping ✦</p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }}>
            <ScrollReveal direction="left">
              <div style={{ position: 'relative' }}>
                <p style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.7)', color: '#888', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 1 }}>Before</p>
                <img src="/overgrown.jpg" alt="Before landscaping NWA" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block', filter: 'brightness(0.7)' }} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div style={{ position: 'relative' }}>
                <p style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(74,124,89,0.85)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 1 }}>After</p>
                <img src="/cutdown.jpg" alt="After landscaping NWA" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Brush Removal */}
        <div style={{ maxWidth: '1200px', margin: '0 auto 5rem' }}>
          <ScrollReveal direction="up">
            <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', textAlign: 'center', marginBottom: '3rem' }}>✦ Brush Removal ✦</p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }}>
            <ScrollReveal direction="left">
              <img src="/brushcompost.jpg" alt="Brush removal NWA" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <img src="/morebrush.jpg" alt="Brush removal results NWA" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <img src="/IMG_8222.png" alt="Brush removal NWA" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/gallery" style={{ border: '2px solid #C0C0C0', color: '#C0C0C0', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', letterSpacing: '0.05em' }}>
              See Full Gallery →
            </a>
          </div>
        </ScrollReveal>
      </section>      {/* WHY US */}
      <ScrollReveal>
        <section style={{ padding: '100px 20px', background: 'linear-gradient(180deg, #0f1a0f 0%, #0a0a0a 100%)', textAlign: 'center' }}>
          <p style={{ color: '#4a7c59', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Why Choose Us</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '3rem' }}>Why NWA Trusts Great Dane</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { title: 'Memorable Brand', desc: 'You won\'t forget the Great Dane Guy.' },
              { title: 'Locally Owned', desc: 'We live and work here in NWA.' },
              { title: 'Free Quotes', desc: 'No obligation, always free.' },
              { title: 'Quality Work', desc: 'Detailed results at fair prices.' },
            ].map((item) => (
              <div key={item.title} style={{ padding: '1.5rem', border: '1px solid #1e2e1e', borderRadius: '12px', background: '#111' }}>
                <h3 style={{ color: '#C0C0C0', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#777', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ padding: '100px 20px', textAlign: 'center', background: '#111', borderTop: '1px solid #1e2e1e' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ color: '#888', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Call, text, or fill out our quick quote form. We respond fast.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ background: 'linear-gradient(135deg, #C0C0C0, #888)', color: '#0a0a0a', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', fontSize: '1rem' }}>
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