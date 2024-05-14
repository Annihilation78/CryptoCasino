import React from 'react';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';
import '../css/Support.css';
import MapComponent from './Map.jsx';
import { FaTwitter, FaFacebook } from 'react-icons/fa';


function Support() {
    return (
        <div className="support-container">
            <Header title="Soporte"/>
            <p className="support-text">Bienvenido a nuestra página de soporte. Aquí puedes encontrar ayuda y recursos relacionados con nuestros productos y servicios.</p>
            
            <div className="support-div">
                <h1 className="support-title">Preguntas Frequentes (FAQ)</h1>

                <h1 className="support-h1">Cuenta y Registro</h1>
                <p className="support-p1">¿Cómo creo una cuenta?</p>
                <p className="support-p1">¿Cómo restablezco mi contraseña?</p>
                <p className="support-p1">¿Qué hago si olvido mi nombre de usuario?</p>

                <h1 className="support-h1">Depósitos y Retiros</h1>
                <p className="support-p1">¿Cuáles son los métodos de pago disponibles?</p>
                <p className="support-p1">¿Cómo realizo un depósito?</p>
                <p className="support-p1">¿Cómo solicito un retiro?</p>

                <h1 className="support-h1">Bonos y Promociones</h1>
                <p className="support-p1">¿Cómo reclamo un bono?</p>
                <p className="support-p1">¿Cuáles son los términos y condiciones de los bonos?</p>

                <h1 className="support-title">Contacto Directo</h1>

                <h1 className="support-h1">Chat en Vivo</h1>
                <p className="support-p1">Habla en tiempo real con uno de nuestros agentes. Disponible 24/7.</p>

                <h1 className="support-h1">Correo Electrónico</h1>
                <p className="support-p1">Envíanos un correo a info@quantumbetbot.com y responderemos en menos de 24 horas.</p>
                
                <h1 className="support-h1">Teléfono</h1>
                <p className="support-p1">Llámanos al +34 911 21 00 90. Atención disponible de 8 AM a 10 PM (horario local).</p>

                <div><MapComponent/></div>

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
