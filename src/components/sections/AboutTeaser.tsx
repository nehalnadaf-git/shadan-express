'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AboutTeaser() {
  const sectionRef = useScrollAnimation()

  return (
    <section
      ref={sectionRef}
      id="about-teaser"
      style={{
        background: 'linear-gradient(135deg, var(--color-navy-mid) 0%, var(--color-navy) 50%, var(--color-navy-mid) 100%)',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* Ultra-Premium Smooth Organic Curves (Liquid Gold / Silk Effect) */}
      <svg viewBox="0 0 1440 800" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.35, pointerEvents: 'none' }} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold-silk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.0" />
            <stop offset="40%" stopColor="var(--color-gold-light)" stopOpacity="0.8" />
            <stop offset="60%" stopColor="var(--color-gold)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-gold-muted)" stopOpacity="0.0" />
          </linearGradient>
          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g fill="none" stroke="url(#gold-silk)" filter="url(#soft-glow)">
          {/* Top flowing silk ribbon */}
          <path d="M-100,150 C400,0 700,500 1540,100" strokeWidth="0.5" />
          <path d="M-100,180 C420,40 720,460 1540,140" strokeWidth="1" />
          <path d="M-100,210 C440,80 740,420 1540,180" strokeWidth="2.5" />
          <path d="M-100,240 C460,120 760,380 1540,220" strokeWidth="1" />
          <path d="M-100,270 C480,160 780,340 1540,260" strokeWidth="0.5" />

          {/* Bottom sweeping wave */}
          <path d="M-100,600 C300,900 900,400 1540,750" strokeWidth="0.5" />
          <path d="M-100,630 C320,860 920,440 1540,770" strokeWidth="1" />
          <path d="M-100,660 C340,820 940,480 1540,790" strokeWidth="3" />
          <path d="M-100,690 C360,780 960,520 1540,810" strokeWidth="1" />
          <path d="M-100,720 C380,740 980,560 1540,830" strokeWidth="0.5" />
          
          {/* Elegant intersecting structural curves */}
          <path d="M500,-100 C800,200 1000,500 1300,900" strokeWidth="1.5" opacity="0.6" />
          <path d="M540,-100 C840,200 1040,500 1340,900" strokeWidth="0.5" opacity="0.4" />
        </g>
      </svg>

      {/* Heavy Cinematic Ambient Light Overlays (Refined) */}
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '60%', height: '80%', background: 'radial-gradient(ellipse, rgba(198,168,124,0.06) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', mixBlendMode: 'screen' }} />
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '70%', background: 'radial-gradient(ellipse, rgba(217,99,31,0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', mixBlendMode: 'screen' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <div data-animate="fade-up" className="about-header-region" style={{ marginBottom: '64px' }}>
          <div className="ornament" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
            <span className="eyebrow">Our Story</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          {/* Left: Text */}
          <div data-animate="fade-right">
            <h2 className="heading-section" style={{ color: 'var(--color-ivory)', marginBottom: '28px', maxWidth: '500px' }}>
              A Local Hubli Favourite —{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Real Biryani</em>{' '}
              Every Day
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--color-ivory-muted)', lineHeight: 1.85, marginBottom: '36px' }}>
              Located in Vidya Nagar, Hubli, Shadan's Biryani Express blends authentic Hyderabadi biryani with freshly made Indian-Chinese starters and rolls. A casual, clean, and family-friendly spot where fresh food, honest prices, and quick service come together every single day.
            </p>

            {/* Stats row */}
            <div className="about-stats-row" style={{ display: 'flex', gap: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
              {[
                { num: '4.1★', label: 'Zomato Rating' },
                { num: '4.5★', label: 'Google Rating' },
                { num: 'Fresh', label: 'Made Daily' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-ivory-muted)', letterSpacing: '1.5px', marginTop: '6px', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-secondary">
              Read Our Story →
            </Link>
          </div>

          {/* Right: Photo */}
          <div data-animate="fade-left" data-delay="150">
            <div style={{
              position: 'relative',
              aspectRatio: '4/5',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(198,168,124,0.18)',
            }}>
              <Image
                src="/images/restaurant/our-story.png"
                alt="Shadan's Biryani Express — Our Story"
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                style={{ objectFit: 'cover' }}
              />
              {/* Warm gold tint overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(198,168,124,0.05) 0%, transparent 40%, transparent 60%, rgba(198,168,124,0.03) 100%)', pointerEvents: 'none' }} />
              {/* Serving tag — glassmorphism */}
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px',
                background: 'rgba(26, 31, 33, 0.90)', // Dark ink background for contrast
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(198,168,124,0.35)', // Subtle brass border
                borderRadius: '8px',
                padding: '14px 24px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                overflow: 'hidden',
              }}>
                {/* Inner top-edge shimmer line */}
                <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.6), transparent)', pointerEvents: 'none' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '17px', color: 'var(--color-ivory)', fontWeight: 600 }}>Serving Hubli</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-gold)', letterSpacing: '2.5px', textTransform: 'uppercase', marginTop: '5px', fontWeight: 700 }}>With Pride &amp; Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          #about-teaser { padding: 48px 24px !important; }
          .about-header-region { margin-bottom: 24px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-photo { aspect-ratio: 3/2 !important; }
          .about-eyebrow-row { margin-bottom: 32px !important; }
        }
      `}</style>
    </section>
  )
}
