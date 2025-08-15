"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Homepage() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 5) // Assuming 5 slides
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const plusSlides = (n: number) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n
      if (newIndex >= 5) newIndex = 0
      if (newIndex < 0) newIndex = 4
      return newIndex
    })
  }

  const currentSlide = (n: number) => {
    setSlideIndex(n)
  }

  const slides = [
    {
      title: "Smartly Purified Water, Everywhere You Need",
      description:
        "Advanced purification technology that ensures clean, safe water for your entire family, wherever you are.",
      image: "/placeholder.svg?height=400&width=300&text=Water+Purifier",
      alt: "Water Purifier",
    },
    {
      title: "Pure, Safe Water for Every Corner of Your Home",
      description: "Trusted purification systems designed to keep your family healthy and your water clean.",
      image: "/placeholder.svg?height=400&width=300&text=AQUA+2090+RAGA",
      alt: "AQUA 2090 RAGA Series",
      productName: "AQUA 2090",
      productSeries: "RAGA Series",
    },
    {
      title: "Smart Water Solutions for Safer Living",
      description: "High-performance systems that guarantee clean, fresh water for every use.",
      image: "/placeholder.svg?height=400&width=300&text=ZERO+B+Auto+Soft",
      alt: "ZERO B Auto Soft",
      productName: "ZERO B",
      productSeries: "Auto Soft",
    },
    {
      title: "Clean Water. Healthy Living.",
      description: "Eco-friendly, advanced purification systems built to protect what matters most.",
      images: [
        "/placeholder.svg?height=200&width=150&text=Purifier+1",
        "/placeholder.svg?height=200&width=150&text=Purifier+2",
        "/placeholder.svg?height=200&width=150&text=Purifier+3",
        "/placeholder.svg?height=200&width=150&text=Purifier+4",
      ],
      alt: "Water Purifier Collection",
    },
    {
      title: "Pure, Safe Water for Every Corner of Your Home",
      description: "Advanced filtration technology that delivers crystal-clear water throughout your home.",
      image: "/placeholder.svg?height=400&width=300&text=AQUA+IRIS+NEBULA",
      alt: "AQUA IRIS NEBULA Series",
      productName: "AQUA IRIS",
      productSeries: "NEBULA Series",
    },
  ]

  return (
    <main className="pt-28 md:pt-32">
      {/* Hero Slider Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-blue-100">
        {/* Slider Container */}
        <div className="slider-container relative h-screen">
          {slides.map(
            (slide, index) =>
              // Conditionally render only the active slide
              index === slideIndex && (
                <div key={index} className="absolute inset-0">
                  <div className="container mx-auto px-4 h-full flex items-center relative z-10 py-32 md:py-40 lg:py-48">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                      <div className="flex flex-col space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                          {slide.title.split(",").map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < slide.title.split(",").length - 1 && <br />}
                            </span>
                          ))}
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
                          {slide.description}
                        </p>
                        <Link
                          href="/aqua-products"
                          className="inline-block bg-aqua-button hover:bg-aqua-button-dark text-white px-6 py-3 rounded-full font-semibold text-base md:text-lg transition-colors duration-300 shadow-lg w-fit"
                        >
                          Explore now
                        </Link>
                      </div>

                      <div className="relative flex justify-center items-center mt-8 lg:mt-0">
                        {slide.image && (
                          <Image
                            src={slide.image || "/placeholder.svg"}
                            alt={slide.alt}
                            width={slide.image.includes("height=200") ? 150 : 300}
                            height={slide.image.includes("height=200") ? 200 : 400}
                            className="max-w-full h-auto w-[250px] md:w-[300px] lg:w-[400px]"
                          />
                        )}
                        {slide.images && (
                          <div className="grid grid-cols-2 gap-4">
                            {slide.images.map((imgSrc, imgIdx) => (
                              <Image
                                key={imgIdx}
                                src={imgSrc || "/placeholder.svg"}
                                alt={`${slide.alt} ${imgIdx + 1}`}
                                width={150}
                                height={200}
                                className="rounded-lg w-[120px] md:w-[150px]"
                              />
                            ))}
                          </div>
                        )}
                        {slide.productName && (
                          <div className="text-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{slide.productName}</h3>
                            <p className="text-base md:text-lg text-gray-700">{slide.productSeries}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot w-4 h-4 rounded-full bg-white shadow-lg transition-all duration-300 ${
                index === slideIndex ? "active" : ""
              }`}
              onClick={() => currentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Previous/Next Arrows */}
        <button
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 z-20"
          onClick={() => plusSlides(-1)}
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 z-20"
          onClick={() => plusSlides(1)}
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </section>

      {/* Company Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
              We&apos;re Number <span className="text-yellow-500">#1</span> For A Reason
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="bg-gradient-to-br from-aqua-blue to-blue-500 text-white p-8 md:p-10 rounded-xl">
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">32+ Years of Expertise</h4>
              <p className="text-sm md:text-base text-blue-100 leading-relaxed">
                Experience decades of excellence in water purification with Aqua Safeguard Technologies - a brand
                trusted by over 2000+ satisfied customers for reliable water solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-aqua-blue text-white p-8 md:p-10 rounded-xl">
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Trusted by 2600+ Customers</h4>
              <p className="text-sm md:text-base text-blue-100 leading-relaxed">
                With 2600+ satisfied clients, Aqua Safeguard Technologies has earned the trust of homeowners and
                businesses across the region with our superior water purification solutions and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Most Popular Products Section */}
      <section id="products" className="py-16 md:py-20 bg-gradient-to-b from-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">MOST POPULAR PRODUCTS</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=150&text=AQUA+2090+RAGA"
                alt="AQUA 2090 RAGA Series"
                width={150}
                height={200}
                className="mx-auto mb-4 rounded-lg w-[150px] h-auto"
              />
              <h4 className="font-semibold text-gray-800 text-lg">AQUA 2090</h4>
              <p className="text-gray-600 text-sm">RAGA Series</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=150&text=LX+One+Cabinet"
                alt="LX One Cabinet"
                width={150}
                height={200}
                className="mx-auto mb-4 rounded-lg w-[150px] h-auto"
              />
              <h4 className="font-semibold text-gray-800 text-lg">LX One</h4>
              <p className="text-gray-600 text-sm">Cabinet</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=150&text=AQUA+INNOVICA"
                alt="AQUA INNOVICA"
                width={150}
                height={200}
                className="mx-auto mb-4 rounded-lg w-[150px] h-auto"
              />
              <h4 className="font-semibold text-gray-800 text-lg">AQUA</h4>
              <p className="text-gray-600 text-sm">INNOVICA</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=150&text=CANIK+METALLIC+Series"
                alt="CANIK METALLIC Series"
                width={150}
                height={200}
                className="mx-auto mb-4 rounded-lg w-[150px] h-auto"
              />
              <h4 className="font-semibold text-gray-800 text-lg">CANIK</h4>
              <p className="text-gray-600 text-sm">METALLIC Series</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=150&text=AQUA+IRIS"
                alt="AQUA IRIS"
                width={150}
                height={200}
                className="mx-auto mb-4 rounded-lg w-[150px] h-auto"
              />
              <h4 className="font-semibold text-gray-800 text-lg">AQUA</h4>
              <p className="text-gray-600 text-sm">IRIS</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=150&text=LX+Two+Cherry+Red"
                alt="LX Two Cherry Red"
                width={150}
                height={200}
                className="mx-auto mb-4 rounded-lg w-[150px] h-auto"
              />
              <h4 className="font-semibold text-gray-800 text-lg">LX Two</h4>
              <p className="text-gray-600 text-sm">Cherry Red</p>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Link
              href="/aqua-products"
              className="bg-aqua-button hover:bg-aqua-button-dark text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg transition-colors duration-300"
            >
              See more
            </Link>
          </div>
        </div>
      </section>

      {/* Offer Banner Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">Exchange Offer Available!!</h3>
            <p className="text-lg md:text-xl text-gray-700 mb-1 md:mb-2">for Domestic Products and</p>
            <p className="text-xl md:text-2xl font-bold text-red-600">Rs.3000 cash back.</p>
          </div>

          {/* Decorative ribbons */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-300 transform rotate-45 opacity-50"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-300 transform -rotate-45 opacity-50"></div>
          <div className="absolute bottom-4 left-1/4 w-12 h-12 bg-yellow-600 transform rotate-12 opacity-30"></div>
          <div className="absolute bottom-4 right-1/4 w-12 h-12 bg-yellow-600 transform -rotate-12 opacity-30"></div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-sky-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative flex justify-center mb-8 lg:mb-0">
              <Image
                src="/placeholder.svg?height=400&width=300&text=Zero+B+Auto+Soft+3"
                alt="Semi-Automatic Zero B Auto Soft 3 Water Softener"
                width={300}
                height={400}
                className="mx-auto rounded-lg shadow-lg w-[250px] md:w-[300px] lg:w-[400px]"
              />
              {/* Water splash decoration */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-aqua-blue opacity-20 rounded-full blur-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400 opacity-20 rounded-full blur-lg"></div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Semi-Automatic Zero B Auto Soft 3 Water Softener, For Domestic
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Auto Soft 3 converts hard water into soft water and comes with distinctive Purple Resin Media. It is a
                water softener for home that increases the lifespan of expensive bathrooms and kitchen appliances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">Our trusted clients</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-aqua-blue to-blue-500 text-white p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=S"
                  alt="Client 1"
                  width={50}
                  height={50}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                  <p className="text-blue-100 text-sm">Homeowner</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                {'"'}Excellent water purification system! The water quality has improved significantly and the service
                team is very professional.{'"'}
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-aqua-blue text-white p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=M"
                  alt="Client 2"
                  width={50}
                  height={50}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Michael Chen</h4>
                  <p className="text-blue-100 text-sm">Business Owner</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                {'"'}Great investment for our office. The maintenance service is reliable and the water quality is
                consistently excellent.{'"'}
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-aqua-blue to-blue-500 text-white p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=E"
                  alt="Client 3"
                  width={50}
                  height={50}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Emily Rodriguez</h4>
                  <p className="text-blue-100 text-sm">Restaurant Manager</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                {'"'}Perfect solution for our restaurant. The water softener has extended the life of our kitchen
                equipment significantly.{'"'}
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-aqua-blue text-white p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=D"
                  alt="Client 4"
                  width={50}
                  height={50}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">David Kumar</h4>
                  <p className="text-blue-100 text-sm">Hotel Owner</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                {'"'}Outstanding service and product quality. Our guests have noticed the difference in water quality
                throughout our hotel.{'"'}
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-aqua-blue to-blue-500 text-white p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=L"
                  alt="Client 5"
                  width={50}
                  height={50}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Lisa Thompson</h4>
                  <p className="text-blue-100 text-sm">Apartment Complex Manager</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                {'"'}Reliable and efficient water purification for our entire complex. The maintenance team is always
                prompt and professional.{'"'}
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-aqua-blue text-white p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=R"
                  alt="Client 6"
                  width={50}
                  height={50}
                  className="w-10 h-10 md:w-12 md:w-12 rounded-full mr-3 md:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Robert Wilson</h4>
                  <p className="text-blue-100 text-sm">Manufacturing Plant Manager</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                {'"'}Industrial-grade water treatment that meets all our manufacturing needs. Excellent technical
                support and service.{'"'}
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-sky-200 to-blue-200 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-base md:text-lg text-gray-700 mb-1 md:mb-2">Our Services</p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              We Transform Ordinary Tap
              <br />
              Water Into Clean
            </h3>
          </div>

          {/* Floating bubbles */}
          <div className="absolute top-8 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute top-16 right-1/3 w-2 h-2 bg-aqua-blue rounded-full opacity-70"></div>
          <div className="absolute top-12 left-1/2 w-4 h-4 bg-blue-300 rounded-full opacity-50"></div>
          <div className="absolute top-20 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-80"></div>
          <div className="absolute top-6 left-1/3 w-3 h-3 bg-aqua-blue rounded-full opacity-40"></div>
          <div className="absolute top-24 right-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-14">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6 md:space-y-8">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Schedule a Free Demo
                    <br />
                    and Water Test
                  </h4>
                  <Link
                    href="/aqua-contact"
                    className="inline-block bg-aqua-button hover:bg-aqua-button-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="flex justify-center mt-8 lg:mt-0">
                  <Image
                    src="/placeholder.svg?height=200&width=300&text=Water+Tap+Filter"
                    alt="Water tap with filter"
                    width={300}
                    height={200}
                    className="max-w-full h-auto w-[200px] md:w-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
