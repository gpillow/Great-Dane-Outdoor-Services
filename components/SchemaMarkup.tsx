export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Great Dane Outdoor Services',
    description: 'Locally owned pressure washing, junk removal, and landscaping company serving all of Northwest Arkansas.',
    telephone: '(870) 995-1166',
    email: 'Gibson.pillow@yahoo.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fayetteville',
      addressRegion: 'AR',
      addressCountry: 'US',
    },
    areaServed: ['Fayetteville', 'Rogers', 'Bentonville', 'Springdale', 'Farmington'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}