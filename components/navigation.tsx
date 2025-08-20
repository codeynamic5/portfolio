"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navigationItems = [
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Connect", href: "/connect" },
]

export function Navigation() {
  const pathname = usePathname()
  const { theme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm px-6 py-4">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-all duration-300"
        >
          <Image
            src="/a-logo.png"
            alt="A Logo"
            width={35}
            height={35}
            className={cn(
              "object-contain transition-all duration-300",
              theme === "dark" 
                ? "brightness-0 saturate-100" 
                : ""
            )}
            style={
              theme === "dark" 
                ? { filter: "brightness(0) saturate(100%) invert(97%) sepia(20%) saturate(236%) hue-rotate(346deg) brightness(103%) contrast(93%)" }
                : {}
            }
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-300 hover:text-accent px-3 py-2",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
              {/* Active page underline */}
              {pathname === item.href && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest-green rounded-full transition-all duration-300" />
              )}
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
      <div className="md:hidden mt-4 pt-4 border-t border-border/20">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative block px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-accent hover:bg-secondary rounded-full text-center",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
              {/* Active page underline for mobile */}
              {pathname === item.href && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-forest-green rounded-full transition-all duration-300" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
