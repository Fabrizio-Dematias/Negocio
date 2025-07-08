"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import ProductCard from "../components/ProductCard"

const categories = [
  { id: 1, name: "Carbones para herramientas electricas" },
  { id: 2, name: "Repuestos para compresores" },
  { id: 3, name: "Interruptores para herramientas electricas" },
  { id: 4, name: "Capacitores de arranque" },
  { id: 5, name: "Teclas / Pulsadores" },
  { id: 6, name: "Rulemanes y Cubetas de goma" },
  { id: 7, name: "Sellos mecanicos" },
  { id: 8, name: "Repuestos para bordeadoras y cortadoras de cesped" },
  { id: 9, name: "Terminales" },
  { id: 10, name: "Repuestos Roxelectric" },
  { id: 11, name: "Exhibidores" },
]

const products = {
  1: [
    {
      id: 1,
      name: "Carbón para Taladro Bosch",
      code: "CB-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Carbon+1",
    },
    {
      id: 2,
      name: "Carbón para Amoladora DeWalt",
      code: "CB-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Carbon+2",
    },
    {
      id: 3,
      name: "Carbón para Sierra Makita",
      code: "CB-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Carbon+3",
    },
  ],
  2: [
    {
      id: 4,
      name: "Manometro de 40 y 50 litros",
      code: "RC-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752000058/MANDRILES2_a3iucv.jpg",
    },
    {
      id: 5,
      name: "Conector cruz con regulador de presion",
      code: "RC-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752000051/COMPRESORES_w1bs6n.jpg",
    },
    { id: 6, name: "Manómetro Dual", code: "RC-003", imageUrl: "/placeholder.svg?height=200&width=200&text=Manometro" },
  ],
  3: [
    {
      id: 7,
      name: "Interruptor Amoladora G720",
      code: "10628",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752000275/INTERRUPTORES_a1yzkr.jpg",
    },
    {
      id: 8,
      name: 'Interruptor Amoladora angular 7" - 1200w',
      code: "10022",
      imageUrl: "/placeholder.svg?height=200&width=200&text=INT-002",
    },
    {
      id: 9,
      name: 'Interruptor Amoladora angular 4 1/2" - 850w',
      code: "10641",
      imageUrl: "/placeholder.svg?height=200&width=200&text=INT-003",
    },
  ],
  4: [
    {
      id: 10,
      name: "Capacitor 450VCA SICAP/ISATECH",
      code: "CAP-450",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1751999134/CAPACITORES_u9i0xj.jpg",
    },
    {
      id: 11,
      name: "Capacitor 400VCA Axiales",
      code: "CAP-400",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1751999955/CAPACITORES2_uo9ish.jpg",
    },
    {
      id: 12,
      name: "Capacitor EDISON 220VCA",
      code: "CAP-220",
      imageUrl: "/placeholder.svg?height=200&width=200&text=220VCA",
    },
  ],
  5: [
    {
      id: 13,
      name: "Tecla Pulsadora Simple",
      code: "TP-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Tecla+1",
    },
    {
      id: 14,
      name: "Pulsador con Seguro",
      code: "TP-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Tecla+2",
    },
    {
      id: 15,
      name: "Interruptor de Gatillo",
      code: "TP-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Tecla+3",
    },
  ],
  6: [
    { id: 16, name: "Ruleman 6201", code: "RUL-001", imageUrl: "/placeholder.svg?height=200&width=200&text=Ruleman+1" },
    {
      id: 17,
      name: "Cubeta de Goma 15mm",
      code: "CUB-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Cubeta+1",
    },
    {
      id: 18,
      name: "Ruleman 608ZZ",
      code: "RUL-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Ruleman+2",
    },
  ],
  7: [
    {
      id: 19,
      name: "Sello Mecánico 12mm",
      code: "SM-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Sello+1",
    },
    {
      id: 20,
      name: "Sello Mecánico 16mm",
      code: "SM-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Sello+2",
    },
    {
      id: 21,
      name: "Sello Mecánico 20mm",
      code: "SM-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Sello+3",
    },
  ],
  8: [
    {
      id: 22,
      name: "Cuchilla Bordeadora",
      code: "BC-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Cuchilla",
    },
    {
      id: 23,
      name: "Hilo de Nylon 2.4mm",
      code: "BC-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Hilo",
    },
    {
      id: 24,
      name: "Cabezal Desmalezadora",
      code: "BC-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Cabezal",
    },
  ],
  9: [
    {
      id: 25,
      name: "Terminal Faston Hembra",
      code: "TER-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Terminal+1",
    },
    {
      id: 26,
      name: "Terminal Faston Macho",
      code: "TER-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Terminal+2",
    },
    {
      id: 27,
      name: "Terminal de Anillo",
      code: "TER-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Terminal+3",
    },
  ],
  10: [
    {
      id: 28,
      name: "Motor Roxelectric 1HP",
      code: "ROX-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Motor+1",
    },
    {
      id: 29,
      name: "Capacitor Roxelectric",
      code: "ROX-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Cap+Rox",
    },
    {
      id: 30,
      name: "Ventilador Roxelectric",
      code: "ROX-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Ventilador",
    },
  ],
  11: [
    {
      id: 31,
      name: "Exhibidor de Mostrador",
      code: "EXH-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Exhibidor+1",
    },
    {
      id: 32,
      name: "Exhibidor de Pared",
      code: "EXH-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Exhibidor+2",
    },
    {
      id: 33,
      name: "Exhibidor Giratorio",
      code: "EXH-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Exhibidor+3",
    },
  ],
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          {/* Search Bar */}
          <div className="mb-8 sm:mb-12">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white shadow-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Categories Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-green-200">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">Categorías</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                      <li key={category.id}>
                        <button
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full text-left px-3 sm:px-4 py-2 rounded transition-colors text-sm sm:text-base ${
                                selectedCategory === category.id
                                    ? "bg-green-500 text-white"
                                    : "text-gray-600 hover:bg-green-500 hover:text-white"
                            }`}
                        >
                          {category.name}
                        </button>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products Display */}
            <div className="w-full lg:w-3/4">
              {selectedCategory ? (
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-green-200">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
                      {categories.find((c) => c.id === selectedCategory).name}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {products[selectedCategory]?.map((product) => (
                          <ProductCard key={product.id} name={product.name} code={product.code} imageUrl={product.imageUrl} />
                      ))}
                    </div>
                  </div>
              ) : (
                  <div className="text-center text-gray-600 bg-white p-8 sm:p-12 rounded-lg shadow-lg border border-green-200">
                    <div className="max-w-md mx-auto">
                      <Search className="mx-auto mb-4 text-gray-400" size={48} />
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">Seleccione una categoría</h3>
                      <p className="text-sm sm:text-base">
                        Elija una categoría del menú lateral para explorar nuestros productos
                      </p>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}
