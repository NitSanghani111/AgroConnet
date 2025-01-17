import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from 'lucide-react'
import { Button } from "./ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-600">Agronet</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-green-600">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-green-600">
            Contact
          </Link>
          {/* <Link to="/marketplace" className="text-sm font-medium hover:text-green-600">
          Marketplace
          </Link> */}
          <Link to="/resources" className="text-sm font-medium hover:text-green-600">
          Resources
          </Link>
        
          <Link to="/success-stories" className="text-sm font-medium hover:text-green-600">
          success-stories
          </Link>
          <Button asChild variant="outline" className="font-medium">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/register">Register</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container flex flex-col py-4 space-y-4">
              <Link
                to="/"
                className="text-sm font-medium hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {/* <Link to="/marketplace" className="text-sm font-medium hover:text-green-600">
          Marketplace
          </Link> */}
          <Link to="/resources" className="text-sm font-medium hover:text-green-600">
          Resources
          </Link>
         
          <Link to="/success-stories" className="text-sm font-medium hover:text-green-600">
          success-stories
          </Link>
        
              <div className="flex flex-col space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

