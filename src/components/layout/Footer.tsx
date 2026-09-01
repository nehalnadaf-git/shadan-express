'use client'
import Link from 'next/link'
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

const quickLinks = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about' },
  { label: 'Our Menu',    href: '/menu' },
  { label: 'Gallery',     href: '/gallery' },
  { label: 'Reviews',     href: '/reviews' },
  { label: 'FAQ',         href: '/faq' },
  { label: 'Contact',     href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-linen)', color: 'var(--color-navy)', position: 'relative', overflow: 'hidden' }}>

      {/* Top brass border */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.6), transparent)' }} />

      {/* Ambient teal glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '70%', height: '60%', background: 'radial-gradient(ellipse at top, rgba(0,0,0,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '88px 48px 52px', position: 'relative', zIndex: 1 }}>

        {/* ── 2-column layout ── */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr',
          gap: '80px',
          alignItems: 'start',
          marginBottom: '72px',
        }}>

          {/* ── Col 1: Brand ── */}
          <div>
            {/* Logo image */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '24px' }}>
              <img src="/logo.png" alt="Biryani Express Logo" className="footer-logo" style={{ width: 'auto', objectFit: 'contain' }} />
            </div>

            {/* Gold rule */}
            <div style={{ width: '52px', height: '1px', background: 'var(--color-gold)', opacity: 0.45, marginBottom: '26px' }} />

            {/* Tagline */}
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-ink-muted)', lineHeight: 1.9, marginBottom: '36px', maxWidth: '460px' }}>
              Shadan's Biryani Express — serving authentic Hyderabadi-style chicken biryani, Indian-Chinese starters, and quick rolls at honest prices. Open daily 12–4:30 PM & 6:30–11 PM in Vidya Nagar, Hubli.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <MapPin size={15} style={{ color: 'var(--color-copper)', flexShrink: 0, marginTop: '3px', opacity: 0.85 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ink-muted)', lineHeight: 1.7 }}>
                  {restaurant.addressFull}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Phone size={15} style={{ color: 'var(--color-copper)', flexShrink: 0, opacity: 0.85 }} />
                <a href={restaurant.phoneHref}
                  style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-copper)', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.5px', transition: 'opacity 200ms' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                >
                  {restaurant.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Clock size={15} style={{ color: 'var(--color-copper)', flexShrink: 0, opacity: 0.85 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ink-muted)' }}>
                  {restaurant.hours}
                </span>
              </div>
            </div>

            {/* Footer CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
              <a 
                href={restaurant.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px', background: 'var(--color-copper)', border: '1px solid var(--color-copper)', borderRadius: '2px', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-ivory)', textDecoration: 'none', transition: 'all 250ms ease' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(0,0,0,0.05)'; el.style.color = 'var(--color-copper)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--color-copper)'; el.style.color = 'var(--color-ivory)' }}
              >
                <MessageCircle size={14} /> whatsapp
              </a>

              <a href={restaurant.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '2px', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-navy)', textDecoration: 'none', transition: 'all 250ms ease' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(0,0,0,0.05)'; el.style.borderColor = 'rgba(0,0,0,0.3)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.borderColor = 'rgba(0,0,0,0.15)' }}
              >
                <Navigation size={13} /> Get Directions
              </a>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '10px', letterSpacing: '0.5px' }}>
              Quick Links
            </h3>
            <div style={{ width: '36px', height: '1px', background: 'var(--color-copper)', opacity: 0.5, marginBottom: '28px' }} />
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {quickLinks.map(l => (
                <Link key={l.href} href={l.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'var(--color-ink-muted)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'color 200ms, gap 200ms',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--color-copper)'; el.style.gap = '16px' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--color-ink-muted)'; el.style.gap = '12px' }}
                >
                  <span style={{ width: '5px', height: '1px', background: 'rgba(0,0,0,0.2)', display: 'block', flexShrink: 0, transition: 'width 200ms' }} />
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(0,0,0,0.4)', letterSpacing: '0.3px' }}>
            © 2026 Shadan's Biryani Express — Real Biryani. Real Taste., Hubli. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(0,0,0,0.4)', letterSpacing: '0.3px' }}>
            Kusugal Road, Chalukya Nagar, Hubli — 580023
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        .footer-logo { height: 192px; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer-logo { height: 96px; }
        }
      `}</style>
    </footer>
  )
}
