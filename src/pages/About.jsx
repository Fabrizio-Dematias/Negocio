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
        <div className="container mx-auto px-8 py-16">
          <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">Nuestra Empresa</h1>

          <section className="mb-16">
            <p className="text-2xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              En DICOR, nos dedicamos a proporcionar repuestos de alta calidad para herramientas eléctricas, manteniendo
              su equipo en óptimas condiciones y su negocio en marcha.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-green-100 p-8 rounded-lg shadow-lg border border-green-200">
              <History className="text-green-600 mb-4" size={40} />
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Nuestra Historia</h2>
              <p className="text-gray-600">
                Fundada en 2014, DICOR ha crecido de ser una pequeña tienda local a un proveedor líder de repuestos para
                herramientas eléctricas en toda la región.
              </p>
            </div>
            <div className="bg-emerald-100 p-8 rounded-lg shadow-lg border border-green-200">
              <Target className="text-emerald-600 mb-4" size={40} />
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Nuestra Misión</h2>
              <p className="text-gray-600">
                Nos esforzamos por mantener las herramientas de nuestros clientes funcionando como nuevas, ofreciendo
                repuestos de calidad y un servicio excepcional.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Lo Que Ofrecemos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center border border-green-200">
                <Star className="text-green-600 mb-4 mx-auto" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Calidad Superior</h3>
                <p className="text-gray-600">Solo los mejores repuestos del mercado con garantía de calidad</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg shadow-lg text-center border border-green-200">
                <Users className="text-emerald-600 mb-4 mx-auto" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Atención Personalizada</h3>
                <p className="text-gray-600">Nuestro equipo está siempre listo para ayudar y asesorar</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center border border-green-200">
                <ShoppingCart className="text-emerald-600 mb-4 mx-auto" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Sin Compra Mínima</h3>
                <p className="text-gray-600">Compre la cantidad que necesite, sin restricciones</p>
              </div>
              <div className="bg-emerald-100 p-6 rounded-lg shadow-lg text-center border border-green-200">
                <Percent className="text-green-500 mb-4 mx-auto" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Descuentos Especiales</h3>
                <p className="text-gray-600">Descuentos y bonificaciones especiales sobre precios de lista</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center border border-green-200">
                <Star className="text-green-500 mb-4 mx-auto" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Innovación Constante</h3>
                <p className="text-gray-600">Constantemente ampliamos nuestra gama de productos</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-lg border border-green-200">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">¿Por qué elegirnos?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600">Amplia selección de repuestos para todas las marcas principales</p>
              </div>
              <div className="flex items-start space-x-3">
                <Truck className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600">Envío rápido y seguro a todo el país</p>
              </div>
              <div className="flex items-start space-x-3">
                <Headphones className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600">Asesoramiento técnico especializado</p>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600">Garantía en todos nuestros productos</p>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600">Precios competitivos y ofertas especiales</p>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600">Atención personalizada para clientes frecuentes</p>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default About
