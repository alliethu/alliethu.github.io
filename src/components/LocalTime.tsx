"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function LocalTime() {
  const theme = useTheme();

  if (!theme.time) return null;

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-end gap-0.5 select-none pointer-events-none"
      aria-hidden="true"
    >
      <span
        className="font-mono text-xs tracking-widest"
        style={{ color: theme.muted, opacity: 0.6 }}
      >
        local time
      </span>
      <span
        className="font-mono text-sm font-medium tracking-wider"
        style={{ color: theme.accent }}
      >
        {theme.time}
      </span>
    </div>
  );
}
