const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

function notificarNuevoContacto(nombre, correo, mensaje) {
    const mailOptions = {
        from: `"Notificador Dicor" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFY_TO,
        subject: '📬 Nuevo mensaje desde el formulario',
        text: `Nuevo mensaje de ${nombre} (${correo}):\n\n${mensaje}`
    };

    return transporter.sendMail(mailOptions);
}

module.exports = notificarNuevoContacto;
