"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function AquaNavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/aqua-safeguard-logo-nav.svg"
              alt="Aqua Safeguard Technologies Logo"
              width={48}
              height={40}
              className="h-10 w-auto md:h-12"
            />
          </div>

          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="/aqua-home-page" className="text-gray-700 hover:text-blue-600 font-medium text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aqua-product-catalog" className="text-gray-700 hover:text-blue-600 font-medium text-lg">
                Products
              </Link>
            </li>
            <li>
              <Link href="/aqua-contact-details" className="text-gray-700 hover:text-blue-600 font-medium text-lg">
                Contact us
              </Link>
            </li>
          </ul>

          <button className="md:hidden p-2" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        <div id="mobile-menu" className={`md:hidden mt-4 pb-4 ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <ul className="space-y-2">
            <li>
              <Link
                href="/aqua-home-page"
                className="block py-2 text-gray-700 hover:text-blue-600 text-base"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aqua-product-catalog"
                className="block py-2 text-gray-700 hover:text-blue-600 text-base"
                onClick={toggleMobileMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/aqua-contact-details"
                className="block py-2 text-gray-700 hover:text-blue-600 text-base"
                onClick={toggleMobileMenu}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
