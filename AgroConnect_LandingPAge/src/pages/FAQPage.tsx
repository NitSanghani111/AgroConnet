import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { AnimatedText } from "../components/ui/animated-text";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../components/LanguageSelector";

export default function FAQPage() {
  const { t } = useTranslation();
  const [openCategory, setOpenCategory] = useState<string | null>("general");

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const faqCategories = {
    general: {
      title: t("faq.categories.general.title"),
      description: t("faq.categories.general.description"),
      questions: [
        { 
          id: "what-is-agronet", 
          question: t("faq.categories.general.questions.what-is-agronet.question"),
          answer: t("faq.categories.general.questions.what-is-agronet.answer")
        },
        { 
          id: "how-to-register", 
          question: t("faq.categories.general.questions.how-to-register.question"),
          answer: t("faq.categories.general.questions.how-to-register.answer")
        },
      ],
    },
    farmers: {
      title: t("faq.categories.farmers.title"),
      description: t("faq.categories.farmers.description"),
      questions: [
        { 
          id: "how-to-list", 
          question: t("faq.categories.farmers.questions.how-to-list.question"),
          answer: t("faq.categories.farmers.questions.how-to-list.answer")
        },
        { 
          id: "payment-process", 
          question: t("faq.categories.farmers.questions.payment-process.question"),
          answer: t("faq.categories.farmers.questions.payment-process.answer")
        },
      ],
    },
    buyers: {
      title: t("faq.categories.buyers.title"),
      description: t("faq.categories.buyers.description"),
      questions: [
        { 
          id: "quality-assurance", 
          question: t("faq.categories.buyers.questions.quality-assurance.question"),
          answer: t("faq.categories.buyers.questions.quality-assurance.answer")
        },
        { 
          id: "bulk-ordering", 
          question: t("faq.categories.buyers.questions.bulk-ordering.question"),
          answer: t("faq.categories.buyers.questions.bulk-ordering.answer")
        },
      ],
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <LanguageSelector />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText 
              text={t("faq.title")} 
              className="text-4xl font-bold tracking-tighter mb-4" 
            />
            <AnimatedText 
              text={t("faq.subtitle")} 
              className="text-xl text-muted-foreground mb-8" 
              delay={3} 
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {Object.keys(faqCategories).map((category) => (
              <motion.div 
                key={category} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                whileHover={{ scale: 1.02 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    openCategory === category ? "border-green-600 shadow-xl" : ""
                  }`} 
                  onClick={() => toggleCategory(category)}
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">
                      {faqCategories[category].title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {faqCategories[category].description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* FAQ Questions */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqCategories[openCategory]?.questions.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">{t("faq.stillHaveQuestions")}</h2>
            <p className="text-muted-foreground mb-8">{t("faq.contactSupport")}</p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/contact">{t("faq.contactButton")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}