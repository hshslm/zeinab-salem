import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
