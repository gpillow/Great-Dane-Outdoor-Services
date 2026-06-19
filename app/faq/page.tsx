'use client'

import React, { useState, useEffect, useRef } from 'react'

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

const faqs = [
  {
    q: 'Are your quotes really free?',
    a: 'Yes — always. Every estimate is 100% free with zero pressure or obligation. Call, text, or fill out our form and we\'ll get back to you same day.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve all of Northwest Arkansas — Fayetteville, Rogers, Bentonville, Springdale, Farmington, Lowell, Centerton, Bella Vista, Cave Springs, and more. If you\'re within about an hour of Fayetteville, reach out and we\'ll make it work.',
  },
  {
    q: 'What\'s the fastest way to get a quote?',
    a: 'Call or text us directly at (870) 995-1166 — that\'s the fastest. You can also fill out our contact form and we\'ll follow up quickly. Sending photos of the job helps us give you the most accurate number.',
  },
  {
    q: 'Can I send photos of my project?',
    a: 'Please do. Photos let us size up the job before we even pull up, which means a more accurate quote and no surprises on the day of. Text them straight to (870) 995-1166.',
  },
  {
    q: 'How does pricing work?',
    a: 'We price by the job, not by the hour. Every property is different, so we look at the scope of work and give you a flat quote upfront — no hidden fees, no add-ons after the fact.',
  },
  {
    q: 'Are you a licensed business?',
    a: 'Yes. Great Dane Outdoor Services is a registered and licensed LLC operating in the state of Arkansas.',
  },
  {
    q: 'How quickly can you get to my property?',
    a: 'It depends on the season and schedule, but we aim to turn around quotes within 24 hours and get jobs scheduled within the week. Busy seasons like fall and spring fill up fast — the sooner you reach out, the better.',
  },
  {
    q: 'Do you do one-time jobs or ongoing work?',
    a: 'Both. We handle everything from one-time cleanups and hauls to recurring lawn and property maintenance. Just let us know what you need and we\'ll put together the right plan.',
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <main style={{ backgroundColor: '#303030', color: '#f0f0f0', fontFamily: 'sans-serif' }}>

      {/* HERO */}
      <section style={{ padding: '120px 20px 80px', textAlign: 'center', background: 'linear-gradient(180deg, #303030 0%, #3e4e3e 100%)', borderBottom: '1px solid #425242' }}>
        <ScrollReveal>
          <p style={{ color: '#6abf80', fontWeight: 800, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textShadow: '0 0 20px rgba(106,191,128,0.6)' }}>Got Questions?</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Frequently Asked<br /><span style={{ color: '#7dff9e' }}>Questions</span>
          </h1>
          <p style={{ color: '#b2b2b2', maxWidth: '480px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Can&apos;t find your answer? Call or text us at <a href="tel:8709951166" style={{ color: '#4a7c59', textDecoration: 'none', fontWeight: 600 }}>(870) 995-1166</a>{' '}and we&apos;ll sort it out.
          </p>
        </ScrollReveal>
      </section>

      {/* FAQ ACCORDION */}
      <section style={{ padding: '100px 20px', background: '#3a3a3a' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} direction="up">
              <div
                style={{ background: '#464646', border: `1px solid ${open === i ? '#4a7c59' : '#565656'}`, borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.3s' }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', background: 'none', border: 'none', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
                >
                  <span style={{ color: '#ebebeb', fontWeight: 700, fontSize: '1rem', lineHeight: 1.5 }}>{faq.q}</span>
                  <span style={{ color: '#4a7c59', fontSize: '1.4rem', fontWeight: 300, flexShrink: 0, lineHeight: 1, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                </button>
                {open === i && (
                  <div style={{ padding: '0 2rem 1.5rem', borderTop: '1px solid #565656' }}>
                    <p style={{ color: '#b2b2b2', lineHeight: 1.8, fontSize: '0.95rem', marginTop: '1.25rem' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ padding: '100px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #3e4e3e 0%, #303030 100%)', borderTop: '1px solid #425242' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Still Have Questions?</h2>
          <p style={{ color: '#b2b2b2', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Just call, text, or shoot us an email.</p>
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
