import Link from "next/link"
import Image from "next/image"

export default function AquaHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=50&width=200&text=Aqua+Safeguard+Technologies+Logo"
              alt="Aqua Safeguard Technologies Logo"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">
              Home
            </Link>
            <Link
              href="/aqua-products"
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Products
            </Link>
            <Link
              href="/aqua-contact"
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Contact us
            </Link>
          </nav>

          <button className="md:hidden text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
