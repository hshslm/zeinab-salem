"use client";

import { useState } from "react";
import Image from "next/image";
import InquiryForm from "./InquiryForm";
import type { Product } from "@/lib/types";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({
  product,
}: ProductDetailProps): React.ReactElement {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-card rounded-sm animate-fade-in-up">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center animate-fade-in-up delay-300">
          <h1 className="font-display text-4xl md:text-5xl text-foreground">
            {product.name}
          </h1>

          {product.dimensions && (
            <p className="mt-4 text-sm text-subtle">{product.dimensions}</p>
          )}

          {product.description && (
            <p className="mt-6 text-subtle leading-relaxed max-w-md">
              {product.description}
            </p>
          )}

          <p className="mt-8 font-display text-2xl text-foreground">
            {product.price > 0
              ? `$${product.price.toLocaleString()}.00`
              : "Price on inquiry"}
          </p>

          <button
            type="button"
            onClick={() => setInquiryOpen(true)}
            className="mt-10 self-start border border-foreground/30 px-10 py-3.5 text-sm tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Inquire to Purchase
          </button>
        </div>
      </div>

      <InquiryForm
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        productName={product.name}
        productId={product.id}
      />
    </>
  );
}
