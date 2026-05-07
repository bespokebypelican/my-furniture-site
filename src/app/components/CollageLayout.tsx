"use client"
import { useState, useEffect } from "react";
import { FurnitureCard } from "./FurnitureCard";
import { supabase } from "../../../lib/supabase";
import { Search, ChevronDown } from "lucide-react";

type SupabasePhoto = {
  id: number;
  image_url: string;
  title?: string;
  category?: string;
  style?: string;
  tone?: string;
  aspect_ratio?: string;
};

type CollageItem = {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  aspectRatio: string;
};

export function CollageLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [style, setStyle] = useState("");
  const [tone, setTone] = useState("");
  const [photos, setPhotos] = useState<CollageItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      let query = supabase.from("inspiration_photos").select("*");
      if (searchQuery) query = query.ilike("title", `%${searchQuery}%`);
      if (category) query = query.eq("category", category);
      if (style) query = query.eq("style", style);
      if (tone) query = query.eq("tone", tone);

      const { data, error } = await query;
      if (error) {
        console.error("[Supabase] Fetch failed:", error.message);
        return;
      }
      setPhotos(
        (data ?? []).map((row: SupabasePhoto) => {
          return {
            id: row.id,
            imageUrl: row.image_url ?? (row as any).Image_url ?? "",
            title: row.title ?? "",
            category: row.category ?? "",
            aspectRatio: row.aspect_ratio ?? "4/3",
          };
        })
      );
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, category, style, tone]);

  return (
    <div>
      {/* Filter Bar */}
      <div style={{ backgroundColor: "white", borderTop: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", padding: "20px 16px", marginBottom: "40px" }}>
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
            <select
              className="insp-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: "100%", appearance: "none", border: "1px solid #e0e0e0", fontSize: "14px", padding: "10px 32px 10px 12px", outline: "none", cursor: "pointer", color: "#000" }}
            >
              <option value="">Category</option>
              <option value="Living Room">Living Room</option>
              <option value="Dining Room">Dining Room</option>
              <option value="Bedroom">Bedroom</option>
            </select>
            <ChevronDown style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", color: "#999", pointerEvents: "none" }} size={16} />
          </div>
          <div style={{ position: "relative", flex: "1 1 110px" }}>
            <select
              className="insp-select"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              style={{ width: "100%", appearance: "none", border: "1px solid #e0e0e0", fontSize: "14px", padding: "10px 32px 10px 12px", outline: "none", cursor: "pointer", color: "#000" }}
            >
              <option value="">Style</option>
              <option value="Modern">Modern</option>
              <option value="Minimal">Minimal</option>
              <option value="Classic">Classic</option>
            </select>
            <ChevronDown style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", color: "#999", pointerEvents: "none" }} size={16} />
          </div>
          <div style={{ position: "relative", flex: "1 1 110px" }}>
            <select
              className="insp-select"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              style={{ width: "100%", appearance: "none", border: "1px solid #e0e0e0", fontSize: "14px", padding: "10px 32px 10px 12px", outline: "none", cursor: "pointer", color: "#000" }}
            >
              <option value="">Tone</option>
              <option value="Neutral">Neutral</option>
              <option value="Warm">Warm</option>
              <option value="Cool">Cool</option>
            </select>
            <ChevronDown style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", color: "#999", pointerEvents: "none" }} size={16} />
          </div>
        </div>
        <style>{`
          .insp-select { color: #000; background-color: white; }
          .insp-select option { color: #000; background-color: white; }
          .insp-select option:hover { background-color: #F2C641 !important; color: #000 !important; }
          .insp-select option:checked { background-color: white !important; color: #000 !important; }
        `}</style>
      </div>

      {/* Masonry Grid */}
      <div style={{ columns: "3", columnGap: "8px", width: "100%" }} className="masonry-grid">
        {photos.map((item, index) => (
          <div key={item.id} style={{ breakInside: "avoid", marginBottom: "8px" }}>
            <FurnitureCard
              imageUrl={item.imageUrl}
              title={item.title}
              category={item.category}
              isActive={activeIndex === index}
              onTap={() => setActiveIndex(activeIndex === index ? null : index)}
              aspectRatio={item.aspectRatio}
            />
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) { .masonry-grid { columns: 2 !important; } }
        @media (max-width: 480px) { .masonry-grid { columns: 2 !important; } }
      `}</style>
    </div>
  );
}
