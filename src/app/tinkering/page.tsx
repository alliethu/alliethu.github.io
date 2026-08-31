import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My tinkering",
  description:
    "Things Allie Thu built to solve a need, learn something, or follow an idea, including a leadership operating system and kid-friendly games.",
};

const projects = [
  {
    title: "My leadership OS",
    description:
      "A private operating system I built to turn leadership context into useful action. What started as a daily debrief has grown into a living repository of decisions, commitments, and work, with custom skills and automations for weekly planning, product design, and technical sensemaking.",
    visual: "leadership-os",
    href: "/tinkering/leadership-os",
  },
  {
    title: "Tiny Times Games",
    description:
      "A suite of age-appropriate word, puzzle, and trivia games built for a kid who just wants to play alongside the grown-ups. Kid-friendly versions of Wordle, the Mini Crossword, Spelling Bee, and trivia, built with React and shipping as a PWA.",
    image: "/tiny-times-games.png",
    href: "/tinkering/tiny-times-games",
  },
  {
    title: "This website",
    description:
      "The site you're on now, rebuilt from scratch so I could shape every detail and keep changing it as I do. Built with Next.js and Tailwind CSS, then deployed to GitHub Pages.",
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
        <h1 className="animate-fade-in-up mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Experiments
          <br />
          <em className="text-accent">&amp; side quests.</em>
        </h1>
        <p className="animate-fade-in-up animation-delay-200 mt-8 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          Things I built because I needed them, wanted to understand something,
          or couldn&apos;t leave the idea alone.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => {
            const cardClasses = `card-glow animate-fade-in-up-subtle group overflow-hidden rounded-2xl transition-all duration-300 ease-in-out ${
              i === 0 ? "sm:col-span-2" : ""
            } ${
              i === 0 ? "animation-delay-200" : ""
            } ${i === 1 ? "animation-delay-400" : ""} ${
              i === 2 ? "animation-delay-600" : ""
            }`;

            const cardContent = (
              <>
                {project.visual === "leadership-os" ? (
                  <div
                    className="grid aspect-video w-full grid-cols-2 gap-3 p-5 sm:grid-cols-4 sm:p-7"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, var(--card-bg)), var(--card-bg))",
                    }}
                    aria-hidden="true"
                  >
                    {["Capture", "Distill", "Apply", "Act"].map(
                      (step, index) => (
                        <div
                          key={step}
                          className="flex flex-col justify-between rounded-xl p-3 sm:p-4"
                          style={{
                            background: "var(--card-bg)",
                            border:
                              "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
                          }}
                        >
                          <span className="font-mono text-[0.6rem] font-semibold text-accent">
                            0{index + 1}
                          </span>
                          <span className="font-serif text-base text-foreground sm:text-lg">
                            {step}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                ) : project.image ? (
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
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)",
                  ["--glow-bg" as string]: "var(--ambient-glow)",
                }}
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={project.title}
                className={cardClasses}
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)",
                  ["--glow-bg" as string]: "var(--ambient-glow)",
                }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
