import Link from 'next/link'

const year = new Date().getFullYear()

export default function SiteFooter() {
  return (
    <footer role="contentinfo" className="site-footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <p className="footer-name">Great Dane Outdoor Services</p>
          <p className="footer-tagline">Big Results, Great Service.</p>
          <p className="footer-location">Serving Northwest Arkansas</p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation" className="footer-links">
          <ul>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer-contact">
          <a href="tel:4793914462">(479) 391-4462</a>
          <a href="mailto:gibson@greatdaneoutdoorservices.com">gibson@greatdaneoutdoorservices.com</a>
          <Link href="/contact">Get a Free Quote &rarr;</Link>
        </div>
      </div>

      <div className="footer-cities">
        <p className="footer-cities-label">Serving</p>
        <div className="footer-cities-list">
          {['Fayetteville', 'Springdale', 'Rogers', 'Bentonville', 'Farmington', 'Johnson'].map((city) => (
            <span key={city}>{city}</span>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Great Dane Outdoor Services LLC. All rights reserved.</p>
        <div className="footer-legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
