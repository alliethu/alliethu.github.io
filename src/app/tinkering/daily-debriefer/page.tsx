"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function DailyDebriefer() {
  const theme = useTheme();

  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/tinkering"
          className="animate-fade-in inline-block text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: theme.muted }}
        >
          &larr; Back to My tinkering
        </Link>

        <h1
          className="animate-fade-in-up mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
          style={{ color: theme.text }}
        >
          Daily Debriefer
        </h1>
        <p
          className="animate-fade-in-up animation-delay-200 mt-6 max-w-lg text-base leading-relaxed md:text-lg"
          style={{ color: theme.muted }}
        >
          A personal leadership impact tracker built with AI, for people who
          move too fast to notice how much they&apos;re doing.
        </p>

        <div className="animate-fade-in-up animation-delay-400 mt-10 overflow-hidden rounded-2xl"
          style={{ border: `1px solid ${theme.accent}20` }}>
          <Image
            src="/daily-debriefer.png"
            alt="Screenshot of the Daily Debriefer dashboard"
            width={1200}
            height={675}
            className="w-full"
          />
        </div>

        <div className="animate-fade-in-up animation-delay-400 mt-12 space-y-8">
          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              The problem
            </h2>
            <div
              className="mt-3 space-y-4 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              <p>
                Pulling together evidence of my own impact has always taken more
                time than it should — not because the work isn&apos;t there, but
                because I was never tracking it intentionally as it happened. The
                days flow together, and without a forcing function to stop and
                account for your own progress, the details just disappear.
              </p>
              <p>
                I also realized something while building it: &ldquo;these
                updates take so much more time from my day than I ever expected.
                I&apos;m glad I&apos;m documenting these things because it makes
                me realize how much I&apos;m doing each day.&rdquo; That was the
                first sign the tool was working — the act of logging was already
                shifting something.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              The build
            </h2>
            <p
              className="mt-3 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              I built Daily Debriefer collaboratively with Claude — using it as
              both a co-designer and a feature inside the product itself. The
              prompt engineering process was as much a product design exercise as
              the app itself.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              Iterating from real use
            </h2>
            <div
              className="mt-3 space-y-4 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              <p>
                After the first week I started hitting real friction and
                responding to it:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Added text formatting and voice input to reduce end-of-day
                  resistance
                </li>
                <li>
                  Added end-of-day insights after noticing: &ldquo;I&apos;m not
                  getting any dopamine hit or win or knowledge day to
                  day&rdquo; — the weekly synthesis was too far away to feel
                  motivating. I needed something that built incrementally.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              What it actually felt like
            </h2>
            <p
              className="mt-3 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              After a full week of consistent use, reading the AI-generated
              end-of-week synthesis — wins, patterns, tensions, one thing to
              carry forward — was extremely gratifying. It helped me sit back and
              reflect on how much progress and impact I was making when in my
              head the days just blur together with very little external
              validation. That&apos;s the gap this tool fills. And it only
              emerged by using it honestly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              Why it matters beyond the app
            </h2>
            <p
              className="mt-3 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              This is a working demonstration of how I think about product:
              start with a real user need, build minimum viable, use it in
              production, and iterate on observed behavior — not assumptions.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              Built with
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {[
                "Next.js",
                "Supabase",
                "Anthropic API",
                "Tailwind CSS",
                "TypeScript",
              ].map((tech) => (
                <li
                  key={tech}
                  className="rounded-full px-3 py-1 text-sm"
                  style={{
                    border: `1px solid ${theme.accent}30`,
                    color: theme.muted,
                  }}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <a
              href="https://github.com/alliethu/daily-debriefer"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn"
              style={{
                color: theme.linkAccent,
                borderColor: theme.lineColor,
              }}
            >
              View on GitHub &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
