import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Design leader specializing in systems thinking, cross-functional partnership, and inclusive design.",
};

export default function About() {
  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          About me
        </p>
        <h1 className="animate-fade-in-up mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Better systems.
          <br />
          Less friction.
          <br />
          <em className="text-accent">People first.</em>
        </h1>

        <div className="animate-fade-in-up animation-delay-200 mt-12 space-y-6 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
          <p>
            Hi, I&apos;m Allie Thu (she/her) — a design leader who specializes
            in making complex organizations work better, building the systems,
            frameworks, and cross-functional partnerships that help teams deliver
            consistent, high-quality work at scale.
          </p>

          <p>
            Over 15+ years in design and tech, I&apos;ve learned that the
            hardest problems aren&apos;t design problems — they&apos;re
            coordination problems. Who owns the decision? Where does the handoff
            break down? What structure needs to exist so this doesn&apos;t have
            to be solved again from scratch? And underneath all of that: how do
            you make the behavior change feel worth it to the people you need to
            bring along?
          </p>

          <p>
            At GitHub, I&apos;ve turned that instinct into practice:
            establishing governance models, operating frameworks, and tooling
            that reshaped how product, engineering, design, legal, and marketing
            work together. I&apos;ve built a team, scaled education programs,
            driven design systems quality, and stepped into ambiguous leadership
            gaps when the org needed someone to maintain stability and clarity.
          </p>

          <p>
            What drives me is the multiplier effect — designing conditions where
            good decisions are easier to make, good work is easier to repeat, and
            teams move fast without leaving quality behind.
          </p>

          <p>
            Outside of work, I&apos;m a proud parent to an endlessly curious and
            creative little human, partner to the love of my life, and someone
            who recharges by getting outside — hiking, strength training, and
            chasing the next family adventure.
          </p>
        </div>
      </div>
    </section>
  );
}
