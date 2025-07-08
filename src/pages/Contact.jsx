"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

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
      const response = await fetch("http://localhost:3001/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log(data.mensaje)
      alert("Mensaje enviado correctamente")

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      alert("Hubo un error al enviar el mensaje")
    }
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50">
        <div className="container mx-auto px-4 py-8">
          {/* Enhanced Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Ponte en Contacto</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ¿Tienes alguna consulta? Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Tu nombre completo"
                  />
                </div>
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
                      className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="tu@email.com"
                  />
                </div>
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
                      className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                  ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors shadow-lg font-medium"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <Phone className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Teléfono</h3>
                </div>
                <p className="text-gray-600 ml-9">(351) 367-6695</p>
                <p className="text-sm text-gray-500 ml-9">Lunes a Viernes: 9:00 - 17:00</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <Mail className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                </div>
                <p className="text-gray-600 ml-9">dicorcarbones@gmail.com</p>
                <p className="text-sm text-gray-500 ml-9">Respuesta en 24 horas</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <MapPin className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Ubicación</h3>
                </div>
                <p className="text-gray-600 ml-9">Córdoba Capital, Argentina</p>
                <p className="text-sm text-gray-500 ml-9">Envíos a todo el país</p>
              </div>

              {/* Map */}
              <div className="bg-white p-4 rounded-lg shadow-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Nuestra Ubicación</h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6774818180134!2d-64.18815492428765!3d-31.402916095677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2sC%C3%B3rdoba%2C%20Argentina!5e0!3m2!1sen!2sus!4v1699042143600!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
