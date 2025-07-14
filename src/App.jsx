import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Header from "./components/Header"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/whatsappbuttom"
import PageTransition from "./components/PageTransition"
import "./styles/globals.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Helmet, HelmetProvider } from "react-helmet-async"

function App() {
    return (
        <HelmetProvider>
            <div className="min-h-screen flex flex-col">
                <Helmet>
                    <script type="application/ld+json">{`
                        {
                          "@context": "https://schema.org",
                          "@type": "Organization",
                          "name": "DICOR Carbones",
                          "url": "https://www.dicorcarbones.com.ar",
                          "logo": "https://www.dicorcarbones.com.ar/logo.png"
                        }
                    `}</script>
                </Helmet>

                <Header />
                <main className="flex-grow">
                    <PageTransition>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/productos" element={<Product />} />
                            <Route path="/nosotros" element={<About />} />
                            <Route path="/contacto" element={<Contact />} />
                        </Routes>
                    </PageTransition>
                </main>
                <Footer />
                <WhatsAppButton />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    draggable
                    theme="light"
                />
            </div>
        </HelmetProvider>
    )
}

export default App
