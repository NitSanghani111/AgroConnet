import { Analytics, Product, Request, Transaction, User } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'farmer',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  language: 'en',
  location: 'Punjab, India',
  joinedDate: '2023-01-15',
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Wheat',
    category: 'Grains',
    quantity: 1000,
    price: 25,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b',
    farmerId: '1',
  },
  {
    id: '2',
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    quantity: 500,
    price: 15,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
    farmerId: '1',
  },
];

export const requests: Request[] = [
  {
    id: '1',
    productId: '1',
    buyerId: '2',
    farmerId: '1',
    status: 'pending',
    quantity: 100,
    totalPrice: 2500,
    createdAt: '2024-03-15',
  },
];

export const analytics: Analytics = {
  totalSales: 25000,
  totalProducts: 15,
  totalRequests: 8,
  recentTransactions: [
    {
      id: '1',
      date: '2024-03-15',
      product: 'Organic Wheat',
      quantity: 100,
      amount: 2500,
      status: 'completed',
      buyer: 'Alice Smith',
    },
  ],
  monthlyRevenue: [
    { month: 'Jan', amount: 5000 },
    { month: 'Feb', amount: 7500 },
    { month: 'Mar', amount: 6000 },
  ],
};