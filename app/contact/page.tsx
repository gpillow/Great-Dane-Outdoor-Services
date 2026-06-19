import React from 'react'
import type { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Get a Free Quote | Great Dane Outdoor Services | (870) 995-1166',
  description:
    'Request a free, no-obligation quote from Great Dane Outdoor Services. Serving all of Northwest Arkansas. Call, text, or fill out our quick form — same day quotes.',
}

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#303030', color: '#f0f0f0', fontFamily: 'sans-serif' }}>

      {/* HERO */}
      <section style={{ padding: '120px 20px 80px', textAlign: 'center', background: 'linear-gradient(180deg, #303030 0%, #3e4e3e 100%)', borderBottom: '1px solid #425242' }}>
        <p style={{ color: '#6abf80', fontWeight: 800, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textShadow: '0 0 20px rgba(106,191,128,0.6)' }}>Free — No Obligation</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
          Let&apos;s Get<br /><span style={{ color: '#7dff9e' }}>To Work</span>
        </h1>
        <p style={{ color: '#b2b2b2', maxWidth: '480px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Fill out the form below or reach us directly — same day quotes.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: '80px 20px', background: '#3a3a3a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Left — contact info */}
          <div>
            <h2 style={{ color: '#ebebeb', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Reach Us Directly</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ background: '#464646', border: '1px solid #565656', borderRadius: '12px', padding: '1.5rem' }}>
                <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Call or Text</p>
                <a href="tel:8709951166" style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, textDecoration: 'none' }}>(870) 995-1166</a>
              </div>
              <div style={{ background: '#464646', border: '1px solid #565656', borderRadius: '12px', padding: '1.5rem' }}>
                <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Service Area</p>
                <p style={{ color: '#ebebeb', fontWeight: 600 }}>All of Northwest Arkansas</p>
                <p style={{ color: '#989898', fontSize: '0.9rem', marginTop: '0.25rem' }}>Fayetteville, Rogers, Bentonville, Springdale, Farmington & more</p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #425242', paddingTop: '2rem' }}>
              <p style={{ color: '#4a7c59', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>What to Expect</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Same day quotes',
                  'Estimates are free — final price may vary slightly by scope',
                  'Photos welcome to speed up the estimate',
                  'No commitment until you approve the quote',
                ].map((item) => (
                  <p key={item} style={{ color: '#b2b2b2', fontSize: '0.9rem', lineHeight: 1.6, display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#4a7c59', flexShrink: 0, marginTop: '2px' }}>✦</span>{item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <QuoteForm />
          </div>

        </div>
      </section>

    </main>
  )
}
