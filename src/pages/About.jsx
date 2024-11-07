import React from 'react';
import { History, Target, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">Nuestra Empresa</h1>
      
      <section className="mb-16">
        <p className="text-2xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          En DICOR, nos dedicamos a proporcionar repuestos de alta calidad para herramientas eléctricas, 
          manteniendo su equipo en óptimas condiciones y su negocio en marcha.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16 p-8">
        <div className="bg-blue-50 mb-16 p-6 rounded-lg shadow-md">
          <History className="text-blue-600 mb-4" size={40} />
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Nuestra Historia</h2>
          <p className="text-gray-600">
            Fundada en 2014, DICOR ha crecido de ser una pequeña tienda local a un proveedor 
            líder de repuestos para herramientas eléctricas en toda la región.
          </p>
        </div>
        <div className="bg-green-50 mb-16 p-8 rounded-lg shadow-md">
          <Target className="text-green-600 mb-4" size={40} />
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Nuestra Misión</h2>
          <p className="text-gray-600">
            Nos esforzamos por mantener las herramientas de nuestros clientes funcionando como nuevas, 
            ofreciendo repuestos de calidad y un servicio excepcional.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Nuestros Valores</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md text-center">
            <Star className="text-yellow-600 mb-4 mx-auto" size={40} />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Calidad</h3>
            <p className="text-gray-600">Ofrecemos solo los mejores repuestos del mercado.</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg shadow-md text-center">
            <Users className="text-red-600 mb-4 mx-auto" size={40} />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Servicio al Cliente</h3>
            <p className="text-gray-600">Nuestro equipo está siempre listo para ayudar y asesorar.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
            <Star className="text-purple-600 mb-4 mx-auto" size={40} />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Innovación</h3>
            <p className="text-gray-600">Constantemente ampliamos nuestra gama de productos.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Por qué elegirnos?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Amplia selección de repuestos para todas las marcas principales</li>
          <li>Envío rápido y seguro a todo el país</li>
          <li>Asesoramiento técnico especializado</li>
          <li>Garantía en todos nuestros productos</li>
          <li>Precios competitivos y ofertas especiales para clientes frecuentes</li>
        </ul>
      </section>
    </div>
  );
};

export default About;