import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="bg-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/path/to/your/logo.png" alt="DICOR Logo" className="h-12 w-auto" />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {[
              { name: 'INICIO', path: '/' },
              { name: 'PRODUCTOS', path: '/productos' },
              { name: 'CONTACTO', path: '/contact' },
              ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="bg-white px-4 py-2 rounded hover:bg-gray-100 transition-colors"
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