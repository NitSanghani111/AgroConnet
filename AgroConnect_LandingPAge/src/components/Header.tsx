"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import img from "../assets/f.png"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [])

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/resources", label: "Resources" },
    { path: "/success-stories", label: "Success Stories" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-green-400/95 backdrop-blur-md shadow-md" : "bg-green-400"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo Section */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src={img}
              alt="AgroConnect logo"
              className="h-16 w-auto object-contain mr-2 max-w-[120px] transition-transform"
            />
            <span className="text-2xl font-bold text-white group-hover:text-green-100 transition-colors">
              AgroConnect
            </span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative text-l font-medium text-white hover:text-green-100 transition-colors group"
            >
              {item.label}
              <motion.span
                className={`absolute left-0 right-0 bottom-[-4px] h-0.5 bg-white transform origin-left ${
                  location.pathname === item.path ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 transition-transform`}
                initial={false}
                animate={{ scaleX: location.pathname === item.path ? 1 : 0 }}
              />
            </Link>
          ))}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <Button
              asChild
              variant="outline"
              className="font-medium bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white transition-colors"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-white/10 text-black-600  hover:bg-white/20 hover:text-white transition-colors">
              <Link to="/register">Register</Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-0 right-0 bg-green-400 border-t border-white/10 md:hidden overflow-hidden"
            >
              <nav className="container flex flex-col py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium text-white hover:text-green-100 transition-colors ${
                        location.pathname === item.path ? "bg-white/10 rounded-md" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="block px-4 py-2">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="flex flex-col space-y-2 px-4 pt-2 border-t border-white/10"
                >
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white transition-colors"
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild className="w-full bg-white text-green-600 hover:bg-green-100 transition-colors">
                    <Link to="/register">Register</Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

