'use client'

import React, { useState } from 'react';
import { ArrowRight, Wrench, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const brands = [
  'Bosch', 'DeWalt', 'Makita', 'Milwaukee', 'Black & Decker',
  'Argentec', 'Dowen Pagio', 'Dremel', 'Gamma', 'Gladiator',
  'Hitachi', 'Power Tools', 'Skil',
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;

  // Duplicar el array de marcas para crear el efecto de bucle continuo
  const infiniteBrands = [...brands, ...brands];

  const next = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= brands.length ? 0 : newIndex;
    });
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? brands.length - 1 : newIndex;
    });
  };

  const visibleBrands = infiniteBrands.slice(currentIndex, currentIndex + visibleCount);

  return (
    <main className="container mx-auto px-8 py-24 mt-16">
      <section className="text-center mb-32">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">Repuestos de Calidad para Herramientas Eléctricas</h1>
        <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">Mantenga sus herramientas funcionando como nuevas con nuestros repuestos de alta calidad</p>
        <a href="/productos" className="bg-[#4a4f3e] text-white py-4 px-8 rounded-lg hover:bg-[#34372c] transition-colors inline-flex items-center text-xl">
          Ver Catálogo
          <ArrowRight className="ml-3" size={24} />
        </a>
        <div className="mt-24"></div>
      </section>

      <section className="grid md:grid-cols-3 gap-16 mb-32">
        <div className="bg-green-50 p-10 rounded-lg shadow-md">
          <Wrench className="text-green-600 mb-4" size={40} />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Amplia Selección</h2>
          <p className="text-gray-600">Encuentre el repuesto exacto que necesita para su herramienta</p>
        </div>
        <div className="bg-blue-50 p-10 rounded-lg shadow-md">
          <Zap className="text-blue-600 mb-4" size={40} />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Envío Rápido</h2>
          <p className="text-gray-600">Reciba sus repuestos en tiempo récord para minimizar el tiempo de inactividad</p>
        </div>
        <div className="bg-yellow-50 p-10 rounded-lg shadow-md">
          <Shield className="text-yellow-600 mb-4" size={40} />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Garantía de Calidad</h2>
          <p className="text-gray-600">Todos nuestros repuestos están respaldados por una garantía de calidad</p>
        </div>
      </section>

      <section className="bg-gray-100 p-16 rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Marcas Populares</h2>
        <div className="relative">
          <div className="flex justify-between items-center">
            <button 
              onClick={prev}
              className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous brands"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="overflow-hidden mx-12">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
                }}
              >
                {infiniteBrands.map((brand, index) => (
                  <div 
                    key={`${brand}-${index}`} 
                    className="flex-none w-1/5 px-4"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105">
                      <span className="text-xl font-semibold text-gray-700">{brand}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={next}
              className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next brands"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
