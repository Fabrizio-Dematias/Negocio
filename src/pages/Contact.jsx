"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import AnimatedSection from "../components/AnimatedSection"
import { toast } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("https://dicor-backend.onrender.com/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      toast.success("Mensaje enviado correctamente");

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      toast.error("Hubo un error al enviar el mensaje");
    }
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection animation="fade-in-left">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-green-200 hover-lift">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <AnimatedSection animation="fade-in-up" delay={100}>
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                        Nombre Completo
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-ring"
                          placeholder="Tu nombre completo"
                      />
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-in-up" delay={200}>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                        Correo Electrónico
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-ring"
                          placeholder="tu@email.com"
                      />
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-in-up" delay={300}>
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                        Mensaje
                      </label>
                      <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-ring"
                          placeholder="Cuéntanos en qué podemos ayudarte..."
                      ></textarea>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="bounce-in" delay={400}>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 shadow-lg font-medium hover-lift hover-glow"
                    >
                      Enviar Mensaje
                    </button>
                  </AnimatedSection>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Cards */}
              <AnimatedSection animation="fade-in-right" delay={100}>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-green-200 hover-lift group">
                  <div className="flex items-center mb-4">
                    <Phone className="text-green-500 mr-3 animate-float" size={24} />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                      Teléfono
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-9">(351) 367-6695</p>
                  <div className="flex items-center ml-9 mt-2">
                    <Clock className="text-gray-400 mr-2" size={16} />
                    <p className="text-sm text-gray-500">Lunes a Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-right" delay={200}>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-green-200 hover-lift group">
                  <div className="flex items-center mb-4">
                    <Mail className="text-green-500 mr-3 animate-pulse-slow" size={24} />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                      Email
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-9">dicorcarbones@gmail.com</p>
                  <p className="text-sm text-gray-500 ml-9 mt-2">Respuesta en 24 horas</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-right" delay={300}>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-green-200 hover-lift group">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-green-500 mr-3 animate-float" size={24} />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                      Ubicación
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-9">Córdoba Capital, Argentina</p>
                  <p className="text-sm text-gray-500 ml-9 mt-2">Envíos a todo el país</p>
                </div>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection animation="fade-in-scale" delay={400}>
                <div className="bg-white p-4 rounded-lg shadow-lg border border-green-200 hover-glow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Nuestra Ubicación</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218437.61921264435!2d-64.32704195301514!3d-31.190578823860033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299cd67963db3%3A0x702cfce966f03ff8!2sDICOR%20CARBONES%20Y%20REPUESTOS!5e0!3m2!1ses!2sar!4v1752176850955!5m2!1ses!2sar"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
  )
}
