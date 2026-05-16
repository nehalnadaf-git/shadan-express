import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About Us | Empire Family Restaurant Hubballi — Our Story & Brand',
  description: 'Discover Empire Family Restaurant — a modern family dining destination in Hubballi near Railway Station, serving North Indian, Mughlai, Chinese, Biryani, Mandi, Tandoori & Kabab cuisine with warm hospitality.',
  alternates: { canonical: 'https://empirefamilyrestaurant.in/about' },
}

export default function AboutPage() {
  return <AboutPageClient />
}
