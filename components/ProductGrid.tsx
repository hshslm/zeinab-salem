import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps): React.ReactElement {
  return (
    <div className="columns-1 md:columns-2 gap-4 md:gap-5">
      {products.map((product, index) => (
        <div key={product.id} className="mb-4 md:mb-5 break-inside-avoid">
          <ProductCard product={product} priority={index < 6} />
        </div>
      ))}
    </div>
  );
}
