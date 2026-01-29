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
import AnimatedSection from "../components/AnimatedSection"

const About = () => {
  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <AnimatedSection animation="slide-in-top">
            <section className="mb-12 sm:mb-16">
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                Nos dedicamos a proporcionar repuestos de alta calidad para herramientas eléctricas, manteniendo su equipo
                en óptimas condiciones y su negocio en marcha.
              </p>
            </section>
          </AnimatedSection>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="bg-green-100 p-6 sm:p-8 rounded-lg shadow-lg border border-green-200 hover-lift group">
                <History className="text-green-600 mb-4 animate-float" size={40} />
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 group-hover:text-green-700 transition-colors">
                  Nuestra Historia
                </h2>
                <p className="text-gray-600">
                  Fundada en 2014, DICOR ha crecido de ser una pequeña tienda local a un proveedor líder de repuestos para
                  herramientas eléctricas en toda la región.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="bg-emerald-100 p-6 sm:p-8 rounded-lg shadow-lg border border-green-200 hover-lift group">
                <Target className="text-emerald-600 mb-4 animate-pulse-slow" size={40} />
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 group-hover:text-emerald-700 transition-colors">
                  Nuestra Misión
                </h2>
                <p className="text-gray-600">
                  Nos esforzamos por mantener las herramientas de nuestros clientes funcionando como nuevas, ofreciendo
                  repuestos de calidad y un servicio excepcional.
                </p>
              </div>
            </AnimatedSection>
          </section>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <section className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Lo Que Ofrecemos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {[
                  {
                    icon: Star,
                    title: "Calidad Superior",
                    desc: "Solo los mejores repuestos del mercado con garantía de calidad",
                    color: "text-green-600",
                    bg: "bg-green-50",
                  },
                  {
                    icon: Users,
                    title: "Atención Personalizada",
                    desc: "Nuestro equipo está siempre listo para ayudar y asesorar",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50",
                  },
                  {
                    icon: ShoppingCart,
                    title: "Sin Compra Mínima",
                    desc: "Compre la cantidad que necesite, sin restricciones",
                    color: "text-emerald-600",
                    bg: "bg-green-100",
                  },
                  {
                    icon: Percent,
                    title: "Descuentos Especiales",
                    desc: "Descuentos y bonificaciones especiales sobre precios de lista",
                    color: "text-green-500",
                    bg: "bg-emerald-100",
                  },
                  {
                    icon: Star,
                    title: "Innovación Constante",
                    desc: "Constantemente ampliamos nuestra gama de productos",
                    color: "text-green-500",
                    bg: "bg-green-50",
                  },
                ].map((item, index) => (
                    <AnimatedSection key={index} animation="bounce-in" delay={index * 100 + 500}>
                      <div
                          className={`${item.bg} p-4 sm:p-6 rounded-lg shadow-lg text-center border border-green-200 hover-lift group h-full flex flex-col`}
                      >
                        <item.icon className={`${item.color} mb-4 mx-auto animate-float`} size={40} />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
                      </div>
                    </AnimatedSection>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-scale" delay={800}>
            <section className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-green-200 hover-glow">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
                ¿Por qué elegirnos?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: CheckCircle, text: "Amplia selección de repuestos para todas las marcas principales" },
                  { icon: Truck, text: "Envío rápido y seguro a todo el país" },
                  { icon: Headphones, text: "Asesoramiento técnico especializado" },
                  { icon: Award, text: "Garantía en todos nuestros productos" },
                  { icon: TrendingUp, text: "Precios competitivos y ofertas especiales" },
                  { icon: Users, text: "Atención personalizada para clientes frecuentes" },
                ].map((item, index) => (
                    <AnimatedSection key={index} animation="fade-in-up" delay={index * 100 + 900}>
                      <div className="flex items-start space-x-3 group">
                        <item.icon
                            className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                            size={20}
                        />
                        <p className="text-gray-600 text-sm sm:text-base group-hover:text-gray-800 transition-colors">
                          {item.text}
                        </p>
                      </div>
                    </AnimatedSection>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
  )
}

export default About
