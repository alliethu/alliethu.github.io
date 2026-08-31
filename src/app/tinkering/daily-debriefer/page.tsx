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
          A private leadership journal I built to make daily reflection useful
          over time.
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
                I was doing a lot of work and struggling to remember the details
                when it was time to reflect on impact or prepare for a 1:1. The
                problem wasn&apos;t the work. I had no habit for capturing it
                while it was fresh.
              </p>
              <p>
                Building the journal gave me a small reason to pause each day.
                Even before the AI synthesis, the act of logging helped me see
                how much was happening and what deserved attention.
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
              I built Daily Debriefer with Next.js, Supabase, and the Anthropic
              API. AI is part of the product, not just how I made it. It looks
              across daily entries to help surface wins, tensions, shifts in
              energy, and relationship dynamics. Those signals become useful
              prompts for 1:1 preparation and longer-term reflection.
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
                After the first week, real use exposed the friction:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Added text formatting and voice input to make end-of-day
                  reflection easier.
                </li>
                <li>
                  Added end-of-day insights when the weekly synthesis felt too
                  far away. I needed the value to build incrementally.
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
              After a full week, the synthesis gave me something I rarely make
              time for: a chance to step back and see the shape of the work. It
              surfaced progress, patterns, and tensions that were hard to notice
              day to day. That only became clear because I used the product
              honestly.
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
              This project is a working example of how I like to build: start
              with a real need, make the smallest useful version, use it, and let
              observed behavior shape what comes next.
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
