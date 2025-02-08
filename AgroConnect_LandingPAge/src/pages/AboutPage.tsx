import { Link } from "react-router-dom";
import { ChevronRight, Award, Users, Target, BarChart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { AnimatedText } from "../components/ui/animated-text";
import { AnimatedNumber } from "../components/ui/animated-number";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
      icon: Award,
    },
    {
      title: t("about.values.transparency.title"),
      description: t("about.values.transparency.description"),
      icon: Users,
    },
    {
      title: t("about.values.empowerment.title"),
      description: t("about.values.empowerment.description"),
      icon: Target,
    },
    {
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
      icon: BarChart,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
     
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/80 to-white" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background/30 backdrop-blur-sm mb-8">
              {t("about.header")}
            </div>
            <AnimatedText
              text={t("about.title")}
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
            />
            <AnimatedText
              text={t("about.subtitle")}
              className="text-xl text-muted-foreground mb-8"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2132075/pexels-photo-2132075.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt={t("about.imageAlt")}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-green-600">
                    <AnimatedNumber value={5} />+
                  </div>
                  <div className="text-sm">{t("about.yearsOfExcellence")}</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">{t("about.mission.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("about.mission.description")}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">{t("about.vision.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("about.vision.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
  <div className="container">
    <AnimatedText text={t("about.values.title")} className="text-3xl font-bold text-center mb-16" />
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {values.map((value, index) => (
        <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
          <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden relative h-full flex flex-col">
            <div className="absolute bottom-0 left-0 w-full bg-green-500/50 group-hover:animate-slide-up-bg z-0" />
            <CardContent className="p-6 text-center relative z-10 flex flex-col flex-grow">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-green-100 mx-auto mb-4">
                <value.icon className="h-8 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground flex-grow">{value.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Join Us Section */}
      <section className="py-20 bg-green-500 text-white relative overflow-hidden">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText text={t("about.joinUs.title")} className="text-3xl font-bold mb-4" />
            <AnimatedText text={t("about.joinUs.description")} className="text-xl mb-8" delay={3} />
            <Button asChild size="lg" variant="outline" className="bg-white text-green-600 hover:bg-green-50">
              <Link to="/register">
                {t("about.joinUs.buttonText")}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
