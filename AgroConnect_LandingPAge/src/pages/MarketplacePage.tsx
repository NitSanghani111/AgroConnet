import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Tag, ArrowUpDown } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/Input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/Select"
import { Card, CardContent } from "../components/ui/card"
import { AnimatedText } from "../components/ui/animated-text"

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Agricultural Marketplace"
              className="text-4xl font-bold tracking-tighter mb-4"
            />
            <AnimatedText
              text="Browse high-quality produce directly from verified farmers"
              className="text-xl text-muted-foreground mb-8"
              delay={3}
            />
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-y bg-slate-50">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                  <SelectItem value="fruits">Fruits</SelectItem>
                  <SelectItem value="grains">Grains</SelectItem>
                  <SelectItem value="pulses">Pulses</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="gap-2">
                <ArrowUpDown className="h-4 w-4" />
                Sort by: Price
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      {product.organic && (
                        <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                          Organic
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="font-semibold mb-1">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <div className="text-green-600 font-bold">
                          ₹{product.price}/kg
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Min. order: {product.minOrder}kg
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Farmer: </span>
                          {product.farmer}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {product.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const products = [
  {
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 40,
    minOrder: 25,
    farmer: "Rajesh Kumar",
    location: "Nashik, MH",
    image: "https://th.bing.com/th/id/OIP.JTO3L9h58izvGtDpyR88rAHaLF?w=187&h=280&c=7&r=0&o=5&dpr=1.8&pid=1.7",
    organic: true,
  },
  {
    name: "Premium Wheat",
    category: "Grains",
    price: 30,
    minOrder: 100,
    farmer: "Amit Singh",
    location: "Ludhiana, PB",
    image: "/placeholder.svg",
    organic: false,
  },
  {
    name: "Alphonso Mangoes",
    category: "Fruits",
    price: 200,
    minOrder: 10,
    farmer: "Priya Patil",
    location: "Ratnagiri, MH",
    image: "/placeholder.svg",
    organic: true,
  },
  {
    name: "Green Moong Dal",
    category: "Pulses",
    price: 120,
    minOrder: 50,
    farmer: "Suresh Patel",
    location: "Vadodara, GJ",
    image: "/placeholder.svg",
    organic: false,
  },
  // Add more products as needed
]
