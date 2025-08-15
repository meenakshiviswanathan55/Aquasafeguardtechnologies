"use client"

import { useState } from "react"
import Image from "next/image"

export default function AquaDomesticProductsPage() {
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
                    className="color-dot w-6 h-6 rounded-full bg-gray-400 border-2 border-transparent hover:border-blue-600 transition-all duration-200"
                    onClick={() =>
                      changeProductImage("lx-one", "/placeholder.svg?height=250&width=200&text=LX+One+Silver")
                    }
                    aria-label="View silver LX One"
                  ></button>
                  <button
                    className="color-dot w-6 h-6 rounded-full bg-gray-800 border-2 border-transparent hover:border-blue-600 transition-all duration-200"
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

            {/* Additional products would continue here */}
          </div>
        </div>
      </section>
    </main>
  )
}
