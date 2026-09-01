'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { restaurant } from '@/data/restaurant'
import { useBulkOrderModal } from '@/contexts/BulkOrderModalContext'

const navLinksLeft = [
  { label: 'Home',    href: '/'        },
  { label: 'About',   href: '/about'   },
  { label: 'Gallery', href: '/gallery' },
]
const navLinksRight = [
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ',     href: '/faq'     },
  { label: 'Contact', href: '/contact' },
]
const menuCategories = [
  { label: 'Rice & Biryani',       href: '/menu/rice-biryani'       },
  { label: 'Veg Starters',         href: '/menu/veg-starters'       },
  { label: 'Non-Veg Starters',     href: '/menu/non-veg-starters'   },
  { label: 'Rolls',                href: '/menu/rolls'              },
  { label: 'Main Course (Curries)',href: '/menu/main-course'        },
  { label: 'Breads',               href: '/menu/breads'             },
  { label: 'Fried Rice & Noodles', href: '/menu/fried-rice-noodles' },
  { label: 'Accompaniments',       href: '/menu/accompaniments'     },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [drawerOpen,  setDrawerOpen]  = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const pathname = usePathname()
  const menuRef  = useRef<HTMLDivElement>(null)
  const { openModal: openBulkOrderModal } = useBulkOrderModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  useEffect(() => { setDrawerOpen(false); setMenuOpen(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = drawerOpen ? 'hidden' : '' }, [drawerOpen])

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      {/* ════════════════════════════════════════
          MAIN HEADER
      ════════════════════════════════════════ */}
      <header className={`luxury-header ${scrolled ? 'header-scrolled' : ''}`}>

        {/* Gold pixel stripe at very top */}
        <div className="header-gold-stripe" />

        <div className="header-inner">

          {/* ── Left nav (flex: 1 → pushes equally from center) ── */}
          <nav className="header-nav header-nav--left hidden-mobile">
            {navLinksLeft.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`hdr-link ${isActive(l.href) ? 'hdr-link--active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* ── Center Logo — absolute so it can never shift ── */}
          <Link
            href="/"
            className="header-logo"
            aria-label="Biryani Express — Home"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            {/* Logo image only */}
            <span className="logo-name-row">
              <img src="/logo.png" alt="Biryani Express Logo" className="header-logo-img" style={{ width: 'auto', objectFit: 'contain' }} />
            </span>
          </Link>

          {/* ── Right nav (flex: 1, justify flex-end) ── */}
          <nav className="header-nav header-nav--right hidden-mobile">
            {/* Our Menu dropdown */}
            <div style={{ position: 'relative' }} ref={menuRef}>
              <button
                onClick={() => setMenuOpen(m => !m)}
                className={`hdr-link hdr-link--btn ${pathname.startsWith('/menu') ? 'hdr-link--active' : ''}`}
              >
                Our Menu
                <ChevronDown
                  size={12}
                  style={{
                    transition: 'transform 280ms ease',
                    transform: menuOpen ? 'rotate(180deg)' : 'none',
                    color: 'var(--color-copper)',
                    marginLeft: '3px',
                  }}
                />
              </button>

              {/* Dropdown */}
              <div className={`menu-dropdown ${menuOpen ? 'dropdown-open' : ''}`}>
                <Link
                  href="/menu"
                  className="dropdown-item"
                  style={{
                    borderBottom: '1px solid rgba(198,168,124,0.12)',
                    fontWeight: 700,
                    color: 'var(--color-gold-light)',
                    letterSpacing: '0.5px',
                  }}
                >
                  All Categories
                </Link>
                {menuCategories.map(c => (
                  <Link key={c.href} href={c.href} className="dropdown-item">{c.label}</Link>
                ))}
              </div>
            </div>

            {navLinksRight.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`hdr-link ${isActive(l.href) ? 'hdr-link--active' : ''}`}
              >
                {l.label}
              </Link>
            ))}


          </nav>

          {/* ── Mobile hamburger — in right grid column ── */}
          <div className="show-mobile" style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <button
              onClick={() => setDrawerOpen(true)}
              className="hdr-hamburger"
              aria-label="Open navigation menu"
            >
              <Menu size={22} strokeWidth={1.6} />
            </button>
          </div>

        </div>{/* /header-inner */}

      </header>

      {/* ════════════════════════════════════════
          MOBILE DRAWER OVERLAY
      ════════════════════════════════════════ */}
      <div
        className={`drawer-overlay ${drawerOpen ? 'overlay-visible' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* ════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════ */}
      <div className={`mobile-drawer ${drawerOpen ? 'drawer-open' : ''}`} style={{ background: 'var(--color-charcoal-mid)' }}>

        {/* ── Drawer header ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <img src="/logo.png" alt="Biryani Express Logo" style={{ height: '56px', width: 'auto', objectFit: 'contain' }} />
            </div>
          </div>

          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(198,168,124,0.2)',
              borderRadius: '50%',
              width: '32px', height: '32px',
              cursor: 'pointer',
              color: 'var(--color-ivory-muted)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <X size={15} strokeWidth={1.5} />
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(198,168,124,0.35), transparent)', marginBottom: '16px' }} />

        {/* ── Nav links ── */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {[
            { label: 'Home',     href: '/'        },
            { label: 'About',    href: '/about'   },
            { label: 'Our Menu', href: '/menu'    },
            { label: 'Gallery',  href: '/gallery' },
            { label: 'Reviews',  href: '/reviews' },
            { label: 'FAQ',      href: '/faq'     },
            { label: 'Contact',  href: '/contact' },
          ].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '19px',
                fontWeight: 600,
                color: isActive(l.href) ? 'var(--color-gold-light)' : 'rgba(247,245,240,0.65)',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                transition: 'color 180ms, padding-left 180ms',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                animationDelay: drawerOpen ? `${i * 40 + 100}ms` : '0ms',
              }}
              onTouchStart={e => {
                if (!isActive(l.href)) {
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--color-gold-light)'
                  ;(e.currentTarget as HTMLElement).style.paddingLeft = '6px'
                }
              }}
              onTouchEnd={e => {
                if (!isActive(l.href)) {
                  ;(e.currentTarget as HTMLElement).style.color = 'rgba(247,245,240,0.65)'
                  ;(e.currentTarget as HTMLElement).style.paddingLeft = '0'
                }
              }}
            >
              {isActive(l.href) && (
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }} />
              )}
              {l.label}
            </Link>
          ))}

          {/* ── CTA ── */}
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => { openBulkOrderModal(); setDrawerOpen(false) }}
              className="btn-secondary"
              style={{
                justifyContent: 'center',
                width: '100%',
                cursor: 'pointer',
                fontSize: '10px',
                padding: '12px 8px',
                letterSpacing: '1.5px',
              }}
            >
              Bulk Orders
            </button>
          </div>

          {/* ── Footer info ── */}
          <div style={{
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(198,168,124,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}>
            <a
              href={restaurant.phoneHref}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '12px',
                color: 'var(--color-gold)', textDecoration: 'none',
                letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px',
              }}
            >
              <span style={{ opacity: 0.5, fontSize: '10px' }}>📞</span>
              {restaurant.phone}
            </a>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '10.5px',
              color: 'rgba(247,245,240,0.28)', letterSpacing: '0.3px',
            }}>
              Opp. Samarth PU College, Vidya Nagar, Hubli
            </span>
          </div>
        </nav>

      </div>

      {/* ════════════════════════════════════════
          SCOPED STYLES
      ════════════════════════════════════════ */}
      <style>{`
        /* ═══════════════════════════════════════════════════
           BASE HEADER — always solid, always premium
           No transparency. The ivory hero section sits
           BELOW the header, not behind it.
        ═══════════════════════════════════════════════════ */
        .luxury-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: var(--color-ivory);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: box-shadow 400ms ease, border-color 400ms ease;
        }

        /* ── Scrolled state — deepens shadow & brightens brass line ── */
        .luxury-header.header-scrolled {
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          border-bottom-color: rgba(0,0,0,0.1);
        }

        /* ── Brass top pixel stripe — always visible, amplifies on scroll ── */
        .header-gold-stripe {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent);
        }
        .header-scrolled .header-gold-stripe {
          background: linear-gradient(to right, transparent, rgba(0,0,0,0.15), transparent);
        }

        /* ── Inner layout — 3-col grid: left | logo | right ── */
        .header-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 48px;
          height: 104px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 24px;
          transition: height 250ms ease;
        }
        .header-scrolled .header-inner {
          height: 86px;
        }

        /* ── Nav groups ── */
        .header-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .header-nav--right { justify-content: flex-end; }

        /* ── Nav links ── */
        .hdr-link {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.4px;
          color: var(--color-navy);
          text-decoration: none;
          padding: 9px 15px;
          border-radius: 3px;
          position: relative;
          transition: color 200ms ease, background 200ms ease;
          white-space: nowrap;
        }
        .hdr-link--btn {
          background: none;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
        }
        .hdr-link:hover {
          color: var(--color-copper);
          background: rgba(0,0,0,0.04);
        }
        .hdr-link--active {
          color: var(--color-copper) !important;
        }
        .hdr-link--active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 15px;
          right: 15px;
          height: 2px;
          background: var(--color-copper);
        }

        /* ── CTA button ── */
        .hdr-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-left: 12px;
          padding: 10px 24px;
          font-family: var(--font-body);
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--color-charcoal);
          background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-bright) 55%, var(--color-gold) 100%);
          background-size: 200% 200%;
          background-position: left center;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: background-position 400ms ease, box-shadow 300ms ease, transform 150ms ease;
          box-shadow: 0 2px 14px rgba(198,168,124,0.30);
          flex-shrink: 0;
        }
        .hdr-cta:hover {
          background-position: right center;
          box-shadow: 0 6px 28px rgba(0,0,0,0.35), 0 2px 12px rgba(198,168,124,0.30);
          transform: translateY(-1px);
        }
        .hdr-cta:active { transform: scale(0.97) translateY(0); }

        /* ── Center logo — sits in the middle grid column ── */
        .header-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          gap: 0;
          padding: 4px 0;
          transition: opacity 200ms ease;
          user-select: none;
          white-space: nowrap;
        }
        .header-logo:hover { opacity: 0.88; }

        .header-logo-img {
          height: 100px;
          transition: height 250ms ease;
        }
        .header-scrolled .header-logo-img {
          height: 80px;
        }

        .logo-ornament {
          display: block;
          width: 44px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(198,168,124,0.55), transparent);
          margin: 3px 0;
        }

        .logo-shadans {
          font-family: var(--font-body);
          font-size: 9px;
          font-weight: 600;
          color: rgba(247,245,240,0.45);
          letter-spacing: 3.5px;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 3px;
        }

        .logo-name-row {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .logo-sep {
          display: inline-block;
          width: 1px;
          height: 18px;
          background: rgba(240,180,41,0.35);
          margin: 0 10px;
          flex-shrink: 0;
        }

        .logo-wordmark {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          color: var(--color-gold);
          letter-spacing: 5px;
          line-height: 1;
          text-shadow: 0 0 28px rgba(198,168,124,0.22);
        }

        .logo-tagline {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 11px;
          color: var(--color-gold-light);
          letter-spacing: 0.5px;
          margin-top: 1px;
          line-height: 1;
          opacity: 0.85;
        }


        /* ── Hamburger ── */
        .hdr-hamburger {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-navy);
          padding: 8px;
          border-radius: 4px;
          transition: color 200ms, background 200ms;
          touch-action: manipulation;
          display: flex;
          align-items: center;
        }
        .hdr-hamburger:hover {
          color: var(--color-gold-light);
          background: rgba(0,0,0,0.12);
        }

        /* ── Responsive ── */
        .hidden-mobile { display: flex; }
        .show-mobile   { display: none;  }
        @media (max-width: 960px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
          .header-logo-img { height: 50px !important; }
          .header-inner  {
            padding: 0 20px;
            height: 68px !important;
            grid-template-columns: auto 1fr auto;
          }
        }
      `}</style>
    </>
  )
}
