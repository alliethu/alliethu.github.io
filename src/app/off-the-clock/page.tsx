"use client";

import { useTheme } from "@/components/ThemeProvider";
import { FadeIn } from "@/components/FadeIn";
import Bookshelf from "@/components/widgets/Bookshelf";
import MovementWidget from "@/components/widgets/MovementWidget";
import AdventureLog from "@/components/widgets/AdventureLog";

export default function OffTheClock() {
  const theme = useTheme();

  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <FadeIn delay={100}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: theme.muted, marginBottom: 12 }}
          >
            Off the clock
          </p>
          <h1
            className="font-serif text-4xl leading-tight tracking-tight md:text-5xl"
            style={{ color: theme.text, margin: "0 0 12px 0" }}
          >
            The stuff that keeps me{" "}
            <em style={{ color: theme.accent }}>going.</em>
          </h1>
          <p
            className="font-sans text-base leading-relaxed"
            style={{
              color: theme.muted,
              maxWidth: 560,
              lineHeight: 1.7,
              marginBottom: 56,
            }}
          >
            Trails, barbells, books, and chasing the next adventure with my
            little family. This page is always changing.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Bookshelf */}
          <FadeIn
            delay={300}
            style={{
              background: theme.cardBg,
              borderRadius: 16,
              padding: 28,
              border: `1px solid ${theme.accent}15`,
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: theme.muted, marginBottom: 12 }}
            >
              📚 Evening reads
            </p>
            <p
              className="font-serif text-xl"
              style={{ color: theme.text, margin: "0 0 20px 0" }}
            >
              winding down with{" "}
              <em style={{ color: theme.accent }}>young adult fiction.</em>
            </p>
            <Bookshelf />
          </FadeIn>

          {/* Movement */}
          <FadeIn
            delay={450}
            style={{
              background: theme.cardBg,
              borderRadius: 16,
              padding: 28,
              border: `1px solid ${theme.accent}15`,
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: theme.muted, marginBottom: 12 }}
            >
              💪 Movement today
            </p>
            <p
              className="font-serif text-xl"
              style={{ color: theme.text, margin: "0 0 20px 0" }}
            >
              moving my body keeps me{" "}
              <em style={{ color: theme.accent }}>grounded.</em>
            </p>
            <MovementWidget />
          </FadeIn>

          {/* Adventures — full width */}
          <FadeIn
            delay={600}
            className="md:col-span-2"
            style={{
              background: theme.cardBg,
              borderRadius: 16,
              padding: 28,
              border: `1px solid ${theme.accent}15`,
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: theme.muted, marginBottom: 12 }}
            >
              🗺️ Adventure log
            </p>
            <p
              className="font-serif text-xl"
              style={{ color: theme.text, margin: "0 0 20px 0" }}
            >
              hiking, biking &amp; exploring{" "}
              <em style={{ color: theme.accent }}>with the fam.</em>
            </p>
            <AdventureLog />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
