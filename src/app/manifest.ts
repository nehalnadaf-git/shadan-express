import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shadan's Biryani Express",
    short_name: 'Biryani Express',
    description: "Shadan's Biryani Express — Real Biryani. Real Taste. Authentic Hyderabadi chicken biryani, starters & rolls in Hubli.",
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#1A1F21',
    background_color: '#1A1F21',
    categories: ['food', 'restaurant', 'lifestyle'],
    lang: 'en-IN',
    dir: 'ltr',
    icons: [
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'View Menu',
        short_name: 'Menu',
        description: 'Browse our full menu',
        url: '/menu',
        icons: [{ src: '/favicon-96x96.png', sizes: '96x96' }],
      },
      {
        name: 'Book a Table',
        short_name: 'Book',
        description: 'Reserve your table via WhatsApp',
        url: '/?book=1',
        icons: [{ src: '/favicon-96x96.png', sizes: '96x96' }],
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch with us',
        url: '/contact',
        icons: [{ src: '/favicon-96x96.png', sizes: '96x96' }],
      },
    ],
  }
}
