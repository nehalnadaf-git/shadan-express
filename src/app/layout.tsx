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
  metadataBase: new URL('https://empirefamilyrestaurant.in'),
  applicationName: 'Empire Family Restaurant',
  title: { default: 'Empire Family Restaurant Hubballi | Biryani, Mandi, Kabab & Family Dining', template: '%s | Empire Family Restaurant Hubballi' },
  description: 'Empire Family Restaurant in Hubballi — a modern family dining destination near Railway Station offering North Indian, Mughlai, Chinese, Dum Biryanis, Mandi Specials, Tandoori & Kabab platters. Open daily 11 AM–11 PM.',
  keywords: [
    'Empire Family Restaurant', 'Hubballi restaurant', 'family restaurant Hubli',
    'best biryani Hubballi', 'Chicken Dum Biryani Hubballi', 'Mutton Biryani Hubballi',
    'Mandi Hubballi', 'Chicken Mandi Hubballi', 'Tandoori Chicken Hubballi',
    'Mughlai restaurant Hubballi', 'North Indian restaurant Hubballi',
    'Chinese food Hubballi', 'Kabab restaurant Hubballi', 'Nihari Hubballi',
    'Railway Station Road restaurant Hubli', 'J C Nagar restaurant Hubballi',
    'family dining Hubballi', 'dine-in restaurant Hubli', 'Paneer Tikka Hubballi',
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Empire',
  },
  formatDetection: { telephone: false },
  openGraph: {
    siteName: 'Empire Family Restaurant',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/restaurant/2new.webp', width: 1200, height: 630, alt: 'Empire Family Restaurant Hubballi — Family Dining, Biryani & Mandi' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Empire Family Restaurant',
  description: 'Modern family dining restaurant in Hubballi offering North Indian, Mughlai, Chinese, Biryani, Mandi, Tandoori and Kabab cuisine. Family-friendly ambiance with hygienic food preparation.',
  telephone: '+919986600860',
  url: 'https://empirefamilyrestaurant.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, Shringar Palace, Opposite Railway Station Road, J C Nagar, New Hubli',
    addressLocality: 'Hubballi',
    addressRegion: 'Karnataka',
    postalCode: '580020',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 15.3647, longitude: 75.1240 },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '11:00',
    closes: '23:00',
  }],
  servesCuisine: ['North Indian', 'Mughlai', 'Chinese', 'Biryani', 'Mandi', 'Tandoori', 'Kabab', 'Indo-Chinese', 'Family Dining'],
  priceRange: '₹₹',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '3.8', reviewCount: '33' },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Family Dining', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Dine-In', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Takeaway', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Group Dining', value: true },
  ],
  hasMenu: 'https://empirefamilyrestaurant.in/menu',
  image: 'https://empirefamilyrestaurant.in/images/restaurant/2new.webp',
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
        <meta name="apple-mobile-web-app-title" content="Empire" />
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
