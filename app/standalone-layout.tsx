import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./standalone-styles.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aqua Safeguard Technologies",
  description: "Water Purification Solutions",
}

export default function StandaloneLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/images/aqua-safeguard-logo.png"
                  alt="Aqua Safeguard Technologies Logo"
                  className="h-12 w-auto"
                />
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium">
                  Products
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                  Contact us
                </a>
              </nav>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
