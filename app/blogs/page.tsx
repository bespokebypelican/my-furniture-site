import type { Metadata } from 'next';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';

export const metadata: Metadata = {
  title: 'Blogs | Bespoke By Pelican',
  description: 'Stories about craft, design, and the art of living well — from the Bespoke By Pelican studio.',
};

const playfair = { fontFamily: "'Playfair Display SC', serif" } as React.CSSProperties;
const montserrat = { fontFamily: "'Montserrat', sans-serif" } as React.CSSProperties;

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main style={{ backgroundColor: '#F7F4EE', padding: '80px 32px 100px', minHeight: '70vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ ...playfair, fontSize: 'clamp(32px, 5vw, 48px)', color: '#1A1A1A', marginBottom: '16px', letterSpacing: '0.02em' }}>
            Blogs
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', marginBottom: '48px' }} />
          <p style={{ ...montserrat, fontSize: '16px', color: '#6B6560', lineHeight: 2, letterSpacing: '0.01em' }}>
            Coming Soon. We are working on stories about craft, design, and the art of living well. Check back soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
