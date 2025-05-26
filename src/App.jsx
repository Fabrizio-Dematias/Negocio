import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';
import UploadImage from './pages/UploadImage';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow ">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Product />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/subir-imagen" element={<UploadImage />} /> {/* ← esta es la nueva */}
          </Routes>

      </main>
      <Footer />
    </div>
  );
}

export default App;