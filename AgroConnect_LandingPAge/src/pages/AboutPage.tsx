import { Link } from "react-router-dom"
import { ChevronRight, Award, Users, Target, BarChart } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { AnimatedText } from "../components/ui/animated-text"
import { AnimatedNumber } from "../components/ui/animated-number"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/80 to-white" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background/30 backdrop-blur-sm mb-8">
              About Agronet
            </div>
            <AnimatedText
              text="Revolutionizing  &nbsp; Agriculture  &nbsp; Through  &nbsp; Technology"
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
            />
            <AnimatedText
              text="We're  &nbsp; on  &nbsp; a  &nbsp; mission  &nbsp; to  &nbsp; empower  &nbsp; farmers  &nbsp; and  &nbsp; create  &nbsp; a  &nbsp; sustainable  &nbsp; agricultural  &nbsp; ecosystem  &nbsp; through  &nbsp; direct  &nbsp; market  &nbsp; access  &nbsp; and  &nbsp; technology."
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
                src="https://th.bing.com/th/id/OIP.5DdOoter3uib5J55cohzXgHaE6?w=269&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
                alt="Farmers using Agronet"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-green-600">
                    <AnimatedNumber value={5} />+
                  </div>
                  <div className="text-sm">
                    Years of
                    <br />
                    Excellence
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To create a transparent and efficient agricultural marketplace
                  that empowers farmers, eliminates intermediaries, and ensures
                  fair prices for both farmers and buyers.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To be the leading agricultural technology platform that
                  transforms the way farm produce is traded, making the process
                  more efficient, transparent, and profitable for all
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <AnimatedText
            text="Our Core Values"
            className="text-3xl font-bold text-center mb-16"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group relative border-none shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-green-100 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <value.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Join &nbsp; Us  &nbsp; in  &nbsp; Transforming  &nbsp; Agriculture"
              className="text-3xl font-bold mb-4"
            />
            <AnimatedText
              text="Be  &nbsp; part  &nbsp; of  &nbsp; the  &nbsp; agricultural  &nbsp; revolution.  &nbsp; Join  &nbsp; Agronet  &nbsp; today  &nbsp; and  &nbsp; help  &nbsp; us  &nbsp; create  &nbsp; a  &nbsp; better  &nbsp; future  &nbsp; for  &nbsp; farmers."
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
                Join Agronet
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    title: "Innovation",
    description:
      "We constantly innovate to provide the best solutions for our users",
    icon: Award,
  },
  {
    title: "Transparency",
    description:
      "We believe in complete transparency in all our operations",
    icon: Users,
  },
  {
    title: "Empowerment",
    description:
      "We work to empower farmers through technology and market access",
    icon: Target,
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do",
    icon: BarChart,
  },
]