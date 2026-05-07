import type { Metadata } from 'next';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';

export const metadata: Metadata = {
  title: 'Blogs | Bespoke By Pelican',
  description: 'Insights on furniture design, craftsmanship, and interior living from the Bespoke By Pelican team.',
};

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main style={{ minHeight: '60vh', backgroundColor: '#F7F4EE', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 32px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ fontFamily: "'Playfair Display SC', serif", fontSize: 'clamp(28px, 5vw, 48px)', color: '#1A1A1A', marginBottom: '24px', letterSpacing: '-0.01em' }}>
            Blogs
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '15px', color: '#6B6560', lineHeight: 1.9, letterSpacing: '0.01em' }}>
            Stories, ideas, and insights from our studio — coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
