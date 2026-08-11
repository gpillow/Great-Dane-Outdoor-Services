import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing, Junk Removal & Landscaping NWA',
  description:
    'Full-service outdoor company serving NWA. Pressure washing, junk removal, landscaping, brush removal, leaf cleanups & Christmas lights in Fayetteville, Springdale, Rogers, Bentonville, Farmington & Johnson.',
  alternates: { canonical: 'https://www.greatdaneoutdoorservices.com/services' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://www.greatdaneoutdoorservices.com/#business',
  name: 'Great Dane Junk & Brush Removal',
  description:
    'Locally owned outdoor services company in Northwest Arkansas offering pressure washing, junk removal, landscaping, brush removal, leaf cleanups, and Christmas light installation.',
  url: 'https://www.greatdaneoutdoorservices.com/services',
  telephone: '+14793914462',
  email: 'leads@greatdaneoutdoorservices.com',
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Outdoor Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pressure Washing', description: 'Professional pressure washing for driveways, sidewalks, patios, brick, decks, siding, and exterior surfaces. Starting at $125.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Junk Removal', description: 'Full-service junk hauling for furniture, yard debris, garage cleanouts, and unwanted items. Starting at $149.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscaping', description: 'Mulching, weed removal, flower bed installation, bush trimming, and landscape refresh work. Starting at $149.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brush Removal', description: 'Overgrowth clearing, fence line cleanup, sapling removal, and land clearing. Starting at $225.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leaf Cleanup', description: 'Seasonal leaf removal and disposal for Northwest Arkansas yards. Starting at $175.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Christmas Light Installation', description: 'Professional holiday light installation and takedown for homes in Northwest Arkansas. Starting at $499.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // --- Pressure Washing ---
    {
      '@type': 'Question',
      name: 'How much does pressure washing cost in Northwest Arkansas?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane Junk & Brush Removal pressure washing starts at $125. Final pricing depends on the surface type, square footage, and level of buildup. Driveways, patios, brick, and multi-surface jobs are quoted based on photos or an on-site look.' },
    },
    {
      '@type': 'Question',
      name: 'What surfaces does Great Dane pressure wash?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane pressure washes driveways, sidewalks, patios, brick exteriors, decks, siding, fences, and walkways. Most hard exterior surfaces can be cleaned with professional-grade equipment.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a pressure washing job take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most residential pressure washing jobs in Northwest Arkansas take one to three hours depending on the size and surface condition. Larger properties or heavily soiled surfaces may take longer.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be home for pressure washing?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. As long as Great Dane has access to the area and a water source on the property, the job can be completed without the homeowner present.' },
    },
    {
      '@type': 'Question',
      name: 'How often should I pressure wash my driveway in NWA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Once a year is standard for most Northwest Arkansas homes. Driveways with heavy tree coverage, oil stains, or high traffic may benefit from cleaning twice a year.' },
    },
    // --- Junk Removal ---
    {
      '@type': 'Question',
      name: 'How much does junk removal cost in Northwest Arkansas?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane junk removal starts at $149 for small loads. Pricing scales by volume and disposal requirements. Text a photo of your pile for the fastest quote.' },
    },
    {
      '@type': 'Question',
      name: 'What items does Great Dane haul away?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane removes furniture, appliances, yard debris, construction scraps, garage clutter, and most household items. Hazardous materials such as paint, chemicals, and tires require separate disposal.' },
    },
    {
      '@type': 'Question',
      name: 'How fast can I get junk removed in Northwest Arkansas?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane Junk & Brush Removal aims for same-day or next-day availability on most junk removal jobs in Fayetteville, Springdale, Rogers, Bentonville, Farmington, and Johnson.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to carry items to the curb for junk removal?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Great Dane handles the heavy lifting from wherever items are located on your property, including garages, backyard sheds, and upstairs rooms.' },
    },
    {
      '@type': 'Question',
      name: 'Can Great Dane do a full garage cleanout?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Great Dane handles full garage cleanouts, hauling away everything you want removed in a single visit. Larger cleanouts are quoted by volume.' },
    },
    // --- Landscaping ---
    {
      '@type': 'Question',
      name: 'How much does a landscaping refresh cost in Northwest Arkansas?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane landscaping refreshes start at $149. This covers mulching, weed removal, bed cleanup, and trimming work. New installs or larger beds are quoted after reviewing the property.' },
    },
    {
      '@type': 'Question',
      name: 'Does Great Dane install mulch?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mulch installation is a core part of Great Dane landscaping refreshes. Mulch is installed in flower beds and around trees and shrubs for both appearance and moisture retention.' },
    },
    {
      '@type': 'Question',
      name: 'What landscaping services does Great Dane offer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane offers mulching, weed removal, flower bed building and cleanup, bush trimming, and tree trimming. The focus is on practical refresh work that improves curb appeal.' },
    },
    {
      '@type': 'Question',
      name: 'Can Great Dane build new flower beds?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Great Dane builds new flower beds from scratch, including edging, soil prep, and initial mulching. Projects are quoted based on size and scope.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get a landscaping estimate in NWA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Call or text (479) 391-4462 with photos of your yard. Great Dane provides quotes based on the actual scope of work — no hourly guesses, just a clear number before work starts.' },
    },
    // --- Brush Removal ---
    {
      '@type': 'Question',
      name: 'How much does brush removal cost in Northwest Arkansas?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane brush removal starts at $225. Final pricing depends on the density of the vegetation, site access, amount of material, and hauling and disposal needs.' },
    },
    {
      '@type': 'Question',
      name: 'What does brush removal include?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane brush removal includes cutting and clearing overgrown brush, saplings, vines, and dense vegetation. Common areas include fence lines, hillsides, overgrown lots, and wooded property edges.' },
    },
    {
      '@type': 'Question',
      name: 'Does Great Dane haul away brush after cutting?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Hauling and disposal of brush and debris is included in the service. Material is removed from the property completely.' },
    },
    {
      '@type': 'Question',
      name: 'Can Great Dane clear a full overgrown lot?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Great Dane handles both small brush patches and larger overgrown lots. Larger land clearing projects are quoted after reviewing photos or the site.' },
    },
    {
      '@type': 'Question',
      name: 'How long does brush removal take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Depending on the size and density of the area, most brush removal jobs in Northwest Arkansas take a half day to a full day. Very large properties may require multiple visits.' },
    },
    // --- Leaf Cleanup ---
    {
      '@type': 'Question',
      name: 'How much does leaf cleanup cost in Northwest Arkansas?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane leaf cleanup starts at $175. Pricing increases for large yards, heavy fall buildup, or properties requiring multiple passes. Same-day quotes available by phone or text.' },
    },
    {
      '@type': 'Question',
      name: 'What does the leaf cleanup service include?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane leaf cleanup includes raking, blowing, collecting, and hauling all leaves completely off the property. Leaves are not just blown to the curb — they are removed and disposed of.' },
    },
    {
      '@type': 'Question',
      name: 'When should I schedule leaf cleanup in NWA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Late October through December is the peak window for leaf cleanup in Northwest Arkansas. Scheduling early in the season helps lock in the best availability.' },
    },
    {
      '@type': 'Question',
      name: 'Can I book multiple leaf cleanups during fall?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Great Dane can schedule multiple cleanup visits throughout the fall season for properties with heavy leaf drop or multiple tree types that shed at different times.' },
    },
    {
      '@type': 'Question',
      name: 'Does Great Dane do leaf cleanup in Fayetteville and Springdale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Great Dane provides leaf cleanup throughout Northwest Arkansas including Fayetteville, Springdale, Rogers, Bentonville, Farmington, and Johnson.' },
    },
    // --- Christmas Lights ---
    {
      '@type': 'Question',
      name: 'How much does Christmas light installation cost in Northwest Arkansas?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane Christmas light installation starts at $499. Pricing varies based on home size, roofline complexity, and whether trees or additional features are included.' },
    },
    {
      '@type': 'Question',
      name: 'Does Great Dane supply Christmas lights?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane installs customer-supplied lights. If you have your own lights, we handle the installation and takedown. Contact us to discuss options for your home.' },
    },
    {
      '@type': 'Question',
      name: 'What does the Christmas light service include?',
      acceptedAnswer: { '@type': 'Answer', text: 'Great Dane handles professional installation and post-season takedown. You enjoy the lights without dealing with ladders, clips, or tangles. Takedown is included in the service.' },
    },
    {
      '@type': 'Question',
      name: 'When should I book Christmas light installation in NWA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Book in October or early November. Holiday installation slots fill quickly across Northwest Arkansas. Early booking gives you the best selection of installation dates.' },
    },
    {
      '@type': 'Question',
      name: 'Does Great Dane take down Christmas lights after the season?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Takedown after the holiday season is included in the Christmas light installation service. Great Dane removes and stores or returns all lights after the holidays.' },
    },
  ],
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
