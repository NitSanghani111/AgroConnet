import { Button } from "../components/ui/button"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Textarea } from "../components/ui/Textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
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
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-8">
           Earn your Profit without 3rd parties extra moneys
          </p>
        </div>
      </section>  
    <div className="container py-10">
       
      <div className="grid gap-8 lg:grid-cols-2">
    
        <div>
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions about Agronet? We&apos;re here to help. Send us a message and we&apos;ll get back to you as soon as possible.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">
                Marwadi University 
                  <br />
                 Rajkot,Gujrat
                  <br />
                  India
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">nit@agronet.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+91 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 123 456 7890"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  )
}