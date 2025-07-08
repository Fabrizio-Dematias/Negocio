"use client"

import { useState } from "react"
import { ArrowRight, Clock, MapPin, Phone, ChevronLeft, ChevronRight } from "lucide-react"

const brands = [
  { name: "Bosch", logo: "/placeholder.svg?height=60&width=120&text=BOSCH" },
  { name: "DeWalt", logo: "/placeholder.svg?height=60&width=120&text=DEWALT" },
  { name: "Makita", logo: "/placeholder.svg?height=60&width=120&text=MAKITA" },
  { name: "Milwaukee", logo: "/placeholder.svg?height=60&width=120&text=MILWAUKEE" },
  { name: "Black & Decker", logo: "/placeholder.svg?height=60&width=120&text=B%26D" },
  { name: "Argentec", logo: "/placeholder.svg?height=60&width=120&text=ARGENTEC" },
  { name: "Dowen Pagio", logo: "/placeholder.svg?height=60&width=120&text=DOWEN" },
  { name: "Dremel", logo: "/placeholder.svg?height=60&width=120&text=DREMEL" },
  { name: "Gamma", logo: "/placeholder.svg?height=60&width=120&text=GAMMA" },
  { name: "Gladiator", logo: "/placeholder.svg?height=60&width=120&text=GLADIATOR" },
  { name: "Hitachi", logo: "/placeholder.svg?height=60&width=120&text=HITACHI" },
  { name: "Power Tools", logo: "/placeholder.svg?height=60&width=120&text=POWER" },
  { name: "Skil", logo: "/placeholder.svg?height=60&width=120&text=SKIL" },
]

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Responsive visible count
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 2 // Mobile: 2 brands
      if (window.innerWidth < 1024) return 4 // Tablet: 4 brands
      return 6 // Desktop: 6 brands
    }
    return 6
  }

  const [visibleCount, setVisibleCount] = useState(getVisibleCount())

  useState(() => {
    const handleResize = () => setVisibleCount(getVisibleCount())
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  const next = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1
      return newIndex >= brands.length - visibleCount + 1 ? 0 : newIndex
    })
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1
      return newIndex < 0 ? brands.length - visibleCount : newIndex
    })
  }

  const visibleBrands = brands.slice(currentIndex, currentIndex + visibleCount)

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
        <main className="container mx-auto px-4 sm:px-8 py-12 sm:py-24 mt-8 sm:mt-16">
          <section className="text-center mb-16 sm:mb-32">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-8 text-gray-800">
              Repuestos de Calidad para Herramientas Eléctricas
            </h1>
            <p className="text-lg sm:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Mantenga sus herramientas funcionando como nuevas con nuestros repuestos de alta calidad
            </p>
            <a
                href="/productos"
                className="bg-green-500 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-green-600 transition-colors inline-flex items-center text-lg sm:text-xl shadow-lg"
            >
              Ver Catálogo
              <ArrowRight className="ml-2 sm:ml-3" size={20} />
            </a>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-16 mb-16 sm:mb-32">
            <div className="bg-green-100 p-6 sm:p-10 rounded-lg shadow-lg border border-green-200">
              <Clock className="text-green-600 mb-4" size={40} />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Disponibilidad Inmediata</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Stock permanente de los repuestos más demandados del mercado
              </p>
            </div>
            <div className="bg-green-50 p-6 sm:p-10 rounded-lg shadow-lg border border-green-200">
              <MapPin className="text-green-500 mb-4" size={40} />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Cobertura Nacional</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Enviamos a todo el país desde nuestra sede en Córdoba Capital
              </p>
            </div>
            <div className="bg-emerald-50 p-6 sm:p-10 rounded-lg shadow-lg border border-green-200">
              <Phone className="text-emerald-600 mb-4" size={40} />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Consulta Técnica</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Asesoramiento especializado para encontrar el repuesto exacto que necesita
              </p>
            </div>
          </section>

          {/* THIN & LONG Carousel with Green Theme - No Text */}
          <section className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 py-8 sm:py-12 px-4 sm:px-8 rounded-xl shadow-lg border border-green-300">
            <div className="relative max-w-7xl mx-auto">
              {/* Left Arrow Button */}
              <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-2 sm:p-3 rounded-md shadow-lg transition-all duration-300 hover:scale-105"
                  aria-label="Previous brands"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* Carousel Container */}
              <div className="overflow-hidden mx-8 sm:mx-12">
                <div className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out">
                  {visibleBrands.map((brand, index) => (
                      <div
                          key={`${brand.name}-${currentIndex}-${index}`}
                          className={`flex-none ${visibleCount === 2 ? "w-1/2" : visibleCount === 4 ? "w-1/4" : "w-1/6"}`}
                      >
                        {/* THIN CARDS with Green Theme */}
                        <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 sm:p-6 rounded-lg hover:bg-opacity-100 transition-all duration-300 h-20 sm:h-24 flex items-center justify-center group border border-green-300 shadow-md">
                          <img
                              src={brand.logo || "/placeholder.svg"}
                              alt={`${brand.name} logo`}
                              className="max-h-8 sm:max-h-12 max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow Button */}
              <button
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-2 sm:p-3 rounded-md shadow-lg transition-all duration-300 hover:scale-105"
                  aria-label="Next brands"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({ length: Math.ceil(brands.length / visibleCount) }).map((_, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentIndex(index * visibleCount)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                          Math.floor(currentIndex / visibleCount) === index
                              ? "bg-green-600 scale-125"
                              : "bg-green-400 hover:bg-green-500"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                  />
              ))}
            </div>
          </section>
        </main>
      </div>
  )
}

export default Home
