"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function Footer() {
  const theme = useTheme();

  return (
    <footer style={{ borderTop: `1px solid ${theme.accent}20` }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <p className="text-xs" style={{ color: theme.muted }}>
          &copy; {new Date().getFullYear()} Allie Thu &middot; made with
          &hearts; &middot; this site has soul
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/alliethu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold"
            style={{ color: theme.accent, textDecoration: "none" }}
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="mailto:alliethu6@gmail.com"
            className="text-xs font-semibold"
            style={{ color: theme.accent, textDecoration: "none" }}
            aria-label="Send email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
