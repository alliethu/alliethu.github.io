import FadeImage from "@/components/FadeImage";
import LocalTime from "@/components/LocalTime";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col justify-center px-6 py-12 md:py-20">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Photo */}
        <div className="relative aspect-square overflow-hidden rounded-full">
          <FadeImage
            src="/headshot.jpg"
            alt="Allie Thu"
            className="object-cover object-[center_15%] scale-175"
          />
        </div>

        {/* Copy */}
        <div>
          <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Design leadership
          </p>
          <h1 className="animate-fade-in-up mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Making complex organizations work better,{" "}
            <em className="text-accent">together.</em>
          </h1>
          <p className="animate-fade-in-up animation-delay-200 mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            I lead teams through the messy, structural work that rarely gets the
            attention it deserves: building the systems, standards, and
            cross-functional partnerships that make good, inclusive work
            repeatable at scale.
          </p>
          <div className="animate-fade-in-up animation-delay-400 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent"
            >
              About me
            </Link>
            <Link
              href="/connect"
              className="inline-flex h-12 items-center justify-center rounded-full border border-foreground px-8 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <LocalTime />
    </section>
  );
}
