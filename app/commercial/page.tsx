import Image from "next/image"

export default function CommercialProductsPage() {
  const products = [
    {
      name: "100 LPH MS ECO AUTO",
      image: "/placeholder.svg?height=300&width=400&text=100+LPH+MS+ECO+AUTO",
      specs: [
        "MEMBRANE : TFC BW - 4021",
        "CATEGORY : MINI COMMERCIAL SYSTEM",
        "TECHNOLOGY : REVERSE OSMOSIS",
        "SYSTEM TYPE : AUTOMATIC",
      ],
    },
    {
      name: "100 LPH COMPACT SYSTEM",
      image: "/placeholder.svg?height=300&width=400&text=100+LPH+COMPACT+SYSTEM",
      specs: [
        "MEMBRANE : TFC BW - 4021",
        "MODEL : COMFORTABLE (CLOSED)SYSTEM",
        "TECHNOLOGY : REVERSE OSMOSIS",
        "SYSTEM TYPE : AUTOMATIC",
      ],
    },
    {
      name: "Water dispenser, model M75 NH (Regular)",
      image: "/placeholder.svg?height=300&width=200&text=Water+Dispenser+M75+NH",
      specs: [
        "Storage Capacity: 35 liters for normal water and 4 liters for hot water.",
        "Heating Capacity: Heats 4 liters in 5 minutes.",
        "Power & Electrical: Operates on 230V/50Hz, with an input power of 1000W and a current of 5A.",
        "Physical Attributes: Approximately 32 kg in net weight and dimensions of H 1350 x L 415 x W 415 mm.",
        "Origin: India.",
      ],
    },
    {
      name: "Water dispenser Normal, Hot & Cold",
      image: "/placeholder.svg?height=300&width=200&text=Water+Dispenser+NHC",
      specs: [
        "Storage Capacity: Normal -15 L, Hot -4 L, Cold -15 L",
        "Faucets: 3",
        "Cooling & Heating: Cooling capacity of 10 Ltrs./Hr. and heating capacity of 4 Ltrs./5 Mins.",
        "Power: Operates on 230V/50HZ with an input power of 94W for the cooler and 1000W for the heater.",
        "Origin: India.",
      ],
    },
  ]

  return (
    <main className="pt-28 md:pt-32 bg-gradient-to-b from-sky-50 to-blue-100 min-h-screen">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-14">
            Commercial System
          </h1>

          <div className="grid grid-cols-1 gap-10 md:gap-12 max-w-3xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
                <div className="product-image-container mb-6">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="mx-auto rounded-lg w-full max-w-[400px] h-auto"
                  />
                </div>
                <div className="product-details space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{product.name}</h3>
                  <ul className="list-none text-gray-700 space-y-2 text-base md:text-lg">
                    {product.specs.map((spec, specIndex) => (
                      <li key={specIndex}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
