'use client'
import { useEffect, useRef } from 'react'
import { restaurant } from '@/data/restaurant'
import { MessageCircle, Cake, Users, Briefcase } from 'lucide-react'

const occasions = [
  {
    Icon: Cake,
    title: 'Parties & Milestones',
    desc: 'Mark your special day with fresh biryani and starters from Shadan’s. We cater for birthday parties, anniversaries, and milestone celebrations.',
  },
  {
    Icon: Users,
    title: 'Family Celebrations',
    desc: 'Family gatherings are best served with great food. Our bulk catering ensures authentic Hyderabadi flavours reach your celebration, freshly made.',
  },
  {
    Icon: Briefcase,
    title: 'Office & Corporate Lunches',
    desc: 'Treat your team to a satisfying, affordable spread. Biryani Express offers reliable bulk orders for corporate lunches and office events in Hubli.',
  },
]

export default function SpecialOccasionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view') } }),
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    )
    sectionRef.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

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
          <linearGradient id="gold-silk-occ" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.0" />
            <stop offset="40%" stopColor="var(--color-gold-light)" stopOpacity="0.8" />
            <stop offset="60%" stopColor="var(--color-gold)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-gold-muted)" stopOpacity="0.0" />
          </linearGradient>
          <filter id="soft-glow-occ" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g fill="none" stroke="url(#gold-silk-occ)" filter="url(#soft-glow-occ)">
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

      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="fade-up" style={{ marginBottom: '64px' }}>
          <div className="ornament" style={{ marginBottom: '20px' }}>
            <span className="eyebrow">Special Occasions</span>
          </div>
          <h2 className="heading-section" style={{ color: 'var(--color-ivory)', marginBottom: '20px', maxWidth: '700px', margin: '0 auto 20px' }}>
            Celebrate Your{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Special Moments</em>{' '}
            With Us
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--color-ivory-muted)', maxWidth: '540px', margin: '20px auto 0', lineHeight: 1.85 }}>
            From private parties to family gatherings and office lunches — Shadan’s Biryani Express is your go-to catering partner for every occasion in Hubli.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px', marginBottom: '56px' }}>
          {occasions.map((o, i) => (
            <div key={o.title} className="fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(198,168,124,0.18)',
                borderRadius: '4px',
                padding: '36px 28px',
                height: '100%',
                textAlign: 'left',
                transition: 'border-color 300ms, background 300ms, box-shadow 300ms, transform 300ms',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(198,168,124,0.45)'
                  el.style.background = 'rgba(198,168,124,0.05)'
                  el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.35)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(198,168,124,0.18)'
                  el.style.background = 'rgba(255,255,255,0.03)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateY(0)'
                }}
              >
                {/* Icon container */}
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'rgba(198,168,124,0.1)',
                  border: '1px solid rgba(198,168,124,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '24px',
                }}>
                  <o.Icon size={22} color="var(--color-gold-light)" strokeWidth={1.5} />
                </div>
                <h3 className="heading-card" style={{ color: 'var(--color-gold-light)', marginBottom: '12px' }}>{o.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ivory-muted)', lineHeight: 1.75 }}>{o.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up">
          <a href={restaurant.whatsappEvent} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle size={17} />
            Plan Your Event — WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
