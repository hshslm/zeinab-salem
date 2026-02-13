import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import { getProductBySlug, getAllSlugs } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Not Found — Zeinab Salem" };
  }

  return {
    title: `${product.name} — Zeinab Salem`,
    description: product.description ?? `${product.name} by Zeinab Salem`,
  };
}

export default async function ProductDetailPage({
  params,
}: PageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header variant="detail" />

      <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto flex flex-col">
        <ProductDetail product={product} />

        <Footer />
      </main>
    </>
  );
}
