"use client"
import { motion } from "motion/react";
import { useState } from "react";

interface FurnitureCardProps {
  imageUrl: string;
  title: string;
  category: string;
  isActive: boolean;
  onTap: () => void;
}

export function FurnitureCard({ imageUrl, title, category, isActive, onTap }: FurnitureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isTouch = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
  const showPanel = isTouch ? isActive : isHovered;

  return (
    <div
      className="relative overflow-hidden cursor-pointer w-full"
      style={{ borderRadius: 0 }}
      onMouseEnter={() => { if (!isTouch) setIsHovered(true); }}
      onMouseLeave={() => { if (!isTouch) setIsHovered(false); }}
      onClick={onTap}
    >
      <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />

      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ backgroundColor: "#f7f7f7", padding: "8% 10%" }}
        animate={{ y: showPanel ? 0 : "100%" }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1], delay: showPanel ? 0.07 : 0 }}
      >
        <h3 className="card-title" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 500,
          color: "#1a1a1a",
          marginBottom: "0.2em",
          lineHeight: 1.2,
        }}>
          {title}
        </h3>
        <p className="uppercase card-category" style={{
          letterSpacing: "0.2em",
          color: "#666",
          lineHeight: 1.2,
        }}>
          {category}
        </p>
        <style>{`
          .card-title { font-size: 1em; }
          .card-category { font-size: 0.6em; }
          @media (max-width: 768px) {
            .card-title { font-size: 0.7em; }
            .card-category { font-size: 0.45em; }
          }
        `}</style>
      </motion.div>
    </div>
  );
}