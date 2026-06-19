import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing, Junk Removal & Landscaping NWA',
  description:
    'Full-service outdoor company serving NWA. Pressure washing, junk removal, landscaping, brush removal, leaf cleanups & Christmas lights in Fayetteville, Rogers, Bentonville, Springdale & more.',
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
