'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { faqs } from './faqs'

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

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <main id="main-content" className="blueprint-page faq-page">

      <section className="blueprint-hero faq-hero">
        <div className="blueprint-shell">
          <ScrollReveal>
            <p className="blueprint-kicker">Frequently Asked Questions</p>
            <h1>Clear answers before you book outdoor work</h1>
            <p>
              Pressure washing, junk removal, brush clearing, leaf cleanup, landscaping refreshes, and Christmas lights all come with real questions. Here is what homeowners usually want to know before getting on the schedule.
            </p>
            <div className="blueprint-actions">
              <Link href="/contact">Get a free quote</Link>
              <a href="tel:8709951166">Call (870) 995-1166</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-shell">
          <div className="blueprint-heading faq-heading">
            <p className="blueprint-kicker">What Customers Ask</p>
            <h2>Helpful answers, not filler</h2>
            <p>These are written around the questions that actually affect pricing, scheduling, safety, prep, and whether a job is the right fit.</p>
          </div>

          <div className="faq-list">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} direction="up">
              <article className={`faq-item ${open === i ? 'is-open' : ''}`}>
                <button
                  className="faq-question"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>
                    <small>{faq.category}</small>
                    {faq.q}
                  </span>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </button>
                {open === i && (
                  <div className="faq-answer" id={`faq-answer-${i}`}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="blueprint-cta">
          <div className="blueprint-shell">
            <h2>Have a project that does not fit neatly into a box?</h2>
            <p>Send photos and a quick description. We will tell you what makes sense, what affects the price, and the simplest way to get it handled.</p>
            <div className="blueprint-actions">
              <Link href="/contact">Send project photos</Link>
              <Link href="/pricing">View pricing guide</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </main>
  )
}
