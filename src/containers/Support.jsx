import React from 'react';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';
import '../css/Support.css';
import MapComponent from './Map.jsx';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

function Support() {
    return (
        <div className="support-container">
            <Header title="Soporte" />
            <p className="support-text">
                Bienvenido a nuestra página de soporte. Aquí puedes encontrar ayuda y recursos relacionados con nuestros productos y servicios.
            </p>

            <div className="support-div">
                <h1 className="support-title">Preguntas Frequentes (FAQ)</h1>

                <div className="support-section">
                    <div className="support-list">Cuenta y Registro</div>
                    <div className="support-item">¿Cómo creo una cuenta?</div>
                    <div className="support-item">¿Cómo restablezco mi contraseña?</div>
                    <div className="support-item">¿Qué hago si olvido mi nombre de usuario?</div>
                </div>

                <div className="support-section">
                    <div className="support-list">Depósitos y Retiros</div>
                    <div className="support-item">¿Cuáles son los métodos de pago disponibles?</div>
                    <div className="support-item">¿Cómo realizo un depósito?</div>
                    <div className="support-item">¿Cómo solicito un retiro?</div>
                </div>

                <div className="support-section">
                    <div className="support-list">Bonos y Promociones</div>
                    <div className="support-item">¿Cómo reclamo un bono?</div>
                    <div className="support-item">¿Cuáles son los términos y condiciones de los bonos?</div>
                </div>

                <h1 className="support-title">Contacto Directo</h1>

                <div className="support-section">
                    <div className="support-list">Chat en Vivo</div>
                    <div className="support-item">Habla en tiempo real con uno de nuestros agentes. Disponible 24/7.</div>
                </div>

                <div className="support-section">
                    <div className="support-list">Correo Electrónico</div>
                    <div className="support-item">Envíanos un correo a info@quantumbetbot.com y responderemos en menos de 24 horas.</div>
                </div>

                <div className="support-section">
                    <div className="support-list">Teléfono</div>
                    <div className="support-item">Llámanos al +34 911 21 00 90. Atención disponible de 8 AM a 10 PM (horario local).</div>
                </div>

                <div><MapComponent /></div>

                <div className="social-icons">
                    <FaTwitter />
                    <FaFacebook />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Support;
