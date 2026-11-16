const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': 'https://www.greatdaneoutdoorservices.com/#business',
    name: 'Great Dane Junk & Brush Removal',
    description:
      'Locally owned outdoor services company serving Northwest Arkansas. Specializing in junk removal, brush removal, landscaping, and leaf cleanups.',
    url: 'https://www.greatdaneoutdoorservices.com',
    telephone: '+14793914462',
    email: 'gibson@greatdaneoutdoorservices.com',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Card',
    areaServed: [
      { '@type': 'City', name: 'Fayetteville', containedInPlace: { '@type': 'State', name: 'Arkansas' } },
      { '@type': 'City', name: 'Springdale' },
      { '@type': 'City', name: 'Rogers' },
      { '@type': 'City', name: 'Bentonville' },
      { '@type': 'City', name: 'Farmington' },
      { '@type': 'City', name: 'Johnson' },
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
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.greatdaneoutdoorservices.com/#website',
    url: 'https://www.greatdaneoutdoorservices.com',
    name: 'Great Dane Junk & Brush Removal',
    description:
      'Junk removal & brush removal in Northwest Arkansas. Landscaping, leaf cleanups, and free quotes.',
    publisher: { '@id': 'https://www.greatdaneoutdoorservices.com/#business' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.greatdaneoutdoorservices.com/#organization',
    name: 'Great Dane Junk & Brush Removal',
    url: 'https://www.greatdaneoutdoorservices.com',
    telephone: '+14793914462',
    email: 'gibson@greatdaneoutdoorservices.com',
    legalName: 'Great Dane Junk & Brush Removal LLC',
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
