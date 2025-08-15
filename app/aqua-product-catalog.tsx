import Image from "next/image"
import Link from "next/link"

export default function AquaProductCatalog() {
  return (
    <main className="pt-28 md:pt-32">
      <section className="py-16 md:py-20 bg-gradient-to-b from-sky-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Our Product Categories</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Discover our comprehensive range of water purification solutions designed for every need - from home to
            industrial applications.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="space-y-0">
          <div className="relative min-h-[500px] flex items-center bg-gradient-to-r from-sky-200 to-blue-300">
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Industrial+Water+Treatment+System"
                      alt="Industrial System"
                      width={400}
                      height={300}
                      className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                    />
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-sky-400/40 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300/50 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>
                </div>
                <div className="text-center lg:text-left space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Industrial System</h2>
                  <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                    Advanced industrial water treatment solutions for large-scale operations
                  </p>
                  <Link
                    href="/aqua-factory-treatment"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Explore now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] flex items-center bg-gradient-to-r from-blue-200 to-sky-300">
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
                <div className="relative lg:col-start-2">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Water+Softener+System"
                      alt="Water Softener"
                      width={400}
                      height={300}
                      className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                    />
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-sky-400/40 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300/50 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>
                </div>
                <div className="text-center lg:text-left space-y-6 lg:col-start-1">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Water Softener</h2>
                  <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                    Professional water softening systems for hard water treatment
                  </p>
                  <Link
                    href="/aqua-softener-solutions"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Explore now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] flex items-center bg-gradient-to-r from-sky-200 to-blue-300">
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Domestic+Water+Purifier"
                      alt="Domestic Products"
                      width={400}
                      height={300}
                      className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                    />
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-sky-400/40 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300/50 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>
                </div>
                <div className="text-center lg:text-left space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Domestic Products</h2>
                  <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                    Home water purification systems for families
                  </p>
                  <Link
                    href="/aqua-home-solutions"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Explore now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] flex items-center bg-gradient-to-r from-blue-200 to-sky-300">
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
                <div className="relative lg:col-start-2">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Commercial+Water+Dispenser"
                      alt="Commercial System"
                      width={400}
                      height={300}
                      className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                    />
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-sky-400/40 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300/50 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>
                </div>
                <div className="text-center lg:text-left space-y-6 lg:col-start-1">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Commercial System</h2>
                  <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                    Commercial-grade water solutions for businesses
                  </p>
                  <Link
                    href="/aqua-business-systems"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Explore now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing the Right System?</h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our water treatment experts are here to help you find the perfect solution for your specific needs.
          </p>
          <Link
            href="/aqua-contact-details"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Expert Consultation
          </Link>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full"></div>
      </section>
    </main>
  )
}
