"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// ─── Theme definitions ──────────────────────────────────────────────────────

export interface Theme {
  key: "morning" | "afternoon" | "evening" | "night";
  bg: string;
  text: string;
  muted: string;
  accent: string;
  linkAccent: string;
  lineColor: string;
  textGlow: string;
  cardBg: string;
  navBorder: string;
  ambientGlow: string;
  time: string;
}

const THEMES: Record<string, Omit<Theme, "time">> = {
  morning: {
    key: "morning",
    bg: "linear-gradient(165deg, #faeee6 0%, #f4e2d4 40%, #eedace 100%)",
    text: "#2a1c14",
    muted: "#6b5444",
    accent: "#b87530",
    linkAccent: "#9a6228",
    lineColor: "rgba(184, 117, 48, 0.25)",
    textGlow:
      "0 0 40px rgba(184, 117, 48, 0.25), 0 0 80px rgba(184, 117, 48, 0.08)",
    cardBg: "rgba(255,255,255,0.45)",
    navBorder: "linear-gradient(to right, #b87530, transparent)",
    ambientGlow:
      "radial-gradient(ellipse 80% 50% at 50% 105%, rgba(230, 160, 90, 0.25) 0%, rgba(220, 130, 80, 0.1) 40%, transparent 70%)",
  },
  afternoon: {
    key: "afternoon",
    bg: "linear-gradient(165deg, #f5f0ea 0%, #f0e8dc 40%, #ebe3d5 100%)",
    text: "#1a1a1a",
    muted: "#5a5347",
    accent: "#a67c08",
    linkAccent: "#845f08",
    lineColor: "rgba(166, 124, 8, 0.25)",
    textGlow:
      "0 0 40px rgba(166, 124, 8, 0.25), 0 0 80px rgba(166, 124, 8, 0.08)",
    cardBg: "rgba(255,255,255,0.5)",
    navBorder: "linear-gradient(to right, #a67c08, transparent)",
    ambientGlow:
      "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(250, 220, 140, 0.25) 0%, rgba(245, 200, 100, 0.1) 50%, transparent 70%)",
  },
  evening: {
    key: "evening",
    bg: "linear-gradient(165deg, #eee4ea 0%, #e2d2de 40%, #d6c4d0 100%)",
    text: "#261a24",
    muted: "#6a4e62",
    accent: "#8e5878",
    linkAccent: "#7a4868",
    lineColor: "rgba(142, 88, 120, 0.28)",
    textGlow:
      "0 0 40px rgba(142, 88, 120, 0.28), 0 0 80px rgba(142, 88, 120, 0.1)",
    cardBg: "rgba(255,255,255,0.42)",
    navBorder: "linear-gradient(to right, #8e5878, transparent)",
    ambientGlow:
      "radial-gradient(ellipse 90% 40% at 50% 105%, rgba(180, 120, 160, 0.22) 0%, rgba(160, 100, 140, 0.08) 45%, transparent 70%)",
  },
  night: {
    key: "night",
    bg: "linear-gradient(165deg, #1e1a18 0%, #252018 40%, #1a1810 100%)",
    text: "#e8e0d8",
    muted: "#b8a898",
    accent: "#d4a574",
    linkAccent: "#d4a574",
    lineColor: "rgba(212, 165, 116, 0.25)",
    textGlow:
      "0 0 40px rgba(212, 165, 116, 0.25), 0 0 80px rgba(212, 165, 116, 0.08)",
    cardBg: "rgba(255,255,255,0.06)",
    navBorder: "linear-gradient(to right, #d4a574, transparent)",
    ambientGlow:
      "radial-gradient(ellipse 60% 50% at 70% 10%, rgba(180, 170, 150, 0.1) 0%, rgba(160, 150, 130, 0.04) 50%, transparent 70%)",
  },
};

function getThemeForHour(h: number) {
  if (h >= 5 && h < 12) return THEMES.morning;
  if (h >= 12 && h < 17) return THEMES.afternoon;
  if (h >= 17 && h < 20) return THEMES.evening;
  return THEMES.night;
}

// ─── Context ────────────────────────────────────────────────────────────────

const THEME_KEYS: Theme["key"][] = ["morning", "afternoon", "evening", "night"];

interface ThemeContextValue {
  theme: Theme;
  override: Theme["key"] | null;
  setOverride: (key: Theme["key"] | null) => void;
  themeKeys: Theme["key"][];
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): Theme {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx.theme;
}

export function useThemeSwitcher() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeSwitcher must be used within <ThemeProvider>");
  return { override: ctx.override, setOverride: ctx.setOverride, themeKeys: ctx.themeKeys, currentKey: ctx.theme.key };
}

// ─── Provider ───────────────────────────────────────────────────────────────

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [now, setNow] = useState<Date | null>(null);
  const [override, setOverride] = useState<Theme["key"] | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Default to afternoon theme for SSR, hydrate with real time on client
  const autoBase = now ? getThemeForHour(now.getHours()) : THEMES.afternoon;
  const base = override ? THEMES[override] : autoBase;
  const time = now
    ? now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "";

  const theme: Theme = { ...base, time } as Theme;

  // Inject CSS variables for Tailwind integration
  useEffect(() => {
    if (!now) return;
    const root = document.documentElement;
    root.style.setProperty("--background", theme.bg);
    root.style.setProperty("--foreground", theme.text);
    root.style.setProperty("--muted", theme.muted);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--link-accent", theme.linkAccent);
    root.style.setProperty("--line-color", theme.lineColor);
    root.style.setProperty("--card-bg", theme.cardBg);
    root.style.setProperty("--ambient-glow", theme.ambientGlow);
    root.style.setProperty("--nav-border", theme.navBorder);
  }, [theme, now]);

  return (
    <ThemeContext.Provider value={{ theme, override, setOverride, themeKeys: THEME_KEYS }}>
      {children}
    </ThemeContext.Provider>
  );
}
