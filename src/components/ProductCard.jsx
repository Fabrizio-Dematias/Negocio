import React from 'react';

const ProductCard = ({ name, price }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
      <div className="aspect-square bg-gray-200 mb-4 rounded-md w-full h-40"></div>
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-4">{price}</p>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
        Ver detalles
      </button>
    </div>
  );
};

export default ProductCard;