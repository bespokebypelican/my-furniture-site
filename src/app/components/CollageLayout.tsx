"use client"
import { useState, useRef, useEffect } from "react";
import { FurnitureCard } from "./FurnitureCard";
import { supabase } from "../../../lib/supabase";

export const collageItems = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1687180497278-ca4d736ecc99?w=1080&q=80", title: "Modern Living Space", category: "Living Room", aspectRatio: "3/2" },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?w=1080&q=80", title: "Contemporary Interior", category: "Living Room", aspectRatio: "1/1" },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1687180497716-5872969e5125?w=1080&q=80", title: "Minimal Elegance", category: "Living Room", aspectRatio: "5/3" },
  { id: 4, imageUrl: "https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?w=1080&q=80", title: "Dining Experience", category: "Dining Room", aspectRatio: "4/3" },
  { id: 5, imageUrl: "https://images.unsplash.com/photo-1661099548731-fc8f74fc9dd9?w=1080&q=80", title: "Luxe Comfort", category: "Bedroom", aspectRatio: "9/8" },
  { id: 6, imageUrl: "https://images.unsplash.com/photo-1775975789595-eff6a10aad95?w=1080&q=80", title: "Modern Sophistication", category: "Living Room", aspectRatio: "7/5" },
  { id: 7, imageUrl: "https://images.unsplash.com/photo-1661099548796-c7d5f67cfe36?w=1080&q=80", title: "Artisan Details", category: "Accessories", aspectRatio: "5/4" },
  { id: 8, imageUrl: "https://images.unsplash.com/photo-1680503146454-0fe569cef4eb?w=1080&q=80", title: "Refined Living", category: "Living Room", aspectRatio: "3/2" },
  { id: 9, imageUrl: "https://images.unsplash.com/photo-1760072513442-9872656c1b07?w=1080&q=80", title: "Contemporary Design", category: "Living Room", aspectRatio: "4/3" },
  { id: 10, imageUrl: "https://images.unsplash.com/photo-1661099549317-aa4e4ce33f16?w=1080&q=80", title: "Vintage Charm", category: "Accessories", aspectRatio: "2/1" },
];

type CollageItem = typeof collageItems[number];

type SupabasePhoto = {
  id: number;
  image_url: string;
  title?: string;
  category?: string;
  aspect_ratio?: string;
};

export function CollageLayout({ items = collageItems }: { items?: CollageItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sourceItems, setSourceItems] = useState<CollageItem[]>(items);
  const gridRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const isScrollingBack = useRef(false);

  useEffect(() => {
    async function fetchPhotos() {
      const { data, error } = await supabase.from("inspiration_photos").select("*");
      if (error || !data || data.length === 0) return;
      const mapped: CollageItem[] = (data as SupabasePhoto[]).map((row) => ({
        id: row.id,
        imageUrl: row.image_url,
        title: row.title ?? "",
        category: row.category ?? "",
        aspectRatio: row.aspect_ratio ?? "4/3",
      }));
      setSourceItems(mapped);
    }
    fetchPhotos();
  }, []);

  const displayItems = [...sourceItems, ...sourceItems];

  const handleTap = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const lastItem = lastItemRef.current;
    const grid = gridRef.current;
    if (!lastItem || !grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isScrollingBack.current) {
          isScrollingBack.current = true;
          window.scrollTo({ top: grid.offsetTop, behavior: "smooth" });
          setTimeout(() => {
            isScrollingBack.current = false;
          }, 1500);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(lastItem);
    return () => observer.disconnect();
  }, [displayItems.length]);

  return (
    <div
      ref={gridRef}
      style={{ columns: "3", columnGap: "8px", width: "100%" }}
      className="masonry-grid"
    >
      {displayItems.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          ref={index === displayItems.length - 1 ? lastItemRef : undefined}
          style={{ breakInside: "avoid", marginBottom: "8px" }}
        >
          <FurnitureCard
            imageUrl={item.imageUrl}
            title={item.title}
            category={item.category}
            aspectRatio={item.aspectRatio}
            isActive={activeIndex === index}
            onTap={() => handleTap(index)}
          />
        </div>
      ))}
      <style>{`
        @media (max-width: 768px) {
          .masonry-grid { columns: 2 !important; }
        }
        @media (max-width: 480px) {
          .masonry-grid { columns: 2 !important; }
        }
      `}</style>
    </div>
  );
}
