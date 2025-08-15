import Image from "next/image"
import Link from "next/link"

export default function AquaWebsiteFooter() {
  return (
    <footer className="py-16 md:py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-10 md:mb-14">
          <Image
            src="/images/aqua-safeguard-logo-nav.svg"
            alt="Aqua Safeguard Technologies Logo"
            width={48}
            height={40}
            className="h-10 w-auto md:h-12"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">About us</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aqua Safeguard Technologies is dedicated to providing clean, safe, and healthy drinking water through
              advanced and reliable purification solutions. Our water purifiers are designed to effectively remove
              harmful contaminants while retaining essential minerals, ensuring every drop is pure and refreshing. With
              a strong focus on innovation, quality, and customer satisfaction, we strive to make safe drinking water
              accessible and affordable for every household, because we believe clean water is a basic necessity, not a
              privilege.
            </p>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/aqua-home-solutions" className="hover:text-blue-400">
                  Domestic Products
                </Link>
              </li>
              <li>
                <Link href="/aqua-business-systems" className="hover:text-blue-400">
                  Commercial Solutions
                </Link>
              </li>
              <li>
                <Link href="/aqua-factory-treatment" className="hover:text-blue-400">
                  Industrial Water Treatment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Maintenance & Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Water Testing Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Installation Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm mb-6">
              <div>
                <p className="font-medium text-white">Call:</p>
                <p>+91 9994430555</p>
                <p>+91 9095494893</p>
                <p>+91 9698330555</p>
              </div>
              <div>
                <p className="font-medium text-white">Email:</p>
                <p>aquasafegaurdtechnologies@gmail.com</p>
              </div>
              <div>
                <p className="font-medium text-white">Address:</p>
                <p>4/487, Kalaingar Street, Thasilthar nagar, Madurai - 625020</p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-2">Quick Links</h5>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>
                  <Link href="/aqua-home-page" className="hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/aqua-product-catalog" className="hover:text-blue-400">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/aqua-contact-details" className="hover:text-blue-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">Copyright 2025 Water Purifier. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
