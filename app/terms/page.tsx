import type { Metadata } from 'next';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Bespoke By Pelican',
  description: 'Terms and conditions governing the use of Bespoke By Pelican services and products.',
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
            Terms of Service
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', marginBottom: '48px' }} />

          <div style={section}>
            <h2 style={sectionHeading}>Acceptance</h2>
            <p style={body}>By accessing bespokebypelican.com, you agree to these terms. Please read them carefully before placing an order or making an enquiry.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Orders</h2>
            <p style={body}>All orders are custom and made to specification. Once confirmed and production has begun, orders cannot be cancelled. A minimum deposit of 50% is required to commence production.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Pricing</h2>
            <p style={body}>All prices are in Indian Rupees (INR) and inclusive of applicable taxes unless stated otherwise. Prices are subject to change without prior notice.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Intellectual Property</h2>
            <p style={body}>All content on this website including images, designs, and text is the property of Constellate Manufacturing Private Limited and may not be reproduced without written permission.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Governing Law</h2>
            <p style={body}>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Bengaluru, Karnataka.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Contact</h2>
            <p style={body}>bespokebypelican@gmail.com &nbsp;|&nbsp; 1800-833-0046</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
