'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const BeforeAfterSlider = dynamic(() => import('@/components/BeforeAfterSlider'))

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

const projects = [
  { title: 'Garage Cleanout', tag: 'Junk Removal', image: '/garage-after.webp' },
  { title: 'Brush and Bed Cleanup', tag: 'Brush Removal', image: '/cutdown.webp' },
  { title: 'Yard Debris Cleanup', tag: 'Property Cleanup', image: '/brushcompost.webp' },
  { title: 'Overgrowth Removal', tag: 'Brush Removal', image: '/IMG_8222.webp' },
  { title: 'Junk Removal', tag: 'Junk Removal', image: '/junk-removal.webp' },
  { title: 'Landscaping Cleanup', tag: 'Landscaping', image: '/leaf-cleanup.webp' },
]

export default function GalleryPage() {
  return (
    <>
    <main id="main-content" className="blueprint-page">
      <section className="blueprint-hero">
        <div className="blueprint-shell blueprint-hero-grid">
          <ScrollReveal direction="left">
            <div>
              <p className="blueprint-kicker">Projects</p>
              <h1>Real outdoor service results from NWA properties</h1>
              <p>Before-and-after examples and cleanup results from Great Dane Junk & Brush Removal in Northwest Arkansas.</p>
              <div className="blueprint-actions">
                <Link href="/contact">Start your project</Link>
                <Link href="/pricing">View pricing</Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="blueprint-hero-image">
              <Image src="/garage-after.webp" alt="Clean garage after junk removal in Northwest Arkansas" width={900} height={1200} priority />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="blueprint-section blueprint-light">
        <div className="blueprint-shell">
          <div className="blueprint-heading">
            <p className="blueprint-kicker">Project Gallery</p>
            <h2>Click-worthy proof, built from real work</h2>
            <p>Use the gallery to get a feel for junk removal, brush removal, and cleanup results.</p>
          </div>
          <div className="blueprint-project-grid">
            {projects.map((project) => (
              <ScrollReveal key={project.title}>
                <article className="blueprint-project-card">
                  <Image src={project.image} alt={project.title} width={1200} height={900} loading="lazy" />
                  <div>
                    <span>{project.tag}</span>
                    <h3>{project.title}</h3>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="blueprint-section">
        <div className="blueprint-shell">
          <div className="blueprint-heading">
            <p className="blueprint-kicker">Before and After</p>
            <h2>Inspect the transformation</h2>
            <p>Drag each slider to compare the property before and after the work.</p>
          </div>
          <div className="blueprint-slider-stack">
            <div className="gallery-frame">
              <p className="home-project-label">Garage Cleanout</p>
              <BeforeAfterSlider before="/garage-before.webp" after="/garage-after.webp" beforeAlt="Garage before junk removal" afterAlt="Garage after junk removal" />
            </div>
            <div className="gallery-frame">
              <p className="home-project-label">Brush Cleanup</p>
              <BeforeAfterSlider before="/overgrown.webp" after="/cutdown.webp" beforeAlt="Before brush cleanup" afterAlt="After brush cleanup" />
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
