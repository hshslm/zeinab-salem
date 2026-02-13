import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/data";

export const metadata = {
  title: "Works — Zeinab Salem",
  description: "Select pieces. Sculptural ceramics born from fire and shadow.",
};

export default function WorkPage(): React.ReactElement {
  const products = getProducts();

  return (
    <>
      <Header variant="gallery" />

      <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto flex flex-col">
        {/* Collection heading */}
        <div className="mb-16 animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-5xl text-foreground">
            Collection
          </h1>
          <p className="mt-3 font-serif text-lg italic text-subtle">
            Select works available for acquisition
          </p>
        </div>

        {/* Product grid */}
        <ProductGrid products={products} />

        <Footer />
      </main>
    </>
  );
}
