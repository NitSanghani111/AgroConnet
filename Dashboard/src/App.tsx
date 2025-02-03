import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import type React from "react" // Added import for React
import { DashboardLayout } from "./components/layout/dashboard-layout"

// Farmer Pages
import FarmerProducts from "./pages/farmer/products"
import FarmerAnalytics from "./pages/farmer/analytics"
import { SupportPage } from "./components/support/support-page"

// Buyer Pages
import BuyerProducts from "./pages/buyer/products"

// Mock authentication - replace with your actual auth logic
const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  type: "farmer" as const, // or 'buyer'
}

function ProtectedRoute({
  children,
  userType,
}: {
  children: React.ReactNode
  userType: "farmer" | "buyer"
}) {
  // Check if user is authenticated and has the correct type
  if (!mockUser || mockUser.type !== userType) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

function FarmerRoutes() {
  return (
    <ProtectedRoute userType="farmer">
      <DashboardLayout userType="farmer">
        <Routes>
          <Route path="dashboard" element={<FarmerAnalytics />} />
          <Route path="products" element={<FarmerProducts />} />
          <Route path="requests" element={<div>Product Requests</div>} />
          <Route path="sold" element={<div>Sold Products</div>} />
          <Route path="support" element={<SupportPage />} />
          <Route path="analytics" element={<FarmerAnalytics />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </DashboardLayout>
    </ProtectedRoute>
  )
}

function BuyerRoutes() {
  return (
    <ProtectedRoute userType="buyer">
      <DashboardLayout userType="buyer">
        <Routes>
          <Route path="dashboard" element={<div>Buyer Dashboard</div>} />
          <Route path="products" element={<BuyerProducts />} />
          <Route path="history" element={<div>Purchase History</div>} />
          <Route path="support" element={<SupportPage />} />
          <Route path="analytics" element={<div>Buyer Analytics</div>} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </DashboardLayout>
    </ProtectedRoute>
  )
}

function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<div>Login Page</div>} />
      <Route path="register" element={<div>Register Page</div>} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="auth/*" element={<AuthRoutes />} />

        {/* Protected routes */}
        <Route path="farmer/*" element={<FarmerRoutes />} />
        <Route path="buyer/*" element={<BuyerRoutes />} />

        {/* Redirect to appropriate dashboard based on user type */}
        <Route path="/" element={<Navigate to={`/${mockUser?.type || "auth"}/dashboard`} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

