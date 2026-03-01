const express = require('express');
const cors = require('cors');
const db = require('./db');
const enviarNotificacion = require('./notificador');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contacto', (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'INSERT INTO contacto (nombre, correo, mensaje) VALUES ($1, $2, $3) RETURNING id';

    db.query(sql, [name, email, message], async (err, result) => {
        if (err) {
            console.error('Error al guardar contacto:', err);
            return res.status(500).json({ error: 'Error en base de datos' });
        }

        try {
            await enviarNotificacion(name, email, message);
            console.log(`📩 Notificación enviada a ${process.env.EMAIL_TO}`);
        } catch (error) {
            console.error('❌ Error al enviar notificación:', error);
        }

        res.json({ mensaje: 'Formulario guardado correctamente' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});