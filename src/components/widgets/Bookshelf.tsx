"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import booksData from "@/data/books.json";

const FALLBACK_COLORS = ["#c2847a", "#c9a96e", "#8b7ba5", "#7ca0b8", "#5c5c6d", "#7a9c82"];

export default function Bookshelf() {
  const theme = useTheme();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {booksData.books.map((book, i) => {
          const active = hovered === i;
          const bg = FALLBACK_COLORS[i % FALLBACK_COLORS.length];
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative overflow-hidden rounded-md"
              style={{
                aspectRatio: "2 / 3",
                background: bg,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: active ? "translateY(-4px)" : "none",
                boxShadow: active
                  ? "0 8px 20px rgba(0,0,0,0.15)"
                  : "0 2px 6px rgba(0,0,0,0.08)",
                cursor: "default",
              }}
            >
              {book.coverUrl && (
                <img
                  src={book.coverUrlLarge || book.coverUrl}
                  alt={`${book.title} by ${book.author}`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}

              {/* Title/author overlay on hover */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-2"
                style={{
                  background: active
                    ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)"
                    : "transparent",
                  opacity: active ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p className="m-0 font-serif text-[11px] font-bold leading-tight text-white">
                  {book.title}
                </p>
                <p className="m-0 mt-0.5 font-sans text-[9px] text-white/80">
                  {book.author}
                </p>
              </div>

              {/* Fallback text for books without covers */}
              {!book.coverUrl && (
                <div className="flex h-full flex-col items-center justify-center p-2 text-center">
                  <p className="m-0 font-serif text-xs font-bold leading-tight text-white">
                    {book.title}
                  </p>
                  <p className="m-0 mt-1 font-sans text-[10px] text-white/70">
                    {book.author}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
