import React from 'react'
export const metadata = {
  title: 'Customer Reviews | Great Dane Outdoor Services Fayetteville AR',
  description:
    'See what NWA homeowners are saying about Great Dane Outdoor Services. Serving Fayetteville, Rogers, Bentonville, Springdale, and Farmington, AR.',
}

export default function ReviewsPage() {
  return (
    <main style={{ backgroundColor: '#111', color: '#fff', padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        What Our NWA Customers Are Saying
      </h1>
      <p style={{ color: '#aaa', marginBottom: '3rem' }}>
        Serving Fayetteville, Rogers, Bentonville, Springdale & Farmington.
      </p>
      <p style={{ color: '#ccc' }}>Google reviews coming soon. We're just getting started!</p>
    </main>
  )
}