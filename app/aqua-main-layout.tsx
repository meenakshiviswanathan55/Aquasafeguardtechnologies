import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./aqua-main-styles.css"
import { ThemeProvider } from "@/components/theme-provider"
import AquaMainHeader from "./components/aqua-main-header"
import AquaMainFooter from "./components/aqua-main-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aqua Safeguard Technologies",
  description: "Water Purification Solutions",
}

export default function AquaMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AquaMainHeader />
          {children}
          <AquaMainFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
