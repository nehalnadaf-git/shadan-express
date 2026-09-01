import type { Metadata } from 'next'
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react'
import { restaurant } from '@/data/restaurant'
import ContactCTAs from './ContactCTAs'

export const metadata: Metadata = {
  title: "Contact Us | Shadan's Biryani Express Hubli — Location, Hours & Directions",
  description: "Visit Shadan's Biryani Express in Vidya Nagar, Hubli — Suhail Complex, Opp. Samarth PU College, Shirur Park. Open daily 12–4:30 PM & 6:30–11 PM. Call +91 90351 67777 or order on Swiggy/Zomato.",
  alternates: { canonical: 'https://biryaniexpresshubli.in/contact' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "Shadan's Biryani Express",
  telephone: '+919035167777',
  url: 'https://biryaniexpresshubli.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suhail Complex, Opposite Samarth PU College, Shirur Park, Vidya Nagar',
    addressLocality: 'Hubli',
    addressRegion: 'Karnataka',
    postalCode: '580021',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 15.3730, longitude: 75.1350 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '12:00', closes: '16:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '18:30', closes: '23:00' },
  ],
}

const hours = [
  { day: 'Monday – Friday', time: '12:00 PM – 4:30 PM & 6:30 PM – 11:00 PM' },
  { day: 'Saturday', time: '12:00 PM – 4:30 PM & 6:30 PM – 11:00 PM' },
  { day: 'Sunday', time: '12:00 PM – 4:30 PM & 6:30 PM – 11:00 PM' },
]

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero */}
      <section style={{ background: 'var(--color-navy)', padding: 'clamp(56px,7vw,100px) clamp(24px,5vw,80px)', textAlign: 'center' }}>
        <p className="eyebrow" style={{ marginBottom: '16px' }}>Come Visit Us</p>
        <h1 className="heading-hero" style={{ fontSize: 'clamp(40px,7vw,72px)', color: 'var(--color-ivory)' }}>Find Us</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--color-ivory-muted)', marginTop: '16px', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
          We’re located in Vidya Nagar, Hubli — Suhail Complex, Opposite Samarth PU College, Shirur Park, Hubli, Karnataka 580021
        </p>
      </section>

      {/* Content */}
      <section style={{ background: 'var(--color-ivory)', padding: 'clamp(56px,7vw,100px) clamp(24px,5vw,80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px', alignItems: 'start' }}>

          {/* Left: Info */}
          <div>
            <h2 className="heading-section" style={{ color: 'var(--color-navy)', marginBottom: '40px', fontSize: 'clamp(28px,4vw,40px)' }}>
              Get in Touch
            </h2>

            {/* Address */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}>
              <div style={{ width: '44px', height: '44px', background: 'var(--color-navy)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={20} color="var(--color-gold)" />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', color: 'var(--color-navy)', marginBottom: '4px' }}>Address</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#555', lineHeight: 1.6 }}>{restaurant.addressFull}</p>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}>
              <div style={{ width: '44px', height: '44px', background: 'var(--color-navy)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={20} color="var(--color-gold)" />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', color: 'var(--color-navy)', marginBottom: '4px' }}>Phone / WhatsApp</p>
                <a href={restaurant.phoneHref} style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 600 }}>
                  {restaurant.phone}
                </a>
              </div>
            </div>

            {/* Hours table */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
              <div style={{ width: '44px', height: '44px', background: 'var(--color-navy)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={20} color="var(--color-gold)" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', color: 'var(--color-navy)', marginBottom: '12px' }}>Opening Hours</p>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {hours.map(h => (
                      <tr key={h.day} style={{ borderBottom: '1px solid rgba(45,50,52,0.08)' }}>
                        <td style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#555', padding: '8px 0', paddingRight: '16px' }}>{h.day}</td>
                        <td style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-navy)', fontWeight: 500, padding: '8px 0', textAlign: 'right' }}>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTAs */}
            <ContactCTAs />
          </div>

          {/* Right: Map */}
          <div>
            <h2 className="heading-section" style={{ color: 'var(--color-navy)', marginBottom: '24px', fontSize: 'clamp(28px,4vw,40px)' }}>
              Our Location
            </h2>
            <div style={{ borderRadius: '4px', overflow: 'hidden', border: '2px solid rgba(212,168,83,0.3)', boxShadow: '0 8px 40px rgba(45,50,52,0.1)' }}>
              <iframe
                src={restaurant.googleMapsEmbed}
                width="100%"
                height="400"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shadan's Biryani Express on Google Maps"
              />
            </div>
            <a
              href={restaurant.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', marginTop: '12px', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-gold)', textDecoration: 'none', textAlign: 'center' }}
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
