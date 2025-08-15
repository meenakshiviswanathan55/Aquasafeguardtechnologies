import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./main-styles.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/aqua-header"
import Footer from "./components/aqua-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aqua Safeguard Technologies",
  description: "Water Purification Solutions",
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
