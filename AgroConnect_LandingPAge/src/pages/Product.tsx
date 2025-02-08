import { motion } from "framer-motion";
import { Star, TrendingUp, MapPin, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductDetailsModal from "../components/ProductDetailsModal";
import { cn } from "../lib/utils";
import { ProductType } from "../types/product";

interface ProductType {
  id: number;
  images: string[];
  name: string;
  price: number;
  description: string;
  farmerName: string;
  farmerCity?: string;
  quality: number;
  category: string;
  quantity: string; // Retained simple quantity
  priceRange: {
    min: number;
    max: number;
  };
}

// Updated products array with quantity only
const products: ProductType[] = [
  
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/347926/pexels-photo-347926.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    name: "Organic Apples",
    price: 249,
    priceRange: { min: 200, max: 300 },
    description: "Fresh, crisp apples grown without pesticides",
    farmerName: "John Smith",
    farmerCity: "New York",
    quality: 4.5,
    category: "Fruits",
    quantity: "500 kg"
  },
  {
    id: 2,
    images:[ "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&auto=format&fit=crop&q=60",
              "https://images.pexels.com/photos/4687187/pexels-photo-4687187.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/8523870/pexels-photo-8523870.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    name: "Fresh Mangoes",
    price: 166,
    priceRange: { min: 100, max: 200 },
    description: "Sweet and juicy mangoes from local orchards",
    farmerName: "Rajesh Kumar",
    farmerCity: "Mumbai",
    quality: 4.8,
    category: "Fruits",
    quantity: "300 kg"
  },
  {
    id: 3,
    images: ["https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
              "https://images.pexels.com/photos/265278/pexels-photo-265278.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://plus.unsplash.com/premium_photo-1661951898672-ad613eb6aac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxvcmdhbmljJTIwd2hlYXR8ZW58MHx8MHx8fDA%3D"
    ],
    name: "Organic Wheat",
    price: 83,
    priceRange: { min: 250, max: 300 },
    description: "Premium quality wheat grains, perfect for bread and rotis",
    farmerName: "Amit Patel",
    farmerCity: "Delhi",
    quality: 5,
    category: "Grains",
    quantity: "1000 kg"
  },
  {
    id: 4,
    images: ["https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1721976505728-1d2a5ee8de5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtlc2FyJTIwbWFuZ298ZW58MHx8MHx8fDA%3D",
              "https://media.istockphoto.com/id/1834699100/photo/alphanso-ratnagiri-mangoes-arranged-in-a-box-to-sell-and-buy-mangoes-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=7GWkTv-zUvRXdALEd3uEJzQtGD55rbl-tGoeFHdhX5E="
    ],
    name: "Kesar Mango",
    price: 250,
    priceRange: { min: 300, max: 350 },
    description: "Premium Gir Kesar mangoes, known for their sweet taste and aroma",
    farmerName: "Rajesh Patel",
    farmerCity: "Junagadh",
    quality: 5,
    category: "Fruits",
    quantity: "500 kg"
  },
  {
    id: 5,
    images: ["https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=80",
              "https://media.istockphoto.com/id/1400438871/photo/pear-millet-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ScRqUlyI9KowMa52kltbRLEyuM0a2NvxhHzgAMczCbo=",
              "https://media.istockphoto.com/id/186097524/photo/millet-crop.webp?a=1&b=1&s=612x612&w=0&k=20&c=kQ20CnVUMVqLpbX1I5b6nz80g5b0xoknMqZkoUibK4I="
    ],
    name: "Pearl Millet",
    price: 45,
    priceRange: { min: 300, max: 320 },
    description: "High-quality bajra grown in Gujarat's fertile soil",
    farmerName: "Bharat Modi",
    farmerCity: "Mehsana",
    quality: 4,
    category: "Grains",
    quantity: "2000 kg"
  },
  // Punjab
  {
    id: 6,
    images: ["https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
              "https://plus.unsplash.com/premium_photo-1724849326552-ff97b4a8ab93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGtpbm5vJTIwb3JhbmdlfGVufDB8fDB8fHww",
              "https://plus.unsplash.com/premium_photo-1675237625886-7529b3b0c1cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGtpbm5vJTIwb3JhbmdlfGVufDB8fDB8fHww"
    ],
    name: "Kinno Orange",
    price: 120,
    priceRange: { min: 270, max: 340 },
    description: "Sweet and juicy Kinno oranges from Punjab orchards",
    farmerName: "Gurpreet Singh",
    farmerCity: "Amritsar",
    quality: 5,
    category: "Fruits",
    quantity: "800 kg"
  },
  {
    id: 7,
    images: ["https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
              "https://plus.unsplash.com/premium_photo-1726072357584-b613d4134334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJlbWl1bSUyMHdoZWF0fGVufDB8fDB8fHww",
              "https://images.unsplash.com/photo-1491986246887-3e56faa95239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByZW1pdW0lMjB3aGVhdHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    name: "Premium Wheat",
    price: 35,
    priceRange: { min: 350, max: 400 },
    description: "High-quality wheat from Punjab's golden fields",
    farmerName: "Harjinder Singh",
    farmerCity: "Ludhiana",
    quality: 5,
    category: "Grains",
    quantity: "5000 kg"
  },
  // Rajasthan
  {
    id: 8,
    images: ["https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80",
              "https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9tZWdyYW5hdGV8ZW58MHx8MHx8fDA%3D",
              "https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9tZWdyYW5hdGV8ZW58MHx8MHx8fDA%3D"
    ],
    name: "Pomegranate",
    price: 180,
    priceRange: { min: 100, max: 150 },
    description: "Fresh pomegranates from Rajasthan's orchards",
    farmerName: "Ramesh Sharma",
    farmerCity: "Jodhpur",
    quality: 4,
    category: "Fruits",
    quantity: "600 kg"
  },
  {
    id: 9,
    images: ["https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
              "https://plus.unsplash.com/premium_photo-1674347955751-047ca5dc0ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fE9yZ2FuaWMlMjBCYXJsZXl8ZW58MHx8MHx8fDA%3D",
              "https://images.unsplash.com/photo-1497448134719-754ac7fd09eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fE9yZ2FuaWMlMjBCYXJsZXl8ZW58MHx8MHx8fDA%3D"
    ],
    name: "Organic Barley",
    price: 40,
    priceRange: { min: 200, max: 270 },
    description: "Naturally grown barley from Rajasthan's farms",
    farmerName: "Vikram Singh",
    farmerCity: "Jaipur",
    quality: 4,
    category: "Grains",
    quantity: "1500 kg"
  },
  // Kerala
  {
    id: 10,
    images: ["https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=800&q=80",
              "https://media.istockphoto.com/id/621839788/photo/red-bananas-sri-lanka.webp?a=1&b=1&s=612x612&w=0&k=20&c=LqL0h0sq3P4ZNWVpGG8yEtpscZWgzjxZt3CHSvSYvDU=",
              "https://media.istockphoto.com/id/528426815/photo/bunch-of-red-bananas-fruit-isolated-over-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=dM1PhCeI36oeLuFCuIme7aOY7IcBWMF6x8XIva2f7RI="
    ],
    name: "Red Banana",
    price: 90,
    priceRange: { min: 230, max: 350 },
    description: "Sweet and nutritious red bananas from Kerala",
    farmerName: "Thomas Joseph",
    farmerCity: "Kochi",
    quality: 5,
    category: "Fruits",
    quantity: "300 kg"
  },
  {
    id: 11,
    images: ["https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1613728913341-8f29b02b8253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVkJTIwUmljZXxlbnwwfHwwfHx8MA%3D%3D",
              "https://media.istockphoto.com/id/902770682/photo/red-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=XDqS0E9EV8qLYv_HvbpDTmSxioE1izjWV5KYNJW4LlA="
    ],
    name: "Red Rice",
    price: 75,
    priceRange: { min: 400, max: 450 },
    description: "Traditional Kerala red rice, rich in nutrients",
    farmerName: "Mathew Philip",
    farmerCity: "Thrissur",
    quality: 5,
    category: "Grains",
    quantity: "1000 kg"
  },
  // Mumbai (Maharashtra)
  {
    id: 12,
    images: ["https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
              "https://plus.unsplash.com/premium_photo-1675715403334-79daed9283d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWxwaG9uc28lMjBNYW5nb3xlbnwwfHwwfHx8MA%3D%3D",
              "https://media.istockphoto.com/id/1087695674/photo/delicious-indian-alphonso-mangoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=g6joPxYjZCttDiZz1XRSNiFn1Y_xrTivnPC8HaVbie4="
    ],
    name: "Alphonso Mango",
    price: 300,
    priceRange: { min: 150, max: 250 },
    description: "Premium Ratnagiri Alphonso mangoes",
    farmerName: "Suresh Desai",
    farmerCity: "Ratnagiri",
    quality: 5,
    category: "Fruits",
    quantity: "400 kg"
  },
  {
    id: 13,
    images: ["https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
              "https://media.istockphoto.com/id/471729991/photo/a-picture-of-grains-in-a-wooden-spoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=RVkAHIE9oJVofvXXT_lOeRlLFlx2ssaI0B-iDmQnhow=",
              "https://media.istockphoto.com/id/503044635/photo/sorghum-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=6DZadNq4NEhj5f7UAPyvP5-_cMIf0Joob0NRqtURcrQ="
    ],
    name: "Jowar",
    price: 50,
    priceRange: { min: 200, max: 300 },
    description: "High-quality sorghum from Maharashtra farms",
    farmerName: "Prakash Patil",
    farmerCity: "Nashik",
    quality: 4,
    category: "Grains",
    quantity: "2500 kg"
  },
  // Hyderabad (Telangana)
  {
    id: 14,
    images: ["https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
              "https://plus.unsplash.com/premium_photo-1664391947940-d7ddacad129d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U3dlZXQlMjBMaW1lfGVufDB8fDB8fHww",
              "https://images.unsplash.com/photo-1461534204375-bd3ba51cca78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFN3ZWV0JTIwTGltZXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    name: "Sweet Lime",
    price: 85,
    priceRange: { min: 250, max: 320 },
    description: "Fresh and juicy mosambi from Telangana orchards",             
    farmerName: "Krishna Reddy",
    farmerCity: "Hyderabad",
    quality: 4,
    category: "Fruits",
    quantity: "700 kg"
  },
  {
    id: 15,
    images: ["https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
              "https://media.istockphoto.com/id/1126345377/photo/rice-in-a-wooden-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=lJGzjSVNIaLOBnK6U0uBh5znf6ByJoNOZIciukP-ELI=",
              "https://plus.unsplash.com/premium_photo-1723925093264-40b6b957c44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZpbmUlMjBSaWNlfGVufDB8fDB8fHww"
    ],
    name: "Fine Rice",
    price: 65,
    priceRange: { min: 200, max: 400 },
    description: "Premium quality rice from Telangana paddy fields",
    farmerName: "Ravi Kumar",
    farmerCity: "Warangal",
    quality: 5,
    category: "Grains",
    quantity: "3000 kg"
  }
];

const Product = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderStars = (quality: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={cn(
          "h-4 w-4 transition-colors duration-300",
          index < Math.floor(quality) ? "text-yellow-400 fill-yellow-400" : "text-green-200"
        )}
      />
    ));
  };

  const categories = Array.from(new Set(products.map(product => product.category)));
  const cities = Array.from(new Set(products.map(product => product.farmerCity).filter(Boolean)));

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesCity = selectedCity === "all" || product.farmerCity === selectedCity;
    return matchesCategory && matchesCity;
  });

  

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F2FCE2] via-[#EDFCDA] to-[#E2F5D3]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl font-bold text-green-800 mb-3 mt-8"
          >
            {t("products.featuredProducts")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-green-700 max-w-2xl"
          >
            {t("products.discoverProducts")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px] bg-white/80 backdrop-blur border-green-200 text-green-800 shadow-sm hover:bg-white/90 transition-colors">
              <SelectValue placeholder={t("products.filterByCategory")} />
            </SelectTrigger>
            <SelectContent className="bg-white border-green-200 shadow-lg">
              <SelectItem value="all">{t("products.allCategories")}</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {t(`products.${category.toLowerCase()}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-[180px] bg-white/80 backdrop-blur border-green-200 text-green-800 shadow-sm hover:bg-white/90 transition-colors">
              <SelectValue placeholder={t("products.filterByCity")} />
            </SelectTrigger>
            <SelectContent className="bg-white border-green-200 shadow-lg">
              <SelectItem value="all">{t("products.allStates")}</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {t(`products.cities.${city}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <Card className="relative bg-white/80 backdrop-blur-sm border-green-100 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-grow">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                      {t(`products.${product.name}`)}
                    </h3>
                    <div className="flex items-center gap-1">
                        {renderStars(product.quality)}
                      </div>
                    <p className="text-green-600 text-sm mb-4 line-clamp-2">
                      {t(`products.${product.description}`)}
                    </p>
                    
                    <div className="flex items-center gap-3 text-sm text-green-700 mb-4">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-medium">₹{product.priceRange.min} - ₹{product.priceRange.max}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-green-300" />
                      <span className="flex-1">{t(`${product.quantity}`)}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-sm text-green-600">
                      <User className="w-4 h-4" />
                      <span>{t(`products.farmerNames.${product.farmerName}`)}</span>
                      {product.farmerCity && (
                        <>
                          <MapPin className="w-4 h-4 ml-2" />
                          <span>{t(`products.cities.${product.farmerCity}`)}</span>
                        </>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsModalOpen(true);
                      }}
                      className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      {t("products.knowMore")}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </section>
  );
};

export default Product;