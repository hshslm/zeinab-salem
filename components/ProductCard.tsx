"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/work/${product.slug}`} className="group block relative">
        <div className="overflow-hidden rounded-sm">
          <Image
            src={product.image_url}
            alt={product.name}
            width={640}
            height={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            priority={priority}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <span className="absolute bottom-4 left-4 font-display text-lg italic text-foreground/0 group-hover:text-foreground/80 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          {product.name}
        </span>
      </Link>
    </motion.div>
  );
}
