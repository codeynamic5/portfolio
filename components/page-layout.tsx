import type React from "react"
import { Navigation } from "./navigation"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className={`flex-1 pt-16 ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}
