const express = require('express');
const cors = require('cors');
const db = require('./db');
const enviarNotificacion = require('./notificador');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rate Limiting Configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_HOUR = 3; // Max 3 messages per IP per hour
const RATE_LIMIT_STORE = new Map(); // In-memory store (use Redis for production)

/**
 * Get client IP address (handles proxies)
 */
function getClientIp(req) {
    return (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
}

/**
 * Rate limiting middleware using sliding window
 */
function rateLimitMiddleware(req, res, next) {
    const clientIp = getClientIp(req);
    const now = Date.now();
    
    // Initialize or retrieve rate limit data
    let ipData = RATE_LIMIT_STORE.get(clientIp);
    
    if (!ipData) {
        ipData = { requests: [], blocked: false, blockedUntil: 0 };
        RATE_LIMIT_STORE.set(clientIp, ipData);
    }

    // Check if IP is currently blocked
    if (ipData.blocked && ipData.blockedUntil > now) {
        const remainingSeconds = Math.ceil((ipData.blockedUntil - now) / 1000);
        return res.status(429).json({ 
            error: 'Demasiados intentos. Intenta más tarde.',
            retryAfter: remainingSeconds
        });
    }

    // Reset block if time has passed
    if (ipData.blocked && ipData.blockedUntil <= now) {
        ipData.blocked = false;
        ipData.requests = [];
        ipData.blockedUntil = 0;
    }

    // Remove old requests outside the window
    ipData.requests = ipData.requests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);

    // Check if limit exceeded
    if (ipData.requests.length >= MAX_REQUESTS_PER_HOUR) {
        // Block for exponential backoff: 5 minutes on first violation
        const blockDuration = 5 * 60 * 1000;
        ipData.blocked = true;
        ipData.blockedUntil = now + blockDuration;
        
        return res.status(429).json({ 
            error: 'Has superado el límite de mensajes. Por favor, intenta más tarde.',
            retryAfter: Math.ceil(blockDuration / 1000)
        });
    }

    // Record this request
    ipData.requests.push(now);
    
    // Pass remaining requests to response headers
    res.set('X-RateLimit-Limit', MAX_REQUESTS_PER_HOUR);
    res.set('X-RateLimit-Remaining', MAX_REQUESTS_PER_HOUR - ipData.requests.length);
    res.set('X-RateLimit-Reset', new Date(now + RATE_LIMIT_WINDOW).toISOString());
    
    next();
}

app.post('/api/contacto', rateLimitMiddleware, (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    
    const sql = 'INSERT INTO contacto (nombre, correo, mensaje) VALUES (?, ?, ?)';

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

// Cleanup old entries periodically (every hour)
setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of RATE_LIMIT_STORE.entries()) {
        data.requests = data.requests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
        // Remove IP if no recent activity and not blocked
        if (data.requests.length === 0 && !data.blocked) {
            RATE_LIMIT_STORE.delete(ip);
        }
    }
}, 60 * 60 * 1000);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
