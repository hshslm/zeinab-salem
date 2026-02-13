import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About — Zeinab Salem",
  description:
    "Dr. Zeinab Salem is one of Egypt's most celebrated ceramic artists, with a career spanning over five decades of artistic practice, academic leadership, and international recognition.",
};

export default function AboutPage(): React.ReactElement {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-32 pb-24">
        {/* Hero typography */}
        <header className="max-w-4xl mx-auto text-center px-6 mb-24 animate-fade-in-up">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light italic tracking-tight text-foreground leading-[0.9]">
            Zeinab Salem
          </h1>
          <p className="mt-8 text-lg md:text-xl text-accent/90 font-display font-light italic">
            Formed by fire, grounded in earth.
          </p>
        </header>

        {/* Essay part 1 */}
        <article className="max-w-2xl mx-auto px-6 space-y-8 text-lg md:text-xl leading-relaxed text-subtle font-light animate-fade-in-up delay-100">
          <p>
            <span className="text-accent font-display text-5xl md:text-6xl leading-[0] align-baseline">B</span>orn in 1945, Dr. Zeinab Mohammad Salem Ali is one of Egypt&apos;s
            most distinguished figures in contemporary ceramic arts. With a
            career spanning over five decades of artistic practice, academic
            leadership, and international recognition, she has left a unique and
            distinctive artistic mark in the field of ceramics.
          </p>

          <p>
            A Professor of Ceramics at the Faculty of Applied Arts, Helwan
            University, and former Vice Dean for Graduate Studies and Research,
            Dr. Salem has dedicated her life to elevating Egyptian ceramic arts
            on both the local and global stage. Her approach began from a
            structural perspective rooted in the environment where she was
            raised.
          </p>

          <p>
            Her work is rooted in the earth of Egypt itself — using local
            Egyptian clay, she creates objects that embody the Egyptian identity
            and spirit. Her streamlined forms carry powerful expression and an
            elaborate, diversified touch, evoking a sense of eternity and
            atmosphere through surprising textures and surfaces.
          </p>
        </article>

        {/* Break image */}
        <div className="w-full max-w-5xl mx-auto my-24 px-4 md:px-0">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm group">
            <Image
              src="/images/about-hero.jpg"
              alt="Close up of artist hands shaping a dark ceramic vessel"
              fill
              className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xs">
              <p className="text-sm text-foreground/70 italic font-light border-l border-accent pl-4">
                &ldquo;The clay remembers the hands that held it.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Essay part 2 */}
        <article className="max-w-2xl mx-auto px-6 space-y-8 text-lg md:text-xl leading-relaxed text-subtle font-light">
          <p>
            Since 1971, Dr. Salem has been an active force in Egypt&apos;s
            contemporary art movement, representing the country in numerous
            international exhibitions, competitions, and conferences. She has
            won important local and international prizes, including the Grand
            Prize at both the 2nd and the 5th Cairo International Ceramics
            Biennale.
          </p>

          <p>
            In 2021, she was awarded Egypt&apos;s prestigious State
            Appreciation Award in the Arts — one of the nation&apos;s highest
            cultural honors — alongside composer Rageh Dawood and the late
            lyricist Mostafa Moharam. Most recently, she held a solo exhibition
            titled &ldquo;Lunar Echoes&rdquo; at the prestigious Zamalek Art
            Gallery in Cairo.
          </p>

          <p>
            Her work continues to inspire new generations, bridging the
            traditions of Egyptian craftsmanship with the language of
            contemporary ceramic art. She has been described by Helwan
            University&apos;s Faculty of Applied Arts as an artist who left a
            unique and distinctive artistic mark in the field of ceramics.
          </p>

          {/* CTA */}
          <div className="pt-16 pb-8 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors duration-300 font-display italic text-2xl group"
            >
              <span>Explore the Collection</span>
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                &rarr;
              </span>
            </Link>
          </div>
        </article>

      </main>
    </>
  );
}
