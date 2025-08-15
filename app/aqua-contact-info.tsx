import Image from "next/image"
import { MapPin, Mail, Phone } from "lucide-react"

export default function AquaContactInfo() {
  return (
    <main className="pt-28 md:pt-32 bg-gradient-to-b from-sky-50 to-blue-100 min-h-screen">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Contact Information */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-12">Contact Us</h1>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-black mr-3" />
                    <h3 className="text-xl font-bold text-black">Head Office</h3>
                  </div>
                  <div className="ml-9">
                    <address className="not-italic text-gray-700 text-lg leading-relaxed">
                      Aqua Safeguard Technologies
                      <br />
                      4/487, Kalaingar Street, Thasilthar
                      <br />
                      Nagar, Madurai - 625020
                    </address>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-black mr-3" />
                    <h3 className="text-xl font-bold text-black">Branch Office</h3>
                  </div>
                  <div className="ml-9">
                    <address className="not-italic text-gray-700 text-lg leading-relaxed">
                      Aqua Safeguard Technologies
                      <br />
                      202A/3A, Vandipathai Main Road,
                      <br />
                      K. Pudur, Madurai - 625007
                    </address>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-black mr-3" />
                    <span className="text-lg text-gray-700">Email:</span>
                  </div>
                  <div className="ml-9">
                    <p className="text-gray-700 text-lg">aquasafegaurdtechnologies@gmail.com</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-black mr-3" />
                    <span className="text-lg text-gray-700">Call :</span>
                  </div>
                  <div className="ml-9">
                    <ul className="list-none text-gray-700 text-lg space-y-1">
                      <li>+91 9994430555</li>
                      <li>+91 9095494893</li>
                      <li>+91 9698330555</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: QR Code Payment Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              {/* UPI Logo */}
              <div className="mb-8">
                <div className="w-[120px] h-[40px] rounded flex items-center justify-center mx-auto">
                  <span className="text-2xl text-black font-extrabold">UPI</span>
                </div>
              </div>

              {/* QR Code */}
              <div className="mb-8 flex justify-center">
                <div className="border-2 border-gray-200 rounded-xl shadow-md p-4 bg-white">
                  <Image
                    src="/images/qr-code.svg"
                    alt="UPI QR Code for Aqua Safeguard Technologies"
                    width={220}
                    height={220}
                    className="w-[220px] h-[220px]"
                  />
                </div>
              </div>

              {/* Company Name */}
              <h3 className="text-xl font-bold text-black mb-6">AQUA SAFE GUARD TECHNOLOGIES</h3>

              {/* UPI ID */}
              <div className="border-b border-gray-300 pb-6 mb-8">
                <p className="text-lg font-semibold text-gray-800">9095494893@barodampay</p>
              </div>

              {/* Discount Offer */}
              <div className="text-center">
                <h4 className="text-2xl font-bold text-black mb-2">Scan to Pay & Get</h4>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-4xl font-bold text-green-600">5%</span>
                  <span className="text-2xl font-bold text-black">Discount!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
