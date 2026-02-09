import Link from "next/link";

interface HeaderProps {
  variant?: "landing" | "gallery" | "detail";
}

export default function Header({
  variant = "gallery",
}: HeaderProps): React.ReactElement {
  if (variant === "landing") {
    return <></>;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-md">
      <Link
        href="/"
        className="font-display text-lg tracking-wide text-foreground hover:text-accent transition-colors"
      >
        Zeinab Salem
      </Link>

      {variant === "detail" ? (
        <Link
          href="/work"
          className="text-sm tracking-widest uppercase text-subtle hover:text-foreground transition-colors"
        >
          Index
        </Link>
      ) : (
        <nav className="flex gap-8">
          <Link
            href="/work"
            className="text-sm tracking-widest uppercase text-subtle hover:text-foreground transition-colors"
          >
            Works
          </Link>
          <Link
            href="#about"
            className="text-sm tracking-widest uppercase text-subtle hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm tracking-widest uppercase text-subtle hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
