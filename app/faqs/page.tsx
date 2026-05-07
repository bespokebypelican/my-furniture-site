import type { Metadata } from 'next';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';
import FaqAccordion from '../../src/app/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQs | Bespoke By Pelican',
  description: 'Frequently asked questions about Bespoke By Pelican custom furniture — process, materials, delivery and more.',
};

const playfair = { fontFamily: "'Playfair Display SC', serif" } as React.CSSProperties;

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main style={{ backgroundColor: '#F7F4EE', padding: '80px 32px 100px', minHeight: '70vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ ...playfair, fontSize: 'clamp(32px, 5vw, 48px)', color: '#1A1A1A', marginBottom: '16px', letterSpacing: '0.02em' }}>
            FAQs
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', marginBottom: '48px' }} />
          <FaqAccordion />
        </div>
      </main>
      <Footer />
    </>
  );
}
