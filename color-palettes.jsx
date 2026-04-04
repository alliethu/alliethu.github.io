import { useState } from "react";

const THEMES = {
  morning: {
    key: "morning",
    label: "Morning (5am–12pm)",
    icon: "☀️",
    bg: "linear-gradient(165deg, #faeee6 0%, #f4e2d4 40%, #eedace 100%)",
    text: "#2a1c14",
    muted: "#6b5444",
    accent: "#b87530",
    linkAccent: "#9a6228",
    lineColor: "rgba(184, 117, 48, 0.25)",
    textGlow: "0 0 40px rgba(184, 117, 48, 0.25), 0 0 80px rgba(184, 117, 48, 0.08)",
    cardBg: "rgba(255,255,255,0.45)",
    ambientGlow: "radial-gradient(ellipse 80% 50% at 50% 105%, rgba(230, 160, 90, 0.25) 0%, rgba(220, 130, 80, 0.1) 40%, transparent 70%)",
  },
  afternoon: {
    key: "afternoon",
    label: "Afternoon (12pm–5pm)",
    icon: "🌤️",
    bg: "linear-gradient(165deg, #f5f0ea 0%, #f0e8dc 40%, #ebe3d5 100%)",
    text: "#1a1a1a",
    muted: "#5a5347",
    accent: "#a67c08",
    linkAccent: "#845f08",
    lineColor: "rgba(166, 124, 8, 0.25)",
    textGlow: "0 0 40px rgba(166, 124, 8, 0.25), 0 0 80px rgba(166, 124, 8, 0.08)",
    cardBg: "rgba(255,255,255,0.5)",
    ambientGlow: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(250, 220, 140, 0.25) 0%, rgba(245, 200, 100, 0.1) 50%, transparent 70%)",
  },
  evening: {
    key: "evening",
    label: "Evening (5pm–8pm)",
    icon: "🌅",
    bg: "linear-gradient(165deg, #eee4ea 0%, #e2d2de 40%, #d6c4d0 100%)",
    text: "#261a24",
    muted: "#6a4e62",
    accent: "#8e5878",
    linkAccent: "#7a4868",
    lineColor: "rgba(142, 88, 120, 0.28)",
    textGlow: "0 0 40px rgba(142, 88, 120, 0.28), 0 0 80px rgba(142, 88, 120, 0.1)",
    cardBg: "rgba(255,255,255,0.42)",
    ambientGlow: "radial-gradient(ellipse 90% 40% at 50% 105%, rgba(180, 120, 160, 0.22) 0%, rgba(160, 100, 140, 0.08) 45%, transparent 70%)",
  },
  night: {
    key: "night",
    label: "Night (8pm–5am)",
    icon: "🌙",
    bg: "linear-gradient(165deg, #1e1a18 0%, #252018 40%, #1a1810 100%)",
    text: "#e8e0d8",
    muted: "#b8a898",
    accent: "#d4a574",
    linkAccent: "#d4a574",
    lineColor: "rgba(212, 165, 116, 0.25)",
    textGlow: "0 0 40px rgba(212, 165, 116, 0.25), 0 0 80px rgba(212, 165, 116, 0.08)",
    cardBg: "rgba(255,255,255,0.06)",
    ambientGlow: "radial-gradient(ellipse 60% 50% at 70% 10%, rgba(180, 170, 150, 0.1) 0%, rgba(160, 150, 130, 0.04) 50%, transparent 70%)",
  },
};

function Swatch({ color, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          background: color,
          border: "1px solid rgba(128,128,128,0.2)",
          flexShrink: 0,
        }}
      />
      <div style={{ fontSize: 11, lineHeight: 1.3 }}>
        <div style={{ fontWeight: 600, opacity: 0.7 }}>{label}</div>
        <div style={{ fontFamily: "monospace", fontSize: 10, opacity: 0.5 }}>{color}</div>
      </div>
    </div>
  );
}

function ThemeCard({ theme }) {
  return (
    <div
      style={{
        background: theme.bg,
        borderRadius: 16,
        padding: 28,
        position: "relative",
        overflow: "hidden",
        minHeight: 520,
      }}
    >
      {/* Ambient glow overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: theme.ambientGlow,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <span style={{ fontSize: 24 }}>{theme.icon}</span>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 20,
              fontWeight: 400,
              color: theme.text,
              margin: "8px 0 4px 0",
              textShadow: theme.textGlow,
            }}
          >
            {theme.label}
          </h3>
          <div style={{ width: 32, height: 1, background: theme.lineColor, margin: "12px 0" }} />
        </div>

        {/* Sample content */}
        <div style={{ marginBottom: 20 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 26,
              fontWeight: 400,
              color: theme.text,
              margin: "0 0 6px 0",
              lineHeight: 1.2,
            }}
          >
            Better systems.
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: theme.muted,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Design leader specializing in systems thinking and{" "}
            <em style={{ color: theme.accent }}>inclusive design.</em>
          </p>
        </div>

        {/* Sample card */}
        <div
          style={{
            background: theme.cardBg,
            borderRadius: 10,
            padding: 14,
            border: `1px solid ${theme.accent}20`,
            marginBottom: 16,
          }}
        >
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: theme.accent, margin: 0 }}>
            ✨ Currently exploring
          </p>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 15, color: theme.text, margin: "4px 0 0 0" }}>
            Weekend hikes with the fam
          </p>
          <p style={{ fontSize: 12, color: theme.muted, margin: "2px 0 0 0" }}>
            The little one is fearless
          </p>
        </div>

        {/* Sample link */}
        <div style={{ marginBottom: 20 }}>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              display: "inline-block",
              padding: "6px 16px",
              border: `1px solid ${theme.lineColor}`,
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 500,
              color: theme.linkAccent,
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            Come on in →
          </a>
        </div>

        {/* Color swatches */}
        <div style={{ borderTop: `1px solid ${theme.lineColor}`, paddingTop: 14 }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: theme.muted, marginBottom: 10 }}>
            Palette
          </p>
          <Swatch color={theme.text} label="Text" />
          <Swatch color={theme.muted} label="Muted" />
          <Swatch color={theme.accent} label="Accent" />
          <Swatch color={theme.linkAccent} label="Link Accent" />
          <Swatch color={theme.lineColor} label="Line" />
          <Swatch color={theme.cardBg} label="Card BG" />
        </div>
      </div>
    </div>
  );
}

export default function ColorPalettes() {
  const [selected, setSelected] = useState(null);
  const themeEntries = Object.values(THEMES);

  return (
    <div style={{ background: "#f0ece8", minHeight: "100vh", padding: "40px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 32,
            fontWeight: 400,
            color: "#2a1c14",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Time-of-Day Palettes
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: "#6b5444",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Your site shifts automatically based on local time. Here are all four moods side by side.
        </p>

        {/* Toggle: grid vs single */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32 }}>
          <button
            onClick={() => setSelected(null)}
            style={{
              padding: "6px 16px",
              borderRadius: 999,
              border: `1px solid ${!selected ? "#b87530" : "rgba(184,117,48,0.25)"}`,
              background: !selected ? "rgba(184,117,48,0.1)" : "transparent",
              color: !selected ? "#b87530" : "#6b5444",
              fontSize: 12,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            All
          </button>
          {themeEntries.map((t) => (
            <button
              key={t.key}
              onClick={() => setSelected(t.key)}
              style={{
                padding: "6px 16px",
                borderRadius: 999,
                border: `1px solid ${selected === t.key ? "#b87530" : "rgba(184,117,48,0.25)"}`,
                background: selected === t.key ? "rgba(184,117,48,0.1)" : "transparent",
                color: selected === t.key ? "#b87530" : "#6b5444",
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              {t.icon} {t.key}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: selected ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            maxWidth: selected ? 400 : "none",
            margin: selected ? "0 auto" : undefined,
          }}
        >
          {(selected ? [THEMES[selected]] : themeEntries).map((t) => (
            <ThemeCard key={t.key} theme={t} />
          ))}
        </div>
      </div>
    </div>
  );
}