"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function ThisWebsite() {
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
          This website
        </h1>
        <p
          className="animate-fade-in-up animation-delay-200 mt-6 max-w-lg text-base leading-relaxed md:text-lg"
          style={{ color: theme.muted }}
        >
          The site you&apos;re on now, rebuilt from scratch so I could shape
          every detail and keep changing it as I do.
        </p>

        <div className="animate-fade-in-up animation-delay-400 mt-12 space-y-8">
          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              The story
            </h2>
            <div
              className="mt-3 space-y-4 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              <p>
                My portfolio lived on Wix for years. It did the job, but every
                change felt like working around someone else&apos;s decisions. I
                wanted the design, code, and content to belong to the same
                system, so I rebuilt it.
              </p>
              <p>
                More than a redesign, it became a way to practice the kind of
                building I care about: making something warm, accessible, fast,
                and easy to keep evolving. The time-based color and greeting are
                part of that. The site should feel a little alive, not like a
                static r&eacute;sum&eacute;.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              What mattered
            </h2>
            <ul
              className="mt-3 space-y-3 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              <li>
                <strong style={{ color: theme.text }}>Personality:</strong> a
                time-aware palette and greeting, expressive type, and motion
                that stays out of the way
              </li>
              <li>
                <strong style={{ color: theme.text }}>Accessibility:</strong>{" "}
                semantic structure, WCAG AA contrast, visible focus states, and
                responsive layouts
              </li>
              <li>
                <strong style={{ color: theme.text }}>Speed:</strong> static
                pages that load quickly and keep the hosting simple
              </li>
              <li>
                <strong style={{ color: theme.text }}>Room to change:</strong>{" "}
                no CMS or database. The content lives with the code, so I can
                keep tinkering.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              Built with
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {[
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
                "GitHub Pages",
                "GitHub Actions",
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
              href="https://github.com/alliethu/alliethu.github.io"
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
