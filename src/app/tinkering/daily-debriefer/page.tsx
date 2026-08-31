import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Daily Debriefer",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DailyDebriefer() {
  return (
    <section className="flex flex-1 flex-col justify-center px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          An early experiment
        </p>
        <h1 className="animate-fade-in-up mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Daily Debriefer
          <br />
          <em className="text-accent">grew up.</em>
        </h1>
        <p className="animate-fade-in-up animation-delay-200 mt-8 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          What started as a private daily journal became the foundation for a
          larger system of living context, custom skills, and automations.
        </p>
        <Link
          href="/tinkering/leadership-os"
          className="pill-btn animate-fade-in-up animation-delay-400 mt-8"
        >
          See my leadership OS &rarr;
        </Link>
      </div>
    </section>
  );
}
