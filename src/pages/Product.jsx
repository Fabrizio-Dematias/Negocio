"use client"

import { useState, useMemo } from "react"
import { Search, ChevronDown, X } from "lucide-react"
import ProductCard from "../components/ProductCard"

const categories = [
  { id: 1, name: "Carbones para herramientas electricas" },
  { id: 2, name: "Repuestos para compresores" },
  { id: 3, name: "Interruptores / Repuestos varios" },
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
      name: "Carbones Black and Decker.",
      code: "CB-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264108/IMG_7111605920225843978_ootjw0.png",
    },
    {
      id: 2,
      name: "Carbones Bosch.",
      code: "CB-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264108/IMG_8783131758840939597_ipbf9s.png",
    },
    {
      id: 3,
      name: "Carbones DeWalt.",
      code: "CB-003",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264107/IMG_7544402669589216209_weczga.png",
    },
    {
      id: 4,
      name: "Carbones Dowen Pagio - BTA.",
      code: "CB-004",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264106/IMG_6505040830314995098_co4zcc.png",
    },
    {
      id: 5,
      name: "Carbones para Electrodomesticos.",
      code: "CB-005",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264106/IMG_5281558994986571993_vz9jhi.png",
    },
    {
      id: 6,
      name: "Carbones Gamma.",
      code: "CB-006",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264106/IMG_6987969511023447409_imlr5v.png",
    },
    {
      id: 7,
      name: "Carbones Hitachi.",
      code: "CB-007",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264106/IMG_6987969511023447409_imlr5v.png",
    },
    {
      id: 8,
      name: "Carbones Makita.",
      code: "CB-008",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264106/IMG_6987969511023447409_imlr5v.png",
    },
    {
      id: 9,
      name: "Carbones para Lavarropas.",
      code: "CB-009",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264106/IMG_6987969511023447409_imlr5v.png",
    },
    {
      id: 10,
      name: "Carbones Skil.",
      code: "CB-010",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264106/IMG_6987969511023447409_imlr5v.png",
    },
  ],
  2: [
    {
      id: 11,
      name: "Manómetro de 40 y 50 litros.",
      code: "RC-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752000058/MANDRILES2_a3iucv.jpg",
    },
    {
      id: 12,
      name: "Conector cruz con regulador de presion.",
      code: "RC-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752000051/COMPRESORES_w1bs6n.jpg",
    },
    {
      id: 13,
      name: "Presostatos de 40 y 50 litros.",
      code: "RC-003",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089499/compresores2_yl2ea5.jpg",
    },
    {
      id: 14,
      name: "Regulador de presion de aire.",
      code: "RC-004",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089500/compresores3_zpjzpp.jpg",
    },
    {
      id: 15,
      name: "Válvula de Seguridad.",
      code: "RC-005",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264659/IMG_5344566543825883500_ipf7jc.png",
    },
    {
      id: 16,
      name: "Visor de Aceite.",
      code: "RC-006",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264660/IMG_6506534525828530571_tl4ziq.png",
    },
    {
      id: 17,
      name: "Protector térmico de 8A y 15A.",
      code: "RC-007",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264660/IMG_5626115802945502332_hnq28k.png",
    },
    {
      id: 18,
      name: "Válvula de Purgue.",
      code: "RC-008",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752264660/IMG_6856720016561197539_vehdd5.png",
    },
  ],
  3: [
    {
      id: 19,
      name: "Interruptor Amoladoras.",
      code: "INT-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752000275/INTERRUPTORES_a1yzkr.jpg",
    },
    {
      id: 20,
      name: "Interruptor Taladros.",
      code: "INT-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089523/interruptores4_fqsjmc.jpg",
    },
    {
      id: 21,
      name: "Interruptor Amoladoras DeWalt.",
      code: "INT-003",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089480/interruptores2_ggqw7q.jpg",
    },
    {
      id: 22,
      name: "Interruptor Sierras circulares.",
      code: "INT-004",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089481/interruptores3_ogt9za.jpg",
    },
    {
      id: 23,
      name: "Mandril para taladros de 10mm.",
      code: "INT-005",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752265296/IMG_7234395060738138415_1_ovf9gm.png",
    },
    {
      id: 24,
      name: "Mandril para taladros de 13mm.",
      code: "INT-006",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752265275/IMG_3283678790404437016_1_tvgltt.png",
    },
  ],
  4: [
    {
      id: 25,
      name: "Capacitor 450VCA SICAP/ISATECH.",
      code: "CAP-450",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1751999134/CAPACITORES_u9i0xj.jpg",
    },
    {
      id: 26,
      name: "Capacitor 400VCA Axiales.",
      code: "CAP-400",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1751999955/CAPACITORES2_uo9ish.jpg",
    },
    {
      id: 27,
      name: "Capacitor EDISON 110VCA.",
      code: "CAP-110",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089454/capacitores110_irgdst.jpg",
    },
    {
      id: 28,
      name: "Capacitor EDISON 220VCA.",
      code: "CAP-220",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752266400/IMG_3542522427205930543_su232n.png",
    },
  ],
  5: [
    {
      id: 29,
      name: "Interruptor bipolar para hidrolavadoras 10A.",
      code: "TP-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752266549/IMG_49192847855532897_ummtop.png",
    },
    {
      id: 30,
      name: "Interruptor unipolar c/ contacto de plata 6A.",
      code: "TP-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752266551/IMG_726989909081238512_kmxlsg.png",
    },
    {
      id: 31,
      name: "Interruptor bipolar con punto medio 10A.",
      code: "TP-003",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752266553/IMG_7694245772554127891_hfgjyl.png",
    },
    {
      id: 32,
      name: "Pulsador bipolar punto medio.",
      code: "TP-004",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752266555/IMG_8758609023405156923_wwk589.png",
    },
    {
      id: 33,
      name: "Interruptor bipolar 10A.",
      code: "TP-005",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752266552/IMG_3905091633651627653_rm5hlg.png",
    },
    {
      id: 34,
      name: "Pulsador para secarropa redondo.",
      code: "TP-006",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752266553/IMG_6893983881396981304_mdxp6c.png",
    },
  ],
  6: [
    {
      id: 35,
      name: "Rulemanes.",
      code: "RUL-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752267425/IMG_3490532264332592956_jujw5l.png",
    },
    {
      id: 36,
      name: "Cubetas de goma.",
      code: "CUB-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089607/cubetas_ht5set.jpg",
    },
    {
      id: 37,
      name: "Cubetas de goma siliconadas.",
      code: "CUB-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752267425/IMG_2403615958719917340_khhddj.png",
    },
  ],
  7: [
    {
      id: 38,
      name: "Sellos importados TRISUN.",
      code: "SM-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752267595/IMG_5301901211073452376_qphd4h.png",
    },
    {
      id: 39,
      name: "Sellos especiales.",
      code: "SM-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752267573/IMG_3082094780847763229_qcv9xj.png",
    },
    {
      id: 40,
      name: "Sellos FRALUGA.",
      code: "SM-003",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752267572/IMG_2465112569658727090_esovft.png",
    },
  ],
  8: [
    {
      id: 41,
      name: "Carretel automático - S/tanza.",
      code: "CA-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752267838/IMG_517290261843055381_jne82b.png",
    },
    {
      id: 42,
      name: "Carretel tapa roja - C/tanza.",
      code: "CA-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752267841/IMG_6901535702134341841_f32ohe.png",
    },
    {
      id: 43,
      name: "Carretel c/ventilador - Sin tanza.",
      code: "CA-003",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752267841/IMG_6823489050076898692_n1wkka.png",
    },
    {
      id: 44,
      name: "Carretel 4 salidas - Sin tanza.",
      code: "CA-004",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752267841/IMG_6823489050076898692_n1wkka.png",
    },
  ],
  9: [
    {
      id: 45,
      name: "Caja terminales 50 unidades.",
      code: "TER-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089546/terminales_kvr35x.jpg",
    },
    {
      id: 46,
      name: "Caja Aisladores 50 unidades.",
      code: "TER-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752268122/IMG_6683973324017330814_e0hlxm.png",
    },
  ],
  10: [
    {
      id: 47,
      name: "Interruptor bipolar C/traba 15A.",
      code: "ROX-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752268328/IMG_5526190060186035816_afm85n.png",
    },
    {
      id: 48,
      name: "Interruptor unipolar 10A, 2 velocidades.",
      code: "ROX-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752268325/IMG_1435081065735030329_t82w9u.png",
    },
    {
      id: 49,
      name: "Pasacables.",
      code: "ROX-003",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752268329/IMG_7750895720331805724_a24z15.png",
    },
    {
      id: 50,
      name: "Porta carbones MAKITA.",
      code: "ROX-004",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752268331/IMG_8185578479692370618_vpsgyw.png",
    },
    {
      id: 51,
      name: "Porta carbones DOVER BONHER.",
      code: "ROX-005",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752268327/IMG_2586399316849326588_kf7jch.png",
    },
  ],
  11: [
    {
      id: 52,
      name: "Exhibidor de Carbones.",
      code: "EXH-001",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089643/exhibidorcarbones_ssmd3w.jpg",
    },
    {
      id: 53,
      name: "Exhibidor de Interruptores.",
      code: "EXH-002",
      imageUrl: "https://res.cloudinary.com/dsruuadi2/image/upload/v1752089644/exhibidorinterruptores_bde6us.jpg",
    },
  ],
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  // Create a flat array of all products with their category info
  const allProducts = useMemo(() => {
    const flatProducts = []
    Object.entries(products).forEach(([categoryId, categoryProducts]) => {
      const category = categories.find((c) => c.id === Number.parseInt(categoryId))
      categoryProducts.forEach((product) => {
        flatProducts.push({
          ...product,
          categoryId: Number.parseInt(categoryId),
          categoryName: category?.name || "",
        })
      })
    })
    return flatProducts
  }, [])

  // Filter products based on search term
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return []

    const term = searchTerm.toLowerCase().trim()
    return allProducts.filter(
        (product) =>
            product.name.toLowerCase().includes(term) ||
            product.code.toLowerCase().includes(term) ||
            product.categoryName.toLowerCase().includes(term),
    )
  }, [searchTerm, allProducts])

  // Function to get the appropriate grid classes based on number of products
  const getGridClasses = (productCount) => {
    if (productCount === 1) {
      return "flex justify-center items-start"
    } else if (productCount === 2) {
      return "flex flex-wrap justify-center gap-8"
    } else {
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    }
  }

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId)
    setIsMobileCategoryOpen(false)
    setSearchTerm("") // Clear search when selecting category
  }

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    if (value.trim()) {
      setSelectedCategory(null) // Clear category selection when searching
    }
  }

  const clearSearch = () => {
    setSearchTerm("")
  }

  // Determine what to display
  const isSearching = searchTerm.trim().length > 0
  const hasSearchResults = searchResults.length > 0
  const displayProducts = isSearching ? searchResults : selectedCategory ? products[selectedCategory] : []

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          {/* Search Bar */}
          <div className="mb-6 sm:mb-8 animate-slide-in-top">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-10 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white shadow-sm"
                />
                {searchTerm && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={20} />
                    </button>
                )}
              </div>
            </div>
          </div>

          {/* Search Results Info */}
          {isSearching && (
              <div className="mb-6 text-center animate-fade-in-up">
                <p className="text-gray-600">
                  {hasSearchResults
                      ? `Se encontraron ${searchResults.length} resultado${searchResults.length !== 1 ? "s" : ""} para "${searchTerm}"`
                      : `No se encontraron resultados para "${searchTerm}"`}
                </p>
              </div>
          )}

          {/* Mobile Category Selector - Hide when searching */}
          {!isSearching && (
              <div className="lg:hidden mb-6 animate-fade-in-up animate-delay-100">
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
                      className={`absolute top-full left-0 right-0 z-50 bg-white border border-green-300 rounded-lg mt-1 shadow-xl overflow-hidden transition-all duration-300 ${
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
          )}

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Desktop Categories Sidebar - Hide when searching */}
            {!isSearching && (
                <div className="hidden lg:block w-1/4 animate-fade-in-left animate-delay-200">
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-green-200 sticky top-4 hover-lift">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">Categorías</h2>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                          <li key={category.id}>
                            <button
                                onClick={() => handleCategorySelect(category.id)}
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
            )}

            {/* Products Display */}
            {!isMobileCategoryOpen && (
                <div className={`${isSearching ? "w-full" : "w-full lg:w-3/4"} animate-fade-in-right animate-delay-300`}>
                  {displayProducts.length > 0 ? (
                      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-green-200 hover-glow">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
                          {isSearching
                              ? `Resultados de búsqueda: "${searchTerm}"`
                              : categories.find((c) => c.id === selectedCategory)?.name}
                        </h2>
                        <div className={getGridClasses(displayProducts.length)}>
                          {displayProducts.map((product, index) => (
                              <div
                                  key={product.id}
                                  className="animate-bounce-in"
                                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                              >
                                <ProductCard
                                    name={product.name}
                                    code={product.code}
                                    imageUrl={product.imageUrl}
                                    category={
                                      isSearching ? product.categoryName : categories.find((c) => c.id === selectedCategory)?.name
                                    }
                                />
                              </div>
                          ))}
                        </div>
                      </div>
                  ) : (
                      <div className="text-center text-gray-600 bg-white p-8 sm:p-12 rounded-lg shadow-lg border border-green-200 hover-glow">
                        <div className="max-w-md mx-auto">
                          <Search className="mx-auto mb-4 text-gray-400 animate-float" size={48} />
                          <h3 className="text-lg sm:text-xl font-semibent mb-2">
                            {isSearching ? "No se encontraron productos" : "Seleccione una categoría"}
                          </h3>
                          <p className="text-sm sm:text-base">
                            {isSearching
                                ? "Intente con otros términos de búsqueda"
                                : "Elija una categoría del selector superior para explorar nuestros productos"}
                          </p>
                        </div>
                      </div>
                  )}
                </div>
            )}
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
