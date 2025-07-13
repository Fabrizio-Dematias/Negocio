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

function App() {
    return (
        <div className="min-h-screen flex flex-col">
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
    )
}

export default App
