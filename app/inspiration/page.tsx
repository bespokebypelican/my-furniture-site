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
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
          >
            <source src="/Inspiration banner.mp4" type="video/mp4" />
          </video>
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
