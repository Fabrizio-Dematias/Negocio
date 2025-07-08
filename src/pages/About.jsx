import {
  History,
  Target,
  ShoppingCart,
  Percent,
  Star,
  Users,
  CheckCircle,
  Truck,
  Headphones,
  Award,
  TrendingUp,
} from "lucide-react"

const About = () => {
  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <section className="mb-12 sm:mb-16">
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              En DICOR, nos dedicamos a proporcionar repuestos de alta calidad para herramientas eléctricas, manteniendo
              su equipo en óptimas condiciones y su negocio en marcha.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-green-100 p-6 sm:p-8 rounded-lg shadow-lg border border-green-200">
              <History className="text-green-600 mb-4" size={40} />
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">Nuestra Historia</h2>
              <p className="text-gray-600">
                Fundada en 2014, DICOR ha crecido de ser una pequeña tienda local a un proveedor líder de repuestos para
                herramientas eléctricas en toda la región.
              </p>
            </div>
            <div className="bg-emerald-100 p-6 sm:p-8 rounded-lg shadow-lg border border-green-200">
              <Target className="text-emerald-600 mb-4" size={40} />
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">Nuestra Misión</h2>
              <p className="text-gray-600">
                Nos esforzamos por mantener las herramientas de nuestros clientes funcionando como nuevas, ofreciendo
                repuestos de calidad y un servicio excepcional.
              </p>
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Lo Que Ofrecemos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-lg text-center border border-green-200">
                <Star className="text-green-600 mb-4 mx-auto" size={40} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Calidad Superior</h3>
                <p className="text-gray-600 text-sm">Solo los mejores repuestos del mercado con garantía de calidad</p>
              </div>
              <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg shadow-lg text-center border border-green-200">
                <Users className="text-emerald-600 mb-4 mx-auto" size={40} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Atención Personalizada</h3>
                <p className="text-gray-600 text-sm">Nuestro equipo está siempre listo para ayudar y asesorar</p>
              </div>
              <div className="bg-green-100 p-4 sm:p-6 rounded-lg shadow-lg text-center border border-green-200">
                <ShoppingCart className="text-emerald-600 mb-4 mx-auto" size={40} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Sin Compra Mínima</h3>
                <p className="text-gray-600 text-sm">Compre la cantidad que necesite, sin restricciones</p>
              </div>
              <div className="bg-emerald-100 p-4 sm:p-6 rounded-lg shadow-lg text-center border border-green-200">
                <Percent className="text-green-500 mb-4 mx-auto" size={40} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Descuentos Especiales</h3>
                <p className="text-gray-600 text-sm">Descuentos y bonificaciones especiales sobre precios de lista</p>
              </div>
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-lg text-center border border-green-200">
                <Star className="text-green-500 mb-4 mx-auto" size={40} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Innovación Constante</h3>
                <p className="text-gray-600 text-sm">Constantemente ampliamos nuestra gama de productos</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-green-200">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600 text-sm sm:text-base">
                  Amplia selección de repuestos para todas las marcas principales
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Truck className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600 text-sm sm:text-base">Envío rápido y seguro a todo el país</p>
              </div>
              <div className="flex items-start space-x-3">
                <Headphones className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600 text-sm sm:text-base">Asesoramiento técnico especializado</p>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600 text-sm sm:text-base">Garantía en todos nuestros productos</p>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600 text-sm sm:text-base">Precios competitivos y ofertas especiales</p>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600 text-sm sm:text-base">Atención personalizada para clientes frecuentes</p>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default About
