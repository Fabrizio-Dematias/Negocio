import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const categories = [
  { id: 1, name: 'Carbones para herramientas electricas' },
  { id: 2, name: 'Repuestos para compresores' },
  { id: 3, name: 'Interruptores para herramientas electricas' },
  { id: 4, name: 'Capacitores de arranque' },
  { id: 5, name: 'Teclas / Pulsadores' },
  { id: 6, name: 'Rulemanes y Cubetas de goma'},
  { id: 7, name: 'Sellos mecanicos'},
  { id: 8, name: 'Repuestos para bordeadoras y cortadoras de cesped'},
  { id: 9, name: 'Terminales'},
  { id: 10, name: 'Repuestos Roxelectric'},
  { id: 11, name: 'Exhibidores'},
];

const products = {
  1: [
    { id: 1, name: 'Motor de taladro 18V', code: '$59.99' },
    { id: 2, name: 'Motor de sierra circular', code: '$79.99' },
    { id: 3, name: 'Motor de lijadora orbital', code: '$49.99' },
  ],
  2: [
    { id: 4, name: 'Engranaje de reducción', code: '$24.99' },
    { id: 5, name: 'Engranaje helicoidal', code: '$29.99' },
    { id: 6, name: 'Piñón', code: '$19.99' },
  ],
  3: [
    { id: 7, name: 'Interruptor Amoladora G720', code: '10628' , imageUrl: 'http://localhost:3001/uploads/10628.png' },
    { id: 8, name: 'Interruptor Amoladora angular 7” - 1200w\n', code: '10022' , imageUrl: 'http://localhost:3001/uploads/10022.png' },
    { id: 9, name: 'Interruptor Amoladora angular 4 1/2” - 850w\n', code: '10641' , imageUrl: 'http://localhost:3001/uploads/10641.png' },
  ],
  4: [
    { id: 10, name: 'Capacitores 450VCA  SICAP/ISATECH', code: '$49.99' , imageUrl: 'http://localhost:3001/uploads/450VCA.png' },
    { id: 11, name: 'Capacitores 400VCA Axiales', code: '$39.99' , imageUrl: 'http://localhost:3001/uploads/AXIALES.png' },
    { id: 12, name: 'Capacitores EDISON 220VCA', code: '$59.99' , imageUrl: 'http://localhost:3001/uploads/220.png' },
  ],
  5: [
    { id: 13, name: 'Carbon 1', code: '$29.99' },
    { id: 14, name: 'Carbon 2', code: '$19.99' },
    { id: 15, name: 'Carbon 3', code: '$24.99' },
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
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        code={product.code}
                        imageUrl={product.imageUrl}
                    />
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