const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function notificarNuevoContacto(nombre, correo, mensaje) {
    await resend.emails.send({
        from: 'Notificador Dicor <onboarding@resend.dev>',
        to: process.env.EMAIL_TO,
        subject: '📬 Nuevo mensaje desde el formulario de la pagina',
        text: `Nuevo mensaje de ${nombre} (${correo}):\n\n${mensaje}`
    });
}

module.exports = notificarNuevoContacto;
RESEND_API_KEY=re_d7gmboF8_M5v8MAkpcoihDifWD12y1WtP