"use client"

import { useState } from "react"
import Image from "next/image"

export default function DomesticProductsPage() {
  const [productImages, setProductImages] = useState({
    "lx-one": "/placeholder.svg?height=250&width=200&text=LX+One+Titanium",
    canik: "/placeholder.svg?height=250&width=200&text=CANIK+METALLIC",
    aqua2090: "/placeholder.svg?height=250&width=200&text=AQUA+2090+Ruby",
    innovica: "/placeholder.svg?height=250&width=200&text=AQUA+INNOVICA",
    mira: "/placeholder.svg?height=250&width=200&text=MIRA+Clean+Water",
    aquairis: "/placeholder.svg?height=250&width=200&text=AQUA+IRIS",
    nebula: "/placeholder.svg?height=250&width=200&text=AQUA+IRIS+NEBULA",
    lxtwo: "/placeholder.svg?height=250&width=200&text=LX+TWO+Cherry",
    purposis: "/placeholder.svg?height=250&width=200&text=Purposis",
    tetra50: "/placeholder.svg?height=250&width=200&text=Tetra+50+AQUA+CLAN",
    undersink: "/placeholder.svg?height=250&width=200&text=Meriton+Under+Sink+System",
  })

  const changeProductImage = (productId: string, newImageUrl: string) => {
    setProductImages((prevImages) => ({
      ...prevImages,
      [productId]: newImageUrl,
    }))
  }

  return (
    <main className="pt-28 md:pt-32 bg-gradient-to-b from-sky-50 to-blue-100 min-h-screen">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-14">
            Domestic Products
          </h1>

          <div className="grid grid-cols-1 gap-10 md:gap-12">
            {/* Product 1: LX One Titanium Generation Ro 275 GPD */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-lx-one"
                  src={productImages["lx-one"] || "/placeholder.svg"}
                  alt="LX One Titanium Generation Ro 275 GPD"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-400 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("lx-one", "/placeholder.svg?height=250&width=200&text=LX+One+Silver")
                    }
                    aria-label="View silver LX One"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-800 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("lx-one", "/placeholder.svg?height=250&width=200&text=LX+One+Black")
                    }
                    aria-label="View black LX One"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">LX One Titanium Generation Ro 275 GPD</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Stages: 9 stage</li>
                  <li>
                    Technologies: Reverse Osmosis (RO) Membrane + UV + UF + TDS + Mineral Cartridge + Clarity Cartridge
                    filter + Anti-Block filter + Activated Carbon filter + Sediment filter + Pre-filter + Post-filter +
                    Alkaline Technology + Active Copper Technology + ORP Technology + Hydrogen + Maintain system
                  </li>
                  <li>Purification Capacity: 275 GPD</li>
                </ul>
              </div>
            </div>

            {/* Product 2: CANIK METALLIC Series Royal */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-canik"
                  src={productImages.canik || "/placeholder.svg"}
                  alt="CANIK METALLIC Series Royal"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-blue-400 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() => changeProductImage("canik", "/placeholder.svg?height=250&width=200&text=CANIK+Blue")}
                    aria-label="View blue CANIK"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-600 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() => changeProductImage("canik", "/placeholder.svg?height=250&width=200&text=CANIK+Gray")}
                    aria-label="View gray CANIK"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">CANIK METALLIC Series Royal</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Power Rating: 24 V DC</li>
                  <li>Voltage: 220-240V, 50/60Hz</li>
                  <li>Tank Capacity: 09 Ltr</li>
                  <li>Purification Capacity: 12-15 Ltr/Hr</li>
                  <li>Dimensions: 383 x 217 x 500 mm</li>
                  <li>Weight: 12 Kg (Approximately)</li>
                </ul>
              </div>
            </div>

            {/* Product 3: AQUA 2090 Ruby Pink */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-aqua2090"
                  src={productImages.aqua2090 || "/placeholder.svg"}
                  alt="AQUA 2090 Ruby Pink"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-pink-400 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("aqua2090", "/placeholder.svg?height=250&width=200&text=AQUA+2090+Pink")
                    }
                    aria-label="View pink AQUA 2090"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-blue-600 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("aqua2090", "/placeholder.svg?height=250&width=200&text=AQUA+2090+Blue")
                    }
                    aria-label="View blue AQUA 2090"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-300 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("aqua2090", "/placeholder.svg?height=250&width=200&text=AQUA+2090+Silver")
                    }
                    aria-label="View silver AQUA 2090"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">AQUA 2090 Ruby Pink</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Purification Technology: RO, UV, UF, Ultra Alkaline and Mineral Cartridge</li>
                  <li>Capacity: Available in 10-liter and 12-liter storage options.</li>
                  <li>Smart Features: Smart LED indicators, auto-flush, push-fit connectors.</li>
                  <li>Colors: Ruby Pink, Sierra Blue, Daytona Silver.</li>
                </ul>
              </div>
            </div>

            {/* Product 4: AQUA INNOVICA */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-innovica"
                  src={productImages.innovica || "/placeholder.svg"}
                  alt="AQUA INNOVICA"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-500 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("innovica", "/placeholder.svg?height=250&width=200&text=INNOVICA+Gray")
                    }
                    aria-label="View gray AQUA INNOVICA"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-white border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("innovica", "/placeholder.svg?height=250&width=200&text=INNOVICA+White")
                    }
                    aria-label="View white AQUA INNOVICA"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">AQUA INNOVICA</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Purification Technology: RO + UV + UF, Alkaline and Copper filtration.</li>
                  <li>Capacity: 7L, 10L, or 12L storage options.</li>
                  <li>Input Water TDS: Up to 2000 ppm.</li>
                  <li>Material: ABS Plastic (body), Food-grade, Smart LED indicators, mineralizers.</li>
                </ul>
              </div>
            </div>

            {/* Product 5: MIRA by Clean Water */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-mira"
                  src={productImages.mira || "/placeholder.svg"}
                  alt="MIRA by Clean Water"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-yellow-300 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() => changeProductImage("mira", "/placeholder.svg?height=250&width=200&text=MIRA+Yellow")}
                    aria-label="View yellow MIRA"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-sky-300 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() => changeProductImage("mira", "/placeholder.svg?height=250&width=200&text=MIRA+Blue")}
                    aria-label="View blue MIRA"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">MIRA by Clean Water</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Capacity: Available in 17 oz and 15 oz sizes.</li>
                  <li>Temperature Retention: Keeps drinks cold for up to 24 hours and hot for up to 12 hours.</li>
                  <li>Material: Stainless steel construction.</li>
                  <li>Colors: Lemon yellow, sky blue (with dinosaur design), and others.</li>
                </ul>
              </div>
            </div>

            {/* Product 6: AQUA IRIS */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-aquairis"
                  src={productImages.aquairis || "/placeholder.svg"}
                  alt="AQUA IRIS"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-purple-400 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("aquairis", "/placeholder.svg?height=250&width=200&text=IRIS+Purple")
                    }
                    aria-label="View purple AQUA IRIS"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-white border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("aquairis", "/placeholder.svg?height=250&width=200&text=IRIS+White")
                    }
                    aria-label="View white AQUA IRIS"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">AQUA IRIS</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Purification Technology: RO + UV + UF</li>
                  <li>Purification Capacity: 12 liters per hour.</li>
                  <li>Suitable Water Type: Brackish and Tap.</li>
                  <li>Max TDS: 4000 ppm.</li>
                  <li>Storage Capacity: 10 liters.</li>
                  <li>Filters: Sediment, pre-carbon, RO membrane, and post-carbon membrane.</li>
                </ul>
              </div>
            </div>

            {/* Product 7: AQUA IRIS NEBULA Series */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-nebula"
                  src={productImages.nebula || "/placeholder.svg"}
                  alt="AQUA IRIS NEBULA Series"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-blue-800 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("nebula", "/placeholder.svg?height=250&width=200&text=NEBULA+Blue")
                    }
                    aria-label="View blue AQUA IRIS NEBULA"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-700 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("nebula", "/placeholder.svg?height=250&width=200&text=NEBULA+Gray")
                    }
                    aria-label="View gray AQUA IRIS NEBULA"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">AQUA IRIS NEBULA Series</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Storage Capacity: 10 L</li>
                  <li>Features: Smart indicator</li>
                  <li>Purification Type: RO + UV + UF</li>
                  <li>Body Material: ABS Plastic</li>
                  <li>Brand: Aqua</li>
                  <li>Color: Nebula Blue</li>
                  <li>Model: Iris</li>
                  <li>Installation Type: Wall Mounted/Counter Top</li>
                </ul>
              </div>
            </div>

            {/* Product 8: LX TWO Cherry Red */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-lxtwo"
                  src={productImages.lxtwo || "/placeholder.svg"}
                  alt="LX TWO Cherry Red"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-red-600 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() => changeProductImage("lxtwo", "/placeholder.svg?height=250&width=200&text=LX+TWO+Red")}
                    aria-label="View red LX TWO"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-700 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("lxtwo", "/placeholder.svg?height=250&width=200&text=LX+TWO+Charcoal")
                    }
                    aria-label="View charcoal LX TWO"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">LX TWO Cherry Red</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Purification Technology: RO + UV + UF</li>
                  <li>Storage Capacity: 10-12 liters.</li>
                  <li>Purification Capacity: 12-15 liters per hour.</li>
                </ul>
              </div>
            </div>

            {/* Product 9: Purposis */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-purposis"
                  src={productImages.purposis || "/placeholder.svg"}
                  alt="Purposis"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-700 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("purposis", "/placeholder.svg?height=250&width=200&text=Purposis+Charcoal")
                    }
                    aria-label="View charcoal Purposis"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-white border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("purposis", "/placeholder.svg?height=250&width=200&text=Purposis+White")
                    }
                    aria-label="View white Purposis"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Purposis</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>
                    Purification Technology: Primarily RO (Reverse Osmosis) and Alkaline, often with additional UV and
                    UF filtration.
                  </li>
                  <li>Storage Capacity: Typically 9-10 liters, with some models offering 20-liter options.</li>
                  <li>Purification Capacity: Ranges from 12-15 liters per hour.</li>
                  <li>Installation: Can be wall-mounted or placed on a tabletop.</li>
                </ul>
              </div>
            </div>

            {/* Product 10: Tetra 50 Model */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-tetra50"
                  src={productImages.tetra50 || "/placeholder.svg"}
                  alt="Tetra 50 Model"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-600 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("tetra50", "/placeholder.svg?height=250&width=200&text=Tetra+50+Charcoal")
                    }
                    aria-label="View charcoal Tetra 50"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-white border-2 border border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("tetra50", "/placeholder.svg?height=250&width=200&text=Tetra+50+White")
                    }
                    aria-label="View white Tetra 50"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Tetra 50 Model</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Brand: AQUA CLAN</li>
                  <li>Model: Tetra 50</li>
                  <li>Installation Type: Wall Mounted/Counter Top</li>
                  <li>Purification Technology: Advanced multi-stage filtration</li>
                  <li>Storage Capacity: Compact design with efficient water flow</li>
                  <li>Features: Digital display, smart indicators, premium finish</li>
                </ul>
              </div>
            </div>

            {/* Product 11: Under the Sink Model */}
            <div className="product-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="product-image-container flex-shrink-0 w-full md:w-1/3 text-center">
                <Image
                  id="product-image-undersink"
                  src={productImages.undersink || "/placeholder.svg"}
                  alt="Under the Sink Model"
                  width={250}
                  height={250}
                  className="mx-auto mb-4 rounded-lg w-[200px] h-auto md:w-[250px]"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-white border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("undersink", "/placeholder.svg?height=250&width=200&text=Under+Sink+White")
                    }
                    aria-label="View white Under the Sink"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-400 border-2 border-transparent hover:border-aqua-blue transition-all duration-200"
                    onClick={() =>
                      changeProductImage("undersink", "/placeholder.svg?height=250&width=200&text=Under+Sink+Silver")
                    }
                    aria-label="View silver Under the Sink"
                  ></button>
                </div>
              </div>
              <div className="product-details flex-grow w-full md:w-2/3 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Under the Sink Model</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Brand: Meriton</li>
                  <li>Installation Type: Under Sink</li>
                  <li>System Components: Main purification unit + Storage tank</li>
                  <li>Purification Technology: RO + UV + UF multi-stage filtration</li>
                  <li>Features: Hexagonal digital display, compact design</li>
                  <li>Space Saving: Hidden installation under kitchen sink</li>
                  <li>Capacity: High-efficiency purification with adequate storage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
