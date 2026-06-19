import React from 'react'

export const metadata = {
  title: 'Before & After Gallery | Great Dane Outdoor Services NWA',
  description: 'Browse before and after photos from pressure washing, junk removal, and landscaping jobs across Northwest Arkansas.',
}

export default function GalleryPage() {
  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#d0d0d0', padding: '80px 20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
        See the Great Dane Difference
      </h1>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '4rem' }}>Real results from real NWA properties</p>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

        <div>
          <p style={{ color: '#4a7c59', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Pressure Washing</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <img src="/beforebrick.jpg" alt="Before pressure washing" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '220px' }} />
            <img src="/afterbrick.jpg" alt="After pressure washing" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '220px' }} />
            <img src="/beforedriveway.jpg" alt="Before driveway washing" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '220px' }} />
            <img src="/afterdriveway.jpg" alt="After driveway washing" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '220px' }} />
            <img src="/beforewalkway.jpg" alt="Before walkway washing" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '220px' }} />
            <img src="/afterwalkway.jpg" alt="After walkway washing" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '220px' }} />
          </div>
        </div>

        <div>
          <p style={{ color: '#4a7c59', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Brush Removal</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <img src="/brushcompost.jpg" alt="Brush removal NWA" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '220px' }} />
            <img src="/morebrush.jpg" alt="Brush removal results" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '220px' }} />
            <img src="/IMG_8222.png" alt="Brush removal NWA" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '220px' }} />
          </div>
        </div>

        <div>
          <p style={{ color: '#4a7c59', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Landscaping</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <img src="/overgrown.jpg" alt="Before landscaping NWA" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '280px' }} />
            <img src="/cutdown.jpg" alt="After landscaping NWA" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '280px' }} />
          </div>
        </div>

      </div>
    </main>
  )
}