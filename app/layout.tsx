import React from 'react'
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import SchemaMarkup from '@/components/SchemaMarkup'

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Great Dane Outdoor Services | NWA Pressure Washing, Junk Removal & Landscaping",
    template: "%s | Great Dane Outdoor Services",
  },
  description:
    "NWA's locally owned outdoor services company. Pressure washing, junk removal, and landscaping in Fayetteville, Rogers, Bentonville, Springdale & Farmington, AR. Free quotes. (870) 995-1166.",
  metadataBase: new URL("https://www.greatdaneoutdoorservices.com"),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        <nav style={{ backgroundColor: '#111', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.2rem' }}>Great Dane Outdoor Services</a>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/services" style={{ color: '#ccc', textDecoration: 'none' }}>Services</a>
            <a href="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About</a>
            <a href="/gallery" style={{ color: '#ccc', textDecoration: 'none' }}>Gallery</a>
            <a href="/reviews" style={{ color: '#ccc', textDecoration: 'none' }}>Reviews</a>
            <a href="/faq" style={{ color: '#ccc', textDecoration: 'none' }}>FAQ</a>
            <a href="/contact" style={{ backgroundColor: '#E07B39', color: '#fff', padding: '0.4rem 1rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>Get a Free Quote</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}