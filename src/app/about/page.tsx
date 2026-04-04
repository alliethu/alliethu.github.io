"use client";

import type { Metadata } from "next";
import { useTheme } from "@/components/ThemeProvider";

export default function About() {
  const theme = useTheme();

  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <p
          className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: theme.muted }}
        >
          About me
        </p>
        <h1
          className="animate-fade-in-up mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
          style={{ color: theme.text }}
        >
          Better systems.
          <br />
          Less friction.
          <br />
          <em style={{ color: theme.accent }}>People first.</em>
        </h1>

        <div
          className="animate-fade-in-up animation-delay-200 mt-12 space-y-6 text-base leading-relaxed md:text-lg md:leading-relaxed"
          style={{ color: theme.muted }}
        >
          <p>
            Hi, I&apos;m Allie Thu (she/her). I&apos;m a design leader who
            focuses on the messy, structural work that rarely gets the attention
            it deserves: building the systems, standards, and cross-functional
            partnerships that make good, inclusive work repeatable at scale.
          </p>

          <p>
            Over 15 years in design and tech, I&apos;ve learned that the hardest
            problems aren&apos;t design problems. They&apos;re coordination
            problems. Who owns the decision? Where does the handoff break down?
            What needs to be true so this doesn&apos;t have to be figured out
            from scratch again next time?
          </p>

          <p>
            At GitHub, I&apos;ve put that instinct to work: building governance
            models, operating frameworks, and tooling that changed how product,
            engineering, design, and legal work together. I&apos;ve led multiple
            teams, scaled education programs, driven design systems quality, and
            stepped into leadership gaps when the org needed someone to bring
            clarity and keep things moving.
          </p>

          <p>
            What I care about most is creating the conditions where good
            decisions are easier to make and good work is easier to repeat. The
            design is just the beginning.
          </p>

          <p
            className="font-serif italic"
            style={{ color: theme.accent, fontSize: "1.0625rem", marginTop: 28 }}
          >
            Outside of work, I&apos;m a parent to an endlessly curious little
            human, partner to the love of my life, and someone who recharges by
            getting outside: hiking, lifting, and chasing the next family
            adventure.
          </p>
        </div>
      </div>
    </section>
  );
}
