"use client";
import { motion } from "framer-motion";
import React from "react";

interface GalleryItem {
  id: number;
  title?: string;
  description?: string;
  imageUrl: string;
  category?: string;
  className?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export const GalleryGrid = ({ items }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className={`relative group overflow-hidden rounded-lg border border-white/20 bg-black/40 backdrop-blur-sm hover:border-white/40 transition-all duration-300 ${
            item.className || ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
          whileHover={{ 
            y: -5,
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Glitch Effect Border */}
          <div className="absolute inset-0 border border-white/0 group-hover:border-white/60 transition-all duration-300 rounded-lg" />
          <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 transition-all duration-300 rounded-lg transform group-hover:translate-x-1 group-hover:translate-y-1" />
        </motion.div>
      ))}
    </div>
  );
};

export const BentoGallery = ({ items }: GalleryGridProps) => {
  const getBentoClass = (index: number) => {
    const patterns = [
      "md:col-span-2 md:row-span-2", // Large square
      "md:col-span-1 md:row-span-1", // Small square
      "md:col-span-1 md:row-span-2", // Tall rectangle
      "md:col-span-2 md:row-span-1", // Wide rectangle
      "md:col-span-1 md:row-span-1", // Small square
      "md:col-span-1 md:row-span-1", // Small square
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-[200px]">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className={`relative group overflow-hidden rounded-lg border border-white/20 bg-black/40 backdrop-blur-sm hover:border-white/40 transition-all duration-300 ${getBentoClass(
            index
          )} ${item.className || ""}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
          whileHover={{ 
            y: -3,
            transition: { duration: 0.2 }
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          </div>
          
          {/* Tactical Grid Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
