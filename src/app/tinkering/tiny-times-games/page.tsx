import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tiny Times Games",
  description:
    "A suite of age-appropriate word, puzzle, and trivia games built for a kid who just wants to play alongside the grown-ups.",
};

export default function TinyTimesGames() {
  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/tinkering"
          className="animate-fade-in inline-block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
        >
          ← Back to My tinkering
        </Link>

        <h1 className="animate-fade-in-up mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Tiny Times Games
        </h1>
        <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          A suite of age-appropriate word, puzzle, and trivia games built for a
          kid who just wants to play alongside the grown-ups.
        </p>

        <div className="animate-fade-in-up animation-delay-400 mt-12 space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-foreground">
              The problem
            </h2>
            <div className="mt-3 space-y-4 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
              <p>
                My son is almost seven, and he loves games. He&apos;d watch my
                husband and me play NYT Wordle, the Mini Crossword, Spelling
                Bee — and he wanted in. Not to be babysat with a tablet, but to
                actually play. To do what we were doing.
              </p>
              <p>
                The problem was the vocabulary. The words were too hard, the
                clues assumed too much, and he&apos;d hit a wall fast. He&apos;d
                get frustrated — not with the game, but with himself. He&apos;d
                need to ask for help, and that bothered him, because he could see
                that we didn&apos;t need help. He wanted to be capable, not just
                included.
              </p>
              <p>That&apos;s not a kid problem. That&apos;s an access problem.</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">
              The parallel
            </h2>
            <div className="mt-3 space-y-4 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
              <p>
                I work in accessibility design, and the thing I keep coming back
                to is that accessibility is really about inclusion — making sure
                people can participate in the things that matter to them. The
                barrier can be technological, physical, or cognitive. In my
                son&apos;s case, his brain is just not at the same developmental
                stage as mine and my husband&apos;s. That&apos;s not a flaw.
                That&apos;s just where he is. And he still deserves to play.
              </p>
              <p>
                Tiny Times Games is my attempt to remove that barrier — same joy,
                same daily ritual, same sense of accomplishment. Just scaled to
                actually fit him.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">The build</h2>
            <div className="mt-3 space-y-4 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
              <p>
                I built it in React using GitHub Copilot CLI — a similar
                collaborative vibe to how I built Daily Debriefer with Claude,
                just a different tool. The suite includes kid-friendly versions
                of Wordle, the Mini Crossword, Spelling Bee, and a trivia game,
                because he&apos;s obsessed with facts and we sometimes play
                trivia separately anyway. Every game uses age-appropriate
                vocabulary. The goal is that he can sit down and play it on his
                own.
              </p>
              <p>
                It&apos;ll live on his iPad as a PWA — no App Store required.
                He&apos;ll tap an icon on his home screen just like any other
                app.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">
              Why it matters beyond the app
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
              This is a small, personal project. But it captures something I
              believe deeply: good design starts with knowing your user, and the
              best way to know your user is to care about them. Sometimes that
              user is a developer with a screen reader. Sometimes it&apos;s your
              kid, who just wants to feel like he can do the thing the grown-ups
              do.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">Built with</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["React", "GitHub Copilot CLI", "PWA", "TypeScript"].map(
                (tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                  >
                    {tech}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="pt-4">
            <a
              href="https://github.com/alliethu/tiny-times-games"
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
