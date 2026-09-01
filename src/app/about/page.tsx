import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: "About Us | Shadan's Biryani Express Hubli — Our Story",
  description: "Discover Shadan's Biryani Express — Hubli's popular local biryani chain in Vidya Nagar, serving authentic Hyderabadi chicken biryani, Indian-Chinese starters, and rolls at honest prices.",
  alternates: { canonical: 'https://biryaniexpresshubli.in/about' },
}

export default function AboutPage() {
  return <AboutPageClient />
}
