// ─────────────────────────────────────────────────────────────────────────────
// lib/seo.js
// Centralized SEO metadata for every page.
// Usage in any page file:
//   import { pageMeta } from '@/lib/seo'
//   export const metadata = pageMeta.home   ← swap 'home' for the right key
// ─────────────────────────────────────────────────────────────────────────────

const SITE_NAME = 'Great Dane Outdoor Services'
const PHONE     = '(870) 995-1166'
const BASE_URL  = 'https://www.greatdaneoutdoorservices.com' // ← update once you have a domain

export const pageMeta = {

  home: {
    title: `Pressure Washing, Junk Removal & Landscaping in Fayetteville AR | ${SITE_NAME}`,
    description:
      `${SITE_NAME} — NWA's locally owned pressure washing, junk removal & landscaping company. ` +
      `Serving Fayetteville, Rogers, Bentonville, Springdale & Farmington. Free quotes. ${PHONE}.`,
    keywords: [
      'pressure washing Fayetteville AR',
      'junk removal Fayetteville AR',
      'landscaping Fayetteville AR',
      'outdoor services NWA',
      'pressure washing near me Northwest Arkansas',
      'junk removal near me NWA',
      'Great Dane Outdoor Services',
    ],
    openGraph: {
      title: `${SITE_NAME} | NWA Outdoor Services`,
      description: `Pressure washing, junk removal & landscaping for Northwest Arkansas. Free quotes. ${PHONE}.`,
      url: BASE_URL,
      siteName: SITE_NAME,
      type: 'website',
    },
  },

  about: {
    title: `About Us | ${SITE_NAME} | Fayetteville AR`,
    description:
      `Meet the team behind ${SITE_NAME}. Locally owned and operated in Fayetteville, AR — ` +
      `proudly serving all of Northwest Arkansas with detailed, affordable outdoor services.`,
    keywords: ['about Great Dane Outdoor Services', 'locally owned NWA outdoor company', 'Fayetteville AR home services'],
    openGraph: {
      title: `About ${SITE_NAME}`,
      description: 'Locally owned outdoor services in Fayetteville, AR. Serving all of NWA.',
      url: `${BASE_URL}/about`,
      siteName: SITE_NAME,
      type: 'website',
    },
  },

  services: {
    title: `Pressure Washing, Junk Removal & Landscaping NWA | ${SITE_NAME}`,
    description:
      `Full-service outdoor company serving NWA. Pressure washing, junk removal, landscaping, ` +
      `brush removal, leaf cleanups & Christmas lights in Fayetteville, Rogers, Bentonville, Springdale & more.`,
    keywords: [
      'pressure washing Rogers AR',
      'junk removal Bentonville AR',
      'landscaping Springdale AR',
      'brush removal NWA',
      'leaf cleanup Fayetteville',
      'Christmas lights Fayetteville AR',
    ],
    openGraph: {
      title: `Services | ${SITE_NAME}`,
      description: 'Pressure washing, junk removal, landscaping & more across Northwest Arkansas.',
      url: `${BASE_URL}/services`,
      siteName: SITE_NAME,
      type: 'website',
    },
  },

  gallery: {
    title: `Before & After Gallery | ${SITE_NAME} NWA`,
    description:
      `Browse before and after photos from pressure washing, junk removal, and landscaping jobs ` +
      `across Northwest Arkansas. See the Great Dane difference.`,
    keywords: ['pressure washing before after NWA', 'junk removal results Fayetteville', 'landscaping photos NWA'],
    openGraph: {
      title: `Gallery | ${SITE_NAME}`,
      description: 'Real results from real NWA properties. See our before & after work.',
      url: `${BASE_URL}/gallery`,
      siteName: SITE_NAME,
      type: 'website',
    },
  },

  reviews: {
    title: `Customer Reviews | ${SITE_NAME} Fayetteville AR`,
    description:
      `See what NWA homeowners are saying about ${SITE_NAME}. ` +
      `Serving Fayetteville, Rogers, Bentonville, Springdale, and Farmington, AR.`,
    keywords: ['Great Dane Outdoor Services reviews', 'NWA pressure washing reviews', 'Fayetteville outdoor services reviews'],
    openGraph: {
      title: `Reviews | ${SITE_NAME}`,
      description: 'Customer reviews from across Northwest Arkansas.',
      url: `${BASE_URL}/reviews`,
      siteName: SITE_NAME,
      type: 'website',
    },
  },

  serviceArea: {
    title: `Service Area | NWA Outdoor Services | Fayetteville Rogers Bentonville AR`,
    description:
      `${SITE_NAME} covers all of Northwest Arkansas — Fayetteville, Rogers, Bentonville, ` +
      `Springdale, Farmington & more. Up to 1 hour from Fayetteville. Get a free quote today.`,
    keywords: [
      'outdoor services Fayetteville AR',
      'outdoor services Rogers AR',
      'outdoor services Bentonville AR',
      'NWA service area',
      'pressure washing near me NWA',
    ],
    openGraph: {
      title: `Service Area | ${SITE_NAME}`,
      description: 'We serve all of Northwest Arkansas. Fayetteville, Rogers, Bentonville, Springdale, Farmington & more.',
      url: `${BASE_URL}/service-area`,
      siteName: SITE_NAME,
      type: 'website',
    },
  },

  faq: {
    title: `FAQ | ${SITE_NAME} NWA | Fayetteville AR`,
    description:
      `Common questions about ${SITE_NAME} — pricing, service area, insurance, and how to get a free quote in NWA.`,
    keywords: ['Great Dane Outdoor Services FAQ', 'outdoor services questions NWA', 'free quote Fayetteville AR'],
    openGraph: {
      title: `FAQ | ${SITE_NAME}`,
      description: 'Answers to common questions about our NWA outdoor services.',
      url: `${BASE_URL}/faq`,
      siteName: SITE_NAME,
      type: 'website',
    },
  },

  contact: {
    title: `Get a Free Quote | ${SITE_NAME} | ${PHONE}`,
    description:
      `Request a free, no-obligation quote from ${SITE_NAME}. ` +
      `Serving all of Northwest Arkansas. Call, text, or fill out our quick form — we respond fast.`,
    keywords: ['free quote NWA outdoor services', 'contact Great Dane Outdoor Services', 'pressure washing quote Fayetteville'],
    openGraph: {
      title: `Get a Free Quote | ${SITE_NAME}`,
      description: `Free quotes for NWA outdoor services. Call or text ${PHONE}.`,
      url: `${BASE_URL}/contact`,
      siteName: SITE_NAME,
      type: 'website',
    },
  },
}
