import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Great Dane Outdoor Services | Fayetteville AR',
  description: 'Meet the team behind Great Dane Outdoor Services. Locally owned and operated in Fayetteville, AR — proudly serving all of Northwest Arkansas.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
