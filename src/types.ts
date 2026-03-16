export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  description: string;
}

export interface Review {
  id: string;
  author: string;
  verified: boolean;
  rating: number;
  comment: string;
}

export interface CartItem extends Product {
  quantity: number;
}
