"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function AmbientGlow() {
  const theme = useTheme();

  return (
    <div
      className="pointer-events-none fixed inset-0"
      style={{
        background: theme.ambientGlow,
        transition: "background 1.5s ease",
        zIndex: -1,
      }}
      aria-hidden="true"
    />
  );
}
