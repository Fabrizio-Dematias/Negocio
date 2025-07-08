const ProductCard = ({ name, code, imageUrl }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto border border-green-200">
            <div className="bg-green-50 border border-green-100 rounded-md w-full h-40 overflow-hidden flex items-center justify-center">
                <img src={imageUrl || "/placeholder.svg"} alt={name} className="h-full w-auto object-contain" />
            </div>
            <h2 className="text-lg font-semibold mb-2 text-gray-800">{name}</h2>
            <p className="text-gray-600 mb-4">{code}</p>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors shadow-lg">
                Consultar
            </button>
        </div>
    )
}

export default ProductCard
