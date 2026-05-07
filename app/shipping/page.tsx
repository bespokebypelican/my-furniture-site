import type { Metadata } from 'next';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';

export const metadata: Metadata = {
  title: 'Shipping Policy | Bespoke By Pelican',
  description: 'Delivery timelines, logistics partners, and shipping terms for Bespoke By Pelican custom furniture orders.',
};

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main style={{ minHeight: '60vh', backgroundColor: '#F7F4EE', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 32px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ fontFamily: "'Playfair Display SC', serif", fontSize: 'clamp(28px, 5vw, 48px)', color: '#1A1A1A', marginBottom: '24px', letterSpacing: '-0.01em' }}>
            Shipping Policy
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '15px', color: '#6B6560', lineHeight: 1.9, letterSpacing: '0.01em' }}>
            Detailed shipping and delivery information is coming soon. We deliver across India via Delhivery Logistics.
            For order-specific queries, please{' '}
            <a href="/contact" style={{ color: '#C9A96E', textDecoration: 'none', borderBottom: '1px solid #C9A96E' }}>contact us</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
