import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { menuCategories } from '@/data/menu'
import { ChevronRight } from 'lucide-react'

type Props = {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return menuCategories.map(cat => ({ category: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = menuCategories.find(c => c.slug === category)
  if (!cat) return {}
  return {
    title: `${cat.name} | Shadan's Biryani Express Hubli`,
    description: `Explore our ${cat.name} menu — ${cat.tagline}. Authentic biryani and Indian-Chinese cuisine at Shadan's Biryani Express, Hubli.`,
    alternates: { canonical: `https://biryaniexpresshubli.in/menu/${category}` },
  }
}

const categorySchema = (cat: typeof menuCategories[0]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${cat.name} — Shadan's Biryani Express`,
  itemListElement: cat.items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'MenuItem',
      name: item.name,
      suitableForDiet: item.isVeg ? 'https://schema.org/VegetarianDiet' : 'https://schema.org/OmnivoreDiet',
    },
  })),
})

const breadcrumbSchema = (cat: typeof menuCategories[0]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://biryaniexpresshubli.in' },
    { '@type': 'ListItem', position: 2, name: 'Menu', item: 'https://biryaniexpresshubli.in/menu' },
    { '@type': 'ListItem', position: 3, name: cat.name, item: `https://biryaniexpresshubli.in/menu/${cat.slug}` },
  ],
})

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = menuCategories.find(c => c.slug === category)
  if (!cat) notFound()

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema(cat)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(cat)) }} />

      {/* Hero */}
      <section style={{
        background: `linear-gradient(160deg, var(--color-charcoal) 0%, var(--color-navy) 60%, var(--color-navy-light) 100%)`,
        padding: 'clamp(48px,6vw,88px) clamp(24px,5vw,80px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle category image as blurred bg */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={cat.image}
            alt={cat.name}
            fill
            style={{ objectFit: 'cover', opacity: 0.08, filter: 'blur(12px)', transform: 'scale(1.1)' }}
          />
        </div>
        {/* Gold bottom line */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.30), transparent)', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 2 }}>

          <p className="eyebrow" style={{ marginBottom: '14px' }}>{cat.tagline}</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px,6vw,64px)',
            fontWeight: 600,
            color: 'var(--color-ivory)',
            lineHeight: 1.1,
            marginBottom: '12px',
          }}>
            {cat.name}
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--color-ivory-muted)',
            fontWeight: 500,
            letterSpacing: '0.5px',
          }}>
            {cat.items.length} dishes
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--color-charcoal)', padding: '14px clamp(24px,5vw,80px)', borderBottom: '1px solid rgba(198,168,124,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '12px' }}>
          <Link href="/" style={{ color: 'var(--color-gold)', textDecoration: 'none', letterSpacing: '0.3px' }}>Home</Link>
          <ChevronRight size={13} style={{ color: 'rgba(247,245,240,0.3)' }} />
          <Link href="/menu" style={{ color: 'var(--color-gold)', textDecoration: 'none', letterSpacing: '0.3px' }}>Menu</Link>
          <ChevronRight size={13} style={{ color: 'rgba(247,245,240,0.3)' }} />
          <span style={{ color: 'rgba(247,245,240,0.50)', letterSpacing: '0.3px' }}>{cat.name}</span>
        </div>
      </div>

      {/* Items Grid */}
      <section style={{
        background: 'linear-gradient(160deg, var(--color-linen) 0%, var(--color-parchment) 60%, var(--color-parchment-deep) 100%)',
        padding: 'clamp(48px,6vw,88px) clamp(24px,5vw,80px)',
        minHeight: '60vh',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-ink-muted)', letterSpacing: '0.5px', fontWeight: 500 }}>
                <span className="dot-veg" /> Vegetarian
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-ink-muted)', letterSpacing: '0.5px', fontWeight: 500 }}>
                <span className="dot-nonveg" /> Non-Vegetarian
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-ink-soft)', letterSpacing: '0.5px' }}>
              Prices inclusive of taxes
            </p>
          </div>

          {/* Premium Card Grid */}
          <style>{`
            .dish-card { transition: transform 280ms cubic-bezier(0.16,1,0.3,1), box-shadow 280ms ease; }
            .dish-card:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 56px rgba(45,50,52,0.14) !important; }
            .dish-card:hover .dish-img { transform: scale(1.05); }
            .dish-img { transition: transform 500ms cubic-bezier(0.16,1,0.3,1); }
            @media (max-width: 640px) {
              .category-items-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
            }
            @media (max-width: 380px) {
              .category-items-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

          <div
            className="category-items-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '20px' }}
          >
            {cat.items.map((item) => (
              <div
                key={item.name}
                className="dish-card"
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid rgba(198,168,124,0.18)',
                  background: 'white',
                  boxShadow: '0 2px 12px rgba(45,50,52,0.06)',
                  cursor: 'default',
                }}
              >
                {/* Image area */}
                {item.image ? (
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-navy)' }}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 22vw"
                      className="dish-img"
                      style={{ objectFit: 'cover' }}
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(45,50,52,0.55) 0%, rgba(45,50,52,0.10) 45%, transparent 100%)',
                    }} />
                    {/* Veg/Non-veg badge */}
                    <div style={{
                      position: 'absolute', top: '10px', left: '10px',
                      display: 'flex', alignItems: 'center', gap: '5px',
                      background: 'rgba(26,31,33,0.65)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      borderRadius: '100px',
                      padding: '4px 9px',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      <span className={item.isVeg ? 'dot-veg' : 'dot-nonveg'} style={{ width: '7px', height: '7px' }} />
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '9px',
                        fontWeight: 700,
                        color: 'rgba(247,245,240,0.90)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                      }}>
                        {item.isVeg ? 'VEG' : 'NON-VEG'}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* No-image: dark gradient panel with category icon */
                  <div style={{
                    aspectRatio: '4/3',
                    background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Subtle gold dots pattern */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: 'radial-gradient(circle, rgba(198,168,124,0.12) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }} />

                    <div style={{
                      position: 'absolute', top: '10px', left: '10px',
                      display: 'flex', alignItems: 'center', gap: '5px',
                      background: 'rgba(0,0,0,0.38)',
                      borderRadius: '100px', padding: '4px 9px',
                    }}>
                      <span className={item.isVeg ? 'dot-veg' : 'dot-nonveg'} style={{ width: '7px', height: '7px' }} />
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '9px',
                        fontWeight: 700,
                        color: 'rgba(247,245,240,0.85)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                      }}>
                        {item.isVeg ? 'VEG' : 'NON-VEG'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Details */}
                <div style={{ padding: '14px 16px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: '16px',
                      color: 'var(--color-navy)',
                      fontWeight: 600,
                      lineHeight: 1.25,
                      flex: 1,
                      margin: 0,
                    }}>
                      {item.name}
                    </h3>
                    {item.price && (
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '15px',
                          fontWeight: 700,
                          color: 'var(--color-copper)',
                          letterSpacing: '-0.3px',
                        }}>
                          {item.price}
                        </div>
                        {item.priceHalf && (
                          <div style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '10px',
                            color: 'var(--color-ink-soft)',
                            marginTop: '3px',
                            letterSpacing: '0.2px',
                          }}>
                            Half: {item.priceHalf}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Gold micro-divider */}
                  <div style={{
                    marginTop: '10px',
                    height: '1px',
                    background: 'linear-gradient(to right, rgba(198,168,124,0.30), transparent)',
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Back link */}
          <div style={{ marginTop: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/menu" className="btn-secondary-dark">
              ← All Categories
            </Link>
            <Link href="/" className="btn-secondary-dark">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
