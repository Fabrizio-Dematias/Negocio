const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

app.post('/api/imagen', upload.single('imagen'), (req, res) => {
    const nombreOriginal = req.file.originalname;
    const ruta = `/uploads/${req.file.filename}`;

    const sql = 'INSERT INTO imagenes (nombre_original, ruta) VALUES (?, ?)';
    db.query(sql, [nombreOriginal, ruta], (err, result) => {
        if (err) {
            console.error('Error al guardar en MySQL:', err);
            return res.status(500).json({ error: 'Error en base de datos' });
        }
        res.json({ mensaje: 'Imagen subida y guardada', url: ruta });
    });
});

app.post('/api/contacto', (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'INSERT INTO contacto (nombre, correo, mensaje) VALUES (?, ?, ?)';

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error al guardar contacto:', err);
            return res.status(500).json({ error: 'Error en base de datos' });
        }
        res.json({ mensaje: 'Formulario guardado correctamente' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
