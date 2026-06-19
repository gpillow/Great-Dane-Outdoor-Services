import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Great Dane Outdoor Services',
  description: 'Common questions about Great Dane Outdoor Services — free quotes, service areas, pricing, and more. Serving all of Northwest Arkansas.',
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
