import React from 'react';

const ProductCard = ({ name, price }) => {
    return (
      <div className="bg-sky-300 p-4 rounded-lg shadow-md max-w-xs mx-auto">
        <div className="aspect-square bg-white mb-4 rounded-md w-full h-40"></div>
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-gray-700">{price}</p>
      </div>
    );
  };
  
  export default ProductCard;