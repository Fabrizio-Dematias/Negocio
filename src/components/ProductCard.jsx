"use client"

const ProductCard = ({ name, code, imageUrl, category }) => {
    const handleWhatsAppClick = () => {
        const phoneNumber = "543513676695"
        const message = `Hola! Me interesa solicitar cotización para productos de la categoría: ${category}. Producto específico: ${name} (Código: ${code})`
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-green-200 hover-lift hover-glow group transition-all duration-300 flex flex-col w-full max-w-xs mx-auto h-80">
            {/* Image Container - Fixed Height */}
            <div className="bg-green-50 border border-green-100 rounded-md overflow-hidden flex items-center justify-center p-3 group-hover:bg-green-100 transition-colors duration-300">
                <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Content Container - Fixed Height with Flex Layout */}
            <div className="flex-1 flex flex-col justify-between pt-4">
                {/* Text Content - Fixed Height with Overflow Handling */}
                <div className="flex-1 mb-3">
                    <h2
                        className="text-lg font-semibold mb-2 text-gray-800 leading-tight group-hover:text-green-700 transition-colors duration-300 overflow-hidden"
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            height: "2.5rem",
                            lineHeight: "1.25rem",
                        }}
                    >
                        {name}
                    </h2>
                    <p className="text-gray-600 font-medium text-sm group-hover:text-gray-800 transition-colors duration-300 truncate">
                        {code}
                    </p>
                </div>

                {/* Button - Fixed Position */}
                <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all duration-300 shadow-lg font-medium text-sm hover:scale-105 hover:shadow-xl focus-ring group-hover:animate-pulse-slow"
                >
                    Solicitar Cotización
                </button>
            </div>
        </div>
    )
}

export default ProductCard
