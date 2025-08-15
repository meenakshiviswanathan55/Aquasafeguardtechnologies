import Image from "next/image"

export default function AquaIndustrialTreatment() {
  return (
    <main className="pt-28 md:pt-32 bg-gradient-to-b from-sky-50 to-blue-100 min-h-screen">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-14">
            Industrial System
          </h1>

          <div className="grid grid-cols-1 gap-10 md:gap-12 max-w-3xl mx-auto">
            {/* Product 1: 5000 LPH SS CLASSIC AUTO */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
              <div className="product-image-container mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=5000+LPH+SS+CLASSIC+AUTO"
                  alt="5000 LPH SS CLASSIC AUTO"
                  width={400}
                  height={300}
                  className="mx-auto rounded-lg w-full max-w-[400px] h-auto"
                />
              </div>
              <div className="product-details space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">5000 LPH SS CLASSIC AUTO</h3>
                <ul className="list-none text-gray-700 space-y-2 text-base md:text-lg">
                  <li>MEMBRANE : MEMBRELLA-BETA-8040 MEMBRANE (5 NOS)</li>
                  <li>PUMP : CRI MVC- 10/16TR (7.5 HP) - III PHASE</li>
                  <li>VESSEL : FRB VESSEL</li>
                  <li>TECHNOLOGY : REVERSE OSMOSIS SYSTEM</li>
                  <li>APPLICATION : SUITABLE FOR PURIFICATION OF BRACKISH WATER</li>
                </ul>
              </div>
            </div>

            {/* Product 2: 10000 Lph FRP RO Water Plant */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
              <div className="product-image-container mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=10000+Lph+FRP+RO+Water+Plant"
                  alt="10000 Lph FRP RO Water Plant"
                  width={400}
                  height={300}
                  className="mx-auto rounded-lg w-full max-w-[400px] h-auto"
                />
              </div>
              <div className="product-details space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">10000 Lph FRP RO Water Plant</h3>
                <ul className="list-none text-gray-700 space-y-2 text-base md:text-lg">
                  <li>RO Capacity : upto 10000 LPH</li>
                  <li>Material : FRP</li>
                  <li>Automation Grade : Automatic</li>
                  <li>RO Membrane Type : Thin-Film Composite (TFC)</li>
                  <li>Media : Activation Carbon + Sand</li>
                  <li>Max Water Recovery Rate : 65 %</li>
                  <li>Phase : Three</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
