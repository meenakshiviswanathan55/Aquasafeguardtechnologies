import Image from "next/image"

export default function AquaCommercialProductsPage() {
  return (
    <main className="pt-28 md:pt-32 bg-gradient-to-b from-sky-50 to-blue-100 min-h-screen">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-14">
            Commercial System
          </h1>

          <div className="grid grid-cols-1 gap-10 md:gap-12 max-w-3xl mx-auto">
            {/* Product 1: Commercial RO System */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
              <div className="product-image-container mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Commercial+RO+System"
                  alt="Commercial RO System"
                  width={400}
                  height={300}
                  className="mx-auto rounded-lg w-full max-w-[400px] h-auto"
                />
              </div>
              <div className="product-details space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Commercial RO System</h3>
                <ul className="list-none text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Capacity: 100-500 LPH</li>
                  <li>Technology: Reverse Osmosis with UV</li>
                  <li>Application: Restaurants, Hotels, Small Offices</li>
                  <li>Features: Automatic operation, Digital display</li>
                  <li>Material: Stainless Steel / FRP</li>
                </ul>
              </div>
            </div>

            {/* Product 2: Water Dispenser */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
              <div className="product-image-container mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=250&text=Commercial+Water+Dispenser"
                  alt="Commercial Water Dispenser"
                  width={250}
                  height={300}
                  className="mx-auto rounded-lg w-full max-w-[250px] h-auto"
                />
              </div>
              <div className="product-details space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Commercial Water Dispenser</h3>
                <ul className="list-none text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Type: Floor Standing</li>
                  <li>Temperature Options: Hot, Cold, Normal</li>
                  <li>Capacity: 20L</li>
                  <li>Features: Child safety lock, Energy saving mode</li>
                  <li>Application: Offices, Waiting areas, Commercial spaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
