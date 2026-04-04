"use client";

import { useTheme, useThemeSwitcher } from "@/components/ThemeProvider";

const THEME_COLORS: Record<string, { light: string; dark: string }> = {
  morning: { light: "#8a5518", dark: "#e0a060" },
  afternoon: { light: "#7a5c00", dark: "#d4b44c" },
  evening: { light: "#6e3e5c", dark: "#c88aae" },
  night: { light: "#6b5040", dark: "#d4a574" },
};

export default function Footer() {
  const theme = useTheme();
  const { override, setOverride, themeKeys, currentKey } = useThemeSwitcher();

  return (
    <footer style={{ borderTop: `1px solid ${theme.accent}20` }}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between md:px-12 md:py-8">
        <p className="text-xs" style={{ color: theme.muted }}>
          &copy; {new Date().getFullYear()} Allie Thu &middot; made with
          &hearts;
        </p>
        <div className="flex items-center gap-1 order-last md:order-none">
          {themeKeys.map((key) => {
            const isActive = key === currentKey;
            const isDark = currentKey === "night";
            const keyColor = isDark ? THEME_COLORS[key].dark : THEME_COLORS[key].light;
            return (
              <button
                key={key}
                onClick={() => setOverride(key === override ? null : key)}
                className="px-2 py-1 text-[10px] tracking-widest uppercase rounded-full transition-all duration-300"
                style={{
                  color: keyColor,
                  opacity: isActive ? 1 : 0.8,
                  background: isActive ? `${keyColor}20` : "transparent",
                }}
                aria-label={`Switch to ${key} theme`}
                title={key === override ? `Return to auto` : key}
              >
                {key}
              </button>
            );
          })}
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/alliethu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold"
            style={{ color: theme.muted, textDecoration: "none" }}
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="mailto:alliethu6@gmail.com"
            className="text-xs font-semibold"
            style={{ color: theme.muted, textDecoration: "none" }}
            aria-label="Send email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
