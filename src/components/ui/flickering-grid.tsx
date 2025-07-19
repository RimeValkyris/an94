"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface FlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
}

export function FlickeringGrid({
  className,
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(59, 130, 246)",
  width = 800,
  height = 600,
}: FlickeringGridProps) {
  const rows = Math.floor(height / (squareSize + gridGap));
  const cols = Math.floor(width / (squareSize + gridGap));

  const gridItems = useMemo(() => {
    const items = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      for (let colIndex = 0; colIndex < cols; colIndex++) {
        items.push(
          <motion.div
            key={`${rowIndex}-${colIndex}`}
            style={{
              width: squareSize,
              height: squareSize,
              backgroundColor: color,
              position: "absolute",
              left: colIndex * (squareSize + gridGap),
              top: rowIndex * (squareSize + gridGap),
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3, // Random duration between 3-7 seconds
              repeat: Infinity,
              delay: Math.random() * 5, // Random delay up to 5 seconds
              ease: "easeInOut",
            }}
          />
        );
      }
    }
    return items;
  }, [rows, cols, squareSize, gridGap, color]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center",
        className
      )}
      style={{
        mask: "radial-gradient(ellipse at center, black 50%, transparent 90%)",
        WebkitMask: "radial-gradient(ellipse at center, black 50%, transparent 90%)",
      }}
    >
      <div 
        className="relative"
        style={{
          width,
          height,
        }}
      >
        {gridItems}
      </div>
    </div>
  );
}
