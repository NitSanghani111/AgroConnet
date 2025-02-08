export interface ProductType {
  id: number;
  images: string[];
  name: string;
  price: number;
  description: string;
  farmerName: string;
  farmerCity?: string;
  quality: number;
  category: string;
  quantity: string;
  priceRange: {
    min: number;
    max: number;
  };
}