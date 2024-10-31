import React from 'react';
import { ArrowRight, Wrench, Zap, Shield } from 'lucide-react';

const Home = () => {
  return (
    <main className="container mx-auto mt-8 px-4 mb-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Repuestos de Calidad para Herramientas Eléctricas</h1>
        <p className="text-xl text-gray-600 mb-8">Mantenga sus herramientas funcionando como nuevas con nuestros repuestos de alta calidad</p>
        <a href="/productos" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
          Ver Catálogo
          <ArrowRight className="ml-2" size={20} />
        </a>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <Wrench className="text-green-600 mb-4" size={40} />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Amplia Selección</h2>
          <p className="text-gray-600">Encuentre el repuesto exacto que necesita para su herramienta</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <Zap className="text-blue-600 mb-4" size={40} />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Envío Rápido</h2>
          <p className="text-gray-600">Reciba sus repuestos en tiempo récord para minimizar el tiempo de inactividad</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <Shield className="text-yellow-600 mb-4" size={40} />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Garantía de Calidad</h2>
          <p className="text-gray-600">Todos nuestros repuestos están respaldados por una garantía de calidad</p>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Marcas Populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Bosch', 'DeWalt', 'Makita', 'Milwaukee'].map((brand) => (
            <div key={brand} className="bg-white p-4 rounded shadow-sm text-center">
              <span className="text-lg font-semibold text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;