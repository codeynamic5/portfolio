"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Connect", href: "/connect" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/95 backdrop-blur-sm border border-border rounded-full shadow-lg px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-xl font-serif font-bold text-primary hover:text-accent transition-colors duration-300 mr-8"
        >
          ART
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-accent px-3 py-1 rounded-full",
                pathname === item.href ? "text-primary bg-secondary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button className="p-2 text-primary hover:text-accent transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Hidden by default, can be toggled */}
      <div className="md:hidden mt-4 pt-4 border-t border-border">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "block px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-accent hover:bg-secondary rounded-full text-center",
                pathname === item.href ? "text-primary bg-secondary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
