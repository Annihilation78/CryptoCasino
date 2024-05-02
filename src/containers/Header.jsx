import React, { Component } from 'react';
import Navigation from './Navigation.jsx';

function Header({title}){
    return (
        <header>
            <h1 className="title">
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo"/>{title}
            </h1>
            <Navigation />
      </header>
    );
}

export default Header;

function Footer(){
    return (
        <footer> 
          <p>© 2024 Quantum BetBot. Todos los derechos reservados.</p>
          <p>
            <a href="https://jigsaw.w3.org/css-validator/check/referer">
              <img style={{ border: '0', width: '88px', height: '31px' }}
                src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
                alt="¡CSS Válido!" />
            </a>
          </p>
        </footer>


    );
}

export default Footer;