import type React from "react"
import type { Metadata } from "next"
import { Zen_Antique } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const zenAntique = Zen_Antique({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-antique",
})

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer & Artist",
  description: "Sophisticated portfolio showcasing full-stack development skills and artistic creativity",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${zenAntique.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
