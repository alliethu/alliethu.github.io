"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const SHOWS = [
  { title: "Summer House", network: "Bravo", emoji: "🏖️", note: "chaotic summer energy" },
  { title: "Below Deck", network: "Bravo", emoji: "⛵", note: "yachts + drama = perfect" },
  { title: "Real Housewives of SLC", network: "Bravo", emoji: "🏔️", note: "unhinged in the best way" },
  { title: "Real Housewives of Potomac", network: "Bravo", emoji: "🥂", note: "the shade is elite" },
  { title: "Real Housewives of Beverly Hills", network: "Bravo", emoji: "💎", note: "the OGs of mess" },
  { title: "Love Is Blind", network: "Netflix", emoji: "💍", note: "screaming at my TV" },
  { title: "Great British Baking Show", network: "Netflix", emoji: "🧁", note: "the palate cleanser I need" },
];

export default function BingeWidget() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {SHOWS.map((show, i) => {
        const isOpen = expanded === i;
        return (
          <div
            key={i}
            onClick={() => setExpanded(isOpen ? null : i)}
            className="cursor-pointer rounded-xl px-3 py-2.5 transition-all"
            style={{
              background: `${theme.accent}08`,
              border: `1px solid ${theme.accent}${isOpen ? "20" : "10"}`,
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-lg">{show.emoji}</span>
              <div className="min-w-0 flex-1">
                <p
                  className="m-0 truncate font-serif text-sm font-bold"
                  style={{ color: theme.text }}
                >
                  {show.title}
                </p>
                <p
                  className="m-0 font-sans text-[11px]"
                  style={{ color: theme.muted }}
                >
                  {show.network}
                </p>
              </div>
            </div>
            {isOpen && (
              <p
                className="mt-2 font-serif text-xs italic"
                style={{ color: theme.muted, margin: "8px 0 0 30px" }}
              >
                &ldquo;{show.note}&rdquo;
              </p>
            )}
          </div>
        );
      })}
      <p className="mt-1 font-sans text-[10px]" style={{ color: theme.muted }}>
        tap to expand
      </p>
    </div>
  );
}
