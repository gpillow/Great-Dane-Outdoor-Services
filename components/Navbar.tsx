'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      role="banner"
      aria-label="Site header"
      className={`site-header${scrolled ? ' scrolled' : ''}`}
    >
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="Great Dane Outdoor Services home">
          <span className="nav-logo-mark" aria-hidden="true">GD</span>
          <span className="nav-logo-copy">
            <span className="nav-logo-main">Great Dane</span>
            <span className="nav-logo-sub">Outdoor Services</span>
          </span>
          <span className="nav-logo-area">NWA</span>
        </Link>

        <nav role="navigation" aria-label="Main navigation" className="nav-desktop">
          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a href="tel:8709951166" className="nav-call">Call (870) 995-1166</a>
            <Link href="/contact" className="nav-cta">Free Quote</Link>
          </div>
        </nav>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        role="navigation"
        aria-label="Main navigation"
        className={`nav-mobile${menuOpen ? ' open' : ''}`}
      >
        <div className="nav-mobile-heading">
          <span>Northwest Arkansas</span>
          <strong>Outdoor services, ready when your property needs it.</strong>
        </div>
        <ul role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-mobile-actions">
          <a href="tel:8709951166" className="nav-mobile-call nav-mobile-a" onClick={() => setMenuOpen(false)}>
            Call (870) 995-1166
          </a>
          <Link href="/contact" className="nav-mobile-cta nav-mobile-a" onClick={() => setMenuOpen(false)}>
            Get a Free Quote
          </Link>
        </div>
      </nav>
    </header>
  )
}
