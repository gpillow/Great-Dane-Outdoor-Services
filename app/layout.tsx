import React from 'react'
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import SchemaMarkup from '@/components/SchemaMarkup'
import Navbar from '@/components/Navbar'
import SiteFooter from '@/components/SiteFooter'

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Great Dane Outdoor Services | NWA Pressure Washing, Junk Removal & Landscaping",
    template: "%s | Great Dane Outdoor Services",
  },
  description: "Locally owned outdoor services in Northwest Arkansas. Pressure washing, junk removal, landscaping, brush removal & more. Fayetteville, Springdale, Rogers, Bentonville, Farmington & Johnson. Free quotes. (870) 995-1166.",
  metadataBase: new URL("https://www.greatdaneoutdoorservices.com"),
  alternates: { canonical: "https://www.greatdaneoutdoorservices.com" },
  openGraph: {
    type: "website",
    siteName: "Great Dane Outdoor Services",
    title: "Great Dane Outdoor Services | NWA Outdoor Services",
    description: "Locally owned outdoor services in Northwest Arkansas. Pressure washing, junk removal, landscaping, brush removal & more. Free quotes. (870) 995-1166.",
    url: "https://www.greatdaneoutdoorservices.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Dane Outdoor Services | NWA Pressure Washing, Junk Removal & Landscaping",
    description: "Locally owned outdoor services in Northwest Arkansas. Free quotes. (870) 995-1166.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18245231091" strategy="afterInteractive" />
        <Script id="google-ads-tag" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18245231091');
        `}</Script>
        <SchemaMarkup />
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
