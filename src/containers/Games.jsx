import React from 'react';
import { motion } from 'framer-motion'; // Importamos Framer Motion
import '../css/Games.css'; // Importa tu archivo CSS
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx'; 

function MenuJuegos() {
    return (
        <div className="app">
            <header>
                <h1>
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo"/>
                    Juegos
                </h1>
                <Navigation />
            </header>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="/BlackJackGame">
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/jack.jpg" alt="juego 1" />
                    <div className="descripcion-juego">BlackJack</div>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="/Roulette">
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Roulette.png" alt="juego 2" />
                    <div className="descripcion-juego">Roulette</div>
                </Link>
            </motion.div>
            <footer> 
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

export default MenuJuegos;