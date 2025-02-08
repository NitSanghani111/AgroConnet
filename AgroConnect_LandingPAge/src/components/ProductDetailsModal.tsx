
import { motion, AnimatePresence } from "framer-motion";
import { Star, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from 'embla-carousel-react';

interface ProductType {
  id: number;
  images: string[];
  name: string;
  priceRange: { 
    min: number;
    max: number;
  };
  description: string;
  farmerName: string;
  farmerCity?: string;
  quality: number;
  category: string;
  quantity: string;
}

interface ProductDetailsModalProps {
  product: ProductType;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailsModal = ({ product, isOpen, onClose }: ProductDetailsModalProps) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const images = product.images; // Use the images from the product

  const renderStars = (quality: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${index < Math.floor(quality) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  const mockProductDetails = {
    certification: "Organic Certified by FSSAI",
    landType: "Fertile Black Soil",
    farmingPractices: [
      "No chemical pesticides used",
      "Natural fertilizers only",
      "Sustainable irrigation methods",
      "Crop rotation practiced"
    ],
    qualityParameters: [
      "Hand-picked at optimal ripeness",
      "Carefully sorted and graded",
      "Stored in temperature-controlled environment",
      "Regular quality checks performed"
    ],
    farmerExperience: "15+ years in organic farming",
    contactNumber: "+91 98765 43210"
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl overflow-hidden h-[85vh] flex flex-col"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute right-6 top-6 p-2.5 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-200 z-10 border border-gray-100"
            >
              <X className="h-5 w-5 text-gray-700" />
            </motion.button>

            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
                <div className="space-y-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 h-[450px] group">
                    <div className="embla" ref={emblaRef}>
                      <div className="flex">
                        {images.map((img, index) => (
                          <div key={index} className="flex-[0_0_100%]">
                            <img
                              src={img}
                              alt={`${product.name} ${index + 1}`}
                              className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <button
                      onClick={() => emblaApi?.scrollPrev()}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    >
                      <ChevronLeft className="h-5 w-5 text-gray-800" />
                    </button>
                    <button
                      onClick={() => emblaApi?.scrollNext()}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    >
                      <ChevronRight className="h-5 w-5 text-gray-800" />
                    </button>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl backdrop-blur-sm">
                      {renderStars(product.quality)}
                      <motion.span className="text-sm font-medium text-gray-600">
          {product.quality}/5 {t("products.rating")}
        </motion.span>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="ml-auto bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg"
        >
          {t("products.Negotiate")}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowMoreDetails(!showMoreDetails)}
          className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white px-5 py-2 rounded-lg"
        >
          {showMoreDetails ? t("products.View Less") : t("products.Read More")}
          {showMoreDetails ? <ChevronUp className="h-5 w-20" /> : <ChevronDown className="h-5 w-20" />}
        </motion.button>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
                  >
                    {t(`products.${product.name}`)}
                  </motion.h2>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl shadow-black/5 ring-1 ring-black/5 space-y-4 transition-all duration-300"
                  >
                    <h3 className="font-bold text-gray-900 text-xl">{t("products.Product Info")}</h3>
        <div className="space-y-4 divide-y divide-gray-100">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">{t("products.Quantity")}:</span>
            <span className="font-medium text-gray-900">{product.quantity}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">{t("products.Price Range")}:</span>
            <span className="font-medium text-gray-900">₹{product.priceRange.min} - ₹{product.priceRange.max}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">{t("products.Category")}:</span>
            <span className="font-medium text-gray-900">{product.category}</span>
          </div>
        </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl shadow-black/5 ring-1 ring-black/5 space-y-4 transition-all duration-300"
                  >
                      <h3 className="font-bold text-gray-900 text-xl">{t("products.Farmer Details")}</h3>
        <div className="space-y-4 divide-y divide-gray-100">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">{t("products.Name")}:</span>
            <span className="font-medium text-gray-900">{t(`products.farmerNames.${product.farmerName}`)}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">{t("products.Contact")}:</span>
            <span className="font-medium text-gray-900">{mockProductDetails.contactNumber}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">{t("products.Location")}:</span>
            <span className="font-medium text-gray-900">{t(`products.cities.${product.farmerCity}`)}</span>
          </div>
        </div>
                  </motion.div>
                </motion.div>
              </div>

              <AnimatePresence>
                {showMoreDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200/80"
                  >
                    <div className="p-10 bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">
          {t("products.Detailed Information")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <motion.div>
              <h4 className="font-semibold text-gray-900 mb-3">{t("products.Product Certification")}</h4>
              <p className="text-gray-600">{mockProductDetails.certification}</p>
            </motion.div>
            
            <motion.div>
              <h4 className="font-semibold text-gray-900 mb-3">{t("products.Land Type")}</h4>
              <p className="text-gray-600">{mockProductDetails.landType}</p>
            </motion.div>
            
            <motion.div>
              <h4 className="font-semibold text-gray-900 mb-3">{t("products.Farming Practices")}</h4>
              <ul className="space-y-3">
                {mockProductDetails.farmingPractices.map((practice, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 bg-white/50 p-3 rounded-lg backdrop-blur-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-green-400 to-green-500" />
                    <span className="text-gray-700">{t(`products.farmingPractices.${practice}`)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <div className="space-y-8">
            <motion.div>
              <h4 className="font-semibold text-gray-900 mb-3">{t("products.Quality Parameters")}</h4>
              <ul className="space-y-3">
                {mockProductDetails.qualityParameters.map((param, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 bg-white/50 p-3 rounded-lg backdrop-blur-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-500" />
                    <span className="text-gray-700">{t(`products.qualityParameters.${param}`)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div>
              <h4 className="font-semibold text-gray-900 mb-3">{t("products.Farmer Experience")}</h4>
              <p className="text-gray-600 bg-white/50 p-3 rounded-lg backdrop-blur-sm">
                {mockProductDetails.farmerExperience}
              </p>
            </motion.div>
          </div>
        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailsModal;