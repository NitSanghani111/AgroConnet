import { useState } from "react"
import { FaSearch } from "react-icons/fa" // Using react-icons for an animated icon
import type { Product } from "../../types/index"

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Organic Tomatoes",
    category: "Vegetables",
    quantity: 100,
    price: 2.99,
    status: "available",
    createdAt: "2024-01-30",
    image: "/placeholder.svg",
  },
  // Add more mock products...
]

export default function BrowseProductsPage() {
  const [products] = useState<Product[]>(mockProducts)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Browse Products</h1>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Search Bar */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 transform transition-all duration-300 hover:scale-125 hover:text-blue-500" />
          <input
            placeholder="Search products..."
            className="pl-8 py-2 px-4 border rounded-md w-full sm:w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Dropdown */}
        <select className="border py-2 px-4 rounded-md w-[180px]">
          <option value="all">All Categories</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="grains">Grains</option>
        </select>

        {/* Sort By Dropdown */}
        <select className="border py-2 px-4 rounded-md w-[180px]">
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-lg border bg-white p-4 transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                <span className="text-sm text-gray-500">{product.quantity} available</span>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
