export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}
