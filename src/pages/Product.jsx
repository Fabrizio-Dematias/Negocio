import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const categories = [
  { id: 1, name: 'Motores' },
  { id: 2, name: 'Engranajes' },
  { id: 3, name: 'Interruptores' },
  { id: 4, name: 'Capacitores' },
  { id: 5, name: 'Carbones' },
];

const products = {
  1: [
    { id: 1, name: 'Motor de taladro 18V', price: '$59.99' },
    { id: 2, name: 'Motor de sierra circular', price: '$79.99' },
    { id: 3, name: 'Motor de lijadora orbital', price: '$49.99' },
  ],
  2: [
    { id: 4, name: 'Engranaje de reducción', price: '$24.99' },
    { id: 5, name: 'Engranaje helicoidal', price: '$29.99' },
    { id: 6, name: 'Piñón', price: '$19.99' },
  ],
  3: [
    { id: 7, name: 'Interruptor de velocidad', price: '$14.99' },
    { id: 8, name: 'Interruptor de encendido', price: '$9.99' },
    { id: 9, name: 'Interruptor de seguridad', price: '$12.99' },
  ],
  4: [
    { id: 10, name: 'Capacitor 1', price: '$49.99' },
    { id: 11, name: 'Capacitor 2', price: '$39.99' },
    { id: 12, name: 'Capacitor 3', price: '$59.99' },
  ],
  5: [
    { id: 13, name: 'Carbon 1', price: '$29.99' },
    { id: 14, name: 'Carbon 2', price: '$19.99' },
    { id: 15, name: 'Carbon 3', price: '$24.99' },
  ],
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-8 text-gray-800">Productos</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Categories Sidebar */}
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Categorías</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#4a4f3e] text-white'
                      : 'text-gray-600 hover:bg-[#4a4f3e] hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Display */}
        <div className="w-full md:w-3/4">
          {selectedCategory ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{categories.find(c => c.id === selectedCategory).name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products[selectedCategory]?.map((product) => (
                  <ProductCard key={product.id} name={product.name} price={product.price} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-600">
              <p className="text-xl">Seleccione una categoría para ver los productos</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}