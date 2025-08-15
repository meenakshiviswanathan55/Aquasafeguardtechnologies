import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./aqua-global-styles.css"
import { ThemeProvider } from "@/components/theme-provider"
import AquaNavigationHeader from "./components/aqua-navigation-header"
import AquaWebsiteFooter from "./components/aqua-website-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aqua Safeguard Technologies",
  description: "Water Purification Solutions",
}

export default function AquaRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AquaNavigationHeader />
          {children}
          <AquaWebsiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
