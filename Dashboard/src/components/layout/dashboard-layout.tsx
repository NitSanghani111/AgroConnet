"use client"

import { useState, useEffect } from "react"
import { LayoutDashboard, ShoppingCart, Package, MessageSquare, BarChart, Bell, Search, Plus, Menu } from "lucide-react"
import { ProfileDropdown } from "../ProfileDropdown"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "..//ui/sheet"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import ScrollArea from "../ui/scroll-area"
import { cn } from "../../lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: "farmer" | "buyer"
}

export function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("/dashboard")
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New order received",
      description: "You have received a new order from John Doe",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      title: "Payment successful",
      description: "Payment for order #123 has been processed",
      time: "1 hour ago",
      unread: true,
    },
  ])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsCommandOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const farmerNavItems = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/farmer/dashboard" },
    { title: "Manage Products", icon: Package, href: "/farmer/products" },
    { title: "Product Requests", icon: ShoppingCart, href: "/farmer/requests" },
    { title: "Sold Products", icon: ShoppingCart, href: "/farmer/sold" },
    { title: "Support", icon: MessageSquare, href: "/farmer/support" },
    { title: "Analytics", icon: BarChart, href: "/farmer/analytics" },
  ]

  const buyerNavItems = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/buyer/dashboard" },
    { title: "Browse Products", icon: Package, href: "/buyer/products" },
    { title: "Purchase History", icon: ShoppingCart, href: "/buyer/history" },
    { title: "Support", icon: MessageSquare, href: "/buyer/support" },
    { title: "Analytics", icon: BarChart, href: "/buyer/analytics" },
  ]

  const navItems = userType === "farmer" ? farmerNavItems : buyerNavItems

  return (
    <div className="relative flex min-h-screen bg-gradient-to-br from-background to-background/95">
      {/* Spotlight effect */}
      <div className="fixed left-1/2 top-0 -z-10 h-[1000px] w-[1000px] rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur-3xl animate-spotlight" />

      {/* Sidebar - Desktop */}
      <aside className="fixed hidden h-screen w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/50 lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b px-6">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AgroConnect
            </span>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 py-6">
            <nav className="space-y-1 px-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveItem(item.href)}
                  className={cn(
                    "group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
                    activeItem === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                  {item.title}
                </a>
              ))}
            </nav>
          </ScrollArea>

          {/* Quick Actions */}
          <div className="p-4">
            <Button
              className="w-full justify-start gap-2 bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300"
              size="sm"
            >
              <Plus className="h-4 w-4" />
              {userType === "farmer" ? "Add New Product" : "Create Request"}
            </Button>
          </div>

          {/* Support Section */}
          <div className="border-t p-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 p-4 backdrop-blur-sm">
              <p className="text-sm font-medium">Need help?</p>
              <p className="mt-1 text-xs text-muted-foreground">Contact our support team</p>
              <Button variant="secondary" size="sm" className="mt-3 w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="border-b p-4">
            <SheetTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AgroConnect
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1 py-6">
            <nav className="space-y-1 px-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.href)
                    setIsMobileMenuOpen(false)
                  }}
                  className={cn(
                    "group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
                    activeItem === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.title}
                </a>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>

            {/* Search */}
            <div className="hidden md:block">
              <Button
                variant="outline"
                className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
                onClick={() => setIsCommandOpen(true)}
              >
                <Search className="h-4 w-4 xl:mr-2" />
                <span className="hidden xl:inline-flex">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full">
                  <Bell className="h-5 w-5" />
                  {notifications.some((n) => n.unread) && (
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 p-4">
                    <div className="flex w-full items-start justify-between gap-2">
                      <span className="font-medium">{notification.title}</span>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile */}
            <ProfileDropdown userName="John Doe" userEmail="john@example.com" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 lg:p-8">{children}</div>
        </main>
      </div>

      {/* Command Menu */}
      <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Actions">
            {navItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  window.location.href = item.href
                  setIsCommandOpen(false)
                }}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}

