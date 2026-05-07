import type { Metadata } from 'next';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bespoke By Pelican',
  description: 'How Bespoke By Pelican collects, uses, and protects your personal information.',
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
            Privacy Policy
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', marginBottom: '48px' }} />

          <div style={section}>
            <h2 style={sectionHeading}>Information We Collect</h2>
            <p style={body}>We collect your name, phone number, email address, and message when you submit our contact form. We do not collect payment information directly.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>How We Use It</h2>
            <p style={body}>Your information is used solely to respond to your enquiry and improve our service. We do not sell or share your data with third parties.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Cookies</h2>
            <p style={body}>We use Google Analytics to understand how visitors use our website. This involves cookies that collect anonymised data. You may disable cookies in your browser settings.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Data Security</h2>
            <p style={body}>We take reasonable steps to protect your information. However, no internet transmission is 100% secure.</p>
          </div>

          <div style={section}>
            <h2 style={sectionHeading}>Contact</h2>
            <p style={body}>For privacy concerns, email us at bespokebypelican@gmail.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
