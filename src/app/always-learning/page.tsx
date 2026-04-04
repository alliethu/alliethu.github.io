"use client";

import { useTheme } from "@/components/ThemeProvider";
import { FadeIn } from "@/components/FadeIn";

const PODCASTS = [
  {
    title: "Lenny's Podcast",
    topic: "Product, Career & Growth",
    icon: "🎙️",
    why: "The go-to for product thinking, career growth, and how the best teams operate.",
    url: "https://www.lennysnewsletter.com/podcast",
  },
  {
    title: "How I AI",
    topic: "AI in Practice",
    icon: "🤖",
    why: "Real conversations about how people are actually using AI in their work.",
    url: "https://www.youtube.com/@howiaipodcast",
  },
  {
    title: "Coaching for Leaders",
    topic: "Leadership & Management",
    icon: "🧭",
    why: "Practical leadership wisdom from Dave Stachowiak and expert guests since 2011.",
    url: "https://coachingforleaders.com/",
  },
  {
    title: "Dive Club",
    topic: "Design & Product Deep Dives",
    icon: "🤿",
    why: "Thoughtful conversations about design, craft, and building meaningful products.",
    url: "https://www.youtube.com/@joindiveclub",
  },
];

const SUBSTACKS = [
  { name: "Hilary Gridley", newsletter: "Writer Builder", url: "https://hilary.substack.com/" },
  { name: "John Cutler", newsletter: "The Beautiful Mess", url: "https://cutlefish.substack.com/" },
  { name: "Wes Kao", newsletter: "Wes Kao's Newsletter", url: "https://weskao.substack.com/" },
  { name: "MC Dean", newsletter: "MC Dean Percolates", url: "https://substack.com/@marieclairedean" },
  { name: "David Hoang", newsletter: "Proof of Concept", url: "https://www.proofofconcept.pub/" },
];

export default function AlwaysLearning() {
  const theme = useTheme();

  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <FadeIn delay={100}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: theme.muted, marginBottom: 12 }}
          >
            Always learning
          </p>
          <h1
            className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: theme.text, margin: "0 0 12px 0" }}
          >
            What&apos;s feeding my brain{" "}
            <em style={{ color: theme.accent }}>lately.</em>
          </h1>
          <p
            className="font-sans text-base leading-relaxed md:text-lg"
            style={{
              color: theme.muted,
              maxWidth: 560,
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
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: theme.muted, marginBottom: 12 }}
          >
            🎧 Podcasts I keep coming back to
          </p>
          <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PODCASTS.map((pod, i) => (
              <a
                key={i}
                href={pod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow rounded-xl p-5"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.accent}15`,
                  backdropFilter: "blur(8px)",
                  textDecoration: "none",
                  display: "block",
                  "--glow-bg": theme.ambientGlow,
                } as React.CSSProperties}
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
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Articles */}
        <FadeIn delay={500}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: theme.muted, marginBottom: 12 }}
          >
            📰 Thought leaders I follow on Substack
          </p>
          <div className="flex flex-col gap-2">
            {SUBSTACKS.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow flex items-center justify-between gap-3 rounded-lg px-4 py-3.5"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.accent}15`,
                  backdropFilter: "blur(8px)",
                  textDecoration: "none",
                  "--glow-bg": theme.ambientGlow,
                } as React.CSSProperties}
              >
                <div>
                  <p
                    className="m-0 font-serif text-sm font-semibold"
                    style={{ color: theme.text }}
                  >
                    {s.name}
                  </p>
                  <p
                    className="mt-0.5 font-sans text-[11px]"
                    style={{ color: theme.muted }}
                  >
                    {s.newsletter}
                  </p>
                </div>
                <span
                  className="shrink-0 text-xs"
                  style={{ color: theme.accent }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
