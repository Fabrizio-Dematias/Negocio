"use client"

const ProductCard = ({ name, code, imageUrl, category }) => {
    const handleWhatsAppClick = () => {
        const phoneNumber = "543513676695"
        const message = `Hola! Me interesa solicitar cotización para productos de la categoría: ${category}. Producto específico: ${name} (Código: ${code})`
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-green-300 group transition-all duration-300 flex flex-col w-full max-w-xs mx-auto h-80">
            {/* Image Container - Fixed Height */}
            <div className="bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-4 mb-3 h-40">
                <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={name}
                    onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "https://via.placeholder.com/300x200?text=Imagen+No+Disponible"
                    }}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content Container - Fixed Height with Flex Layout */}
            <div className="flex-1 flex flex-col justify-between">
                {/* Text Content - Fixed Height with Overflow Handling */}
                <div className="flex-1 mb-3">
                    <h2
                        className="text-base font-bold mb-1.5 text-gray-800 leading-tight group-hover:text-green-600 transition-colors duration-300 overflow-hidden"
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            minHeight: "2.5rem",
                            lineHeight: "1.25rem",
                        }}
                    >
                        {name}
                    </h2>
                    <p className="text-gray-500 font-medium text-sm truncate">
                        Código: {code}
                    </p>
                </div>

                {/* Button - Fixed Position */}
                <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-500 text-white py-2.5 px-4 rounded-lg hover:bg-green-600 transition-all duration-200 shadow-sm font-medium text-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                    Solicitar Cotización
                </button>
            </div>
        </div>
    )
}

export default ProductCard
