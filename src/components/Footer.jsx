import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

function Footer() {
  return (
      <footer className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4 flex justify-center md:justify-start">
                <img src="/img/Logo.png" alt="DICOR Logo" className="h-20 w-auto filter brightness-0 invert" />
              </div>
              <p className="text-sm text-green-200 text-center md:text-left">
                Especialistas en repuestos de calidad para herramientas eléctricas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-100">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-green-200 hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros" className="text-green-200 hover:text-white transition-colors">
                    Nuestra Empresa
                  </Link>
                </li>
                <li>
                  <Link to="/productos" className="text-green-200 hover:text-white transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-green-200 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-100">Contáctenos</h3>
              <p className="text-sm mb-2 text-green-200">Cordoba Capital, Argentina</p>
              <p className="text-sm mb-2 text-green-200">Teléfono: (351) 367-6695</p>
              <p className="text-sm mb-4 text-green-200">Email: dicorcarbones@gmail.com</p>
              <div className="flex space-x-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a href="mailto:dicorcarbones@gmail.com" className="text-green-200 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-600 text-center text-sm">
            <p className="text-green-200">© 2024 DICOR. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
