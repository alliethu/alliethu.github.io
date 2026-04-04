"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { href: "/about", label: "About me" },
  { href: "/always-learning", label: "Always learning" },
  { href: "/tinkering", label: "My tinkering" },
  { href: "/off-the-clock", label: "Off the clock" },
];

export default function Header() {
  const pathname = usePathname();
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lineExpanded, setLineExpanded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLineExpanded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="animate-fade-in w-full">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 md:px-12 md:py-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-xl tracking-tight"
          style={{ color: theme.text }}
        >
          Allie Thu
          <span
            className="block font-sans text-xs font-normal tracking-wide"
            style={{ color: theme.muted }}
          >
            Design Leader &amp; Systems Thinker
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-10 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link text-sm tracking-wide"
                  style={{
                    color: active ? theme.text : theme.muted,
                    textDecoration: "underline",
                    textUnderlineOffset: "6px",
                    textDecorationColor: active ? theme.accent : "transparent",
                    "--nav-hover-color": theme.text,
                  } as React.CSSProperties}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span
            className="block h-0.5 w-6 transition-transform duration-300"
            style={{
              backgroundColor: theme.text,
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-0.5 w-6 transition-opacity duration-300"
            style={{
              backgroundColor: theme.text,
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-transform duration-300"
            style={{
              backgroundColor: theme.text,
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Animated line */}
      <div
        className={`nav-line ${lineExpanded ? "expanded" : ""}`}
        style={{ background: theme.navBorder }}
      />

      {/* Mobile nav */}
      {menuOpen && (
        <div
          className="animate-fade-in md:hidden"
          style={{ borderTop: `1px solid ${theme.lineColor}` }}
        >
          <ul className="flex flex-col gap-4 px-6 py-6">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm tracking-wide"
                    style={{
                      color: active ? theme.text : theme.muted,
                      textDecoration: active ? "underline" : "none",
                      textUnderlineOffset: "6px",
                      textDecorationColor: theme.accent,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
