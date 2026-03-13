"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/about", label: "About me" },
    { href: "/connect", label: "Connect" },
  ];

  return (
    <header className="animate-fade-in w-full border-b border-border">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 md:px-12 md:py-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-foreground"
        >
          Allie Thu
          <span className="block text-xs font-sans font-normal tracking-wide text-muted">
            Design Leader &amp; Systems Thinker
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-wide transition-opacity hover:opacity-60 ${
                  pathname === link.href
                    ? "text-foreground border-b-2 border-accent pb-1"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="animate-fade-in border-t border-border md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm tracking-wide ${
                    pathname === link.href
                      ? "text-foreground border-b-2 border-accent pb-1"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
