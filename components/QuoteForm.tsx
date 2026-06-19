// ─────────────────────────────────────────────────────────────────────────────
// components/QuoteForm.jsx
// Drop-in contact / quote request form.
// Matches your existing dark background + orange accent theme.
//
// HOW TO USE:
//   import QuoteForm from '@/components/QuoteForm'
//   Then place <QuoteForm /> anywhere on your contact or quote page.
//
// FORM SUBMISSIONS: Currently uses Formspree (free tier, no backend needed).
//   1. Go to https://formspree.io and create a free account
//   2. Create a new form → copy your form ID
//   3. Replace 'YOUR_FORMSPREE_ID' below with your actual ID
//   Submissions will land in Gibson.pillow@yahoo.com automatically.
// ─────────────────────────────────────────────────────────────────────────────

'use client'

import { useState } from 'react'

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
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.target)

    try {
      const res = await fetch('https://formspree.io/f/xdavrvgn', { // ← replace this
        method:  'POST',
        body:    formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please call or text us directly at (870) 995-1166.')
      }
    } catch {
      setError('Something went wrong. Please call or text us directly at (870) 995-1166.')
    }

    setLoading(false)
  }

  if (submitted) {
    return (
      <div style={styles.successBox}>
        <h3 style={styles.successTitle}>✅ Quote Request Received!</h3>
        <p style={styles.successText}>
          We&apos;ll get back to you fast. In the meantime, feel free to call or text us at{' '}
          <a href="tel:8709951166" style={styles.link}>(870) 995-1166</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {/* Hidden field so email subject is readable */}
      <input type="hidden" name="_subject" value="New Quote Request — Great Dane Outdoor Services" />

      <div style={styles.row}>
        <div style={styles.field}>
          <label style={styles.label}>Full Name *</label>
          <input name="name" required style={styles.input} placeholder="Jane Smith" />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Phone Number *</label>
          <input name="phone" type="tel" required style={styles.input} placeholder="(870) 555-0000" />
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.field}>
          <label style={styles.label}>Email Address *</label>
          <input name="email" type="email" required style={styles.input} placeholder="you@email.com" />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Service Needed *</label>
          <select name="service" required style={styles.select}>
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.field}>
          <label style={styles.label}>City / ZIP Code *</label>
          <input name="city" required style={styles.input} placeholder="Fayetteville, AR" />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Preferred Date</label>
          <input name="date" type="date" style={styles.input} />
        </div>
      </div>

      <div style={{ ...styles.field, width: '100%' }}>
        <label style={styles.label}>Job Description *</label>
        <textarea
          name="description"
          required
          rows={5}
          style={styles.textarea}
          placeholder="Tell us what needs to be done — size of area, condition, any special notes…"
        />
      </div>

      <div style={{ ...styles.field, width: '100%' }}>
        <label style={styles.label}>Photos (optional)</label>
        <input name="photos" type="file" multiple accept="image/*" style={styles.fileInput} />
        <p style={styles.hint}>Attach photos to help us give you the most accurate quote.</p>
      </div>

      {error && <p style={styles.errorText}>{error}</p>}

      <button type="submit" disabled={loading} style={loading ? styles.btnDisabled : styles.btn}>
        {loading ? 'Sending…' : 'Send My Free Quote Request →'}
      </button>
    </form>
  )
}

// ── Inline styles matching your dark/orange theme ────────────────────────────
const styles = {
  form: {
    display:       'flex',
    flexWrap:      'wrap',
    gap:           '1rem',
    background:    '#1a1a1a',
    padding:       '2rem',
    borderRadius:  '12px',
    maxWidth:      '760px',
    margin:        '0 auto',
  },
  row: {
    display:        'flex',
    gap:            '1rem',
    width:          '100%',
    flexWrap:       'wrap',
  },
  field: {
    display:        'flex',
    flexDirection:  'column',
    flex:           1,
    minWidth:       '200px',
  },
  label: {
    color:          '#ffffff',
    fontSize:       '0.875rem',
    fontWeight:     600,
    marginBottom:   '0.35rem',
  },
  input: {
    background:     '#2a2a2a',
    border:         '1px solid #444',
    borderRadius:   '8px',
    color:          '#ffffff',
    padding:        '0.65rem 0.85rem',
    fontSize:       '0.95rem',
    outline:        'none',
  },
  select: {
    background:     '#2a2a2a',
    border:         '1px solid #444',
    borderRadius:   '8px',
    color:          '#ffffff',
    padding:        '0.65rem 0.85rem',
    fontSize:       '0.95rem',
    outline:        'none',
    cursor:         'pointer',
  },
  textarea: {
    background:     '#2a2a2a',
    border:         '1px solid #444',
    borderRadius:   '8px',
    color:          '#ffffff',
    padding:        '0.65rem 0.85rem',
    fontSize:       '0.95rem',
    outline:        'none',
    resize:         'vertical',
    fontFamily:     'inherit',
  },
  fileInput: {
    color:          '#cccccc',
    fontSize:       '0.875rem',
  },
  hint: {
    color:          '#888',
    fontSize:       '0.75rem',
    marginTop:      '0.25rem',
  },
  btn: {
    width:          '100%',
    background:     '#E07B39',
    color:          '#ffffff',
    border:         'none',
    borderRadius:   '8px',
    padding:        '1rem',
    fontSize:       '1rem',
    fontWeight:     700,
    cursor:         'pointer',
    marginTop:      '0.5rem',
    transition:     'background 0.2s',
  },
  btnDisabled: {
    width:          '100%',
    background:     '#555',
    color:          '#999',
    border:         'none',
    borderRadius:   '8px',
    padding:        '1rem',
    fontSize:       '1rem',
    fontWeight:     700,
    cursor:         'not-allowed',
    marginTop:      '0.5rem',
  },
  errorText: {
    color:          '#ff6b6b',
    fontSize:       '0.875rem',
    width:          '100%',
  },
  successBox: {
    background:     '#1a2e1a',
    border:         '1px solid #2a6b2a',
    borderRadius:   '12px',
    padding:        '2rem',
    textAlign:      'center',
    maxWidth:       '560px',
    margin:         '0 auto',
  },
  successTitle: {
    color:          '#4caf50',
    fontSize:       '1.4rem',
    marginBottom:   '0.75rem',
  },
  successText: {
    color:          '#cccccc',
    fontSize:       '1rem',
    lineHeight:     1.6,
  },
  link: {
    color:          '#E07B39',
    textDecoration: 'none',
    fontWeight:     700,
  },
}
