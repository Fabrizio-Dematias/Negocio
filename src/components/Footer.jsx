import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="bg-stone-700 text-white p-4 text-center">
      <p>© 2024 DICOR. Todos los derechos reservados.</p>
      <div className="mt-2">
        <a href="/home" className="text-white hover:text-yellow-400">Nuestra empresa</a> | 
        <a href="/about" className="text-white hover:text-yellow-400 ml-4">Productos</a> | 
        <a href="/contact" className="text-white hover:text-yellow-400 ml-4">Contacto</a>
      </div>
    </footer>
  );
}

export default Footer;
