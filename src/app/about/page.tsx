import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description:
    "About Allie Thu, a design leader and builder focused on systems, accessibility, AI-enabled design and building, and design engineering.",
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
            Hi, I&apos;m Allie Thu (she/her). I&apos;m a design leader and
            builder who likes the work behind the work: the components,
            standards, tools, and partnerships that help teams make better
            product decisions.
          </p>

          <p>
            At GitHub, I lead Core UX Design, a multidisciplinary team of
            designers and design engineers working across design systems and
            accessibility. We build shared foundations, tools, and quality
            practices that support teams across GitHub.
          </p>

          <p>
            Lately, I&apos;ve been exploring what changes when AI becomes part
            of both designing and building products. I&apos;m especially
            interested in how components, patterns, accessibility guidance, and
            quality signals can work for agents as well as people. I stay close
            to building, whether I&apos;m setting direction, mapping an
            experience, or using a prototype to make an idea concrete.
          </p>

          <p>
            I&apos;ve spent more than 15 years in design and technology. The
            through line is systems: finding where ownership is unclear, where
            teams are repeatedly solving the same problems, and what we can build
            once so others can build better.
          </p>

          <p className="mt-4 text-sm italic opacity-60">
            P.S. This site shifts with the time of day. Come back at a different
            hour and it&apos;ll feel a little different.
          </p>
        </div>
      </div>
    </section>
  );
}
