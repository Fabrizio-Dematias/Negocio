import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nuestra Empresa', path: '/nosotros' },
    { name: 'Productos', path: '/productos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
      <header className="bg-[#d9f1d3] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/img/Logo.png" alt="DICOR Logo" className="h-20 w-auto" />
          </Link>
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center space-x-4 mb-2">
              <a href="tel:+543513676695" className="text-sm text-gray-600 hover:text-[#4a4f3e] transition-colors">
                <Phone size={16} className="inline mr-1" />
                (351) 367-6695
              </a>
              <a href="mailto:dicorcarbones@gmail.com" className="text-sm text-gray-600 hover:text-[#4a4f3e] transition-colors">
                <Mail size={16} className="inline mr-1" />
                dicorcarbones@gmail.com
              </a>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:bg-[#4a4f3e] hover:text-white px-4 py-2 rounded transition-colors text-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden py-4 bg-gray-100">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <Link
                  to={item.path}
                  className="block py-2 px-4 text-center text-gray-700 hover:bg-[#4a4f3e] hover:text-white rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;