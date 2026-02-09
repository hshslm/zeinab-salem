import Link from "next/link";

export default function LandingPage(): React.ReactElement {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6">
      {/* Hero content */}
      <div className="text-center max-w-2xl">
        <h1 className="font-display text-6xl md:text-8xl tracking-tight text-foreground animate-fade-in-up">
          Zeinab Salem
        </h1>

        <p className="mt-8 font-serif text-xl md:text-2xl text-subtle leading-relaxed animate-fade-in-up delay-300">
          Exploring the fragile beauty of dark raku-fired vessels.
          <br />
          Objects born from fire, smoke, and patience.
        </p>

        <Link
          href="/work"
          className="inline-flex items-center gap-3 mt-12 text-sm tracking-widest uppercase text-foreground/70 hover:text-accent transition-colors animate-fade-in-up delay-700"
        >
          Enter Gallery
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 flex items-center gap-8 text-xs text-subtle/50 animate-fade-in-up delay-1000">
        <span>&copy; {new Date().getFullYear()}</span>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Instagram
        </a>
        <a
          href="mailto:hello@zeinabsalem.com"
          className="hover:text-foreground transition-colors"
        >
          Email
        </a>
      </footer>
    </main>
  );
}
