"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const READING_SHELF = [
  { title: "Fourth Wing", author: "Rebecca Yarros", bg: "#c2847a" },
  { title: "The Hunger Games", author: "Suzanne Collins", bg: "#c9a96e" },
  { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", bg: "#8b7ba5" },
  { title: "Divergent", author: "Veronica Roth", bg: "#7ca0b8" },
  { title: "Six of Crows", author: "Leigh Bardugo", bg: "#5c5c6d" },
  { title: "The Maze Runner", author: "James Dashner", bg: "#7a9c82" },
];

const HEIGHTS = [130, 118, 142, 112, 136, 124];

export default function Bookshelf() {
  const theme = useTheme();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      <div className="flex items-end gap-1" style={{ height: 150 }}>
        {READING_SHELF.map((book, i) => {
          const active = hovered === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: active ? 120 : 28,
                height: HEIGHTS[i],
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: active ? "translateY(-6px)" : "none",
                cursor: "pointer",
                borderRadius: active ? 6 : 2,
                overflow: "hidden",
                flexShrink: 0,
                background: book.bg,
              }}
            >
              {active ? (
                <div className="flex h-full flex-col justify-between p-2.5">
                  <p className="m-0 font-serif text-xs font-bold leading-tight text-white">
                    {book.title}
                  </p>
                  <p className="m-0 font-sans text-[10px] text-white/80">
                    {book.author}
                  </p>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span
                    className="font-sans text-[7px] text-white/50"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {book.title.length > 14
                      ? book.title.slice(0, 14) + "…"
                      : book.title}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div
        className="mt-1 rounded-sm"
        style={{
          height: 6,
          background: "#8b7355",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      />
      <p className="mt-2 font-sans text-[11px]" style={{ color: theme.muted }}>
        hover a spine to peek
      </p>
    </div>
  );
}
