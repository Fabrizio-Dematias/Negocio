import { Link } from "react-router-dom"
import { Mail } from "lucide-react"

function Footer() {
  return (
      <footer className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4 flex justify-center md:justify-start">
                <img src="/img/Logo.png" alt="DICOR Logo" className="h-24 w-auto" />
              </div>
              <p className="text-sm text-white/90 text-center md:text-left leading-relaxed">
                Especialistas en repuestos de calidad para herramientas eléctricas.
              </p>
            </div>
            <div>
              <ul className="space-y-2.5 mt-2">
                <li>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-white/90 hover:text-white hover:underline transition-all duration-200 text-sm">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros" onClick={() => window.scrollTo(0, 0)} className="text-white/90 hover:text-white hover:underline transition-all duration-200 text-sm">
                    Nuestra Empresa
                  </Link>
                </li>
                <li>
                  <Link to="/productos" onClick={() => window.scrollTo(0, 0)} className="text-white/90 hover:text-white hover:underline transition-all duration-200 text-sm">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" onClick={() => window.scrollTo(0, 0)} className="text-white/90 hover:text-white hover:underline transition-all duration-200 text-sm">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contáctenos</h3>
              <p className="text-sm mb-2 text-white/90">Cordoba Capital, Argentina</p>
              <p className="text-sm mb-2 text-white/90">Teléfono: (351) 367-6695</p>
              <p className="text-sm mb-4 text-white/90">Email: dicorcarbones@gmail.com</p>
              <div className="flex space-x-3">
                <a 
                    href="mailto:dicorcarbones@gmail.com" 
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Enviar email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
            <p className="text-white/90">© 2024 DICOR. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
