import type { Metadata } from 'next';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';

export const metadata: Metadata = {
  title: 'Shipping Policy | Bespoke By Pelican',
  description: 'Delivery timelines, logistics partners, and shipping terms for Bespoke By Pelican custom furniture orders.',
};

const playfair = { fontFamily: "'Playfair Display SC', serif" } as React.CSSProperties;
const montserrat = { fontFamily: "'Montserrat', sans-serif" } as React.CSSProperties;

const sectionHeading: React.CSSProperties = {
  ...montserrat,
  fontSize: '11px',
  color: '#C9A96E',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  marginBottom: '12px',
  fontWeight: 600,
};

const body: React.CSSProperties = {
  ...montserrat,
  fontSize: '15px',
  color: '#6B6560',
  lineHeight: 1.9,
  letterSpacing: '0.01em',
};

const section: React.CSSProperties = { marginBottom: '40px' };

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main style={{ backgroundColor: '#F7F4EE', padding: '80px 32px 100px', minHeight: '70vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ ...playfair, fontSize: 'clamp(32px, 5vw, 48px)', color: '#1A1A1A', marginBottom: '16px', letterSpacing: '0.02em' }}>
            Shipping Policy
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', marginBottom: '48px' }} />

          <div style={section}>
            <h2 style={sectionHeading}>Delivery Area</h2>
            <p style={body}>We currently deliver within Bengaluru only. For outstation enquiries, please contact us directly at bespokebypelican@gmail.com</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Lead Time</h2>
            <p style={body}>All furniture is custom made. Standard lead time is 6–10 weeks from order confirmation and deposit payment. We will keep you informed at every stage.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Delivery</h2>
            <p style={body}>Our team will contact you to schedule a delivery date once your piece is ready. Installation assistance is included for all Bengaluru deliveries.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Damage</h2>
            <p style={body}>All pieces are carefully packed during transit. In the unlikely event of damage during delivery, please photograph it immediately and contact us within 24 hours at bespokebypelican@gmail.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
