import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 md:py-40">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Making complex organizations{" "}
          <br className="hidden sm:inline" />
          work better.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          I&apos;m a design leader who builds systems, frameworks, and
          cross-functional partnerships that create lasting change. My work
          lives at the intersection of inclusive design, organizational
          effectiveness, and scalable governance — weaving these together so
          teams can ship confidently, consistently, and with care.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            About me
          </Link>
          <Link
            href="/connect"
            className="inline-flex h-12 items-center justify-center rounded-full border border-foreground px-8 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
