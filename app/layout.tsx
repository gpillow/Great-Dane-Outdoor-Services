import React from 'react'
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
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
  description: "Locally owned outdoor services in Northwest Arkansas. Pressure washing, junk removal, landscaping, brush removal & more. Fayetteville, Rogers, Bentonville, Springdale & surrounding NWA. Free quotes. (870) 995-1166.",
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
        <SchemaMarkup />
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
