import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="bg-red-600 p-4">
      <h1 className='text-3xl'>PROFEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h1>
      <img className='w-[800px] h-[700px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQfOIQlSFCAYG03ockPPt65AosKWdCRgEoh1mKILgM659zx6uLVhntyepcvY5GElGoFs&usqp=CAU" alt="quiñones" />
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
                  className="bg-red-400 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
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