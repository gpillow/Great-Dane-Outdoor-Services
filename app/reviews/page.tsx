import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Customer Reviews | Great Dane Junk & Brush Removal',
  description: '100% 5-star rated on Google. Read verified reviews from Great Dane Junk & Brush Removal customers across Northwest Arkansas. Free quotes. (479) 391-4462.',
  alternates: { canonical: 'https://www.greatdaneoutdoorservices.com/reviews' },
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

const reviews = [
  {
    name: 'Vanessa Hardin Branch',
    timeframe: '6 weeks ago',
    text: 'We have been extremely pleased with Gibson’s work. He helps us with flower-bed maintenance and a wide variety of yard projects, including mulching, weeding, planting, and general cleanup. He is dependable, hardworking, and pays close attention to detail. Our landscaping always looks noticeably better after he has been here, and we appreciate his willingness to handle whatever needs to be done. We highly recommend him to anyone looking for reliable, high-quality outdoor services.',
  },
  {
    name: 'Michelle Rofkahr',
    timeframe: '11 weeks ago',
    text: 'Gibson has been a hard-working help to me, with maintaining my properties with power washing and yard work. He communicates well and is professional in his interactions; he is punctual and fair in pricing. He and his teammate completed all the tasks within the timeframe we agreed upon.',
  },
  {
    name: 'Amy Moore',
    timeframe: '8 weeks ago',
    text: 'Five stars!!!! Gibson was very helpful with my move. He is very respectful, timely, and has a great work ethic! He also went above and beyond doing some extra things that I had not initially requested when I hired him. I have moved MANY times and Gibson was by far the best help I have ever had. Highly recommend!!!',
  },
  {
    name: 'Nicole',
    timeframe: 'Recent',
    text: 'Quick, easy, and professional with extremely reasonable prices. Gibson removing our junk for us was the easiest part of our move! Highly recommend!',
  },
]

export default function ReviewsPage() {
  return (
    <main id="main-content" className="blueprint-page">
      <section className="blueprint-hero reviews-hero">
        <div className="blueprint-shell">
          <p className="blueprint-kicker">Customer Reviews</p>
          <h1>What Our Customers Are Saying</h1>
          <p>Every review below is a real Google review from a customer across Northwest Arkansas. We&apos;re proud to be 100% 5-star rated.</p>
          <div className="blueprint-actions">
            <Link href="/contact">Get a Free Quote</Link>
            <a href="tel:4793914462" style={{ background: '#7dff9e', color: '#0a1a0e', borderRadius: '999px', boxShadow: '0 8px 32px rgba(125,255,158,0.38)' }}>Call or Text (479) 391-4462</a>
          </div>
        </div>
      </section>

      <section className="blueprint-section blueprint-light reviews-page-section">
        <div className="blueprint-shell">
          <div className="reviews-page-summary">
            <span className="reviews-page-stars">★★★★★</span>
            <span className="reviews-page-rating">5.0</span>
            <span className="reviews-page-count">· {reviews.length} Google Reviews · 100% 5-Star Rated</span>
          </div>

          <div className="reviews-page-grid">
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

          <div className="reviews-page-cta-row">
            <a
              href="https://www.google.com/maps/place/Great+Dane+Junk+%26+Brush+Removal"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-page-google-link"
            >
              <GoogleIcon />
              See all reviews on Google
            </a>
            <a
              href="https://www.google.com/maps/place/Great+Dane+Junk+%26+Brush+Removal"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-page-google-link reviews-page-leave-link"
            >
              Leave us a review
            </a>
          </div>
        </div>
      </section>

      <section className="blueprint-section blueprint-cta reviews-cta">
        <div className="blueprint-shell" style={{ textAlign: 'center' }}>
          <p className="blueprint-kicker">Ready to Work Together?</p>
          <h2>Get a Free Quote Today</h2>
          <p>Junk removal, brush clearing, pressure washing, landscaping, and more — serving Fayetteville, Rogers, Bentonville, Springdale, and NW Arkansas.</p>
          <div className="blueprint-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact">Request a Free Quote</Link>
            <a href="tel:4793914462" style={{ background: '#7dff9e', color: '#0a1a0e', borderRadius: '999px', boxShadow: '0 8px 32px rgba(125,255,158,0.38)' }}>Call or Text (479) 391-4462</a>
          </div>
        </div>
      </section>
    </main>
  )
}
