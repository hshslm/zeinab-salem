import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps): React.ReactElement {
  return (
    <Link href={`/work/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-card rounded-sm">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-display text-lg text-foreground">{product.name}</h3>
        <span className="text-sm text-subtle">
          {product.price > 0 ? `$${product.price.toLocaleString()}` : "Inquire"}
        </span>
      </div>
    </Link>
  );
}
