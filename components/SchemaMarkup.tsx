const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': 'https://www.greatdaneoutdoorservices.com/#business',
    name: 'Great Dane Outdoor Services',
    description:
      'Locally owned outdoor services company serving Northwest Arkansas. Specializing in pressure washing, junk removal, landscaping, brush removal, leaf cleanups, and Christmas light installation.',
    url: 'https://www.greatdaneoutdoorservices.com',
    telephone: '+18709951166',
    email: 'leads@greatdaneoutdoorservices.com',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Card',
    areaServed: [
      { '@type': 'City', name: 'Fayetteville', containedInPlace: { '@type': 'State', name: 'Arkansas' } },
      { '@type': 'City', name: 'Rogers' },
      { '@type': 'City', name: 'Bentonville' },
      { '@type': 'City', name: 'Springdale' },
      { '@type': 'City', name: 'Farmington' },
      { '@type': 'City', name: 'Lowell' },
      { '@type': 'City', name: 'Centerton' },
      { '@type': 'City', name: 'Bella Vista' },
      { '@type': 'City', name: 'Cave Springs' },
      { '@type': 'City', name: 'Siloam Springs' },
      { '@type': 'City', name: 'Elkins' },
      { '@type': 'City', name: 'Prairie Grove' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fayetteville',
      addressRegion: 'AR',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.0822,
      longitude: -94.1719,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Outdoor Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pressure Washing',
            description:
              'Professional pressure washing for driveways, decks, siding, patios, walkways, and brick surfaces in Northwest Arkansas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Junk Removal',
            description: 'Fast, affordable junk removal and hauling services across NWA.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscaping',
            description:
              'Mulching, weed removal, flower bed installation, and bush and tree trimming in Northwest Arkansas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brush Removal',
            description: 'Land clearing, brush removal, and overgrowth cleanup for NWA properties.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Leaf Cleanup',
            description: 'Thorough fall leaf removal and disposal in Northwest Arkansas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Christmas Light Installation',
            description: 'Professional holiday light installation and removal for homes in NWA.',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.greatdaneoutdoorservices.com/#website',
    url: 'https://www.greatdaneoutdoorservices.com',
    name: 'Great Dane Outdoor Services',
    description:
      'Northwest Arkansas outdoor services: pressure washing, junk removal, landscaping, and more.',
    publisher: { '@id': 'https://www.greatdaneoutdoorservices.com/#business' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.greatdaneoutdoorservices.com/#organization',
    name: 'Great Dane Outdoor Services',
    url: 'https://www.greatdaneoutdoorservices.com',
    telephone: '+18709951166',
    email: 'leads@greatdaneoutdoorservices.com',
    legalName: 'Great Dane Outdoor Services LLC',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fayetteville',
      addressRegion: 'AR',
      addressCountry: 'US',
    },
  },
]

export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  )
}
