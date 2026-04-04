"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { FadeIn } from "@/components/FadeIn";

const NAV_LINKS = [
  { href: "/about", label: "About me" },
  { href: "/always-learning", label: "Always learning" },
  { href: "/tinkering", label: "My tinkering" },
  { href: "/off-the-clock", label: "Off the clock" },
];

export default function Home() {
  const theme = useTheme();
  const [entered, setEntered] = useState(false);

  return (
    <section
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-12 md:py-6"
    >
      {/* ── Act 1: The Greeting ── */}
      <div
        className="flex flex-col items-center text-center"
        style={{
          opacity: entered ? 0 : 1,
          transform: entered
            ? "translateY(-20px) scale(0.98)"
            : "translateY(0) scale(1)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          position: entered ? "absolute" : "relative",
          pointerEvents: entered ? "none" : "auto",
        }}
      >
        {/* Time — the hero */}
        <FadeIn delay={100}>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(3rem, 8vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1,
              margin: 0,
              color: theme.text,
              letterSpacing: "-0.02em",
              textShadow: theme.textGlow,
            }}
          >
            {theme.time}
          </h1>
        </FadeIn>

        {/* "where I am" — small caps label */}
        <FadeIn delay={250}>
          <p
            className="font-sans"
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              color: theme.muted,
              margin: "14px 0 0 0",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            where I am
          </p>
        </FadeIn>

        {/* Decorative line */}
        <FadeIn delay={400}>
          <div
            style={{
              width: 48,
              height: 1,
              margin: "28px 0",
              background: theme.lineColor,
            }}
          />
        </FadeIn>

        {/* Warm message */}
        <FadeIn delay={550}>
          <p
            className="font-serif italic"
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.6,
              color: theme.muted,
              margin: 0,
              maxWidth: 340,
            }}
          >
            Wherever you are, I hope you&apos;re having a good one.
          </p>
        </FadeIn>

        {/* "Come on in" CTA */}
        <FadeIn delay={700} style={{ marginTop: 40 }}>
          <button
            onClick={() => setEntered(true)}
            className="pill-btn"
            style={{
              color: theme.linkAccent,
              borderColor: theme.lineColor,
            }}
          >
            Come on in &rarr;
          </button>
        </FadeIn>
      </div>

      {/* ── Act 2: The Intro (fades in after click) ── */}
      <div
        className="flex flex-col items-center gap-12 md:flex-row md:gap-14"
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          maxWidth: 960,
          pointerEvents: entered ? "auto" : "none",
          position: entered ? "relative" : "absolute",
        }}
      >
        {/* Photo */}
        <div className="shrink-0">
          <div
            className="relative overflow-hidden rounded-full"
            style={{
              width: 280,
              height: 280,
              border: "3px solid rgba(255,255,255,0.3)",
            }}
          >
            <Image
              src="/headshot.jpg"
              alt="Allie Thu"
              fill
              priority
              className="object-cover object-[center_15%] scale-175"
            />
          </div>
        </div>

        {/* Intro text */}
        <div style={{ maxWidth: 500 }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              margin: 0,
              color: theme.text,
            }}
          >
            I&apos;m Allie — a design leader, builder, and systems thinker with
            15+ years in tech. This is{" "}
            <em style={{ color: theme.accent, fontStyle: "italic" }}>
              my corner of the internet.
            </em>
          </h2>

          <p
            className="font-sans"
            style={{
              fontSize: "0.9375rem",
              color: theme.muted,
              lineHeight: 1.75,
              marginTop: 24,
            }}
          >
            Currently at GitHub. I lead design teams by day, chase my kid up
            mountains on weekends, and recharge with fiction, fresh air, and way
            too much reality TV.
          </p>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="pill-btn"
                style={{
                  color: theme.linkAccent,
                  borderColor: theme.lineColor,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
