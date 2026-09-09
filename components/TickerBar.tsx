const items = [
  'Fully Licensed & Insured',
  '5-Star Rated on Google',
  'Serving Northwest Arkansas',
]

const divider = <span className="ticker-divider" aria-hidden="true">✦</span>

function TickerItems() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="ticker-item">
          {item}
          {divider}
        </span>
      ))}
    </>
  )
}

export default function TickerBar() {
  return (
    <div className="ticker-bar" aria-label="Site highlights" role="marquee">
      <div className="ticker-track">
        {/* Duplicate 4× so the loop has no gaps at any viewport width */}
        <TickerItems />
        <TickerItems />
        <TickerItems />
        <TickerItems />
      </div>
    </div>
  )
}
