import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  TrendingUp,
  Package,
  User,
  MapPin,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { AnimatedText } from "../components/ui/animated-text";
import { AnimatedNumber } from "../components/ui/animated-number";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { type ProductType } from "../types/product";

export default function HomePage() {
  const { t } = useTranslation();
  const features = [
    {
      title: t("features.directMarket.title"),
      description: t("features.directMarket.description"),
      icon: ShoppingCart,
    },
    {
      title: t("features.smartPrice.title"),
      description: t("features.smartPrice.description"),
      icon: LineChart,
    },
    {
      title: t("features.securePayments.title"),
      description: t("features.securePayments.description"),
      icon: Wallet,
    },
    {
      title: t("features.qualityAssurance.title"),
      description: t("features.qualityAssurance.description"),
      icon: Shield,
    },
    {
      title: t("features.logistics.title"),
      description: t("features.logistics.description"),
      icon: Truck,
    },
    {
      title: t("features.support.title"),
      description: t("features.support.description"),
      icon: Headphones,
    },
  ];
  const stats = [
    { value: 10000, suffix: "+", label: t("stats.farmers") },
    { value: 5000, suffix: "+", label: t("stats.buyers") },
    { value: 50000000, suffix: "", label: t("stats.volume") },
    { value: 30, suffix: "%", label: t("stats.earnings") },
  ];

  const featuredProducts: ProductType[] = [
    {
      id: 1,
      images: [
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
      ],
      name: "Organic Apples",
      price: 249,
      description: "Fresh, crisp apples grown without pesticides",
      farmerName: "John Smith",
      farmerCity: "New York",
      quality: 4.5,
      category: "Fruits",
      quantity: "500 kg",
      priceRange: { min: 200, max: 300 },
      quantityRange: { min: 100, max: 500 }
    },
    {
      id: 2,
      images: [
        "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&auto=format&fit=crop&q=60"
      ],
      name: "Fresh Mangoes",
      price: 166,
      description: "Sweet and juicy mangoes from local orchards",
      farmerName: "Rajesh Kumar",
      farmerCity: "Mumbai",
      quality: 4.8,
      category: "Fruits",
      quantity: "300 kg",
      priceRange: { min: 150, max: 200 },
      quantityRange: { min: 50, max: 300 }
    },
    {
      id: 3,
      images: [
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
      ],
      name: "Organic Wheat",
      price: 83,
      description: "Premium quality wheat grains, perfect for bread and rotis",
      farmerName: "Amit Patel",
      farmerCity: "Delhi",
      quality: 5,
      category: "Grains",
      quantity: "1000 kg",
      priceRange: { min: 70, max: 100 },
      quantityRange: { min: 500, max: 1000 }
    },
    {
      id: 4,
      images: [
        "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=800&q=80"
      ],
      name: "Kesar Mango",
      price: 250,
      description: "Premium Gir Kesar mangoes, known for their sweet taste and aroma",
      farmerName: "Rajesh Patel",
      farmerCity: "Junagadh",
      quality: 5,
      category: "Fruits",
      quantity: "500 kg",
      priceRange: { min: 200, max: 300 },
      quantityRange: { min: 300, max: 500 }
    }
  ];

  const renderStars = (quality: number) => {
    const stars = [];
    const fullStars = Math.floor(quality);
    const hasHalfStar = quality % 1 !== 0;
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="h-4 w-4 text-yellow-400 fill-current"
        />
      );
    }
  
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden w-[50%]">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </div>
        </div>
      );
    }
  
    const remainingStars = 5 - Math.ceil(quality);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="h-4 w-4 text-yellow-400"
        />
      );
    }
  
    return stars;
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
      
        <div className="relative w-full h-full">
          {/* Light Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              opacity: 0.3,
            }}
          />
          {/* Light Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/30"
            style={{
              maskImage: "linear-gradient(to bottom, white, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, white, transparent)",
            }}
          />
        </div>
        
        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background/30 backdrop-blur-sm">
                <span className="relative flex size-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
                </span>
                {t('hero1.tagline')}
              </div>
              <AnimatedText
                text={t("hero.title")}
                className="text-4xl md:text-5xl font-bold tracking-tighter"
                style={{
                  WebkitFlexWrap: "wrap",
                  fontFamily: "'Roboto', sans-serif",
                }}
              />
              <AnimatedText
                text={t('hero1.subtitle')}
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
                    {t('hero1.getStarted')}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden transition-all duration-300"
                >
                  <Link to="/about">
                    {t('hero1.learnMore')}
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
      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedText
              text={t("features.title")}
              className="text-3xl font-bold mb-4"
            />
            <AnimatedText
              text={t("features.subtitle")}
              className="text-lg text-muted-foreground"
              delay={3}
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden relative">
                  <div className="absolute bottom-0 left-0 w-full bg-green-500/50 group-hover:animate-slide-up-bg z-0" />
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="rounded-full w-12 mt-4 h-12 flex items-center justify-center bg-green-100 mx-auto mb-4 transition-colors group-hover:bg-green-200">
                      <feature.icon className="h-8 w-6  text-green-600 transition-colors group-hover:text-green-700" />
                    </div>
                    <h3 className="font-semibold mb-2 transition-colors group-hover:text-green-700">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground transition-colors group-hover:text-green-600/80">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/206893/pexels-photo-206893.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center opacity-10" />
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
              text={t("cta.title")}
              className="text-3xl font-bold mb-4"
            />
            <AnimatedText
              text={t("cta.subtitle")}
              className="text-xl text-muted-foreground mb-8"
              delay={3}
            />
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 group relative overflow-hidden"
            >
              <Link to="/register">
                {t("cta.button")}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
       {/* Product Carousel Section */}
<section className="py-20 bg-gradient-to-br from-green-200 via-white to-green-200">
  <div className="container">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <AnimatedText
        text={t("products.featuredProducts")}
        className="text-3xl font-bold mb-4"
      />
      <AnimatedText
        text={t("products.discoverProducts")}
        className="text-lg text-muted-foreground"
        delay={3}
      />
    </div>
    
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent>
        {featuredProducts.map((product) => (
          <CarouselItem key={product.id}>
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-5xl font-semibold text-green-800 mb-2 size-50">
                        {t(`products.${product.name}`)} {/* Use the product name key from JSON */}
                      </h3><br></br><br></br>

                      <div className="flex items-center gap-1 mb-4">
                        {renderStars(product.quality)}
                      </div><br></br>
                      <p className="text-green-600 text-3xl mb-4 size-50">
                        {t(`products.${product.description}`)} {/* Use the product description key from JSON */}
                      </p><br></br>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-lg text-green-700">
                          <TrendingUp className="w-5 h-5" />
                          <span className="font-medium text-2xl size-30">
                            ₹{product.priceRange.min} - ₹{product.priceRange.max}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-lg text-green-700">
                          <Package className="w-5 h-5" />
                          <span className="text-xl">{product.quantity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-lg text-green-700">
                          <User  className="w-5 h-5" />
                          <span className="text-xl">{t(`products.farmerNames.${product.farmerName}`)}</span> {/* Use the farmer name key from JSON */}
                        </div>
                        {product.farmerCity && (
                          <div className="flex items-center gap-2 text-lg text-green-700">
                            <MapPin className="w-5 h-5" />
                            <span className="text-xl">{t(`products.cities.${product.farmerCity}`)}</span> {/* Use the city name key from JSON */}
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="-left-12 bg-green-50 hover:bg-green-100 border-green-200" />
        <CarouselNext className="-right-12 bg-green-50 hover:bg-green-100 border-green-200" />
      </div>
    </Carousel>

    <div className="mt-12 text-center">
      <Button
        asChild
        size="lg"
        className="bg-green-600 hover:bg-green-700 group"
      >
        <Link to="/Product">
          {t("products.showMore")} {/* Add a key for "Show More Products" in your JSON */}
          <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  </div>
</section>
    </div>
  );
}