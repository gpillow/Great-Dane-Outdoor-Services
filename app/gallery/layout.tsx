import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Before & After Gallery | Great Dane Junk & Brush Removal NWA',
  description: 'Before & after photos from junk removal, pressure washing & brush clearing jobs in Fayetteville, AR. Free quotes available. (479) 391-4462.',
  alternates: { canonical: 'https://www.greatdaneoutdoorservices.com/gallery' },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
