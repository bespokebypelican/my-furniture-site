import type { Metadata } from 'next';
import Image from 'next/image';
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
          <div style={{ position: "relative", overflow: "hidden", marginBottom: "24px", width: "100%", height: "500px" }}>
            <Image
              src="https://images.unsplash.com/photo-1687180497278-ca4d736ecc99?w=1600&q=80"
              alt="Luxury furniture inspiration"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </div>
          <div style={{ textAlign: "center", padding: "0 16px" }}>
            <h1 style={{ fontFamily: "'Playfair Display SC', serif", fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 500, letterSpacing: "0.2em", color: "#2a2a2a", marginBottom: "8px" }}>
              DESIGNS WORTH LIVING WITH
            </h1>
            <p style={{ fontSize: "14px", color: "#999", fontStyle: "italic" }}>
              Curated pieces for the modern home
            </p>
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
