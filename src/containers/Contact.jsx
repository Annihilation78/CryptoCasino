import React from 'react';
import { Link } from 'react-router-dom';

import '../css/contacto.css';


function Contact() {
  return (
    <div className="app">
      <header className="header">
        <h1>Contacto</h1>
        <nav className="main-nav">
          <ul className="menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/juegos">Juegos</Link></li>
            <li><Link to="/promociones">Promociones</Link></li>
            <li><Link to="/soporte">Soporte</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>

      </header>
      <section class="contact-section">
        <div class="container mx-auto">
          <h2>Contacta con nosotros</h2>
          <p>¿Tienes preguntas, sugerencias o quieres trabajar con nosotros? ¡No dudes en contactarnos!</p>

          <div class="contact-info">
            <ul>
              <li><i class="fas fa-phone"></i> +34 629812353</li>
              <li><i class="fas fa-envelope"></i> info@quantumbetbot.com</li>
            </ul>
          </div>

          <div class="contact-form">
            <form action="your-email-handler.php" method="post">
              <input type="text" name="nombre" placeholder="Tu nombre" required />
              <input type="email" name="email" placeholder="Tu email" required />
              <textarea name="mensaje" placeholder="Tu mensaje"></textarea>
              <button type="submit" class="btn">Enviar mensaje</button>
            </form>
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