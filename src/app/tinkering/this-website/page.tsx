import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "This Website",
  description:
    "How I rebuilt my personal portfolio from Wix to a custom Next.js site on GitHub Pages.",
};

export default function ThisWebsite() {
  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/tinkering"
          className="animate-fade-in inline-block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
        >
          ← Back to My Tinkering
        </Link>

        <h1 className="animate-fade-in-up mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          This Website
        </h1>
        <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          My personal portfolio, rebuilt from scratch — because owning your
          platform matters.
        </p>

        <div className="animate-fade-in-up animation-delay-400 mt-12 space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-foreground">The story</h2>
            <div className="mt-3 space-y-4 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
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
            <h2 className="font-serif text-2xl text-foreground">
              What I focused on
            </h2>
            <ul className="mt-3 space-y-3 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
              <li>
                <strong className="text-foreground">Design fidelity</strong> —
                warm cream palette, Playfair Display headings, DM Sans body
                copy, subtle fade-in animations
              </li>
              <li>
                <strong className="text-foreground">Accessibility</strong> —
                semantic heading hierarchy, WCAG AA color contrast, visible
                focus indicators, responsive layout
              </li>
              <li>
                <strong className="text-foreground">Performance</strong> —
                static export means every page is pre-rendered HTML, no
                client-side rendering needed
              </li>
              <li>
                <strong className="text-foreground">Simplicity</strong> — no
                CMS, no database, just code. Content lives right in the
                components.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">Built with</h2>
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
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted"
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
              className="inline-flex rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
