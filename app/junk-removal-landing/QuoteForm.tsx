'use client'

import { useState } from 'react'
import { submitQuoteLanding } from './actions'

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const formData = new FormData(e.currentTarget)
      await submitQuoteLanding(formData)
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="lp-form-success">
        <div className="lp-form-success-icon">✓</div>
        <h3>Request received!</h3>
        <p>We&apos;ll call or text you at the number you provided — usually within a few hours.</p>
        <p>You can also reach us directly: <a href="tel:4793914462">(479) 391-4462</a></p>
      </div>
    )
  }

  return (
    <form className="lp-form-fields" onSubmit={handleSubmit} noValidate>
      <div className="lp-form-row">
        <label className="lp-form-label">
          Your Name *
          <input className="lp-form-input" type="text" name="name" placeholder="First &amp; last name" required autoComplete="name" />
        </label>
        <label className="lp-form-label">
          Phone Number *
          <input className="lp-form-input" type="tel" name="phone" placeholder="(479) 555-0123" required autoComplete="tel" />
        </label>
      </div>
      <label className="lp-form-label">
        Street Address
        <input className="lp-form-input" type="text" name="address" placeholder="Where is the junk located?" autoComplete="street-address" />
      </label>
      <label className="lp-form-label">
        Service Needed *
        <select className="lp-form-select" name="service" required defaultValue="">
          <option value="" disabled>Select a service...</option>
          <option value="junk-removal">Junk Removal</option>
          <option value="garage-cleanout">Garage Cleanout</option>
          <option value="estate-cleanout">Estate Cleanout</option>
          <option value="appliance-removal">Appliance Removal</option>
          <option value="furniture-removal">Furniture Removal</option>
          <option value="yard-debris">Yard Debris Removal</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </label>
      <label className="lp-form-label">
        How did you hear about us?
        <select className="lp-form-select" name="source" defaultValue="">
          <option value="" disabled>Select one...</option>
          <option value="google-lsa">Google Local Services Ad</option>
          <option value="google-search">Google Search</option>
          <option value="referral">Friend or Family Referral</option>
          <option value="facebook">Facebook</option>
          <option value="nextdoor">Nextdoor</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="lp-form-check">
        <input type="checkbox" name="optin" defaultChecked />
        <span>I agree to be contacted by call or text about my quote request. Standard message rates may apply.</span>
      </label>
      <button type="submit" className="lp-form-submit" disabled={submitting}>
        {submitting ? 'Sending Request...' : 'Get My Free Quote →'}
      </button>
    </form>
  )
}
