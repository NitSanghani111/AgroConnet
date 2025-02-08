import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { AnimatedText } from "../components/ui/animated-text";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SuccessStoriesPage() {
  const { t } = useTranslation();

  // Array of success stories
  const successStories = [
    {
      name: t('hero2.successStories.0.name'),
      location: t('hero2.successStories.0.location'),
      excerpt: t('hero2.successStories.0.excerpt'),
      image: "https://th.bing.com/th/id/OIP.oQEQvTunq-fTXmOK1hFSyAHaLH?w=187&h=280&c=7&r=0&o=5&dpr=1.8&pid=1.7",
      revenueIncrease: t('hero2.successStories.0.revenueIncrease'),
      crops: t('hero2.successStories.0.crops'),
    },
    {
      name: t('hero2.successStories.1.name'),
      location: t('hero2.successStories.1.location'),
      excerpt: t('hero2.successStories.1.excerpt'),
      image: "https://media.istockphoto.com/id/1180926773/photo/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-arms.webp?a=1&b=1&s=612x612&w=0&k=20&c=cinmPjbkyRi8OCmGmoNYnywF7fnVB6pVi00Oi0flIx0=",
      revenueIncrease: t('hero2.successStories.1.revenueIncrease'),
      crops: t('hero2.successStories.1.crops'),
    },
    {
      name: t('hero2.successStories.2.name'),
      location: t('hero2.successStories.2.location'),
      excerpt: t('hero2.successStories.2.excerpt'),
      image: "https://images.pexels.com/photos/7691739/pexels-photo-7691739.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenueIncrease: t('hero2.successStories.2.revenueIncrease'),
      crops: t('hero2.successStories.2.crops'),
    },
    {
      name: t('hero2.successStories.3.name'),
      location: t('hero2.successStories.3.location'),
      excerpt: t('hero2.successStories.3.excerpt'),
      image: "https://images.pexels.com/photos/8117531/pexels-photo-8117531.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenueIncrease: t('hero2.successStories.3.revenueIncrease'),
      crops: t('hero2.successStories.3.crops'),
    },
    {
      name: t('hero2.successStories.4.name'),
      location: t('hero2.successStories.4.location'),
      excerpt: t('hero2.successStories.4.excerpt'),
      image: "https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=",
      revenueIncrease: t('hero2.successStories.4.revenueIncrease'),
      crops: t('hero2.successStories.4.crops'),
    },
    {
      name: t('hero2.successStories.5.name'),
      location: t('hero2.successStories.5.location'),
      excerpt: t('hero2.successStories.5.excerpt'),
      image: "https://images.pexels.com/photos/8145331/pexels-photo-8145331.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenueIncrease: t('hero2.successStories.5.revenueIncrease'),
      crops: t('hero2.successStories.5.crops'),
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text={t('hero.title')}
              className="text-4xl font-bold tracking-tighter mb-4"
            />
            <AnimatedText
              text={t('hero.subtitle')}
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
                      className="w-full h-max-[400px] object-contain rounded-t-lg"
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
                     {t("hero2.quote")}
                    </p>
                    <div className="mb-6">
                      <h3 className="font-bold text-xl">{t("hero2.name")}</h3>
                      <p className="text-muted-foreground">
                       {t("hero2.location")}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{t('hero2.Revenue Increase')}:</span>
                        <span className="text-green-600">45%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{t('hero2.Years With Agronet')}:</span>
                        <span>3 {t("hero2.years")}</span>
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
                className="group"
              >
                <Card className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative group w-full h-80">
                      <img
                        src={story.image || "/success1.jpeg"}
                        alt={story.name}
                        className="w-full h-80 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                        <button className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
                          {t('hero2.readFullStory')}
                        </button>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div>
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
                      </div>
                      <div className="pt-4 border-t grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {t('hero2.Revenue Increase')}
                          </p>
                          <p className="font-bold text-green-600">
                            {story.revenueIncrease}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {t('hero2.Main Crops')}
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
        <div className="absolute inset-0 bg-[url('/success1.jpg')] bg-cover bg-center opacity-10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text={t('hero2.startYourSuccessStory')}
              className="text-3xl font-bold mb-4"
            />
            <AnimatedText
              text={t('hero2.joinThousands')}
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
                {t('hero2.joinAgronet')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}