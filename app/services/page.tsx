import React from 'react'
export const metadata = {
  title: 'Pressure Washing, Junk Removal & Landscaping NWA | Great Dane Outdoor Services',
  description:
    'Full-service outdoor company serving NWA. Pressure washing, junk removal, landscaping, brush removal, leaf cleanups & Christmas lights in Fayetteville, Rogers, Bentonville, Springdale & more.',
}

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: '#111', color: '#fff', padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Outdoor Services Built for Northwest Arkansas
      </h1>
      <p style={{ color: '#aaa', marginBottom: '3rem' }}>
        Serving Fayetteville, Rogers, Bentonville, Springdale, Farmington, and all of NWA.
      </p>

      {[
        { name: 'Pressure Washing', desc: 'Driveways, decks, siding, patios, and more — blasted clean and looking brand new. Serving all NWA.' },
        { name: 'Junk Removal', desc: 'We haul it away so you don\'t have to. Fast, affordable junk removal in Northwest Arkansas.' },
        { name: 'Landscaping', desc: 'Mowing, trimming, cleanup, and more. Your yard, upgraded. Available across NWA.' },
        { name: 'Brush Removal', desc: 'Overgrown property? We clear it out — clean and efficient.' },
        { name: 'Leaf Cleanups', desc: 'Fall in NWA hits hard. We handle the mess so you don\'t have to.' },
        { name: 'Christmas Lights', desc: 'Professional holiday light installation. Let your home shine this season.' },
      ].map((service) => (
        <div key={service.name} style={{ borderBottom: '1px solid #333', paddingBottom: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: '#E07B39', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{service.name}</h2>
          <p style={{ color: '#ccc' }}>{service.desc}</p>
          <a href="/contact" style={{ color: '#E07B39', fontWeight: 'bold', textDecoration: 'none' }}>
            Get a Free Quote →
          </a>
        </div>
      ))}
    </main>
  )
}