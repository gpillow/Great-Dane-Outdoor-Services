import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Great Dane Junk & Brush Removal | Fayetteville AR',
  description: 'Meet the team behind Great Dane Junk & Brush Removal. Locally owned and operated in Fayetteville, AR — proudly serving all of Northwest Arkansas.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
