import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <header className="header">
        <h1>Contacto</h1>
        <nav>
          <ul className="flex space-x-4">
          <li><Link to="/">Inicio</Link></li>
            <li><a href="#" className="text-white">Juegos</a></li>
            <li><a href="#" className="text-white">Promociones</a></li>
            <li><a href="#" className="text-white">Soporte</a></li>
            <li><Link to="/Contact">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <section className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
          <div className="game-list grid grid-cols-2 gap-4">
            <div className="game-item bg-white rounded-lg shadow-md p-4">
              <p className="text-gray-700 mb-4">Puedes ponerte en contacto con nosotros a través de:</p>
              <ul>
                <li>Email: info@quantumbetbot.com</li>    
                <li>Teléfono: +34 629812353</li>
              </ul>
              <button className="btn">Enviar correo</button>
            </div>
          </div>
        </section>
      <footer>
        <p>© 2024 Casino. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Contact;
