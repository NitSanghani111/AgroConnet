import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Star,
  ShoppingCart,
  LineChart,
  Wallet,
  Shield,
  Truck,
  Headphones,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { AnimatedText } from "../components/ui/animated-text";
import { AnimatedNumber } from "../components/ui/animated-number";
import FAQPage from "./FAQPage";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Background image */}
          <div className="relative w-full h-full">
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('https://tse3.mm.bing.net/th?id=OIP.5Eiz6q3nk0FuxedzdP5u4wHaEK&w=200&h=112&c=7')] bg-cover bg-center opacity-10" />
  
  {/* Gradient overlay */}
  <div
    className="absolute inset-0 bg-gradient-to-b from-green-50/80 to-white"
    style={{
      maskImage: "linear-gradient(to bottom, black, transparent)",
      WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
    }}
  />
</div>

        </div>

        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background/30 backdrop-blur-sm">
                <span className="relative flex size-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
                </span>
                Connecting Farmers with Buyers
              </div>
              <AnimatedText
                text="Transform &nbsp; &nbsp;Agriculture &nbsp;with &nbsp; Direct &nbsp; Market  &nbsp;Access"
                className="text-4xl md:text-5xl font-bold tracking-tighter"
                style={{
                  WebkitFlexWrap: "wrap",
                  fontFamily: "'Roboto', sans-serif", // Applying the Roboto font
                }}
              />

              <AnimatedText
                text="Eliminate &nbsp; middlemen  &nbsp; and  &nbsp; improve  &nbsp; farmer  &nbsp; profitability  &nbsp; through  &nbsp; direct    &nbsp; market  &nbsp; access.  &nbsp; Join  &nbsp; thousands  &nbsp; of  &nbsp; farmers  &nbsp; and  &nbsp; buyers  &nbsp; on  &nbsp; Agronet."
                className="text-xl text-muted-foreground"
                delay={5}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 group relative overflow-hidden transition-all duration-300"
                >
                  <Link to="/register">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <span className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent transform -skew-x-12 transition-transform group-hover:translate-x-full" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden transition-all duration-300"
                >
                  <Link to="/about">
                    Learn More
                    <span className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-transparent transform -skew-x-12 transition-transform group-hover:translate-x-full" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <div className="relative">
                <img
                  src="https://th.bing.com/th/id/OIP.5DdOoter3uib5J55cohzXgHaE6?w=269&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
                  alt="Farmer using Agronet"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 animate-bounce-slow">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400 h-5 w-5 fill-current" />
                    <span className="font-medium">
                      Trusted by 10,000+ Farmers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Hover Effects */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedText
              text="Why  &nbsp; Choose  &nbsp; Agronet?"
              className="text-3xl font-bold mb-4"
            />
            <AnimatedText
              text="We  &nbsp; provide  &nbsp; innovative  &nbsp; solutions  &nbsp; to  &nbsp; connect  &nbsp; farmers  &nbsp; directly  &nbsp; with  &nbsp; buyers,  &nbsp; ensuring  &nbsp; better  &nbsp; prices  &nbsp; and  &nbsp; sustainable  &nbsp; agriculture."
              className="text-lg text-muted-foreground"
              delay={3}
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative border-none shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="relative pt-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-green-100 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Numbers */}
      <section className="py-20 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="container relative">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl font-bold mb-2">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Ready  &nbsp; to  &nbsp; Transform  &nbsp; Agriculture?"
              className="text-3xl font-bold mb-4"
            />
            <AnimatedText
              text="Join  &nbsp; thousands  &nbsp; of  &nbsp; farmers  &nbsp; and  &nbsp; buyers  &nbsp; already  &nbsp; benefiting  &nbsp; from  &nbsp; direct  &nbsp; market  &nbsp; access."
              className="text-xl text-muted-foreground mb-8"
              delay={3}
            />
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 group relative overflow-hidden"
            >
              <Link to="/register">
                Get Started Now
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent transform -skew-x-12 transition-transform group-hover:translate-x-full" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <FAQPage/>
    </div>
  );
}

const features = [
  {
    title: "Direct Market Access",
    description:
      "Connect directly with buyers and get better prices for your produce without intermediaries.",
    icon: ShoppingCart,
  },
  {
    title: "Smart Price Discovery",
    description:
      "Real-time market prices and trends to help you make informed decisions.",
    icon: LineChart,
  },
  {
    title: "Secure Payments",
    description:
      "Safe and instant payment processing with multiple payment options.",
    icon: Wallet,
  },
  {
    title: "Quality Assurance",
    description:
      "Built-in quality verification system to maintain high standards.",
    icon: Shield,
  },
  {
    title: "Logistics Support",
    description:
      "Integrated transportation and storage solutions for seamless delivery.",
    icon: Truck,
  },
  {
    title: "24/7 Support",
    description: "Dedicated customer support team to assist you at every step.",
    icon: Headphones,
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "Registered Farmers" },
  { value: 5000, suffix: "+", label: "Active Buyers" },
  { value: 50000000, suffix: "", label: "Trade Volume (₹)" },
  { value: 30, suffix: "%", label: "Increase in Earnings" },
];
