import type { Metadata } from 'next';
import { CollageLayout } from "../../src/app/components/CollageLayout";
import AnnouncementBar from "../../src/app/components/AnnouncementBar";
import Navigation from "../../src/app/components/Navigation";
import Footer from "../../src/app/components/Footer";

export const metadata: Metadata = {
  title: 'Inspiration | Bespoke By Pelican',
  description: 'Browse our curated collection of luxury furniture designs. Find inspiration for your living room, bedroom and dining space with Bespoke By Pelican.',
  keywords: 'furniture inspiration, luxury interior design, modern furniture ideas, premium living room designs Bengaluru',
  alternates: { canonical: 'https://bespokebypelican.com/inspiration' },
};

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7", width: "100%", overflowX: "hidden" }}>
      <AnnouncementBar />
      <Navigation />
      <div className="mx-auto" style={{ maxWidth: "1400px", width: "100%", padding: "32px 16px" }}>

        {/* HERO SECTION */}
        <section style={{ marginBottom: "48px", width: "100%" }}>
          <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "500px" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
            >
              <source src="/Inspiration banner.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              padding: '0 24px',
              textAlign: 'center',
            }}>
              <h1 style={{
                fontFamily: "'Playfair Display SC', serif",
                fontSize: 'clamp(24px, 4vw, 48px)',
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.3,
              }}>
                Your Vision. Our Craft. Powered By AI.
              </h1>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(13px, 1.5vw, 16px)',
                color: '#D4D0C8',
                letterSpacing: '0.04em',
                fontWeight: 300,
                margin: 0,
              }}>
                Describe your space — our AI will design it for you.
              </p>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(12px, 1.2vw, 14px)',
                color: '#C9A96E',
                letterSpacing: '0.08em',
                fontStyle: 'italic',
                margin: 0,
              }}>
                The Future Of Bespoke Is Almost Here.
              </p>
            </div>
          </div>
        </section>

        {/* COLLAGE */}
        <section>
          <CollageLayout />
        </section>

      </div>
      <Footer />
    </div>
  );
}
