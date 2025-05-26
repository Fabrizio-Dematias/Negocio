import React, { useState } from 'react';

export default function UploadImage() {
    const [file, setFile] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setMensaje('Por favor seleccioná una imagen.');
            return;
        }

        const formData = new FormData();
        formData.append('imagen', file);

        try {
            const res = await fetch('http://localhost:3001/api/imagen', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            setMensaje(`Imagen subida correctamente. URL: ${data.url}`);
            setFile(null);
        } catch (error) {
            console.error(error);
            setMensaje('Hubo un error al subir la imagen.');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Subir Imagen de Producto</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-700"
                />
                <button
                    type="submit"
                    className="bg-[#4a4f3e] text-white px-6 py-2 rounded hover:bg-[#34372c] transition-colors"
                >
                    Subir Imagen
                </button>
            </form>
            {mensaje && (
                <p className="mt-4 text-green-600 font-medium">{mensaje}</p>
            )}
        </div>
    );
}
