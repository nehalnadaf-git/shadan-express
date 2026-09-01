'use client'
import Image from 'next/image'
import { restaurant } from '@/data/restaurant'
import { MessageCircle, Phone, Package, Star } from 'lucide-react'
import { useBulkOrderModal } from '@/contexts/BulkOrderModalContext'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

/* ── Bulk menu items ─────────────────────────────────────── */
const bulkMenu = [
  {
    category: 'Biryani — Basmati Rice',
    items: [
      { name: 'Beef Biryani',         price: '₹800 / kg' },
      { name: 'Chicken Biryani',      price: '₹900 / kg' },
      { name: 'Mutton Biryani',       price: '₹1,600 / kg' },
      { name: 'Veg Biryani',          price: '₹650 / kg' },
      { name: 'Khushka (Plain Rice)', price: '₹500 / kg' },
    ],
  },
  {
    category: 'Biryani — Jeera Rice',
    items: [
      { name: 'Beef Biryani',         price: '₹750 / kg' },
      { name: 'Chicken Biryani',      price: '₹850 / kg' },
      { name: 'Mutton Biryani',       price: '₹1,550 / kg' },
      { name: 'Khushka (Plain Rice)', price: '₹470 / kg' },
    ],
  },
  {
    category: 'Gravies & Kababs',
    items: [
      { name: 'Beef Gravy',           price: '₹800 / kg' },
      { name: 'Chicken Gravy',        price: '₹950 / kg' },
      { name: 'Chicken Fried Kabab',  price: '₹600 / kg' },
    ],
  },
]

export default function BulkOrdersSection() {
  const sectionRef = useScrollAnimation()
  const { openModal } = useBulkOrderModal()

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, var(--color-navy-mid) 0%, var(--color-navy) 50%, var(--color-navy-mid) 100%)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ultra-Premium Smooth Organic Curves (Liquid Gold / Silk Effect) */}
      <svg viewBox="0 0 1440 800" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.35, pointerEvents: 'none' }} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold-silk-bulk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.0" />
            <stop offset="40%" stopColor="var(--color-gold-light)" stopOpacity="0.8" />
            <stop offset="60%" stopColor="var(--color-gold)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-gold-muted)" stopOpacity="0.0" />
          </linearGradient>
          <filter id="soft-glow-bulk" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g fill="none" stroke="url(#gold-silk-bulk)" filter="url(#soft-glow-bulk)">
          <path d="M-100,150 C400,0 700,500 1540,100" strokeWidth="0.5" />
          <path d="M-100,180 C420,40 720,460 1540,140" strokeWidth="1" />
          <path d="M-100,210 C440,80 740,420 1540,180" strokeWidth="2.5" />
          <path d="M-100,240 C460,120 760,380 1540,220" strokeWidth="1" />
          <path d="M-100,270 C480,160 780,340 1540,260" strokeWidth="0.5" />

          <path d="M-100,600 C300,900 900,400 1540,750" strokeWidth="0.5" />
          <path d="M-100,630 C320,860 920,440 1540,770" strokeWidth="1" />
          <path d="M-100,660 C340,820 940,480 1540,790" strokeWidth="3" />
          <path d="M-100,690 C360,780 960,520 1540,810" strokeWidth="1" />
          <path d="M-100,720 C380,740 980,560 1540,830" strokeWidth="0.5" />
          
          <path d="M500,-100 C800,200 1000,500 1300,900" strokeWidth="1.5" opacity="0.6" />
          <path d="M540,-100 C840,200 1040,500 1340,900" strokeWidth="0.5" opacity="0.4" />
        </g>
      </svg>

      {/* Heavy Cinematic Ambient Light Overlays */}
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '60%', height: '80%', background: 'radial-gradient(ellipse, rgba(198,168,124,0.06) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', mixBlendMode: 'screen' }} />
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '70%', background: 'radial-gradient(ellipse, rgba(217,99,31,0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', mixBlendMode: 'screen' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ════ HEADER ════ */}
        <div data-animate="blur-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="ornament" style={{ marginBottom: '20px' }}>
            <span className="eyebrow">Catering & Bulk Orders</span>
          </div>
          <h2 className="heading-section" style={{ color: 'var(--color-ivory)', maxWidth: '760px', margin: '0 auto 18px' }}>
            Need Food for a Big Event?{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Leave the Biryani to Us.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--color-ivory-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.85 }}>
            From family dawats to office lunches and large group events — Shadan's Biryani Express delivers fresh, authentic biryani and starters right to your venue in Hubli.
          </p>
        </div>

        {/* ════ MAIN GRID ════ */}
        <div
          className="bulk-main-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px', alignItems: 'start' }}
        >
          {/* ── Left: Photo banner + Pricing table ── */}
          <div data-animate="fade-right">
            {/* Photo banner */}
            <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', marginBottom: '24px', aspectRatio: '21/8' }}>
              <Image
                src="/images/food/118-biryani-feast.webp"
                alt="Shadan's Biryani Express Bulk Catering — Hubli"
                fill
                sizes="(max-width:900px) 100vw, 750px"
                style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(45,50,52,0.78) 0%, rgba(45,50,52,0.2) 65%, transparent 100%)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Package size={16} color="var(--color-gold)" strokeWidth={1.5} />
                  <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Bulk Pricing</span>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--color-ivory)', fontWeight: 600, lineHeight: 1.25 }}>
                  Priced per kilogram.<br />Minimum order: 5 kg · No advance required.
                </p>
              </div>
            </div>

            {/* Pricing categories */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {bulkMenu.map((cat) => (
                <div key={cat.category} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(198,168,124,0.2)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                }}>
                  {/* Category header */}
                  <div style={{
                    background: 'rgba(198,168,124,0.1)',
                    borderBottom: '1px solid rgba(198,168,124,0.15)',
                    padding: '11px 20px',
                    display: 'flex', alignItems: 'center', gap: '10px',
                  }}>
                    <Star size={12} color="var(--color-gold)" strokeWidth={2} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
                      {cat.category}
                    </span>
                  </div>
                  {/* Items */}
                  {cat.items.map((item, ii) => (
                    <div key={item.name} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '13px 20px',
                      borderBottom: ii < cat.items.length - 1 ? '1px solid rgba(198,168,124,0.07)' : 'none',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0, opacity: 0.55 }} />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ivory-2)', fontWeight: 400 }}>
                          {item.name}
                        </span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-gold-light)', fontWeight: 700, flexShrink: 0 }}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
              {/* Footnote */}
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-ivory-muted)', opacity: 0.55, lineHeight: 1.6, paddingLeft: '4px' }}>
                Prices per kg · Min. 5 kg per item · Subject to change · Inclusive of taxes
              </p>
            </div>
          </div>

          {/* ── Right: CTA Panel (sticky) ── */}
          <div data-animate="fade-left" data-delay="200" style={{ position: 'sticky', top: '96px' }}>
            <div style={{
              background: 'linear-gradient(145deg, rgba(198,168,124,0.13) 0%, rgba(198,168,124,0.05) 100%)',
              border: '1px solid rgba(198,168,124,0.38)',
              borderRadius: '10px',
              padding: '36px 28px',
              textAlign: 'center',
            }}>
              {/* Icon halo */}
              <div style={{
                width: '58px', height: '58px', borderRadius: '50%',
                background: 'rgba(198,168,124,0.15)',
                border: '1px solid rgba(198,168,124,0.32)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 22px',
                boxShadow: '0 0 28px rgba(198,168,124,0.12)',
              }}>
                <Package size={24} color="var(--color-gold-light)" strokeWidth={1.4} />
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '24px', color: 'var(--color-ivory)', fontWeight: 600, marginBottom: '12px', lineHeight: 1.2 }}>
                Ready to Order?
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-ivory-muted)', lineHeight: 1.75, marginBottom: '28px' }}>
                WhatsApp us your event date, guest count & preferred menu — we'll send a personalised quote within the hour.
              </p>

              {/* Gold divider */}
              <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.3), transparent)', marginBottom: '28px' }} />

              {/* Primary CTA */}
              <button
                onClick={openModal}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '11px', marginBottom: '12px', border: 'none', cursor: 'pointer' }}
              >
                <MessageCircle size={16} />
                Book a Bulk Order
              </button>

              {/* Secondary — phone */}
              <a
                href={restaurant.phoneHref}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '11px' }}
              >
                <Phone size={14} strokeWidth={1.5} />
                {restaurant.phone}
              </a>

              {/* Badges row */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
                {['50–5000+ Guests', 'Doorstep Delivery', 'Fresh Daily'].map(b => (
                  <span key={b} style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 600, color: 'rgba(168,160,152,0.65)', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-gold)', opacity: 0.6 }} />
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          .bulk-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
