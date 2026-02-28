"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react"
import AnimatedSection from "../components/AnimatedSection"

const brands = [
  { name: "Bosch", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752093645/logobosch_i9mcxg.jpg" },
  { name: "DeWalt", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752093704/logodewalt_aenntj.jpg" },
  { name: "Makita", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155249/logomakita_i3r5pu.png" },
  { name: "Milwaukee", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155249/logomilwaukee_vef8dr.jpg" },
  { name: "Black & Decker", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155202/logobyd_zsmyxz.png" },
  { name: "Argentec", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155199/logoargentec_d54ccp.png" },
  { name: "Dowen Pagio", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155247/logodowenpagio_bhahj4.webp" },
  { name: "Dremel", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155248/logodremel_ppummu.png" },
  { name: "Gamma", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155249/logogamma_tljlgw.png" },
  { name: "Gladiator", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155248/logogladiador_sckbte.jpg" },
  { name: "Hitachi", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155249/logohitachi_lucwjk.gif" },
  { name: "Skil", logo: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752155282/logoskil_mpceh4.png" },
]

// Duplicar para scroll infinito continuo
const infiniteBrands = [...brands, ...brands, ...brands]

const Home = () => {
  const trackRef = useRef(null)
  const isHovered = useRef(false)
  const positionRef = useRef(0)
  const animFrameRef = useRef(null)
  const [activeDot, setActiveDot] = useState(0)

  const CARD_WIDTH = 160 // px por tarjeta
  const GAP = 16
  const STEP = CARD_WIDTH + GAP
  const TOTAL_WIDTH = brands.length * STEP
  const SPEED = 0.5 // px por frame

  useEffect(() => {
    const animate = () => {
      if (!isHovered.current) {
        positionRef.current += SPEED
        if (positionRef.current >= TOTAL_WIDTH) {
          positionRef.current -= TOTAL_WIDTH
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
        }
        // Dot activo basado en posición
        const dotIndex = Math.floor(positionRef.current / TOTAL_WIDTH * brands.length) % brands.length
        setActiveDot(Math.floor(dotIndex / 3))
      }
      animFrameRef.current = requestAnimationFrame(animate)
    }
    animFrameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
      <main className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">

        {/* Hero Section */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-12 sm:mb-20">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-8 text-gray-800 animate-slide-in-top">
            Repuestos de Calidad para Herramientas Eléctricas
          </h1>
          <p className="text-lg sm:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 animate-fade-in-up animate-delay-100">
            Mantenga sus herramientas funcionando como nuevas con nuestros repuestos de alta calidad
          </p>
          <Link
            to="/productos"
            className="bg-green-500 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-green-600 transition-all duration-300 inline-flex items-center text-lg sm:text-xl shadow-lg hover-lift hover-glow animate-bounce-in animate-delay-200 group"
          >
            Ver Catálogo
            <ArrowRight className="ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </Link>
        </AnimatedSection>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          <AnimatedSection animation="fade-in-left" delay={50}>
            <div className="bg-green-100 p-6 sm:p-8 rounded-lg shadow-md border border-green-200 hover-lift group h-full flex flex-col">
              <Clock className="text-green-600 mb-3" size={36} />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors">
                Disponibilidad Inmediata
              </h2>
              <p className="text-gray-600 text-sm sm:text-base flex-grow">
                Stock permanente de los repuestos más demandados del mercado
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <div className="bg-green-50 p-6 sm:p-8 rounded-lg shadow-md border border-green-200 hover-lift group h-full flex flex-col">
              <MapPin className="text-green-500 mb-3" size={36} />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors">
                Cobertura Nacional
              </h2>
              <p className="text-gray-600 text-sm sm:text-base flex-grow">
                Enviamos a todo el país desde nuestra sede en Córdoba Capital
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay={150}>
            <div className="bg-emerald-50 p-6 sm:p-8 rounded-lg shadow-md border border-green-200 hover-lift group h-full flex flex-col">
              <Phone className="text-emerald-600 mb-3" size={36} />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors">
                Consulta Técnica
              </h2>
              <p className="text-gray-600 text-sm sm:text-base flex-grow">
                Asesoramiento especializado para encontrar el repuesto exacto que necesita
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Carousel Section */}
        <AnimatedSection animation="fade-in-scale" delay={200}>
          <section
            className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 py-8 sm:py-12 rounded-xl shadow-md border border-green-300"
            onMouseEnter={() => { isHovered.current = true }}
            onMouseLeave={() => { isHovered.current = false }}
          >
            <div className="mb-6" />

            {/* Track con fade en los bordes */}
            <div className="relative overflow-hidden">
              {/* Fade izquierda */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #d1fae5, transparent)" }} />
              {/* Fade derecha */}
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #d1fae5, transparent)" }} />

              <div
                ref={trackRef}
                className="flex gap-4"
                style={{ width: `${infiniteBrands.length * STEP}px` }}
              >
                {infiniteBrands.map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="flex-none bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300"
                    style={{ width: `${CARD_WIDTH}px`, height: "100px" }}
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(brands.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  className={`rounded-full transition-all duration-300 focus:outline-none ${
                    activeDot === index
                      ? "bg-green-600 w-6 h-2.5"
                      : "bg-green-300 hover:bg-green-400 w-2.5 h-2.5"
                  }`}
                  aria-label={`Slide ${index + 1}`}
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