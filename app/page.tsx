'use client'

import React, { useEffect, useRef } from 'react'
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
    <main style={{ backgroundColor: '#303030', color: '#f0f0f0', fontFamily: 'sans-serif' }}>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 20px', background: 'linear-gradient(180deg, #303030 0%, #3e4e3e 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Background logo */}
        <img src="/logo.png" alt="" aria-hidden="true" style={{ position: 'absolute', width: '640px', height: '640px', borderRadius: '50%', objectFit: 'cover', opacity: 0.38, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', filter: 'drop-shadow(0 0 40px rgba(125,255,158,0.12))' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: '#6abf80', fontWeight: 800, letterSpacing: '0.2em', fontSize: '0.95rem', textTransform: 'uppercase', marginBottom: '1rem', textShadow: '0 0 24px rgba(106,191,128,0.9), 0 1px 8px rgba(0,0,0,1)' }}>Serving Northwest Arkansas</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '900px', textShadow: '0 0 8px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.9), 1px 1px 0 #000, -1px -1px 0 #000' }}>
            Big Results,<br /><span style={{ color: '#7dff9e', textShadow: '0 0 8px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 0 40px rgba(125,255,158,0.4)' }}>Great Service.</span>
          </h1>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/contact" style={{ background: 'linear-gradient(135deg, #e0e0e0, #aaa)', color: '#303030', padding: '1rem 2.2rem', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', fontSize: '1rem', boxShadow: '0 4px 24px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1)' }}>
              Get a Free Quote
            </a>
            <a href="tel:8709951166" style={{ background: 'rgba(10,10,10,0.75)', border: '2px solid #4a9c69', color: '#7dff9e', padding: '1rem 2.2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', boxShadow: '0 4px 24px rgba(0,0,0,0.8), 0 0 20px rgba(74,156,105,0.2)', backdropFilter: 'blur(4px)' }}>
              Call (870) 995-1166
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <ScrollReveal>
        <section style={{ background: '#3c3c3c', borderTop: '1px solid #4a4a4a', borderBottom: '1px solid #4a4a4a', padding: '1.5rem 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {['Locally Owned & Operated', 'Free Quotes — No Obligation', 'Licensed LLC', '2+ Years Serving NWA'].map((item) => (
              <span key={item} style={{ color: '#ebebeb', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em' }}>✦ {item}</span>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* STATS */}
      <ScrollReveal>
        <section style={{ padding: '80px 20px', background: '#3a3a3a', borderBottom: '1px solid #464646' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {[
              { stat: '2+', label: 'Years Serving NWA' },
              { stat: '6', label: 'Services Offered' },
              { stat: 'LLC', label: 'Licensed & Legitimate' },
              { stat: '100%', label: 'Free Estimates' },
            ].map((item) => (
              <div key={item.label} style={{ padding: '1.5rem', border: '1px solid #425242', borderRadius: '12px', background: '#3c3c3c' }}>
                <p style={{ color: '#7dff9e', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, lineHeight: 1, marginBottom: '0.5rem', textShadow: '0 0 30px rgba(125,255,158,0.3)' }}>{item.stat}</p>
                <p style={{ color: '#989898', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* SERVICES */}
      <section style={{ padding: '100px 20px', background: '#3a3a3a' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#4a7c59', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What We Do</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem' }}>Built for Northwest Arkansas</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', maxWidth: '700px', margin: '0 auto' }}>
              {['Fayetteville', 'Rogers', 'Bentonville', 'Springdale', 'Farmington', 'Lowell', 'Centerton', 'Bella Vista', 'Cave Springs', 'Siloam Springs', 'Elkins', 'Prairie Grove'].map((city) => (
                <span key={city} style={{ background: 'rgba(74,124,89,0.1)', border: '1px solid #3e5a48', color: '#6abf80', padding: '0.35rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 500 }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          {services.map((s, i) => (
            <ScrollReveal key={s.name}>
              <div style={{ background: '#464646', border: '1px solid #565656', borderRadius: '12px', padding: '2rem', transition: 'border-color 0.3s', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#4a7c59')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#565656')}>
                <span style={{ color: '#3e5a48', fontSize: '3rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.75rem', display: 'block' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ color: '#ebebeb', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>{s.name}</h3>
                <p style={{ color: '#b2b2b2', lineHeight: 1.7, fontSize: '0.95rem', flex: 1 }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" style={{ background: 'linear-gradient(135deg, #ebebeb, #b2b2b2)', color: '#303030', padding: '0.5rem 1.2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem' }}>Book Now</a>
                  <a href="/services" style={{ color: '#4a7c59', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center' }}>Details →</a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
{/* GALLERY PREVIEW */}
      <section style={{ padding: '120px 20px', background: '#303030' }}>
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <p style={{ color: '#6abf80', fontWeight: 800, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem', textShadow: '0 0 20px rgba(106,191,128,0.6)' }}>Our Work</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>See the Great Dane Difference</h2>
            <p style={{ color: '#b2b2b2', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}>Drag the slider to reveal the transformation</p>
          </div>
        </ScrollReveal>

        {/* Pressure Washing — Brick */}
        <div style={{ maxWidth: '1400px', margin: '0 auto 8rem' }}>
          <ScrollReveal direction="up">
            <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', textAlign: 'center', marginBottom: '2rem' }}>✦ Pressure Washing ✦</p>
            <h3 style={{ color: '#ebebeb', fontWeight: 700, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', textAlign: 'center', marginBottom: '3rem' }}>Brick &amp; Surface Cleaning</h3>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <BeforeAfterSlider before="/beforebrick.jpg" after="/afterbrick.jpg" beforeAlt="Before pressure washing Fayetteville AR" afterAlt="After pressure washing Fayetteville AR" />
          </ScrollReveal>
        </div>

        {/* Pressure Washing — Driveway */}
        <div style={{ maxWidth: '1400px', margin: '0 auto 8rem' }}>
          <ScrollReveal direction="up">
            <h3 style={{ color: '#ebebeb', fontWeight: 700, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', textAlign: 'center', marginBottom: '3rem' }}>Driveway Restoration</h3>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <BeforeAfterSlider before="/beforedriveway.jpg" after="/afterdriveway.jpg" beforeAlt="Before driveway pressure washing NWA" afterAlt="After driveway pressure washing NWA" />
          </ScrollReveal>
        </div>

        {/* Landscaping */}
        <div style={{ maxWidth: '1400px', margin: '0 auto 8rem' }}>
          <ScrollReveal direction="up">
            <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', textAlign: 'center', marginBottom: '2rem' }}>✦ Landscaping ✦</p>
            <h3 style={{ color: '#ebebeb', fontWeight: 700, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', textAlign: 'center', marginBottom: '3rem' }}>Property Transformation</h3>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <BeforeAfterSlider before="/overgrown.jpg" after="/cutdown.jpg" beforeAlt="Before landscaping NWA" afterAlt="After landscaping NWA" />
          </ScrollReveal>
        </div>

        {/* Brush Removal */}
        <div style={{ maxWidth: '1400px', margin: '0 auto 5rem' }}>
          <ScrollReveal direction="up">
            <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', textAlign: 'center', marginBottom: '2rem' }}>✦ Brush Removal ✦</p>
            <h3 style={{ color: '#ebebeb', fontWeight: 700, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', textAlign: 'center', marginBottom: '3rem' }}>Land Clearing</h3>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 50px 120px rgba(0,0,0,0.9)' }}>
            <ScrollReveal direction="left">
              <img src="/brushcompost.jpg" alt="Brush removal NWA" style={{ width: '100%', height: 'clamp(280px, 30vw, 500px)', objectFit: 'cover', display: 'block' }} />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <img src="/morebrush.jpg" alt="Brush removal results NWA" style={{ width: '100%', height: 'clamp(280px, 30vw, 500px)', objectFit: 'cover', display: 'block' }} />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <img src="/IMG_8222.png" alt="Brush removal NWA" style={{ width: '100%', height: 'clamp(280px, 30vw, 500px)', objectFit: 'cover', display: 'block' }} />
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <a href="/gallery" style={{ border: '2px solid #ebebeb', color: '#ebebeb', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', letterSpacing: '0.05em' }}>
              See Full Gallery →
            </a>
          </div>
        </ScrollReveal>
      </section>      {/* WHY US */}
      <ScrollReveal>
        <section style={{ padding: '100px 20px', background: 'linear-gradient(180deg, #3e4e3e 0%, #303030 100%)', textAlign: 'center' }}>
          <p style={{ color: '#4a7c59', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Why Choose Us</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>Why NWA Trusts Great Dane</h2>
          <p style={{ color: '#b2b2b2', fontSize: '1rem', marginBottom: '3rem' }}>You won&apos;t forget the Great Dane Guy.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { title: 'Precision Work', desc: 'Every job done right — clean, thorough, and built to impress.' },
              { title: 'Locally Owned', desc: 'We live and work here in NWA.' },
              { title: 'Free Quotes', desc: 'No obligation, always free.' },
              { title: 'Quality Work', desc: 'Detailed results at fair prices.' },
            ].map((item) => (
              <div key={item.title} style={{ padding: '1.5rem', border: '1px solid #425242', borderRadius: '12px', background: '#3c3c3c' }}>
                <h3 style={{ color: '#ebebeb', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* SERVICE AREAS */}
      <ScrollReveal>
        <section style={{ padding: '100px 20px', background: '#3a3a3a', borderTop: '1px solid #464646' }}>
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
        <section style={{ padding: '100px 20px', textAlign: 'center', background: '#3c3c3c', borderTop: '1px solid #425242' }}>
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