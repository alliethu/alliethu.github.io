import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Get in touch with Allie Thu — let's talk design, swap ideas, or explore working together.",
};

export default function Connect() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 md:py-40">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Always up for a meaningful
          <br />
          conversation.
        </h1>

        <div className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
            Get in touch
          </h2>
          <h3 className="mt-4 text-2xl font-semibold text-foreground md:text-3xl">
            Let&apos;s connect.
          </h3>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Whether you want to talk design, swap ideas, or explore working
            together — I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:alliethu6@gmail.com?subject=Portfolio%20outreach"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/alliethu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-foreground px-8 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
