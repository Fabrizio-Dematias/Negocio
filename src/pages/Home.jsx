"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Clock, MapPin, Phone, ChevronLeft, ChevronRight } from "lucide-react"
import AnimatedSection from "../components/AnimatedSection"

const brands = [
  { name: "Bosch", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752093645/logobosch_i9mcxg.jpg" },
  { name: "DeWalt", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752093704/logodewalt_aenntj.jpg" },
  { name: "Makita", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155249/logomakita_i3r5pu.png" },
  { name: "Milwaukee", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155249/logomilwaukee_vef8dr.jpg" },
  { name: "Black & Decker", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155202/logobyd_zsmyxz.png" },
  { name: "Argentec", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155199/logoargentec_d54ccp.png" },
  {
    name: "Dowen Pagio",
    logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155247/logodowenpagio_bhahj4.webp",
  },
  { name: "Dremel", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155248/logodremel_ppummu.png" },
  { name: "Gamma", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155249/logogamma_tljlgw.png" },
  { name: "Gladiator", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155248/logogladiador_sckbte.jpg" },
  { name: "Hitachi", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155249/logohitachi_lucwjk.gif" },
  { name: "Skil", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155282/logoskil_mpceh4.png" },
]

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(6)

  // Responsive visible count
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 2 // Mobile: 2 brands
      if (window.innerWidth < 1024) return 4 // Tablet: 4 brands
      return 6 // Desktop: 6 brands
    }
    return 6
  }

  // Update visible count on window resize
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount())
    setVisibleCount(getVisibleCount())

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
      return newIndex < 0 ? Math.max(0, brands.length - visibleCount) : newIndex
    })
  }

  const visibleBrands = brands.slice(currentIndex, currentIndex + visibleCount)

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
        <main className="container mx-auto px-4 sm:px-8 py-12 sm:py-24 mt-8 sm:mt-16">
          {/* Hero Section with Staggered Animations */}
          <AnimatedSection animation="fade-in-up" className="text-center mb-16 sm:mb-32">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-8 text-gray-800 animate-slide-in-top">
              Repuestos de Calidad para Herramientas Eléctricas
            </h1>
            <p className="text-lg sm:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 animate-fade-in-up animate-delay-200">
              Mantenga sus herramientas funcionando como nuevas con nuestros repuestos de alta calidad
            </p>
            <Link
                to="/productos"
                className="bg-green-500 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-green-600 transition-all duration-300 inline-flex items-center text-lg sm:text-xl shadow-lg hover-lift hover-glow animate-bounce-in animate-delay-400 group"
            >
              Ver Catálogo
              <ArrowRight
                  className="ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
              />
            </Link>
          </AnimatedSection>

          {/* Feature Cards with Staggered Animations */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-16 mb-16 sm:mb-32">
            <AnimatedSection animation="fade-in-left" delay={100}>
              <div className="bg-green-100 p-6 sm:p-10 rounded-lg shadow-lg border border-green-200 hover-lift group">
                <Clock className="text-green-600 mb-4 animate-float" size={40} />
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors">
                  Disponibilidad Inmediata
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Stock permanente de los repuestos más demandados del mercado
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="bg-green-50 p-6 sm:p-10 rounded-lg shadow-lg border border-green-200 hover-lift group">
                <MapPin className="text-green-500 mb-4 animate-pulse-slow" size={40} />
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors">
                  Cobertura Nacional
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Enviamos a todo el país desde nuestra sede en Córdoba Capital
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="bg-emerald-50 p-6 sm:p-10 rounded-lg shadow-lg border border-green-200 hover-lift group">
                <Phone className="text-emerald-600 mb-4 animate-bounce-in animate-delay-500" size={40} />
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors">
                  Consulta Técnica
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Asesoramiento especializado para encontrar el repuesto exacto que necesita
                </p>
              </div>
            </AnimatedSection>
          </section>

          {/* Enhanced Carousel Section */}
          <AnimatedSection animation="fade-in-scale" delay={400}>
            <section className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 py-8 sm:py-12 px-4 sm:px-8 rounded-xl shadow-lg border border-green-300">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 animate-slide-in-top">
                  Marcas de Confianza
                </h2>
                <div className="w-24 h-1 bg-green-500 mx-auto rounded-full animate-fade-in-scale animate-delay-200"></div>
              </div>

              <div className="relative max-w-7xl mx-auto">
                {/* Left Arrow Button */}
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-2 sm:p-3 rounded-md shadow-lg transition-all duration-300 hover:scale-110 hover-glow focus-ring"
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
                          {/* Enhanced Brand Cards */}
                          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-1 rounded-lg hover:bg-opacity-100 transition-all duration-300 h-20 sm:h-24 flex items-center justify-center group border border-green-300 shadow-md overflow-hidden hover-lift">
                            <img
                                src={brand.logo || "/placeholder.svg"}
                                alt={`${brand.name} logo`}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                style={{
                                  minHeight: "100%",
                                  minWidth: "100%",
                                  objectFit: "contain",
                                }}
                            />
                          </div>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow Button */}
                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-2 sm:p-3 rounded-md shadow-lg transition-all duration-300 hover:scale-110 hover-glow focus-ring"
                    aria-label="Next brands"
                >
                  <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Enhanced Pagination Dots */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {Array.from({ length: Math.ceil(brands.length / visibleCount) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index * visibleCount)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 focus-ring ${
                            Math.floor(currentIndex / visibleCount) === index
                                ? "bg-green-600 scale-125 animate-pulse-slow"
                                : "bg-green-400 hover:bg-green-500"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
              </div>
            </section>
          </AnimatedSection>
        </main>
      </div>
  )
}

export default Home
