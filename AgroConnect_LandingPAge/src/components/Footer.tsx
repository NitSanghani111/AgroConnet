import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Agronet</h3>
            <p className="text-sm text-muted-foreground">
              Connecting farmers directly with buyers to eliminate middlemen and improve profitability through technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-muted-foreground hover:text-green-600">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-green-600">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: nit@agronet.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Marwadi University, Rajkot, Gujrat, India</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-green-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-green-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-green-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-green-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Agronet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}