import { useTranslation } from "react-i18next";
import { BookOpen, Award, BarChart, Clock, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { AnimatedText } from "../components/ui/animated-text";
import { motion } from "framer-motion";


export default function ResourcesPage() {
  const { t } = useTranslation();

  const categories = t("categories", { returnObjects: true }).map((category: any, index: number) => ({
    ...category,
    icon: [BookOpen, BarChart, Award, Sparkles][index] || BookOpen,
  }));

  const articles = t("articles", { returnObjects: true });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      

      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2804627/pexels-photo-2804627.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-800/50 backdrop-blur-sm" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedText
                text={t("hero.title")}
                className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-white"
              />
              <AnimatedText
                text={t("hero.subtitle")}
                className="text-xl md:text-2xl text-green-50/90 mb-8"
                delay={0.3}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-green-800 hover:bg-green-50 transition-all duration-300"
                >
                  {t('hero1.getStarted')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Add any additional content here */}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden relative border-none shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm h-full">
                  <div className="absolute bottom-0 left-0 w-full bg-green-500/50 group-hover:animate-slide-up-bg z-0" />
                  <CardContent className="p-8 text-center relative z-10 h-full">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-green-100 rounded-full scale-110 group-hover:scale-125 transition-transform duration-300" />
                      <category.icon
                        size={32}
                        className="relative z-10 mx-auto text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-green-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-green-600/80 mb-6 line-clamp-2">
                      {category.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 transition-all duration-300"
                    >
                      {t("buttons.readMore")}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-[#E6E6FA]">
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-green-800 mb-4">
        {t(`latest.${'Latest Articles'}`)}
      </h2>
      <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-8" />
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article: any, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-none">
            <div className="relative overflow-hidden aspect-video">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="flex-1 p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {article.category}
                </span>
                <span className="flex items-center text-sm text-green-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </span>
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                {article.title}
              </h4>
              <p className="text-green-600/80 mb-6 line-clamp-3">
                {article.excerpt}
              </p>
              <Button
                className="w-full group/btn bg-green-50 hover:bg-green-100 text-green-800"
                variant="ghost"
              >
                <span className="mr-2">{t("buttons.readMore")}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
}