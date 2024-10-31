import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#33372C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DICOR</h3>
            <p className="text-sm">Especialistas en repuestos de calidad para herramientas eléctricas desde el 2014.</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300 transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="hover:text-gray-300 transition-colors">Nuestra Empresa</Link></li>
              <li><Link to="/productos" className="hover:text-gray-300 transition-colors">Productos</Link></li>
              <li><Link to="/contacto" className="hover:text-gray-300 transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctenos</h3>
            <p className="text-sm mb-2">Cordoba Capital, Argentina</p>
            <p className="text-sm mb-2">Teléfono: (351) 367-6695</p>
            <p className="text-sm mb-4">Email: dicorcarbones@gmail.com</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:dicorcarbones@gmail.com" className="hover:text-gray-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>© 2024 DICOR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;