"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

const ADVENTURES = [
  { place: "Zion National Park", type: "hike", emoji: "🏜️", note: "Angels Landing was unreal" },
  { place: "Amsterdam", type: "travel", emoji: "🇳🇱", note: "Biked the canals with the fam" },
  { place: "Local trails", type: "dog walk", emoji: "🐕", note: "Muddy paws, happy hearts" },
  { place: "Kyoto, Japan", type: "travel", emoji: "🇯🇵", note: "Temples, ramen, repeat" },
  { place: "Moab, UT", type: "bike", emoji: "🚵‍♀️", note: "Red rock magic" },
  { place: "Banff, Canada", type: "hike", emoji: "🏔️", note: "Turquoise lakes forever" },
];

export default function AdventureLog() {
  const theme = useTheme();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((p) => (p + 1) % ADVENTURES.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  const adv = ADVENTURES[active];

  return (
    <div>
      <div className="mb-3.5 flex flex-wrap gap-2.5">
        {ADVENTURES.map((a, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="border-none bg-transparent p-0 text-[22px]"
            style={{
              cursor: "pointer",
              transition: "all 0.2s",
              transform: i === active ? "scale(1.3)" : "scale(1)",
              opacity: i === active ? 1 : 0.35,
            }}
          >
            {a.emoji}
          </button>
        ))}
      </div>
      <div
        className="rounded-[10px] p-4"
        style={{
          background: theme.cardBg,
          border: `1px solid ${theme.accent}20`,
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="flex items-center justify-between">
          <p
            className="m-0 font-serif text-base font-bold"
            style={{ color: theme.text }}
          >
            {adv.place}
          </p>
          <span
            className="inline-block rounded-full px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider"
            style={{ background: "#f0ebe3", color: "#7a6e5e" }}
          >
            {adv.type}
          </span>
        </div>
        <p
          className="mt-2.5 font-serif text-sm italic"
          style={{ color: theme.muted }}
        >
          &ldquo;{adv.note}&rdquo;
        </p>
      </div>
    </div>
  );
}
