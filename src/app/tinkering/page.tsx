import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Tinkering",
  description:
    "A collection of experiments, side projects, and creative explorations by Allie Thu.",
};

const projects = [
  {
    title: "Daily Debriefer",
    description:
      "A private leadership journal with AI-powered synthesis. Captures daily reflections — wins, tensions, energy levels, and relationship dynamics — then uses Claude to surface patterns and generate 1:1 prep and quarterly narratives. Built with Next.js, Supabase, and the Anthropic API.",
    image: "/daily-debriefer.png",
    href: "/tinkering/daily-debriefer",
  },
  {
    title: "Tiny Times Games",
    description:
      "A suite of age-appropriate word, puzzle, and trivia games built for a kid who just wants to play alongside the grown-ups. Kid-friendly versions of Wordle, the Mini Crossword, Spelling Bee, and trivia — built with React and shipping as a PWA.",
    image: undefined,
    color: "bg-[#c9bfa8]",
    href: "/tinkering/tiny-times-games",
  },
  {
    title: "This Website",
    description:
      "My personal portfolio, rebuilt from scratch with Next.js, Tailwind CSS, and deployed to GitHub Pages. A meta experiment in owning my own platform.",
    image: undefined,
    color: "bg-[#b8c4cc]",
    href: "/tinkering/this-website",
  },
];

export default function Tinkering() {
  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          My tinkering
        </p>
        <h1 className="animate-fade-in-up mt-6 font-serif text-4xl leading-snug tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Experiments
          <br />
          <em className="text-accent">&amp; side quests.</em>
        </h1>
        <p className="animate-fade-in-up animation-delay-200 mt-8 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          A space for the things I tinker with outside of my day-to-day —
          creative explorations, learning experiments, and ideas I couldn&apos;t
          let go of.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => {
            const cardClasses = `animate-fade-in-up-subtle group overflow-hidden rounded-2xl border border-border transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md ${
              i === 0 ? "animation-delay-200" : ""
            } ${i === 1 ? "animation-delay-400" : ""} ${
              i === 2 ? "animation-delay-600" : ""
            }`;

            const cardContent = (
              <>
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
                  <h2 className="font-serif text-xl text-foreground">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  {project.href && (
                    <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
                      Read more →
                    </span>
                  )}
                </div>
              </>
            );

            return project.href ? (
              <Link
                key={project.title}
                href={project.href}
                className={cardClasses}
              >
                {cardContent}
              </Link>
            ) : (
              <div key={project.title} className={cardClasses}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
