import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/data";

export const metadata = {
  title: "Works — Zeinab Salem",
  description: "The Raku Collection. Vessels born from fire and shadow.",
};

export default function WorkPage(): React.ReactElement {
  const products = getProducts();

  return (
    <>
      <Header variant="gallery" />

      <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Collection heading */}
        <div className="mb-16 animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-5xl text-foreground">
            The Raku Collection
          </h1>
          <p className="mt-4 text-subtle max-w-xl leading-relaxed">
            Vessels born from fire and shadow. Each piece is hand-thrown and
            reduced in combustible materials to achieve unique, iridescent
            surfaces.
          </p>
        </div>

        {/* Product grid */}
        <ProductGrid products={products} />

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-border flex items-center justify-between text-xs text-subtle/50">
          <span>
            &copy; {new Date().getFullYear()} Zeinab Salem. Ceramic Artist.
          </span>
          <div className="flex gap-6">
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
          </div>
        </footer>
      </main>
    </>
  );
}
