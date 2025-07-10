"use client"

import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import ProductCard from "../components/ProductCard"

const categories = [
  { id: 1, name: "Carbones para herramientas electricas" },
  { id: 2, name: "Repuestos para compresores" },
  { id: 3, name: "Interruptores para herramientas electricas" },
  { id: 4, name: "Capacitores de arranque" },
  { id: 5, name: "Teclas / Pulsadores" },
  { id: 6, name: "Rulemanes y Cubetas de goma" },
  { id: 7, name: "Sellos mecanicos" },
  { id: 8, name: "Repuestos para bordeadoras" },
  { id: 9, name: "Terminales" },
  { id: 10, name: "Repuestos Roxelectric" },
  { id: 11, name: "Exhibidores" },
]

const products = {
  1: [
    {
      id: 1,
      name: "Carbones Black and Decker",
      code: "CB-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Carbon+1",
    },
    {
      id: 2,
      name: "Carbones Bosch",
      code: "CB-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Carbon+2",
    },
    {
      id: 3,
      name: "Carbones DeWalt",
      code: "CB-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Carbon+3",
    },
    {
      id: 4,
      name: "Carbones Dowen Pagio - BTA",
      code: "CB-004",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Carbon+3",
    },
    {
      id: 5,
      name: "Carbones para electrodomesticos",
      code: "CB-005",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Carbon+3",
    },
    {
      id: 6,
      name: "Carbones Gamma",
      code: "CB-006",
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
    {
      id: 6,
      name: "Presostatos de 40 y 50 litros",
      code: "RC-003",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089499/compresores2_yl2ea5.jpg",
    },
    {
      id: 7,
      name: "Regulador de presion de aire",
      code: "RC-004",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089500/compresores3_zpjzpp.jpg",
    },
  ],
  3: [
    {
      id: 8,
      name: "Interruptor Amoladoras",
      code: "INT-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752000275/INTERRUPTORES_a1yzkr.jpg",
    },
    {
      id: 9,
      name: "Interruptor Taladros",
      code: "INT-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089523/interruptores4_fqsjmc.jpg",
    },
    {
      id: 10,
      name: "Interruptor Amoladoras DeWalt",
      code: "INT-003",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089480/interruptores2_ggqw7q.jpg",
    },
    {
      id: 11,
      name: "Interruptor Sierras circulares",
      code: "INT-004",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089481/interruptores3_ogt9za.jpg",
    },
  ],
  4: [
    {
      id: 12,
      name: "Capacitor 450VCA SICAP/ISATECH",
      code: "CAP-450",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1751999134/CAPACITORES_u9i0xj.jpg",
    },
    {
      id: 13,
      name: "Capacitor 400VCA Axiales",
      code: "CAP-400",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1751999955/CAPACITORES2_uo9ish.jpg",
    },
    {
      id: 14,
      name: "Capacitor EDISON 110VCA",
      code: "CAP-220",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089454/capacitores110_irgdst.jpg",
    },
  ],
  5: [
    {
      id: 15,
      name: "Teclas - Pulsadores",
      code: "TP-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089511/teclas_dfnsfj.jpg",
    },
    {
      id: 16,
      name: "Pulsador con Seguro",
      code: "TP-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Tecla+2",
    },
    {
      id: 17,
      name: "Interruptor de Gatillo",
      code: "TP-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Tecla+3",
    },
  ],
  6: [
    {
      id: 18,
      name: "Ruleman 6201",
      code: "RUL-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Ruleman+1",
    },
    {
      id: 19,
      name: "Cubetas de goma",
      code: "CUB-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089607/cubetas_ht5set.jpg",
    },
    {
      id: 20,
      name: "Ruleman 608ZZ",
      code: "RUL-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Ruleman+2",
    },
  ],
  7: [
    {
      id: 21,
      name: "Sellos Mecánicos",
      code: "SM-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089567/sellos_kgforo.jpg",
    },
    {
      id: 22,
      name: "Sello Mecánico 16mm",
      code: "SM-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Sello+2",
    },
    {
      id: 23,
      name: "Sello Mecánico 20mm",
      code: "SM-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Sello+3",
    },
  ],
  8: [
    {
      id: 24,
      name: "Cuchilla Bordeadora",
      code: "BC-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Cuchilla",
    },
    {
      id: 25,
      name: "Hilo de Nylon 2.4mm",
      code: "BC-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Hilo",
    },
    {
      id: 26,
      name: "Cabezal Desmalezadora",
      code: "BC-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Cabezal",
    },
  ],
  9: [
    {
      id: 27,
      name: "Terminales",
      code: "TER-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089546/terminales_kvr35x.jpg",
    },
  ],
  10: [
    {
      id: 30,
      name: "Motor Roxelectric 1HP",
      code: "ROX-001",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Motor+1",
    },
    {
      id: 31,
      name: "Capacitor Roxelectric",
      code: "ROX-002",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Cap+Rox",
    },
    {
      id: 32,
      name: "Ventilador Roxelectric",
      code: "ROX-003",
      imageUrl: "/placeholder.svg?height=200&width=200&text=Ventilador",
    },
  ],
  11: [
    {
      id: 33,
      name: "Exhibidor de Carbones",
      code: "EXH-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089643/exhibidorcarbones_ssmd3w.jpg",
    },
    {
      id: 34,
      name: "Exhibidor de interruptores",
      code: "EXH-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089644/exhibidorinterruptores_bde6us.jpg",
    },
  ],
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false)

  // Function to get the appropriate grid classes based on number of products
  const getGridClasses = (productCount) => {
    if (productCount === 1) {
      return "flex justify-center items-start"
    } else if (productCount === 2) {
      return "flex flex-wrap justify-center gap-8 sm:gap-12"
    } else {
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 justify-items-center"
    }
  }

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId)
    setIsMobileCategoryOpen(false)
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          {/* Search Bar */}
          <div className="mb-6 sm:mb-8">
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

          {/* Mobile Category Selector */}
          <div className="lg:hidden mb-6">
            <div className="relative">
              <button
                  onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
                  className="w-full bg-white border border-green-300 rounded-lg px-4 py-3 text-left flex items-center justify-between shadow-sm hover:border-green-400 transition-colors"
              >
              <span className="text-gray-700 font-medium">
                {selectedCategory ? categories.find((c) => c.id === selectedCategory)?.name : "Seleccionar Categoría"}
              </span>
                <ChevronDown
                    className={`text-gray-400 transition-transform duration-200 ${
                        isMobileCategoryOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                />
              </button>

              {/* Mobile Category Dropdown */}
              <div
                  className={`absolute top-full left-0 right-0 z-20 bg-white border border-green-300 rounded-lg mt-1 shadow-lg overflow-hidden transition-all duration-300 ${
                      isMobileCategoryOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="max-h-80 overflow-y-auto">
                  {categories.map((category, index) => (
                      <button
                          key={category.id}
                          onClick={() => handleCategorySelect(category.id)}
                          className={`w-full text-left px-4 py-3 hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                              selectedCategory === category.id ? "bg-green-100 text-green-700 font-medium" : "text-gray-700"
                          }`}
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animation: isMobileCategoryOpen ? "slideInFromTop 0.3s ease-out forwards" : "none",
                          }}
                      >
                        {category.name}
                      </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Desktop Categories Sidebar */}
            <div className="hidden lg:block w-1/4">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-green-200 sticky top-4">
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
                    <div className={getGridClasses(products[selectedCategory]?.length || 0)}>
                      {products[selectedCategory]?.map((product, index) => (
                          <div key={product.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                            <ProductCard
                                name={product.name}
                                code={product.code}
                                imageUrl={product.imageUrl}
                                category={categories.find((c) => c.id === selectedCategory).name}
                            />
                          </div>
                      ))}
                    </div>
                  </div>
              ) : (
                  <div className="text-center text-gray-600 bg-white p-8 sm:p-12 rounded-lg shadow-lg border border-green-200">
                    <div className="max-w-md mx-auto">
                      <Search className="mx-auto mb-4 text-gray-400" size={48} />
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">Seleccione una categoría</h3>
                      <p className="text-sm sm:text-base">
                        Elija una categoría {window.innerWidth >= 1024 ? "del menú lateral" : "del selector superior"} para
                        explorar nuestros productos
                      </p>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
      </div>
  )
}
