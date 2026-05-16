'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { menuCategories } from '@/data/menu'
import { ChevronLeft, ChevronRight, Utensils, Flame, Star, Crown } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const featured = [
  {
    name: 'Biryani & Mandi',
    tagline: 'Dum biryanis, Mandi Specials & fragrant rice — the heart of Empire',
    items: ['Chicken Dum Biryani', 'Mutton Dum Biryani', 'Chicken Mandi Special', 'Chicken Tangadi Biryani', 'Veg Biryani'],
    slug: 'biryani-rice',
    image: '/images/food/118-biryani-feast.webp',
  },
  {
    name: 'Tandoori & Kababs',
    tagline: 'Char-grilled masterpieces from our clay tandoor oven',
    items: ['Tandoori Chicken (Full)', 'Lazeez Kabab', 'Chicken Hariyali Kabab', 'Mutton Seek Kabab', 'Chicken Kasturi Kabab'],
    slug: 'tandoori-kababs',
    image: '/images/food/052-tandoori-chicken.webp',
  },
  {
    name: 'Chicken Starters',
    tagline: 'Sizzling chicken in every style — 17+ varieties',
    items: ['Chicken 65', 'Chicken Barbeque', 'Chicken Dragon', 'Chicken Satay', 'Chicken Lollipop'],
    slug: 'chicken-starters',
    image: '/images/food/028-chicken-65.webp',
  },
]

const vegItems = new Set(['Veg Biryani', 'Paneer Biryani', 'Paneer Butter Masala', 'Dal Tadka', 'Mushroom Lababdar'])


export default function MenuPreview() {
  const sectionRef = useScrollAnimation()
  const [sidebarIdx, setSidebarIdx] = useState(0)
  const sidebarItems = [
    { title: 'Biryani Specials', items: ['Chicken Dum Biryani', 'Mutton Dum Biryani', 'Chicken Mandi Special'], desc: 'Slow-cooked dum biryanis and Arabic-style mandi — the soul of Empire cuisine.' },
    { title: 'Tandoor Favourites', items: ['Lazeez Kabab', 'Chicken Hariyali Kabab', 'Tandoori Chicken'], desc: 'Perfectly charred from our clay tandoor — smoky, juicy and unforgettable.' },
    { title: 'Mughlai Mains', items: ['Mutton Nalli Nihari', 'Mutton Rogan Josh', 'Chicken Lazeez'], desc: 'Slow-cooked royal Mughlai gravies — rich, aromatic and deeply satisfying.' },
    { title: 'Veg Favourites', items: ['Paneer Butter Masala', 'Mushroom Lababdar', 'Nawabi Thaali'], desc: 'Rich aromatic vegetarian dishes and paneer specialties crafted with equal care.' },
  ]

  return (
    <section ref={sectionRef} style={{
      background: 'linear-gradient(160deg, var(--color-linen) 0%, var(--color-parchment) 60%, var(--color-parchment-deep) 100%)',
      padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle warm texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(198,168,124,0.06) 0%, transparent 55%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.18), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(45,50,52,0.08), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div data-animate="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="ornament ornament-dark" style={{ justifyContent: 'flex-start', marginBottom: '16px' }}>
              <span className="eyebrow-dark">Our Menu</span>
            </div>
            <h2 className="heading-section" style={{ color: 'var(--color-ink)', maxWidth: '460px' }}>
              Your Next Favourite<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-copper)' }}>Meal Awaits</em>
            </h2>
          </div>
          <Link href="/menu" className="btn-secondary-dark" style={{ alignSelf: 'flex-end' }}>
            Full Menu →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '32px', alignItems: 'start' }} className="menu-preview-grid" data-animate="fade-up" data-delay="100">
          {/* Left Sidebar */}
          <div style={{
            background: 'rgba(255,255,255,0.75)',
            borderRadius: '6px', padding: '28px',
            border: '1px solid rgba(45,50,52,0.1)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 24px rgba(45,50,52,0.06)',
          }} className="menu-sidebar">
            <Utensils size={20} color="var(--color-copper)" strokeWidth={1.5} style={{ marginBottom: '14px' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '22px', color: 'var(--color-ink)', marginBottom: '18px', fontWeight: 600, letterSpacing: '-0.2px' }}>
              {sidebarItems[sidebarIdx].title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {sidebarItems[sidebarIdx].items.map(item => (
                <li key={item} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-ink)', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-copper)', flexShrink: 0, boxShadow: '0 0 0 2px rgba(139, 94, 60, 0.1)' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ink-mid)', lineHeight: 1.7, marginBottom: '24px' }}>
              {sidebarItems[sidebarIdx].desc}
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              <button 
                onClick={() => setSidebarIdx(i => (i - 1 + sidebarItems.length) % sidebarItems.length)}
                aria-label="Previous category"
                style={{ 
                  width: '44px', 
                  height: '44px', 
                  border: 'none', 
                  borderRadius: '6px', 
                  background: 'var(--color-ink)', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--color-ivory)', 
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                }}
                onMouseEnter={e => { 
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'var(--color-navy-light)';
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={e => { 
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'var(--color-ink)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
                }}>
                <ChevronLeft size={22} strokeWidth={2.5} />
              </button>
              <button 
                onClick={() => setSidebarIdx(i => (i + 1) % sidebarItems.length)}
                aria-label="Next category"
                style={{ 
                  width: '44px', 
                  height: '44px', 
                  border: 'none', 
                  borderRadius: '6px', 
                  background: 'var(--color-ink)', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--color-ivory)', 
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                }}
                onMouseEnter={e => { 
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'var(--color-navy-light)';
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={e => { 
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'var(--color-ink)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
                }}>
                <ChevronRight size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Featured Category Cards — now with images */}
          <div className="menu-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {featured.map((cat, i) => (
              <Link key={cat.slug} href={`/menu/${cat.slug}`} style={{ textDecoration: 'none' }}
                data-animate="blur-up"
                data-delay={String(i * 120)}
              >
                <div className="menu-card" style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: `1px solid ${i === 1 ? 'rgba(198,168,124,0.45)' : 'rgba(45,50,52,0.09)'}`,
                  background: 'white',
                  boxShadow: i === 1 ? '0 8px 32px rgba(198,168,124,0.14)' : '0 2px 12px rgba(45,50,52,0.06)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
                }}>
                  {/* Category photo */}
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width:900px) 80vw, 33vw"
                      style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(45,50,52,0.65) 0%, rgba(45,50,52,0.15) 50%, transparent 100%)',
                    }} />

                  </div>

                  {/* Card content */}
                  <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 className="heading-card" style={{ color: 'var(--color-ink)', marginBottom: '6px', fontSize: '18px' }}>{cat.name}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-ink-soft)', marginBottom: '16px', lineHeight: 1.55 }}>{cat.tagline}</p>

                    {/* Divider */}
                    <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(198,168,124,0.25), transparent)', marginBottom: '14px' }} />

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                      {cat.items.map(item => (
                        <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-ink-mid)' }}>
                          <span className={vegItems.has(item) ? 'dot-veg' : 'dot-nonveg'} style={{ width: '7px', height: '7px' }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Explore link */}
                    <div style={{
                      marginTop: '20px',
                      paddingTop: '14px',
                      borderTop: '1px solid rgba(45,50,52,0.06)',
                      fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 700,
                      color: 'var(--color-ink)', letterSpacing: '1.5px', textTransform: 'uppercase',
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}>
                      Explore Menu <span style={{ color: 'var(--color-copper)', fontSize: '16px' }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="fade-up" style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/menu" className="btn-primary" style={{ display: 'inline-flex' }}>
            View Full Menu
          </Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 901px) {
          .menu-preview-grid { grid-template-columns: 240px 1fr !important; }
        }
        @media (max-width: 900px) {
          .menu-preview-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .menu-sidebar { display: block !important; width: 100% !important; max-width: 100% !important; box-sizing: border-box; }
          .menu-cards-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
            gap: 16px !important;
            padding-bottom: 8px !important;
          }
          .menu-cards-grid::-webkit-scrollbar { display: none !important; }
          .menu-cards-grid > a {
            scroll-snap-align: start !important;
            flex: 0 0 78vw !important;
            max-width: 300px !important;
          }
        }
        @media (max-width: 480px) {
          .menu-cards-grid > a { flex: 0 0 85vw !important; }
        }
        .menu-card:hover { transform: translateY(-5px) !important; box-shadow: 0 20px 52px rgba(45,50,52,0.12) !important; border-color: rgba(198,168,124,0.45) !important; }
        .menu-card:hover img { transform: scale(1.04) !important; }
      `}</style>
    </section>
  )
}
