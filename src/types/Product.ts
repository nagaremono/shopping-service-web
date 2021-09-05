export interface Product {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  stock: number;
  price: string;
  name: string;
  images: string[];
}
