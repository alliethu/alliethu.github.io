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
          This Website
        </h1>
        <p
          className="animate-fade-in-up animation-delay-200 mt-6 max-w-lg text-base leading-relaxed md:text-lg"
          style={{ color: theme.muted }}
        >
          My personal portfolio, rebuilt from scratch — because owning your
          platform matters.
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
                My portfolio lived on Wix for years. It worked fine, but I
                wanted more control — over the design, the performance, and what
                I could build on top of it. So I rebuilt it from scratch.
              </p>
              <p>
                The goal was simple: match the warmth and clarity of my existing
                site while making it fully custom, accessible, and something I
                could tinker with over time. The result is what you&apos;re
                looking at right now.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl" style={{ color: theme.text }}>
              What I focused on
            </h2>
            <ul
              className="mt-3 space-y-3 text-base leading-relaxed md:text-lg md:leading-relaxed"
              style={{ color: theme.muted }}
            >
              <li>
                <strong style={{ color: theme.text }}>Design fidelity</strong> —
                warm cream palette, Playfair Display headings, DM Sans body
                copy, subtle fade-in animations
              </li>
              <li>
                <strong style={{ color: theme.text }}>Accessibility</strong> —
                semantic heading hierarchy, WCAG AA color contrast, visible
                focus indicators, responsive layout
              </li>
              <li>
                <strong style={{ color: theme.text }}>Performance</strong> —
                static export means every page is pre-rendered HTML, no
                client-side rendering needed
              </li>
              <li>
                <strong style={{ color: theme.text }}>Simplicity</strong> — no
                CMS, no database, just code. Content lives right in the
                components.
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
