import type { Metadata } from 'next';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';

export const metadata: Metadata = {
  title: 'About Us | Bespoke By Pelican',
  description: 'Learn about Bespoke By Pelican — a luxury custom furniture brand based in Bengaluru, crafting bespoke pieces in solid teak, walnut, and oak.',
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
            About Us
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', marginBottom: '48px' }} />

          <p style={{ ...montserrat, fontSize: '16px', color: '#6B6560', lineHeight: 2, letterSpacing: '0.01em' }}>
            Bespoke By Pelican is a luxury furniture brand born out of a singular belief — that your home deserves furniture as unique as you are. We are part of the Pelican family, an internet-first brand of home furniture solutions designed and developed to your exact requirement.
          </p>
          <p style={{ ...montserrat, fontSize: '16px', color: '#6B6560', lineHeight: 2, letterSpacing: '0.01em', marginTop: '24px' }}>
            Every piece we create is a conversation between craft and character. We work with solid teak, walnut, and oak — materials chosen for their longevity, beauty, and soul. Our process begins with discovery, moves through meticulous product design, and culminates in precise development. No two pieces are ever truly identical.
          </p>
          <p style={{ ...montserrat, fontSize: '16px', color: '#6B6560', lineHeight: 2, letterSpacing: '0.01em', marginTop: '24px' }}>
            Based in Bengaluru, we serve clients across the city who believe that great furniture is not purchased — it is commissioned. Our showrooms in Kudlu and Mekhri Circle are experience centres, not just stores. We invite you to visit, touch, and feel the difference that bespoke craftsmanship makes.
          </p>
          <p style={{ ...montserrat, fontSize: '14px', color: '#C9A96E', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '56px', fontStyle: 'italic' }}>
            Never ordinary.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
