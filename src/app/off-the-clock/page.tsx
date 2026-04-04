"use client";

import { useTheme } from "@/components/ThemeProvider";
import { FadeIn } from "@/components/FadeIn";
import Bookshelf from "@/components/widgets/Bookshelf";
import BingeWidget from "@/components/widgets/BingeWidget";

const CURRENTLY = [
  {
    label: "Moving",
    emoji: "💪",
    value: "Rebecca Kennedy's HILIT training plan on Peloton",
    detail: "Fave instructors: Rebecca Kennedy, Jess King, Kirra Michel, Tunde Oyeneyin",
  },
  {
    label: "Exploring",
    emoji: "🗺️",
    value: "Weekend hikes and bike rides with the fam",
    detail: "Currently on a pump track kick — the little one is fearless",
  },
  {
    label: "Energized by",
    emoji: "✨",
    value: "Building things with AI after bedtime",
    detail: "This site, a leadership journal, and games for my kid",
  },
  {
    label: "Bringing me joy",
    emoji: "🎧",
    value: "The Good Hang with Amy Poehler",
    detail: "Funny, warm, and exactly the vibe I need at the end of the day",
  },
];

export default function OffTheClock() {
  const theme = useTheme();

  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <FadeIn delay={100}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: theme.muted, marginBottom: 12 }}
          >
            Off the clock
          </p>
          <h1
            className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: theme.text, margin: "0 0 12px 0" }}
          >
            What I&apos;m into{" "}
            <em style={{ color: theme.accent }}>right now.</em>
          </h1>
          <p
            className="font-sans text-base leading-relaxed md:text-lg"
            style={{
              color: theme.muted,
              maxWidth: 560,
              marginBottom: 56,
            }}
          >
            The stuff that fills my cup outside of work. This page is always
            changing.
          </p>
        </FadeIn>

        {/* Currently list */}
        <FadeIn delay={250}>
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {CURRENTLY.map((item, i) => (
              <div
                key={i}
                className="card-glow rounded-xl p-5"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.accent}15`,
                  "--glow-bg": theme.ambientGlow,
                } as React.CSSProperties}
              >
                <p
                  className="m-0 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: theme.accent }}
                >
                  {item.emoji} Currently {item.label.toLowerCase()}
                </p>
                <p
                  className="mt-1.5 font-serif text-lg"
                  style={{ color: theme.text, margin: "6px 0 0 0" }}
                >
                  {item.value}
                </p>
                <p
                  className="font-sans text-sm"
                  style={{ color: theme.muted, margin: "4px 0 0 0" }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Visual cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Bookshelf */}
          <FadeIn
            delay={400}
            className="card-glow rounded-xl p-5"
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.accent}15`,
              "--glow-bg": theme.ambientGlow,
            } as React.CSSProperties}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: theme.muted, marginBottom: 12 }}
            >
              📚 Currently reading
            </p>
            <p
              className="font-serif text-xl"
              style={{ color: theme.text, margin: "0 0 20px 0" }}
            >
              no shame in my{" "}
              <em style={{ color: theme.accent }}>reading game.</em>
            </p>
            <Bookshelf />
          </FadeIn>

          {/* Binge shows */}
          <FadeIn
            delay={550}
            className="card-glow rounded-xl p-5"
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.accent}15`,
              "--glow-bg": theme.ambientGlow,
            } as React.CSSProperties}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: theme.muted, marginBottom: 12 }}
            >
              📺 Currently bingeing
            </p>
            <p
              className="font-serif text-xl"
              style={{ color: theme.text, margin: "0 0 20px 0" }}
            >
              Bravo & reality TV are{" "}
              <em style={{ color: theme.accent }}>self-care.</em>
            </p>
            <BingeWidget />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
