import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: "Gallery | Shadan's Biryani Express Hubli — Restaurant & Food Photos",
  description: "Photos of Shadan's Biryani Express — our dining area, food, ambience and outlets in Hubli.",
  alternates: { canonical: 'https://biryaniexpresshubli.in/gallery' },
}

export default function GalleryPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ background: 'var(--color-navy)', padding: 'clamp(56px,7vw,100px) clamp(24px,5vw,80px)', textAlign: 'center' }}>
        <p className="eyebrow" style={{ marginBottom: '16px' }}>A Feast for the Eyes</p>
        <h1 className="heading-hero" style={{ fontSize: 'clamp(40px,7vw,72px)', color: 'var(--color-ivory)' }}>Our Gallery</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--color-ivory-muted)', marginTop: '16px', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
          Step inside Biryani Express — from our warm dining area to sizzling Hyderabadi specialties
        </p>
      </section>

      {/* Gallery */}
      <section style={{ background: 'var(--color-ivory)', padding: 'clamp(56px,7vw,100px) clamp(24px,5vw,80px)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <GalleryClient />
        </div>
      </section>
    </div>
  )
}
