"use client"

const ProductCard = ({ name, code, imageUrl, category }) => {
    const handleWhatsAppClick = () => {
        const phoneNumber = "543513676695"
        const message = `Hola! Me interesa solicitar cotización para productos de la categoría: ${category}. Producto específico: ${name} (Código: ${code})`
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-green-200 w-full max-w-xs h-80 flex flex-col hover-lift hover-glow group transition-all duration-300">
            {/* Image Container */}
            <div className="bg-green-50 border border-green-100 rounded-md w-full h-44 overflow-hidden flex items-center justify-center mb-4 p-3 group-hover:bg-green-100 transition-colors duration-300">
                <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 leading-tight group-hover:text-green-700 transition-colors duration-300">
                        {name}
                    </h2>
                    <p className="text-gray-600 mb-3 font-medium text-sm group-hover:text-gray-800 transition-colors duration-300">
                        {code}
                    </p>
                </div>
                <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all duration-300 shadow-lg font-medium text-sm mt-auto hover:scale-105 hover:shadow-xl focus-ring group-hover:animate-pulse-slow"
                >
                    Solicitar Cotización
                </button>
            </div>
        </div>
    )
}

export default ProductCard
