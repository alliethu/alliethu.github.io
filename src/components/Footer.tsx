export default function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Allie Thu
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/alliethu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted transition-opacity hover:text-foreground"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="mailto:alliethu6@gmail.com"
            className="text-xs text-muted transition-opacity hover:text-foreground"
            aria-label="Send email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
