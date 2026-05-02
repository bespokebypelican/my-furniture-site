"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import { CollageLayout, collageItems } from "../../src/app/components/CollageLayout";
import AnnouncementBar from "../../src/app/components/AnnouncementBar";
import Navigation from "../../src/app/components/Navigation";
import Footer from "../../src/app/components/Footer";
import { Search, ChevronDown } from "lucide-react";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedItems, setDisplayedItems] = useState(collageItems);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const idCounterRef = useRef(collageItems.length);

  const loadMore = useCallback(() => {
    setDisplayedItems(prev => [
      ...prev,
      ...collageItems.map(item => ({ ...item, id: ++idCounterRef.current })),
    ]);
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) loadMore(); },
      { rootMargin: "300px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7", width: "100%", overflowX: "hidden" }}>
      <AnnouncementBar />
      <Navigation />
      <div className="mx-auto" style={{ maxWidth: "1400px", width: "100%", padding: "32px 16px" }}>
        
        {/* HERO SECTION */}
        <section style={{ marginBottom: "48px", width: "100%" }}>
          <div style={{ overflow: "hidden", marginBottom: "24px", width: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1687180497278-ca4d736ecc99?w=1600&q=80"
              alt="Hero"
              style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ textAlign: "center", padding: "0 16px" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 500, letterSpacing: "0.2em", color: "#2a2a2a", marginBottom: "8px" }}>
              DESIGNS WORTH LIVING WITH
            </h1>
            <p style={{ fontSize: "14px", color: "#999", fontStyle: "italic" }}>
              Curated pieces for the modern home
            </p>
          </div>
        </section>

        {/* FILTER BAR */}
        <section style={{ marginBottom: "40px", width: "100%" }}>
          <div style={{ backgroundColor: "white", borderTop: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", padding: "20px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <div style={{ flex: "1 1 200px", position: "relative" }}>
                <Search style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#999" }} size={18} />
                <input
                  type="text"
                  placeholder="Search furniture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ width: "100%", border: "1px solid #e0e0e0", fontSize: "14px", paddingLeft: "44px", paddingRight: "16px", paddingTop: "10px", paddingBottom: "10px", outline: "none", color: "#2a2a2a", backgroundColor: "white" }}
                />
              </div>
              <div style={{ position: "relative", flex: "1 1 110px" }}>
                <select className="insp-select" style={{ width: "100%", appearance: "none", border: "1px solid #e0e0e0", fontSize: "14px", padding: "10px 32px 10px 12px", outline: "none", cursor: "pointer", color: "#000" }}>
                  <option>Category</option>
                  <option>Living Room</option>
                  <option>Dining Room</option>
                  <option>Bedroom</option>
                </select>
                <ChevronDown style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", color: "#999", pointerEvents: "none" }} size={16} />
              </div>
              <div style={{ position: "relative", flex: "1 1 110px" }}>
                <select className="insp-select" style={{ width: "100%", appearance: "none", border: "1px solid #e0e0e0", fontSize: "14px", padding: "10px 32px 10px 12px", outline: "none", cursor: "pointer", color: "#000" }}>
                  <option>Style</option>
                  <option>Modern</option>
                  <option>Minimal</option>
                  <option>Classic</option>
                </select>
                <ChevronDown style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", color: "#999", pointerEvents: "none" }} size={16} />
              </div>
              <div style={{ position: "relative", flex: "1 1 110px" }}>
                <select className="insp-select" style={{ width: "100%", appearance: "none", border: "1px solid #e0e0e0", fontSize: "14px", padding: "10px 32px 10px 12px", outline: "none", cursor: "pointer", color: "#000" }}>
                  <option>Color</option>
                  <option>Neutral</option>
                  <option>Warm</option>
                  <option>Cool</option>
                </select>
                <ChevronDown style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", color: "#999", pointerEvents: "none" }} size={16} />
              </div>
              <style>{`
                .insp-select { color: #000; background-color: white; }
                .insp-select option { color: #000; background-color: white; }
                .insp-select option:hover { background-color: #F2C641 !important; color: #000 !important; }
                .insp-select option:checked { background-color: white !important; color: #000 !important; }
              `}</style>
            </div>
          </div>
        </section>

        {/* COLLAGE */}
        <section>
          <CollageLayout items={displayedItems} />
          <div ref={sentinelRef} style={{ height: "1px" }} />
        </section>

      </div>
      <Footer />
    </div>
  );
}
