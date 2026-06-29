'use client'

import React, { useState } from 'react'

const SERVICES = ['Pressure Washing', 'Junk Removal', 'Landscaping', 'Brush Removal', 'Leaf Cleanup', 'Christmas Light Installation', 'Other']

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
      const data = Object.fromEntries(formData.entries())
      const [crmRes] = await Promise.all([
        fetch('https://great-dane-crm.vercel.app/api/inquiries', {
          method: 'POST',
          body: JSON.stringify({
            name: data.name,
            phone: data.phone,
            email: data.email,
            service: data.service,
            city: data.city,
            preferred_date: data.date || null,
            description: data.description,
          }),
          headers: { 'Content-Type': 'application/json' },
        }),
        fetch('https://formspree.io/f/xdavrvgn', {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        }),
      ])
      if (crmRes.ok) { setSubmitted(true) } else { setError('Something went wrong. Call (870) 995-1166.') }
    } catch { setError('Something went wrong. Call (870) 995-1166.') }
    setLoading(false)
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 2rem', background: '#464646', border: '1px solid #3e4e3e', borderRadius: '12px' }}>
        <p style={{ color: '#7dff9e', fontSize: '2rem', marginBottom: '0.75rem' }}>✓</p>
        <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.5rem' }}>Quote Request Received!</h3>
        <p style={{ color: '#b2b2b2' }}>We&apos;ll get back to you fast. Call or text: <a href="tel:8709951166" style={{ color: '#4a7c59', textDecoration: 'none', fontWeight: 600 }}>(870) 995-1166</a></p>
      </div>
    )
  }

  const inputStyle = { background: '#464646', border: '1px solid #565656', borderRadius: '8px', color: '#fff', padding: '0.75rem', fontSize: '1rem', width: '100%' }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
      <input name="_subject" type="hidden" value="New Quote Request" />
      <input name="name" required placeholder="Full Name" style={inputStyle} />
      <input name="phone" type="tel" required placeholder="Phone Number" style={inputStyle} />
      <input name="email" type="email" required placeholder="Email Address" style={inputStyle} />
      <select name="service" required style={inputStyle}>
        <option value="">Select a Service</option>
        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <input name="city" required placeholder="City / ZIP Code" style={inputStyle} />
      <input name="date" type="date" style={inputStyle} />
      <textarea name="description" required rows={5} placeholder="Describe the job..." style={{ ...inputStyle, fontFamily: 'inherit' }} />
      {error && <p style={{ color: '#ff6b6b' }}>{error}</p>}
      <button type="submit" disabled={loading} style={{ background: loading ? '#555' : 'linear-gradient(135deg, #e0e0e0, #aaa)', color: '#303030', border: 'none', borderRadius: '8px', padding: '1rem', fontSize: '1rem', fontWeight: 800, cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
        {loading ? 'Sending...' : 'Send My Free Quote Request'}
      </button>
    </form>
  )
}