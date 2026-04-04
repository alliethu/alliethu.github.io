"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    title: "Daily Debriefer",
    description:
      "A private leadership journal with AI-powered synthesis. Captures daily reflections — wins, tensions, energy levels, and relationship dynamics — then uses Claude to surface patterns and generate 1:1 prep and quarterly narratives. Built with Next.js, Supabase, and the Anthropic API.",
    image: "/daily-debriefer.png",
    href: "/tinkering/daily-debriefer",
    tags: ["Next.js", "Supabase", "Claude"],
  },
  {
    title: "Tiny Times Games",
    description:
      "A suite of age-appropriate word, puzzle, and trivia games built for a kid who just wants to play alongside the grown-ups. Kid-friendly versions of Wordle, the Mini Crossword, Spelling Bee, and trivia — built with React and shipping as a PWA.",
    image: "/tiny-times-games.png",
    href: "/tinkering/tiny-times-games",
    tags: ["React", "PWA"],
  },
  {
    title: "This Website",
    description:
      "My personal portfolio, rebuilt from scratch with Next.js, Tailwind CSS, and deployed to GitHub Pages. A meta experiment in owning my own platform.",
    image: undefined,
    color: "bg-[#b8c4cc]",
    href: "/tinkering/this-website",
    tags: ["Next.js", "Tailwind"],
  },
];

export default function Tinkering() {
  const theme = useTheme();

  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <FadeIn delay={100}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: theme.muted, marginBottom: 12 }}
          >
            My tinkering
          </p>
          <h1
            className="font-serif text-4xl leading-snug tracking-tight md:text-5xl"
            style={{ color: theme.text }}
          >
            Experiments
            <br />
            <em style={{ color: theme.accent }}>&amp; side quests.</em>
          </h1>
          <p
            className="mt-4 max-w-lg font-sans text-base leading-relaxed"
            style={{ color: theme.muted, marginBottom: 48 }}
          >
            A space for the things I tinker with outside of my day-to-day:
            creative explorations, learning experiments, and ideas I
            couldn&apos;t let go of.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={300 + i * 150}>
              <Link
                href={project.href}
                className="group block h-full overflow-hidden rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.accent}15`,
                  backdropFilter: "blur(8px)",
                  textDecoration: "none",
                }}
              >
                {project.image ? (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      width={600}
                      height={338}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    className={`aspect-video w-full ${project.color ?? ""}`}
                    aria-hidden="true"
                  />
                )}
                <div className="p-5">
                  <h2
                    className="font-serif text-xl"
                    style={{ color: theme.text }}
                  >
                    {project.title}
                  </h2>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: theme.muted }}
                  >
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-block rounded-full px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider"
                        style={{ background: "#f0ebe3", color: "#7a6e5e" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p
                    className="mt-4 font-sans text-xs font-semibold uppercase tracking-wider"
                    style={{ color: theme.linkAccent }}
                  >
                    Read more &rarr;
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
