"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const MOVEMENT = [
  { move: "Deadlift PR", detail: "feeling strong", icon: "🏋️‍♀️" },
  { move: "Morning run", detail: "5 miles before sunrise", icon: "🏃‍♀️" },
  { move: "Yoga flow", detail: "stretch & breathe", icon: "🧘‍♀️" },
  { move: "Bike ride", detail: "20mi neighborhood loop", icon: "🚴‍♀️" },
];

export default function MovementWidget() {
  const theme = useTheme();
  const [idx, setIdx] = useState(0);
  const m = MOVEMENT[idx];

  return (
    <div
      onClick={() => setIdx((p) => (p + 1) % MOVEMENT.length)}
      className="cursor-pointer text-center"
      style={{
        background: theme.cardBg,
        borderRadius: 10,
        padding: 24,
        border: `1px solid ${theme.accent}15`,
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="mb-2.5 text-[40px]"
        style={{ animation: "gentleBounce 2s ease-in-out infinite" }}
      >
        {m.icon}
      </div>
      <p className="m-0 font-serif text-base font-bold" style={{ color: theme.text }}>
        {m.move}
      </p>
      <p className="mt-1 font-sans text-[13px]" style={{ color: theme.muted }}>
        {m.detail}
      </p>
      <p className="mt-3 font-sans text-[10px]" style={{ color: theme.muted }}>
        tap to shuffle
      </p>
    </div>
  );
}
