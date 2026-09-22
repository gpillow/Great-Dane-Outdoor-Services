import React from 'react'
import Image from 'next/image'
import QuoteForm from './QuoteForm'

export const metadata = {
  title: 'Junk Removal in Fayetteville, AR — Same Day Service | Great Dane',
  description: 'Affordable junk removal in Fayetteville, AR. Loads starting at $150. Same-day service available. Licensed & insured. Free quotes. Call (479) 391-4462.',
  robots: 'noindex, nofollow',
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

const faqItems = [
  {
    q: 'How much does junk removal cost in Fayetteville, AR?',
    a: 'Our pricing starts at $150 for a quarter-load and goes up to $425 for a full truck load. Exact pricing depends on the volume and type of items. We always provide a free estimate before any work begins — no surprise charges.',
  },
  {
    q: 'Do you offer same-day junk removal in Fayetteville?',
    a: "Yes, same-day service is available depending on our schedule. Call or text us at (479) 391-4462 and we'll do our best to get to you the same day. We typically respond within 10 minutes.",
  },
  {
    q: 'What types of items do you remove?',
    a: "We haul furniture, appliances, mattresses, yard debris, construction debris, garage cleanouts, estate cleanouts, electronics, and more. If you're unsure whether we take something, just call or text — we're happy to answer.",
  },
  {
    q: 'Do I need to be home during the junk removal?',
    a: "Not necessarily. As long as we have access to the items and clear instructions, many jobs can be completed without you present. We communicate before, during, and after so you're always in the loop.",
  },
  {
    q: 'Are you licensed and insured for junk removal in Arkansas?',
    a: 'Yes. Great Dane Junk & Brush Removal LLC is a fully licensed business and fully insured in Northwest Arkansas. You can book with complete confidence.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const reviews = [
  {
    name: 'Chandler',
    timeframe: '2 days ago',
    text: "Great Dane responded within 10 minutes and had my junk hauled off and I didn't have to do a thing. I would recommend them to anyone and everyone. 10/10 service!",
  },
  {
    name: 'Justin Underwood',
    timeframe: '6 weeks ago',
    text: "Great Dane did a wonderful job with my junk removal in Springdale. He was very easy to work with, responded quickly, and his prices were very affordable. I needed everything removed from my residence within seven days, and he was able to get it done within just one day. I couldn't have asked for better service. I would 100% recommend Great Dane to anyone needing junk removal!",
  },
  {
    name: 'Chris Hill',
    timeframe: '8 weeks ago',
    text: 'Needed junk removed from my garage in Fayetteville and came across Great Dane outdoor. Gibson gave me a fast, competitive quote for the work and got it done that afternoon. Highly recommend',
  },
]

const pricingTiers = [
  { tier: 'Quarter Load', price: '150', desc: 'A few items' },
  { tier: 'Half Load', price: '250', desc: "Half a truck's worth" },
  { tier: '¾ Load', price: '350', desc: 'Large cleanout' },
  { tier: 'Full Load', price: '425', desc: 'Full truck haul-away' },
]

const haulItems = [
  'Furniture', 'Appliances', 'Mattresses', 'Yard debris',
  'Construction debris', 'Garage cleanouts', 'Estate cleanouts', 'Electronics',
  'Hot tubs & sheds', 'Tires', 'Old fencing', 'And more',
]

export default function JunkRemovalLanding() {
  return (
    <main className="lp-page" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Minimal header: logo + home link only ── */}
      <header className="lp-header">
        <a href="/" className="lp-header-logo" aria-label="Go to Great Dane homepage">
          <Image src="/logo3.webp" alt="Great Dane Junk & Brush Removal" width={48} height={32} priority />
          <span className="lp-header-logo-text">
            <span className="lp-header-logo-main">Great Dane</span>
            <span className="lp-header-logo-sub">Junk &amp; Brush Removal</span>
          </span>
        </a>
      </header>

      {/* ── Hero: above the fold ── */}
      <section className="lp-hero" aria-label="Junk removal Fayetteville AR">
        <div className="lp-shell">
          <p className="lp-stars" aria-label="5 stars">★★★★★</p>
          <p className="lp-stars-label">5-Star Rated on Google · 15 Reviews · 100% Five-Star</p>
          <h1>Junk Removal in Fayetteville, AR&nbsp;— Same Day Service Available</h1>
          <div className="lp-badges" role="list" aria-label="Trust signals">
            <span className="lp-badge" role="listitem">Locally Owned</span>
            <span className="lp-badge" role="listitem">Fully Insured</span>
            <span className="lp-badge" role="listitem">Free Quotes</span>
          </div>
          <a href="tel:4793914462" className="lp-cta-call">
            <span aria-hidden="true">📞</span> Call or Text (479) 391-4462
          </a>
          <p className="lp-hero-sub">Fayetteville · Rogers · Bentonville · Springdale · All of NW Arkansas</p>
          <a href="#quote" className="lp-cta-secondary">Or fill out a quote form ↓</a>
        </div>
      </section>

      {/* ── Pricing ── */}
      <div className="lp-section-wrap lp-bg-tint">
        <div className="lp-section">
          <p className="lp-kicker">Simple Pricing</p>
          <h2>Upfront Pricing — No Hidden Fees</h2>
          <p className="lp-section-sub">Load size is based on how much space your items take in the truck. We quote before we haul, so you always know the cost upfront.</p>
          <div className="lp-pricing-grid">
            {pricingTiers.map(({ tier, price, desc }) => (
              <div key={tier} className="lp-pricing-card">
                <p className="lp-pricing-tier">{tier}</p>
                <p className="lp-pricing-price"><sup>$</sup>{price}</p>
                <p className="lp-pricing-note">{desc}</p>
              </div>
            ))}
          </div>
          <a href="tel:4793914462" className="lp-pricing-cta">Call for a Free Quote — (479) 391-4462</a>
        </div>
      </div>

      {/* ── What We Haul ── */}
      <div className="lp-section-wrap">
        <div className="lp-section">
          <p className="lp-kicker">What We Remove</p>
          <h2>What We Haul Away</h2>
          <ul className="lp-haul-grid" aria-label="Items we remove">
            {haulItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="lp-haul-note">Not sure if we take it? Call or text us — we&apos;ll give you a straight answer.</p>
        </div>
      </div>

      {/* ── Quote Request Form ── */}
      <div className="lp-section-wrap lp-form-bg" id="quote">
        <div className="lp-section">
          <p className="lp-kicker">Free Quote</p>
          <h2>Request a Free Junk Removal Quote</h2>
          <p className="lp-form-intro">Fill in the form and we&apos;ll get back to you quickly — usually the same day. Or just call: <a href="tel:4793914462" className="lp-form-phone-link">(479) 391-4462</a></p>
          <QuoteForm />
        </div>
      </div>

      {/* ── Reviews ── */}
      <div className="lp-section-wrap lp-bg-tint">
        <div className="lp-section lp-section-wide">
          <p className="lp-kicker">Real Google Reviews</p>
          <h2>What Fayetteville Customers Say</h2>
          <div className="lp-reviews-grid">
            {reviews.map((r) => (
              <article key={r.name} className="home-review-card">
                <div className="home-review-header">
                  <div className="home-review-stars">★★★★★</div>
                  <GoogleIcon />
                </div>
                <p className="home-review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="home-review-author">
                  <span className="home-review-name">{r.name}</span>
                  <span className="home-review-timeframe">{r.timeframe}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="lp-reviews-footer">
            <a
              href="https://www.google.com/search?q=great+dane+junk+%26+brush+removal#mpd=~3139101099386799489/customers/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-reviews-link"
            >
              <GoogleIcon /> Read all 15 Google reviews
            </a>
          </div>
        </div>
      </div>

      {/* ── Before/After Photos + Truck ── */}
      <div className="lp-section-wrap">
        <div className="lp-section lp-section-wide">
          <p className="lp-kicker">Real Jobs</p>
          <h2>Before &amp; After</h2>
          <div className="lp-photos-grid">
            <div className="lp-ba-block">
              <p className="lp-ba-title">Garage Cleanout — Fayetteville</p>
              <div className="lp-ba-pair">
                <div className="lp-ba-slot">
                  <span className="lp-ba-label lp-ba-before">Before</span>
                  <Image src="/garage-before.webp" alt="Garage full of junk before removal in Fayetteville AR" width={450} height={600} loading="lazy" className="lp-ba-img" sizes="(max-width: 640px) 45vw, 25vw" />
                </div>
                <div className="lp-ba-slot">
                  <span className="lp-ba-label lp-ba-after">After</span>
                  <Image src="/garage-after.webp" alt="Clean garage after junk removal in Fayetteville AR" width={450} height={600} loading="lazy" className="lp-ba-img" sizes="(max-width: 640px) 45vw, 25vw" />
                </div>
              </div>
            </div>
            <div className="lp-ba-block">
              <p className="lp-ba-title">Brush &amp; Lawn Cleanup — NW Arkansas</p>
              <div className="lp-ba-pair">
                <div className="lp-ba-slot">
                  <span className="lp-ba-label lp-ba-before">Before</span>
                  <Image src="/overgrown.webp" alt="Overgrown yard before brush and lawn cleanup in Northwest Arkansas" width={450} height={600} loading="lazy" className="lp-ba-img" sizes="(max-width: 640px) 45vw, 25vw" />
                </div>
                <div className="lp-ba-slot">
                  <span className="lp-ba-label lp-ba-after">After</span>
                  <Image src="/cutdown.webp" alt="Cleared yard after brush and lawn cleanup in Northwest Arkansas" width={450} height={600} loading="lazy" className="lp-ba-img" sizes="(max-width: 640px) 45vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
          <div className="lp-truck-wrap">
            <Image
              src="/hero-v2.webp"
              alt="Gibson, owner of Great Dane Junk & Brush Removal, with truck and trailer in Northwest Arkansas"
              width={1400}
              height={788}
              loading="lazy"
              className="lp-truck-img"
              sizes="(max-width: 640px) 100vw, 860px"
            />
          </div>
        </div>
      </div>

      {/* ── FAQ with JSON-LD schema ── */}
      <div className="lp-section-wrap lp-bg-tint">
        <div className="lp-section">
          <p className="lp-kicker">Common Questions</p>
          <h2>Junk Removal FAQ — Fayetteville, AR</h2>
          <div className="lp-faq-list">
            {faqItems.map(({ q, a }) => (
              <div key={q} className="lp-faq-item">
                <p className="lp-faq-q">{q}</p>
                <p className="lp-faq-a">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Minimal footer ── */}
      <footer className="lp-foot">
        <p>
          &copy; {new Date().getFullYear()} Great Dane Junk &amp; Brush Removal LLC &nbsp;&middot;&nbsp; Fayetteville, AR &nbsp;&middot;&nbsp;
          <a href="tel:4793914462">(479) 391-4462</a> &nbsp;&middot;&nbsp;
          <a href="/">greatdaneoutdoorservices.com</a>
        </p>
        <p className="lp-foot-note">Licensed &amp; Insured &nbsp;&middot;&nbsp; Northwest Arkansas</p>
      </footer>
    </main>
  )
}
