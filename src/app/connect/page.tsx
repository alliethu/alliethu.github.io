import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Get in touch with Allie Thu — let's talk design, swap ideas, or explore working together.",
};

export default function Connect() {
  return (
    <section className="flex flex-1 flex-col justify-center px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="animate-fade-in-up font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Always up for a meaningful{" "}
          <br />
          <em className="text-accent">conversation.</em>
        </h1>

        <div className="animate-fade-in-up animation-delay-200 mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Get in touch
          </p>
          <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Whether you want to talk design, swap ideas, or explore working
            together — I&apos;d love to hear from you.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-400 mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:alliethu6@gmail.com?subject=Portfolio%20outreach"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/alliethu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-foreground px-8 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
