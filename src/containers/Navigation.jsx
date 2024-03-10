import { Link } from "react-router-dom";
import React, { Component } from 'react';

function Navigation(){
    return (
        <div className="app">
          <header className="header">
            <nav className="main-nav">
            <ul className="menu">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/juegos">Juegos</Link>
                </li>
                <li>
                    <Link to="/promociones">Promociones</Link>
                </li>
                <li>
                    <Link to="/soporte">Soporte</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
            </nav>
          </header>
          <footer className="footer">
            <p>© 2024 Casino. Todos los derechos reservados.</p>
            <p>
              <a href="https://jigsaw.w3.org/css-validator/check/referer">
                <img style={{ border: '0', width: '88px', height: '31px' }}
                  src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
                  alt="¡CSS Válido!" />
              </a>
            </p>
          </footer>
        </div>

    );
}

export default Navigation;
