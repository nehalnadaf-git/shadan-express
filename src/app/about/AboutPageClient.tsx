'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Phone, Star } from 'lucide-react'
import { restaurant } from '@/data/restaurant'
import AboutBookingCTA from './AboutBookingCTA'

const pillars = [
  {
    icon: '🍛',
    title: 'Authentic Hyderabadi Biryani',
    desc: "From Chicken Biryani and Shadan's Special to Veg Biryani and Egg Biryani — every grain is cooked with care, fragrant spice, and old-school Hyderabadi technique.",
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family-Friendly Casual Dining',
    desc: 'A clean, comfortable dine-in spot where everyone is welcome. Ideal for family lunches, casual outings, and quick dinners with friends — no fuss, great food.',
  },
  {
    icon: '✨',
    title: 'Fresh & Hygienic Every Day',
    desc: 'We prepare our food fresh daily with quality ingredients. Customers consistently praise the cleanliness and freshness of the food — a standard we take great pride in.',
  },
  {
    icon: '⚡',
    title: 'Quick & Efficient Service',
    desc: 'Fast turnaround whether you are dining in, picking up a parcel, or ordering via Swiggy and Zomato. We value your time as much as your taste.',
  },
]

const stats = [
  { num: '4.1★', label: 'Zomato Rating' },
  { num: '4.5★', label: 'Google Rating' },
  { num: '50+', label: 'Menu Items' },
  { num: '2', label: 'Outlets in Hubli' },
]



export default function AboutPageClient() {
  const rootRef = useRef<HTMLDivElement>(null)

  /* Scroll-driven fade-up animations */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    )
    rootRef.current?.querySelectorAll('.fade-up').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div ref={rootRef} style={{ paddingTop: '72px', background: 'var(--color-charcoal)' }}>

      {/* ═══════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(250px, 35vw, 600px)',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(198,168,124,0.2)',
      }}>
        <Image
          src="/images/restaurant/2.png"
          alt="Shadan's Biryani Express — Hubli"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </section>

      {/* ═══════════════════════════════════════════════
          ORIGIN — text + image
      ═══════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(160deg, var(--color-linen) 0%, var(--color-parchment-deep) 60%, var(--color-stone) 100%)',
        padding: 'clamp(72px,10vw,140px) clamp(24px,5vw,80px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 80% 20%, rgba(198,168,124,0.07) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.25), transparent)',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(48px,6vw,96px)',
            alignItems: 'center',
          }}>
            <div className="fade-up">
              <div className="ornament ornament-dark" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
                <span className="eyebrow-dark">Origin & Heritage</span>
              </div>
              <h2 className="heading-section" style={{ color: 'var(--color-ink)', marginBottom: '28px', maxWidth: '460px' }}>
              A Homegrown{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--color-copper)' }}>Biryani Story</em>
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px,1.6vw,17px)',
                color: 'var(--color-ink-muted)',
                lineHeight: 1.85,
                marginBottom: '20px',
              }}>
                Shadan's Biryani Express started with a simple but powerful idea: bring authentic Hyderabadi-style biryani to Hubli at prices everyone can afford. Born in Vidya Nagar and now operating multiple outlets, we have become a go-to dining destination for families, students, and biryani lovers across the city. Fresh food, quick service, and honest pricing — that is the Biryani Express promise.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px,1.6vw,17px)',
                color: 'var(--color-ink-muted)',
                lineHeight: 1.85,
                marginBottom: '36px',
              }}>
                The name <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>"Shadan's"</strong> reflects family pride and a deep commitment to quality. Every plate we serve carries that commitment — whether it is our signature Chicken Biryani or a freshly rolled Chicken Roll.
              </p>
              <Link href="/menu" className="btn-secondary-dark">Explore Our Menu →</Link>
            </div>

            <div className="fade-up" style={{ transitionDelay: '150ms' }}>
              <div style={{
                position: 'relative',
                aspectRatio: '4/5',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 40px 80px rgba(45,50,52,0.18), 0 12px 32px rgba(45,50,52,0.10)',
                border: '1px solid rgba(198,168,124,0.2)',
              }}>
                <Image
                  src="/images/restaurant/2.png"
                  alt="Shadan's Biryani Express Dining Area"
                  fill sizes="(max-width:768px) 90vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(45,50,52,0.4) 0%, transparent 50%)',
                }} />
                <div style={{
                  position: 'absolute', bottom: '20px', left: '20px',
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                  border: '1px solid rgba(198,168,124,0.4)',
                  borderRadius: '6px',
                  padding: '10px 18px',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '14px', color: 'var(--color-gold-light)' }}>Our Dining Area</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: 'rgba(247,245,240,0.6)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '3px' }}>Vidya Nagar, Hubli</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4 PILLARS
      ═══════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-mid) 50%, var(--color-navy) 100%)',
        padding: 'clamp(72px,10vw,140px) clamp(24px,5vw,80px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(75,115,122,0.08) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.3), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.2), transparent)' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="fade-up" style={{ textAlign: 'center', marginBottom: 'clamp(48px,6vw,80px)' }}>
            <div className="ornament" style={{ marginBottom: '20px' }}>
              <span className="eyebrow">The Biryani Express Standard</span>
            </div>
            <h2 className="heading-section" style={{ color: 'var(--color-ivory)', maxWidth: '520px', margin: '0 auto' }}>
            What Makes{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Shadan's Special</em>
          </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(16px,2vw,24px)',
          }}>
            {pillars.map((p, i) => (
              <div key={p.title} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div
                  style={{
                    background: 'linear-gradient(155deg, var(--color-linen) 0%, var(--color-parchment) 100%)',
                    border: '1px solid rgba(198,168,124,0.35)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    height: '100%',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
                    transition: 'border-color 300ms, box-shadow 300ms, transform 300ms',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(198,168,124,0.8)'
                    el.style.transform = 'translateY(-6px)'
                    el.style.boxShadow = '0 24px 60px rgba(0,0,0,0.35), 0 0 0 1.5px rgba(198,168,124,0.45)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(198,168,124,0.35)'
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = '0 8px 30px rgba(0,0,0,0.18)'
                  }}
                >
                  {/* Gold/Copper top accent line */}
                  <div style={{ height: '3px', background: 'linear-gradient(to right, var(--color-gold), var(--color-copper), var(--color-gold))' }} />
                  {/* Content */}
                  <div style={{ padding: 'clamp(28px,3vw,40px) clamp(24px,2.5vw,32px) clamp(32px,3.5vw,44px)' }}>
                    {/* Number badge */}
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '3px',
                      color: 'var(--color-copper)',
                      textTransform: 'uppercase',
                      marginBottom: '20px',
                    }}>0{i + 1}</div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(20px,2vw,24px)',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      marginBottom: '14px',
                      lineHeight: 1.2,
                    }}>{p.title}</h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-ink-mid)',
                      lineHeight: 1.75,
                    }}>{p.desc}</p>
                    {/* Copper underline accent */}
                    <div style={{ width: '32px', height: '2px', background: 'linear-gradient(to right, var(--color-copper), transparent)', marginTop: '20px' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          VISIT INFO
      ═══════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(165deg, var(--color-linen) 0%, var(--color-stone) 100%)',
        padding: 'clamp(72px,10vw,140px) clamp(24px,5vw,80px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.25), transparent)' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(48px,6vw,80px)',
            alignItems: 'start',
          }}>
            <div className="fade-up">
              <div className="ornament ornament-dark" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
                <span className="eyebrow-dark">Visit Us</span>
              </div>
              <h2 className="heading-section" style={{ color: 'var(--color-ink)', marginBottom: '40px', maxWidth: '420px' }}>
                Come Find Us in the{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--color-copper)' }}>Heart of Hubballi</em>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {[
                  { icon: <MapPin size={18} />, label: 'Address', value: restaurant.addressFull, link: restaurant.googleMapsUrl, linkText: 'Open in Maps →' },
                  { icon: <Clock size={18} />, label: 'Hours', value: restaurant.hours, link: null, linkText: null },
                  { icon: <Phone size={18} />, label: 'Phone', value: restaurant.phone, link: restaurant.phoneHref, linkText: 'Call Now →' },
                ].map((info) => (
                  <div key={info.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                      background: 'rgba(198,168,124,0.1)',
                      border: '1px solid rgba(198,168,124,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-copper)',
                    }}>{info.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-copper)', marginBottom: '4px' }}>{info.label}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-ink-muted)', lineHeight: 1.7 }}>{info.value}</div>
                      {info.link && (
                        <a href={info.link} target="_blank" rel="noopener noreferrer" style={{
                          fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-copper)',
                          letterSpacing: '1px', fontWeight: 600, textDecoration: 'none',
                          borderBottom: '1px solid rgba(198,168,124,0.35)', paddingBottom: '1px',
                          marginTop: '6px', display: 'inline-block',
                        }}>{info.linkText}</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up" style={{ transitionDelay: '150ms' }}>
              <div style={{
                borderRadius: '8px', overflow: 'hidden',
                border: '1px solid rgba(198,168,124,0.25)',
                boxShadow: '0 20px 60px rgba(45,50,52,0.12)',
                position: 'relative', aspectRatio: '4/3',
              }}>
                <Image
                  src="/images/restaurant/4.png"
                  alt="Shadan's Biryani Express — Hubli"
                  fill
                  sizes="(max-width:768px) 90vw, 45vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <a href={restaurant.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                marginTop: '16px',
                fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                color: 'var(--color-copper)', textDecoration: 'none',
              }}>
                <MapPin size={13} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(150deg, var(--color-charcoal) 0%, var(--color-navy-mid) 50%, var(--color-charcoal) 100%)',
        padding: 'clamp(72px,10vw,140px) clamp(24px,5vw,80px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(198,168,124,0.10) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.35), transparent)' }} />

        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="fade-up">
            <div className="ornament" style={{ marginBottom: '20px' }}>
              <span className="eyebrow">Join Us</span>
            </div>
            <h2 className="heading-section" style={{ color: 'var(--color-ivory)', marginBottom: '20px' }}>
              Your Table at{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Biryani Express</em>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(15px,1.7vw,18px)',
              color: 'var(--color-ivory-muted)',
              maxWidth: '480px', margin: '0 auto 40px',
              lineHeight: 1.8,
            }}>
              Experience the flavours of Shadan's Biryani Express — where every biryani is freshly made, every starter is sizzling hot, and every visit leaves you craving more.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <AboutBookingCTA />
              <Link href="/menu" className="btn-secondary">View Our Menu</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scoped styles ── */}
      <style>{`
        /* fade-up animation */
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.78s cubic-bezier(0.16,1,0.3,1), transform 0.78s cubic-bezier(0.16,1,0.3,1);
        }
        .fade-up.in-view { opacity: 1; transform: translateY(0); }

        /* Stats bar — 2×2 on xs */
        @media (max-width: 520px) {
          .about-stats-grid {
            grid-template-columns: repeat(2,1fr) !important;
          }
          .about-stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(198,168,124,0.15); }
          .about-stats-grid > div:nth-child(odd) { border-right: 1px solid rgba(198,168,124,0.15) !important; }
          .about-stats-grid > div:nth-last-child(-n+2) { border-bottom: none; }
        }

        /* Gallery — simple 2-col on mobile */
        @media (max-width: 640px) {
          .about-gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          .about-hero-img  { grid-column: 1 / -1 !important; grid-row: auto !important; }
          .about-tall-img  { grid-column: auto !important; grid-row: auto !important; aspect-ratio: 4/3 !important; position: relative; }
        }
      `}</style>
    </div>
  )
}
