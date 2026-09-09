import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Customer Reviews | Great Dane Junk & Brush Removal',
  description: '15 five-star Google reviews for Great Dane Junk & Brush Removal in Northwest Arkansas. Junk removal, landscaping, pressure washing, and more. Free quotes. (479) 391-4462.',
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
    name: 'Chandler',
    timeframe: '2 days ago',
    text: 'Great Dane responded within 10 minutes and had my junk hauled off and I didn\'t have to do a thing. I would recommend them to anyone and everyone. 10/10 service!',
  },
  {
    name: 'Michelle Price',
    timeframe: '1 week ago',
    text: 'Excellent job power washing and getting my patio and driveway cleaned. Fast, prompt dependable, hard working and extremely efficient!! Would absolutely recommend and have!',
  },
  {
    name: 'Ken Haxel',
    timeframe: '1 week ago',
    text: 'Did a great job trimming and shaping up our 4 holly trees.',
  },
  {
    name: 'Hailey Hill',
    timeframe: '1 week ago',
    text: 'They responded quickly and were able to come get my items very quickly. They showed up on time and were quick and efficient!',
  },
  {
    name: 'Tifanie Van Laar-Wagner',
    timeframe: '2 weeks ago',
    text: 'Gibson is very professional and reasonable, 10/10 recommend.',
  },
  {
    name: 'Dyann Shade',
    timeframe: '3 weeks ago',
    text: 'Extremely impressed with the landscaping job that was done! Fair pricing, came out on the hottest day of the year, and got to WORK! It wasn\'t easy at all, and really appreciate the hard work and positivity! Will be using them for as long as they are available 💗',
  },
  {
    name: 'Nicole Helms',
    timeframe: '6 weeks ago',
    text: 'Quick, easy, and professional with extremely reasonable prices. Gibson removing our junk for us was the easiest part of our move! Highly recommend!',
  },
  {
    name: 'Vanessa Hardin Branch',
    timeframe: '6 weeks ago',
    text: 'We have been extremely pleased with Gibson\'s work. He helps us with flower-bed maintenance and a wide variety of yard projects, including mulching, weeding, planting, and general cleanup. He is dependable, hardworking, and pays close attention to detail. Our landscaping always looks noticeably better after he has been here, and we appreciate his willingness to handle whatever needs to be done. We highly recommend him to anyone looking for reliable, high-quality outdoor services.',
  },
  {
    name: 'Justin Underwood',
    timeframe: '6 weeks ago',
    text: 'Great Dane did a wonderful job with my junk removal in Springdale. He was very easy to work with, responded quickly, and his prices were very affordable. I needed everything removed from my residence within seven days, and he was able to get it done within just one day. I couldn\'t have asked for better service. I would 100% recommend Great Dane to anyone needing junk removal!',
  },
  {
    name: 'Blake Rogers',
    timeframe: '7 weeks ago',
    text: 'Gibson with Great Dane Outdoors is really strong and removed all my trash the other day. He is so nice and helpful too. Highly reccomend Gihson.',
  },
  {
    name: 'Chris Hill',
    timeframe: '8 weeks ago',
    text: 'Needed junk removed from my garage in Fayetteville and came across Great Dane outdoor. Gibson gave me a fast, competitive quote for the work and got it done that afternoon. Highly recommend',
  },
  {
    name: 'Jackson Patterson',
    timeframe: '8 weeks ago',
    text: 'Hired them to remove junk from my house and garage in Fayetteville. Did a very efficient job and cleaned up the house after the job was finished. Would recommend for any job.',
  },
  {
    name: 'Amy Moore',
    timeframe: '8 weeks ago',
    text: 'Five stars!!!! Gibson was very helpful with my move. He is very respectful, timely, and has a great work ethic! He also went above and beyond doing some extra things that I had not initially requested when I hired him. I have moved MANY times and Gibson was by far the best help I have ever had. Highly recommend!!!',
  },
  {
    name: 'Michelle Rofkahr',
    timeframe: '11 weeks ago',
    text: 'Gibson has been a hard-working help to me, with maintaining my properties with power washing and yard work. He communicates well and is professional in his interactions; he is punctual and fair in pricing. He and his teammate completed all the tasks within the timeframe we agreed upon.',
  },
  {
    name: 'Becky Maxwell',
    timeframe: '11 weeks ago',
    text: 'Gibson did a great job of ordering and installing and removing my Christmas lights! He also did power washing for me and some yard maintenance. I will be using Great Dane in the future for sure.',
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
              <article key={r.name + r.timeframe} className="home-review-card">
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
              href="https://www.google.com/search?q=great+dane+junk+%26+brush+removal#mpd=~3139101099386799489/customers/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-page-google-link"
            >
              <GoogleIcon />
              See all reviews on Google
            </a>
            <a
              href="https://g.page/r/CaP5vBUDp-ZyEBM/review"
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
