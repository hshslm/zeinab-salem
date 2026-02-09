export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image_url: string;
  description: string | null;
  dimensions: string | null;
  available: boolean;
  sort_order: number | null;
}

export interface Inquiry {
  id: string;
  product_id: string | null;
  name: string;
  email: string;
  message: string | null;
  created_at: string;
}
