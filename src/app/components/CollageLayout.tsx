"use client"
import { useState } from "react";
import { FurnitureCard } from "./FurnitureCard";

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

export function CollageLayout({ items = collageItems }: { items?: CollageItem[] }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleTap = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div style={{ columns: "3", columnGap: "8px", width: "100%" }} className="masonry-grid">
      {items.map((item) => (
        <div key={item.id} style={{ breakInside: "avoid", marginBottom: "8px" }}>
          <FurnitureCard
            imageUrl={item.imageUrl}
            title={item.title}
            category={item.category}
            aspectRatio={item.aspectRatio}
            isActive={activeId === item.id}
            onTap={() => handleTap(item.id)}
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