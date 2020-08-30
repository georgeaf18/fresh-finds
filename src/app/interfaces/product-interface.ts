export interface Product {
  product_id: number;
  product_name: string;
  price: number;
  SKU: number;
  created_at: Date;
  in_stock: boolean;
  picture: null;
  description: string;
  discount: boolean;
  featured: boolean;
  category: string;
  quantity_in_stock: number;
  discount_available: boolean;
  sold_by: string;
}
