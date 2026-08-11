import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Great Dane Junk & Brush Removal | Fayetteville AR',
  description: 'Locally owned junk removal & outdoor services in Fayetteville, AR. Meet the Great Dane crew. Free quotes on every job. (479) 391-4462.',
  alternates: { canonical: 'https://www.greatdaneoutdoorservices.com/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
