'use client'
import Image from 'next/image'
import { signatureDishes } from '@/data/menu'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function SignatureHighlight() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} style={{
      background: 'linear-gradient(135deg, var(--color-navy-mid) 0%, var(--color-navy) 50%, var(--color-navy-mid) 100%)',
      padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ultra-Premium Smooth Organic Curves (Liquid Gold / Silk Effect) */}
      <svg viewBox="0 0 1440 800" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.35, pointerEvents: 'none' }} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold-silk-sig" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.0" />
            <stop offset="40%" stopColor="var(--color-gold-light)" stopOpacity="0.8" />
            <stop offset="60%" stopColor="var(--color-gold)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-gold-muted)" stopOpacity="0.0" />
          </linearGradient>
          <filter id="soft-glow-sig" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g fill="none" stroke="url(#gold-silk-sig)" filter="url(#soft-glow-sig)">
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

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="ornament" style={{ marginBottom: '20px' }}>
            <span className="eyebrow">Biryani Express Specials</span>
          </div>
          <h2 className="heading-section" style={{ color: 'var(--color-ivory)', maxWidth: '540px', margin: '0 auto' }}>
            Dishes That{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Define Us</em>
          </h2>
        </div>

        {/* Cards grid — no scroll on desktop, snap-scroll on mobile */}
        <div className="sig-cards-grid">
          {signatureDishes.map((dish, i) => (
            <div
              key={dish.name}
              className="sig-card-item"
              data-animate="fade-up"
              data-delay={String(i * 100)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(198,168,124,0.20)',
                borderRadius: '4px',
                overflow: 'hidden',
                height: '100%',
                transition: 'border-color 300ms, box-shadow 300ms, transform 300ms',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(198,168,124,0.55)'
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(198,168,124,0.25)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(198,168,124,0.20)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--color-charcoal-mid)' }}>
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 80vw, 320px"
                    style={{ objectFit: 'cover', opacity: 0.88, transition: 'opacity 300ms' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,50,52,0.88) 0%, transparent 55%)' }} />
                  {/* Veg/non-veg dot */}
                  <div style={{ position: 'absolute', top: '12px', right: '12px', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(32,36,38,0.78)', backdropFilter: 'blur(6px)', borderRadius: '50%' }}>
                    <span className={dish.isVeg ? 'dot-veg' : 'dot-nonveg'} style={{ width: '10px', height: '10px', margin: 0, display: 'block' }} />
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: '22px 24px 26px' }}>
                  <h3 className="heading-card" style={{ color: 'var(--color-ivory)', marginBottom: '8px' }}>{dish.name}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ivory-muted)', lineHeight: 1.65 }}>{dish.description}</p>
                  {/* Gold underline accent */}
                  <div style={{ width: '32px', height: '1px', background: 'linear-gradient(to right, var(--color-gold), transparent)', marginTop: '16px' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
