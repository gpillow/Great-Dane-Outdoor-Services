import React from 'react'
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import SchemaMarkup from '@/components/SchemaMarkup'
import Navbar from '@/components/Navbar'
import SiteFooter from '@/components/SiteFooter'

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Great Dane Outdoor Services | NWA Pressure Washing, Junk Removal & Landscaping",
    template: "%s | Great Dane Outdoor Services",
  },
  description: "Locally owned outdoor services in Northwest Arkansas. Pressure washing, junk removal, landscaping, brush removal & more. Fayetteville, Springdale, Rogers, Bentonville, Farmington & Johnson. Free quotes. (479) 391-4462.",
  metadataBase: new URL("https://www.greatdaneoutdoorservices.com"),
  alternates: { canonical: "https://www.greatdaneoutdoorservices.com" },
  openGraph: {
    type: "website",
    siteName: "Great Dane Outdoor Services",
    title: "Great Dane Outdoor Services | NWA Outdoor Services",
    description: "Locally owned outdoor services in Northwest Arkansas. Pressure washing, junk removal, landscaping, brush removal & more. Free quotes. (479) 391-4462.",
    url: "https://www.greatdaneoutdoorservices.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Dane Outdoor Services | NWA Pressure Washing, Junk Removal & Landscaping",
    description: "Locally owned outdoor services in Northwest Arkansas. Free quotes. (479) 391-4462.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18245231091" strategy="lazyOnload" />
        <Script id="google-ads-tag" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18245231091');
        `}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1514854283715942');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1514854283715942&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <SchemaMarkup />
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
