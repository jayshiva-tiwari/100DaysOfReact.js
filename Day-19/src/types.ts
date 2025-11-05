export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  inStock: boolean;
}

export type CategoryFilter = "all" | "electronics" | "clothing" | "books" | "home";
