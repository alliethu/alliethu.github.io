"use client";

import { useTheme } from "@/components/ThemeProvider";
import { FadeIn } from "@/components/FadeIn";

const PODCASTS = [
  {
    title: "Huberman Lab",
    topic: "Science of Strength & Recovery",
    icon: "🧠",
    why: "The deep dives into sleep and exercise science have genuinely changed my routines.",
  },
  {
    title: "The Tim Ferriss Show",
    topic: "World-Class Performance",
    icon: "🎯",
    why: "Love the interviews with people who think in systems — builders, athletes, leaders.",
  },
  {
    title: "Rich Roll Podcast",
    topic: "Plant-Powered Living",
    icon: "🌱",
    why: "Long-form conversations about endurance, purpose, and doing hard things.",
  },
  {
    title: "On Purpose with Jay Shetty",
    topic: "Mindset & Growth",
    icon: "✨",
    why: "The episodes on parenting and intention keep me grounded.",
  },
];

const ARTICLES = [
  { title: "Why Strength Training Changes Everything", source: "Outside Magazine", tag: "fitness" },
  { title: "The Case for Walking More", source: "The Atlantic", tag: "wellness" },
  { title: "Raising Adventurous Kids", source: "REI Co-op Journal", tag: "family" },
  { title: "Best YA Books of 2026", source: "Book Riot", tag: "reading" },
  { title: "The Quiet Power of Systems Thinking", source: "Harvard Business Review", tag: "leadership" },
];

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  fitness: { bg: "#f5e6e6", text: "#9a5555" },
  wellness: { bg: "#e6f0e6", text: "#557a55" },
  family: { bg: "#f5efe6", text: "#8b7355" },
  reading: { bg: "#eae6f0", text: "#6b5a82" },
  leadership: { bg: "#e6eaf0", text: "#556082" },
};

export default function AlwaysLearning() {
  const theme = useTheme();

  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <FadeIn delay={100}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: theme.muted, marginBottom: 12 }}
          >
            Always learning
          </p>
          <h1
            className="font-serif text-4xl leading-tight tracking-tight md:text-5xl"
            style={{ color: theme.text, margin: "0 0 12px 0" }}
          >
            What&apos;s feeding my brain{" "}
            <em style={{ color: theme.accent }}>lately.</em>
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
            The podcasts, articles, and ideas that are shaping how I think right
            now. Always evolving.
          </p>
        </FadeIn>

        {/* Podcasts */}
        <FadeIn delay={300}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: theme.muted, marginBottom: 12 }}
          >
            🎧 Podcasts I keep coming back to
          </p>
          <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PODCASTS.map((pod, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-xl p-5 transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.accent}15`,
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="mb-2.5 flex items-center gap-3">
                  <span className="text-2xl">{pod.icon}</span>
                  <div>
                    <p
                      className="m-0 font-serif text-base font-bold"
                      style={{ color: theme.text }}
                    >
                      {pod.title}
                    </p>
                    <p
                      className="mt-0.5 font-sans text-xs"
                      style={{ color: theme.muted }}
                    >
                      {pod.topic}
                    </p>
                  </div>
                </div>
                <p
                  className="m-0 font-sans text-[13px] leading-relaxed"
                  style={{ color: theme.muted }}
                >
                  {pod.why}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Articles */}
        <FadeIn delay={500}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: theme.muted, marginBottom: 12 }}
          >
            📰 Things I&apos;m reading
          </p>
          <div className="flex flex-col gap-2">
            {ARTICLES.map((a, i) => {
              const tagStyle = TAG_COLORS[a.tag] ?? {
                bg: "#f0ebe3",
                text: "#7a6e5e",
              };
              return (
                <div
                  key={i}
                  className="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-4 py-3.5 transition-transform duration-200 hover:translate-x-1"
                  style={{
                    background: theme.cardBg,
                    border: `1px solid ${theme.accent}15`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div>
                    <p
                      className="m-0 font-serif text-sm font-semibold"
                      style={{ color: theme.text }}
                    >
                      {a.title}
                    </p>
                    <p
                      className="mt-0.5 font-sans text-[11px]"
                      style={{ color: theme.muted }}
                    >
                      {a.source}
                    </p>
                  </div>
                  <span
                    className="inline-block shrink-0 rounded-full px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider"
                    style={{ background: tagStyle.bg, color: tagStyle.text }}
                  >
                    {a.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
