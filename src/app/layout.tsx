import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BookingModalProvider } from '@/contexts/BookingModalContext'
import { BulkOrderModalProvider } from '@/contexts/BulkOrderModalContext'
import BookingModal from '@/components/booking/BookingModal'
import BulkOrderModal from '@/components/booking/BulkOrderModal'
import { restaurant } from '@/data/restaurant'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#1A1F21',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://biryaniexpresshubli.in'),
  applicationName: "Shadan's Biryani Express",
  title: { default: "Shadan's Biryani Express Hubli | Authentic Hyderabadi Chicken Biryani", template: "%s | Shadan's Biryani Express Hubli" },
  description: "Shadan's Biryani Express in Hubli — authentic Hyderabadi-style chicken biryani, Indian-Chinese starters, rolls, and mains. Dine-in, takeaway & delivery via Swiggy & Zomato. Open daily 12–4:30 PM & 6:30–11 PM.",
  keywords: [
    "Shadan's Biryani Express", 'Biryani Express Hubli', 'best biryani Hubli',
    'chicken biryani Hubli', 'Hyderabadi biryani Hubli', 'biryani near me Hubli',
    'Vidya Nagar restaurant Hubli', 'Shadan biryani', 'chicken kabab Hubli',
    'chicken 65 Hubli', 'rolls Hubli', 'Indian Chinese Hubli',
    'biryani delivery Hubli', 'Zomato Hubli biryani', 'Swiggy biryani Hubli',
    'Samarth PU College restaurant', 'Chalukya Nagar food Hubli',
    'family restaurant Hubli', 'casual dining Hubli', 'affordable biryani Hubli',
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Biryani Express',
  },
  formatDetection: { telephone: false },
  openGraph: {
    siteName: "Shadan's Biryani Express",
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/restaurant/2.webp', width: 1200, height: 630, alt: "Shadan's Biryani Express Hubli — Authentic Hyderabadi Chicken Biryani" }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "Shadan's Biryani Express",
  description: 'Popular local biryani chain in Hubli serving authentic Hyderabadi-style chicken biryani, Indian-Chinese starters, rolls and mains. Fresh, hygienic food at honest prices.',
  telephone: '+919035167777',
  url: 'https://biryaniexpresshubli.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suhail Complex, Opposite Samarth PU College, Shirur Park, Vidya Nagar',
    addressLocality: 'Hubli',
    addressRegion: 'Karnataka',
    postalCode: '580021',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 15.3730, longitude: 75.1350 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '12:00',
      closes: '16:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '18:30',
      closes: '23:00',
    },
  ],
  servesCuisine: ['Hyderabadi Biryani', 'Indian-Chinese', 'Chicken Starters', 'Rolls', 'Mains'],
  priceRange: '₹',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.1', reviewCount: '16' },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Dine-In', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Takeaway', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Delivery', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Family Dining', value: true },
  ],
  hasMenu: 'https://biryaniexpresshubli.in/menu',
  image: 'https://biryaniexpresshubli.in/images/restaurant/2.webp',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Biryani Express" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <BulkOrderModalProvider>
          <BookingModalProvider>
            <Header />
            <main>{children}</main>
            <Footer />

            <BookingModal />
            <BulkOrderModal />
          </BookingModalProvider>
        </BulkOrderModalProvider>
      </body>
    </html>
  )
}
