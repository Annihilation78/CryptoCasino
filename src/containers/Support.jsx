import React from 'react';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';
import '../css/Support.css';

function Support() {
    return (
        <div className="support-container">
            <div className="header-footer-container header">
                <Header title="Soporte"/>
            </div>
            <h1 className="support-title">Bienvenido a nuestra página de soporte.</h1>
            <p className="support-text">Nuestro objetivo es proporcionarte la mejor experiencia posible. Si tienes alguna pregunta o necesitas asistencia, estamos aquí para ayudarte las 24 horas del día, los 7 días de la semana.</p>
            <h1 className="support-title">Preguntas Frequentes (FAQ)</h1>

            <h1 className="support-h1">Cuenta y Registro</h1>
            <p>¿Cómo creo una cuenta?</p>
            <p>¿Cómo restablezco mi contraseña?</p>
            <p>¿Qué hago si olvido mi nombre de usuario?</p>

            <h1 className="support-h1">Depósitos y Retiros</h1>
            <p>¿Cuáles son los métodos de pago disponibles?</p>
            <p>¿Cómo realizo un depósito?</p>
            <p>¿Cómo solicito un retiro?</p>

            <h1 className="support-h1">Bonos y Promociones</h1>
            <p>¿Cómo reclamo un bono?</p>
            <p>¿Cuáles son los términos y condiciones de los bonos?</p>

            <h1 className="support-title">Contacto Directo</h1>

            <h1 className="support-h1">Chat en Vivo</h1>
            <p>Habla en tiempo real con uno de nuestros agentes. Disponible 24/7.</p>

            <h1 className="support-h1">Correo Electrónico</h1>
            <p>Envíanos un correo a info@quantumbetbot.com y responderemos en menos de 24 horas.</p>
            
            <h1 className="support-h1">Teléfono</h1>
            <p>Llámanos al +34 911 21 00 90. Atención disponible de 8 AM a 10 PM (horario local).</p>

            <div className="header-footer-container footer">
                <Footer />
            </div>
        </div>
    );
}

export default Support;