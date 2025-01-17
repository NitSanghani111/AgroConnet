import { Star, Quote, ArrowRight } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { AnimatedText } from "../components/ui/animated-text"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Farmer Success Stories"
              className="text-4xl font-bold tracking-tighter mb-4"
            />
            <AnimatedText
              text="Discover how farmers across India are transforming their lives with Agronet"
              className="text-xl text-muted-foreground mb-8"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-max-[400px]">
                    <img
                      src="https://th.bing.com/th/id/OIP.tL1dKiGcEl_zmAltMAiCDQHaHa?w=189&h=189&c=7&r=0&o=5&dpr=2&pid=1.7"
                      alt="Featured Farmer"
                      className="w-full h-max-[400px] object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-green-600 mb-4" />
                    <p className="text-xl mb-6">
                      "Agronet has completely transformed my farming business. I now
                      get 40% better prices for my produce and have direct
                      relationships with buyers across the country."
                    </p>
                    <div className="mb-6">
                      <h3 className="font-bold text-xl">Rajesh Kumar</h3>
                      <p className="text-muted-foreground">
                        Wheat Farmer, Punjab
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Revenue Increase:</span>
                        <span className="text-green-600">45%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Years with Agronet:</span>
                        <span>3 years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story, index) => (
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
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="outline"
                          className="text-white border-white hover:bg-white hover:text-black"
                        >
                          Read Full Story
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {story.excerpt}
                      </p>
                      <div className="mb-4">
                        <h3 className="font-bold">{story.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {story.location}
                        </p>
                      </div>
                      <div className="pt-4 border-t grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Revenue Increase
                          </p>
                          <p className="font-bold text-green-600">
                            {story.revenueIncrease}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Main Crops
                          </p>
                          <p className="font-medium">{story.crops}</p>
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

      {/* Join Success Stories Section */}
      <section className="py-20 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Start Your Success Story"
              className="text-3xl font-bold mb-4"
            />
            <AnimatedText
              text="Join thousands of farmers who have transformed their agricultural business with Agronet"
              className="text-xl mb-8"
              delay={3}
            />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-green-600 hover:bg-green-50"
            >
              <Link to="/register">
                Join Agronet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const successStories = [
    {
        name: "Amit Patel",
        location: "Vegetable Farmer, Gujarat",
        excerpt: "Since joining Agronet, I've expanded my customer base across three states and increased my income significantly.",
        image: "/placeholder.svg",
        revenueIncrease: "35%",
        crops: "Tomatoes, Peppers",
      },
  {
    name: "Priya Singh",
    location: "Organic Farmer, Maharashtra",
    excerpt: "The organic certification support and direct market access through Agronet helped me command premium prices for my produce.",
    image: "/placeholder.svg",
    revenueIncrease: "50%",
    crops: "Rice, Pulses",
  },
  {
    name: "Mohammed Khan",
    location: "Fruit Grower, Karnataka",
    excerpt: "Agronet's logistics support and quality assurance system has helped me reach premium buyers in metro cities.",
    image: "/placeholder.svg",
    revenueIncrease: "40%",
    crops: "Mangoes, Pomegranates",
  },
  {
    name: "Lakshmi Devi",
    location: "Mixed Farmer, Tamil Nadu",
    excerpt: "The training and support from Agronet helped me adopt modern farming techniques and improve my yield.",
    image: "/placeholder.svg",
    revenueIncrease: "30%",
    crops: "Vegetables, Coconuts",
  },
  {
    name: "Gurpreet Singh",
    location: "Grain Farmer, Punjab",
    excerpt: "Direct buyer connections through Agronet helped me get better prices and timely payments for my wheat.",
    image: "/placeholder.svg",
    revenueIncrease: "45%",
    crops: "Wheat, Rice",
  },
  {
    name: "Meena Kumari",
    location: "Organic Farmer, Uttarakhand",
    excerpt: "Agronet's platform helped me showcase my organic produce to quality-conscious buyers across India.",
    image: "/placeholder.svg",
    revenueIncrease: "55%",
    crops: "Millets, Herbs",
  },
]

