import { BookOpen, Award, BarChart, Smartphone, Calendar, Clock, ChevronRight } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { AnimatedText } from "../components/ui/animated-text"
import { motion } from "framer-motion"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText   
              text="Farming &nbsp; Knowledge &nbsp; Hub"
              className="text-4xl font-bold tracking-tighter mb-4"
            />
            <AnimatedText
              text="Stay &nbsp; updated &nbsp; with the latest &nbsp; farming &nbsp; techniques &nbsp;, market &nbsp; insights, and &nbsp; success stories"
              className="text-xl text-muted-foreground mb-8"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{height:'150px'}}>
                  <CardContent className="p-6 text-center">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-green-100 mx-auto mb-4 mt-5">
                      <category.icon className="h-8 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
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
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-green-600 px-3 py-1 rounded-full text-sm">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="font-semibold text-xl mb-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {article.excerpt}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-green-600 hover:text-green-700"
                      >
                        Read More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Stay &nbsp; Updated &nbsp; with &nbsp; Farming &nbsp; Insights"
              className="text-3xl font-bold mb-4"
            />
            <AnimatedText
              text="Subscribe &nbsp; to our &nbsp; newsletter &nbsp; for&nbsp; the latest &nbsp; agricultural &nbsp; news, market &nbsp; trends, and &nbsp; farming tips."
              className="text-xl mb-8"
              delay={3}
            />
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black"
              />
              <Button className="bg-white text-bold hover:bg-black-50">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  {
    name: "Farming Techniques",
    description: "Modern and traditional farming methods",
    icon: BookOpen,
  },
  {
    name: "Market Insights",
    description: "Price trends and market analysis",
    icon: BarChart,
  },
  {
    name: "Success Stories",
    description: "Learn from successful farmers",
    icon: Award,
  },
  {
    name: "Technology",
    description: "AgriTech innovations and tools",
    icon: Smartphone,
  },
]

const articles = [
  {
    title: "10 Sustainable Farming Practices for Better Yield",
    excerpt: "Learn about eco-friendly farming methods that can improve your crop yield while protecting the environment.",
    category: "Farming Techniques",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg",
  },
  {
    title: "Understanding Market Prices: A Farmer's Guide",
    excerpt: "A comprehensive guide to understanding agricultural market prices and making informed selling decisions.",
    category: "Market Insights",
    date: "Mar 14, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg",
  },
  {
    title: "From Small Farm to Success: A Farmer's Journey",
    excerpt: "Read about how a small-scale farmer transformed their business using modern techniques and direct market access.",
    category: "Success Stories",
    date: "Mar 13, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg",
  },
]

