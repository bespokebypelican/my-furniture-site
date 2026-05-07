import type { Metadata } from 'next';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';

export const metadata: Metadata = {
  title: 'Warranty | Bespoke By Pelican',
  description: 'Warranty terms and coverage for Bespoke By Pelican custom furniture products.',
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
            Warranty
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', marginBottom: '48px' }} />

          <div style={section}>
            <h2 style={sectionHeading}>Coverage</h2>
            <p style={body}>All Bespoke By Pelican furniture comes with a 1-year warranty against manufacturing defects from the date of delivery.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>What Is Covered</h2>
            <p style={body}>Structural defects, joint failures, and finish defects that arise under normal use conditions.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>What Is Not Covered</h2>
            <p style={body}>Damage caused by misuse, accidents, water exposure, improper cleaning, or natural wear and tear. Variation in wood grain and natural material characteristics are not defects.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Claiming Warranty</h2>
            <p style={body}>To make a warranty claim, email bespokebypelican@gmail.com with your order details and photographs of the issue. We will assess and respond within 5 business days.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Solid Wood Note</h2>
            <p style={body}>Solid wood is a natural material. Minor expansion, contraction, or variation in grain and colour over time is expected and is not a defect.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
