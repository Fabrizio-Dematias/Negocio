import React from 'react';

const ProductCard = ({ name, code, imageUrl }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
            <div className="bg-white border rounded-md w-full h-40 overflow-hidden flex items-center justify-center">
                <img
                    src={imageUrl}
                    alt={name}
                    className="h-full w-auto object-contain"
                />
            </div>
            <h2 className="text-lg font-semibold mb-2 text-gray-800">{name}</h2>
            <p className="text-gray-600 mb-4">{code}</p>
            <button className="w-full bg-[#4a4f3e] text-white py-2 px-4 rounded hover:bg-[#34372c] transition-colors">
                Consultar
            </button>
        </div>
    );
};

export default ProductCard;
