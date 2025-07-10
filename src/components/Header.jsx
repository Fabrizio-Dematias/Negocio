"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Phone, Mail } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Nuestra Empresa", path: "/nosotros" },
    { name: "Productos", path: "/productos" },
    { name: "Contacto", path: "/contacto" },
  ]

  return (
      <header className="bg-gradient-to-r from-green-100 via-green-50 to-emerald-100 shadow-lg border-b border-green-200 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <Link to="/" className="flex items-center">
              <img src="/img/Logo.png" alt="DICOR Logo" className="h-24 w-auto" />
            </Link>
            <div className="hidden md:flex flex-col items-end">
              <div className="flex items-center space-x-6 mb-3">
                <a
                    href="tel:+543513676695"
                    className="text-sm text-gray-600 hover:text-green-700 transition-colors flex items-center"
                >
                  <Phone size={16} className="mr-2" />
                  (351) 367-6695
                </a>
                <a
                    href="mailto:dicorcarbones@gmail.com"
                    className="text-sm text-gray-600 hover:text-green-700 transition-colors flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  dicorcarbones@gmail.com
                </a>
              </div>
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  {navItems.map((item) => (
                      <li key={item.name}>
                        <Link
                            to={item.path}
                            className="text-gray-700 hover:bg-green-500 hover:text-white px-4 py-2 rounded transition-colors text-lg font-medium"
                        >
                          {item.name}
                        </Link>
                      </li>
                  ))}
                </ul>
              </nav>
            </div>
            <button
                className="md:hidden text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-green-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6">
              <span
                  className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"}`}
              ></span>
                <span
                    className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out translate-y-2 ${isOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                    className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out translate-y-4 ${isOpen ? "-rotate-45 -translate-y-2.5" : "translate-y-0"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="bg-gradient-to-b from-green-50 to-green-100 border-t border-green-200">
            <ul className="py-4 space-y-2">
              {navItems.map((item, index) => (
                  <li
                      key={item.name}
                      className={`transform transition-all duration-500 ease-out ${
                          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Link
                        to={item.path}
                        className="block mx-4 py-3 px-4 text-center text-gray-700 hover:bg-green-500 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
              ))}
            </ul>

            {/* Contact Info in Mobile Menu */}
            <div className="px-4 pb-4 border-t border-green-200 pt-4">
              <div className="flex flex-col space-y-2 text-center">
                <a
                    href="tel:+543513676695"
                    className="text-sm text-gray-600 hover:text-green-700 transition-colors flex items-center justify-center"
                >
                  <Phone size={16} className="mr-2" />
                  (351) 367-6695
                </a>
                <a
                    href="mailto:dicorcarbones@gmail.com"
                    className="text-sm text-gray-600 hover:text-green-700 transition-colors flex items-center justify-center"
                >
                  <Mail size={16} className="mr-2" />
                  dicorcarbones@gmail.com
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Header
