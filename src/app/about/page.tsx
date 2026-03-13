import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Design leader specializing in systems thinking, cross-functional partnership, and inclusive design.",
};

export default function About() {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Design leader.
          <br />
          Systems thinker.
          <br />
          People first.
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted md:text-lg">
          <p>
            Hi, I&apos;m Allie Thu (she/her) — a design leader who specializes
            in making organizations work better through systems thinking,
            cross-functional partnership, and inclusive design.
          </p>

          <p>
            For over 15 years, I&apos;ve built programs, frameworks, and teams
            that change how organizations make decisions — not just what they
            ship. At GitHub, I&apos;ve led the transformation of accessibility
            from a compliance checkpoint into an embedded, strategic function,
            reshaping workflows across product, engineering, legal, marketing,
            and design. That work taught me what I&apos;m actually good at:
            creating clarity in ambiguous environments, influencing stakeholders
            across organizational boundaries, and designing the systems that
            make good decisions easier to repeat.
          </p>

          <p>
            I thrive at the intersection of operational rigor and human-centered
            thinking. I build high-trust teams grounded in curiosity,
            collaboration, and direct communication. I believe great design —
            like great leadership — is never accidental. It&apos;s the result of
            intentional systems, shared language, and rituals that create space
            for continuous improvement.
          </p>

          <p>
            Whether I&apos;m establishing governance frameworks with senior
            leadership, building tooling that scales across thousands of users,
            or coaching a designer through a hard conversation with a PM, I show
            up with the same approach: curious, organized, and always asking what
            structures need to exist so this works better than it did yesterday.
          </p>

          <p>
            Outside of work, I&apos;m a proud parent to an endlessly curious and
            creative little human, partner to the love of my life, and a big fan
            of California cool interiors, strength training, cozy dinner parties,
            and spontaneous family adventures (next stop: Portugal!). My home
            life keeps me grounded and reminds me every day why thoughtful,
            inclusive design matters.
          </p>
        </div>
      </div>
    </section>
  );
}
