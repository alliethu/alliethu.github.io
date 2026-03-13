"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About me" },
    { href: "/connect", label: "Connect" },
  ];

  return (
    <header className="w-full border-b border-border">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          Allie Thu
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
                  pathname === link.href
                    ? "font-medium text-foreground"
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
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="border-t border-border md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm tracking-wide ${
                    pathname === link.href
                      ? "font-medium text-foreground"
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
