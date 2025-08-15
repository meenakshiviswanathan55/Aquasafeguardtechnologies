import Image from "next/image"

export default function AquaWaterSoftenerPage() {
  return (
    <main className="pt-28 md:pt-32 bg-gradient-to-b from-sky-50 to-blue-100 min-h-screen">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-14">
            Water Softener
          </h1>

          <div className="grid grid-cols-1 gap-10 md:gap-12 max-w-3xl mx-auto">
            {/* Product 1: ORG WATER SOFTENER 100R */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
              <div className="product-image-container mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=250&text=ORG+WATER+SOFTENER+100R"
                  alt="ORG WATER SOFTENER 100R"
                  width={250}
                  height={300}
                  className="mx-auto rounded-lg w-full max-w-[250px] h-auto"
                />
              </div>
              <div className="product-details space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">ORG WATER SOFTENER 100R</h3>
                <ul className="list-none text-gray-700 space-y-2 text-base md:text-lg">
                  <li>BRAND : ORG</li>
                  <li>MAX FLOW RATE : 1500 - 2500 LPH</li>
                  <li>WORKING TEMPERATURE : 5 TO 50°C</li>
                  <li>WORKING PRESSURE : 1.5 - 4 Kg</li>
                  <li>OBR (Basis on total hardness 400ppm) : 10000 Liter</li>
                </ul>
              </div>
            </div>

            {/* Additional products would continue here */}
          </div>
        </div>
      </section>
    </main>
  )
}
