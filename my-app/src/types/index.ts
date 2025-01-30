export interface Product {
    id: string;
    name: string;
    category: string;
    quantity: number;
    price: number;
    unit: string;
    image: string;
    farmerId: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    role: 'farmer' | 'buyer';
    avatar: string;
    language: 'en' | 'hi' | 'es';
    location: string;
    joinedDate: string;
  }
  
  export interface Request {
    id: string;
    productId: string;
    buyerId: string;
    farmerId: string;
    status: 'pending' | 'accepted' | 'rejected';
    quantity: number;
    totalPrice: number;
    createdAt: string;
  }
  
  export interface Analytics {
    totalSales: number;
    totalProducts: number;
    totalRequests: number;
    recentTransactions: Transaction[];
    monthlyRevenue: { month: string; amount: number }[];
  }
  
  export interface Transaction {
    id: string;
    date: string;
    product: string;
    quantity: number;
    amount: number;
    status: 'completed' | 'pending' | 'failed';
    buyer: string;
  }