import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center w-full">
        <Link to="/">
          <img src="../../public/img/logo.png" alt="DICOR Logo" className="h-12 w-auto" />
        </Link>
        
        <button
          className="text-gray-700 md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <nav className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            {[
              { name: 'NUESTRA EMPRESA', path: '/nosotros' },
              { name: 'PRODUCTOS', path: '/productos' },
              { name: 'CONTACTO', path: '/contacto' },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors block md:inline-block"
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