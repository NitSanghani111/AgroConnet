export interface Product {
    id: string
    name: string
    category: string
    quantity: number
    price: number
    status: "available" | "sold" | "pending"
    createdAt: string
    image: string
  }
  
  export interface ProductRequest {
    id: string
    productId: string
    productName: string
    buyerId: string
    buyerName: string
    quantity: number
    status: "pending" | "accepted" | "rejected"
    createdAt: string
  }
  
  export interface SoldProduct {
    id: string
    productId: string
    productName: string
    buyerId: string
    buyerName: string
    quantity: number
    totalAmount: number
    soldAt: string
  }
  
  export interface SupportTicket {
    id: string
    subject: string
    description: string
    status: "open" | "closed" | "in-progress"
    createdAt: string
  }
  
  export interface AnalyticsData {
    totalSales: number
    totalProducts: number
    totalRequests: number
    monthlySales: {
      month: string
      amount: number
    }[]
    productCategories: {
      category: string
      count: number
    }[]
  }
  
  