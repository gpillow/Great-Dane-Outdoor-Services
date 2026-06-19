import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Before & After Gallery | Great Dane Outdoor Services NWA',
  description: 'Browse before and after photos from pressure washing, landscaping, and brush removal jobs across Northwest Arkansas.',
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
