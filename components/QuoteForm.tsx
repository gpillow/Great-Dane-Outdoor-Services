'use client'

import React, { useState } from 'react'

const SERVICES = [
  'Pressure Washing',
  'Junk Removal',
  'Landscaping',
  'Brush Removal',
  'Leaf Cleanup',
  'Christmas Light Installation',
  'Other',
]

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch('https://formspree.io/f/xdavrvgn', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please call or text us at (870) 995-1166.')
      }
    } catch {
      setError('Something went wrong. Please call or text us at (870) 995-1166.')
    }

    setLoading(false)
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h3 style={{ color: '#4caf50' }}>Quote Request Received!</h3>
        <p style={{ color: '#ccc' }}>We will get back to you fast. Call or text: (870) 995-1166</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input name="_subject" type="hidden" value="New Quote Request — Great Dane Outdoor Services" />

      <input name="name" required placeholder="Full Name" style={{ background: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', padding: '0.75rem', fontSize: '1rem' }} />
      <input name="phone" type="tel" required placeholder="Phone Number" style={{ background: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', padding: '0.75rem', fontSize: '1rem' }} />
      <input name="email" type="email" required placeholder="Email Address" style={{ background: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', padding: '0.75rem', fontSize: '1rem' }} />

      <select name="service" required style={{ background: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', padding: '0.75rem', fontSize: '1rem' }}>
        <option value="">Select a Service</option>
        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>

      <input name="city" required placeholder="City / ZIP Code" style={{ background: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', padding: '0.75rem', fontSize: '1rem' }} />
      <input name="date" type="date" style={{ background: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', padding: '0.75rem', fontSize: '1rem' }} />

      <textarea name="description" required rows={5} placeholder="Describe the job..." style={{ background: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', padding: '0.75rem', fontSize: '1rem', fontFamily: 'inherit' }} />

      {error && <p style={{ color: '#ff6b6b' }}>{error}</p>}

      <button type="submit" disabled={loading} style={{ background: '#E07B39', color: '#fff', border: 'none', borderRadius: '8px', padding: '1rem', fontSize: '1rem', fontWeight: