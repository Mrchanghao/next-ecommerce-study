// import { Product } from '../../shopify/schema';
export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: Array<ProductImage>;
}

export interface ProductImage {
  url: string;
  alt?: string;
}

