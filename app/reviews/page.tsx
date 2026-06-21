import React from 'react'

export const metadata = {
  title: 'Customer Reviews | Great Dane Outdoor Services Fayetteville AR',
  description: 'See what NWA homeowners are saying about Great Dane Outdoor Services. Serving Fayetteville, Rogers, Bentonville, Springdale, and Farmington, AR.',
}

export default function ReviewsPage() {
  return (
    <main id="main-content" style={{ backgroundColor: '#303030', color: '#f0f0f0', fontFamily: 'sans-serif' }}>
      <section className="hero-shaped" style={{ padding: '120px 20px 80px', textAlign: 'center', background: 'linear-gradient(180deg, #303030 0%, #3e4e3e 100%)', borderBottom: '1px solid #425242' }}>
        <p style={{ color: '#6abf80', fontWeight: 800, letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textShadow: '0 0 20px rgba(106,191,128,0.6)' }}>Customer Feedback</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, margin: '0 auto 1.5rem', maxWidth: '820px' }}>
          What NWA Customers<br /><span style={{ color: '#7dff9e' }}>Are Saying</span>
        </h1>
        <p style={{ color: '#b2b2b2', maxWidth: '560px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Serving Fayetteville, Rogers, Bentonville, Springdale, Farmington, and the surrounding Northwest Arkansas area.
        </p>
      </section>

      <section className="section-shaped section-band" style={{ padding: '100px 20px', background: '#3a3a3a' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
          <div className="ui-card" style={{ background: '#464646', border: '1px solid #565656', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#7dff9e', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.75rem' }}>★ ★ ★ ★ ★</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: '1rem' }}>Google reviews coming soon</h2>
            <p style={{ color: '#b2b2b2', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto' }}>
              Great Dane Outdoor Services is still growing its public review profile, but the work is already happening across NWA. Photos, clear quotes, and straight communication come standard.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { title: 'Free Quotes', text: 'No pressure. No obligation. Just a clear number before work starts.' },
              { title: 'Local Service', text: 'Built for Northwest Arkansas properties, weather, and seasonal cleanup needs.' },
              { title: 'Direct Contact', text: 'Call or text the same number customers use to get on the schedule.' },
            ].map((item) => (
              <div key={item.title} className="ui-card" style={{ background: '#3c3c3c', border: '1px solid #425242', borderRadius: '12px', padding: '1.5rem' }}>
                <h3 style={{ color: '#ebebeb', fontWeight: 800, marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ color: '#a0a0a0', lineHeight: 1.65, fontSize: '0.93rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-shaped" style={{ padding: '100px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #3e4e3e 0%, #303030 100%)', borderTop: '1px solid #425242' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Ready to Be the Next Good Result?</h2>
        <p style={{ color: '#b2b2b2', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Call, text, or request a free quote online.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" style={{ background: 'linear-gradient(135deg, #ebebeb, #b2b2b2)', color: '#303030', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', fontSize: '1rem' }}>
            Get a Free Quote
          </a>
          <a href="tel:8709951166" style={{ border: '2px solid #4a7c59', color: '#7dff9e', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
            Call (870) 995-1166
          </a>
        </div>
      </section>
    </main>
  )
}
