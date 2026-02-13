"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  variant?: "landing" | "gallery" | "detail";
}

export default function Header({
  variant = "gallery",
}: HeaderProps): React.ReactElement | null {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  if (variant === "landing") {
    return null;
  }

  const logo = (
    <Link
      href="/"
      className="flex items-center gap-2.5 font-display text-lg leading-none tracking-wide text-foreground hover:text-accent transition-colors duration-100"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410 408" className="w-[22px] h-[22px] shrink-0 -mt-1.5 fill-accent">
        <g transform="translate(0,408) scale(0.1,-0.1)">
          <path d="M1825 3474 c-151 -23 -271 -63 -439 -146 -250 -125 -489 -314 -625 -495 -183 -245 -291 -580 -291 -903 1 -550 256 -1035 698 -1327 249 -165 490 -236 797 -236 276 -1 474 57 783 229 213 118 317 191 424 297 191 190 305 385 369 632 20 78 23 114 24 275 0 196 -8 255 -60 436 -62 213 -206 527 -303 664 -305 425 -856 655 -1377 574z m400 -570 c153 -41 297 -128 438 -263 151 -145 236 -283 289 -466 29 -102 31 -308 5 -423 -86 -374 -396 -682 -772 -769 -120 -27 -300 -23 -428 10 -331 87 -588 343 -689 685 -20 67 -23 99 -22 247 0 157 2 177 27 259 37 120 68 185 134 283 154 230 406 396 682 448 92 18 250 13 336 -11z" />
        </g>
      </svg>
      Zeinab Salem
    </Link>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 md:py-6 bg-background/80 backdrop-blur-md">
        {logo}

        {variant === "detail" ? (
          <Link
            href="/work"
            className="font-display text-sm tracking-widest uppercase text-subtle hover:text-accent transition-colors duration-100"
          >
            Index
          </Link>
        ) : (
          <>
            {/* Desktop nav */}
            <nav className="hidden md:flex gap-8">
              <Link href="/work" className="font-display text-sm tracking-widest uppercase text-subtle hover:text-accent transition-colors duration-100">
                Works
              </Link>
              <Link href="/about" className="font-display text-sm tracking-widest uppercase text-subtle hover:text-accent transition-colors duration-100">
                About
              </Link>
              <Link href="/contact" className="font-display text-sm tracking-widest uppercase text-subtle hover:text-accent transition-colors duration-100">
                Contact
              </Link>
            </nav>

            {/* Hamburger button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="flex flex-col justify-center items-center w-6 h-6">
                <span
                  className={`block h-px w-6 bg-foreground transition-all duration-300 ease-out ${
                    menuOpen ? "rotate-45 translate-y-[0.5px]" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-foreground transition-all duration-300 ease-out ${
                    menuOpen ? "-rotate-45 -translate-y-[0.5px]" : "translate-y-1"
                  }`}
                />
              </span>
            </button>
          </>
        )}
      </header>

      {/* Mobile overlay */}
      {variant !== "detail" && (
        <div
          className={`fixed inset-0 z-40 bg-background flex flex-col items-center justify-center transition-all duration-500 ease-out md:hidden ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-10">
            <Link
              href="/work"
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-foreground hover:text-accent transition-colors duration-100"
            >
              Works
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-foreground hover:text-accent transition-colors duration-100"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-foreground hover:text-accent transition-colors duration-100"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
