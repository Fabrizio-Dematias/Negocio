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
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/img/logo.png" alt="DICOR Logo" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+543513676695" className="text-gray-600 hover:text-[#4a4f3e] transition-colors">
              <Phone size={18} className="inline mr-1" />
              (351) 367-6695
            </a>
            <a href="mailto:dicorcarbones@gmail.com" className="text-gray-600 hover:text-[#4a4f3e] transition-colors">
              <Mail size={18} className="inline mr-1" />
              dicorcarbones@gmail.com
            </a>
          </div>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block py-4`}>
          <ul className="md:flex md:justify-center md:space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="mb-2 md:mb-0">
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
      </div>
    </header>
  );
};

export default Header;