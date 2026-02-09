import type { Product } from "./types";
import productsJson from "@/data/products.json";

const products: Product[] = productsJson;

export function getProducts(): Product[] {
  return products.filter((p) => p.available).sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
