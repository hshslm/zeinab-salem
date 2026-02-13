import Link from "next/link";

export default function LandingPage(): React.ReactElement {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6">
      {/* Hero content */}
      <div className="text-center max-w-2xl">
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410 408" className="w-10 h-10 fill-accent">
            <g transform="translate(0,408) scale(0.1,-0.1)">
              <path d="M1825 3474 c-151 -23 -271 -63 -439 -146 -250 -125 -489 -314 -625 -495 -183 -245 -291 -580 -291 -903 1 -550 256 -1035 698 -1327 249 -165 490 -236 797 -236 276 -1 474 57 783 229 213 118 317 191 424 297 191 190 305 385 369 632 20 78 23 114 24 275 0 196 -8 255 -60 436 -62 213 -206 527 -303 664 -305 425 -856 655 -1377 574z m400 -570 c153 -41 297 -128 438 -263 151 -145 236 -283 289 -466 29 -102 31 -308 5 -423 -86 -374 -396 -682 -772 -769 -120 -27 -300 -23 -428 10 -331 87 -588 343 -689 685 -20 67 -23 99 -22 247 0 157 2 177 27 259 37 120 68 185 134 283 154 230 406 396 682 448 92 18 250 13 336 -11z" />
            </g>
          </svg>
        </div>

        <h1 className="font-display text-6xl md:text-8xl tracking-tight text-foreground animate-fade-in-up delay-100">
          Zeinab Salem
        </h1>

        <p className="mt-8 font-serif text-xl md:text-2xl text-subtle leading-relaxed animate-fade-in-up delay-300">
          Five decades of sculptural ceramics rooted in Egyptian clay.{" "}
          <span className="hidden md:inline"><br /></span>
          Shaped by fire and earth.
        </p>

        <div className="mt-12 animate-fade-in-up delay-500">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 font-display text-sm tracking-widest uppercase text-foreground/70 hover:text-accent transition-colors duration-100"
          >
            Enter Gallery
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-xs text-subtle/50 animate-fade-in-up delay-1000">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
