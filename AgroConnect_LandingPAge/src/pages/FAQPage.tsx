import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { AnimatedText } from "../components/ui/animated-text"
import { Link } from "react-router-dom"

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>("general")
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Frequently Asked Questions"
              className="text-4xl font-bold tracking-tighter mb-4"
            />
            <AnimatedText
              text="Find answers to common questions about Agronet"
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
                    openCategory === category
                      ? "border-green-600 shadow-xl"
                      : ""
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
            <AnimatePresence>
              {openCategory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    {faqCategories[openCategory].questions.map((faq) => (
                      <Card key={faq.id}>
                        <CardContent className="p-0">
                          <Button
                            variant="ghost"
                            className="w-full justify-between p-6 h-auto"
                            onClick={() => toggleQuestion(faq.id)}
                          >
                            <span className="font-medium text-left">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                openQuestion === faq.id ? "rotate-180" : ""
                              }`}
                            />
                          </Button>
                          <AnimatePresence>
                            {openQuestion === faq.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-6 pb-6 text-muted-foreground">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              If you cannot find answer to your question in our FAQ, you can
              always contact us. We will answer to you shortly!
            </p>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700"
            >
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const faqCategories: Record<
  string,
  {
    title: string
    description: string
    questions: Array<{
      id: string
      question: string
      answer: string
    }>
  }
> = {
  general: {
    title: "General Questions",
    description: "Basic information about Agronet",
    questions: [
      {
        id: "what-is-agronet",
        question: "What is Agronet?",
        answer: "Agronet is a digital platform that connects farmers directly with buyers, eliminating middlemen and helping farmers get better prices for their produce.",
      },
      {
        id: "how-to-register",
        question: "How do I register on Agronet?",
        answer: "You can register on Agronet by clicking the 'Register' button and filling out the registration form. You'll need to provide basic information and choose whether you're registering as a farmer or a buyer.",
      },
    ],
  },
  farmers: {
    title: "For Farmers",
    description: "Information for farmers using Agronet",
    questions: [
      {
        id: "how-to-list",
        question: "How do I list my products?",
        answer: "After logging in, go to your dashboard and click on 'Add Product'. Fill in the details about your produce, including quantity, price, and quality parameters.",
      },
      {
        id: "payment-process",
        question: "How do I receive payments?",
        answer: "Payments are processed securely through our platform. You can link your bank account in your profile settings to receive direct payments when your produce is sold.",
      },
    ],
  },
  buyers: {
    title: "For Buyers",
    description: "Information for buyers using Agronet",
    questions: [
      {
        id: "quality-assurance",
        question: "How is quality assured?",
        answer: "We have a robust quality verification system. All products are checked against quality parameters, and we provide detailed quality reports. You can also check farmer ratings and reviews.",
      },
      {
        id: "bulk-ordering",
        question: "Can I place bulk orders?",
        answer: "Yes, you can place bulk orders directly through the platform. Many farmers offer special prices for bulk purchases. You can negotiate prices for large quantities.",
      },
    ],
  },
}

