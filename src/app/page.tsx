import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import AboutTeaser from '@/components/sections/AboutTeaser'
import MenuPreview from '@/components/sections/MenuPreview'
import SignatureHighlight from '@/components/sections/SignatureHighlight'
import ReservationsTeaser from '@/components/sections/ReservationsTeaser'
import BulkOrdersSection from '@/components/sections/BulkOrdersSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import USPBar from '@/components/sections/USPBar'

export const metadata: Metadata = {
  title: "Shadan's Biryani Express Hubli | Authentic Hyderabadi Chicken Biryani",
  description: "Shadan's Biryani Express in Hubli — authentic Hyderabadi chicken biryani, Indian-Chinese starters, rolls and mains. Dine-in, takeaway & delivery on Swiggy & Zomato. Open daily 12–4:30 PM & 6:30–11 PM, Vidya Nagar, Hubli.",
  alternates: { canonical: 'https://biryaniexpresshubli.in' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <MenuPreview />
      <SignatureHighlight />
      <ReservationsTeaser />
      <BulkOrdersSection />
      <ReviewsSection />
      <USPBar />
    </>
  )
}
