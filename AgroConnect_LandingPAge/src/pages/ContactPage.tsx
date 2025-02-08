import { Button } from "../components/ui/button"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Textarea } from "../components/ui/Textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from "react-i18next"


export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative bg-blue-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small_2x/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-xl mb-8">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>
      
      <div className="container py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold mb-4">{t("contact.getInTouch")}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t("contact.description")}
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">{t("contact.address.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("contact.address.line1")}
                    <br />
                    {t("contact.address.line2")}
                    <br />
                    {t("contact.address.line3")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">{t("contact.email.title")}</h3>
                  <p className="text-muted-foreground">{t("contact.email.value")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">{t("contact.phone.title")}</h3>
                  <p className="text-muted-foreground">{t("contact.phone.value")}</p>
                </div>
              </div>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.form.title")}</CardTitle>
              <CardDescription>
                {t("contact.form.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">{t("contact.form.firstName")}</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">{t("contact.form.lastName")}</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 123 456 7890"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    placeholder={t("contact.form.messagePlaceholder")}
                    required
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  {t("contact.form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}