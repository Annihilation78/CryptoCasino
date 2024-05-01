import React from 'react';
import { motion } from 'framer-motion'; // Importamos Framer Motion
import '../css/Games.css'; // Importa tu archivo CSS
import { Link } from 'react-router-dom';

function MenuJuegos() {
    return (
        <div className="menu">
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
        </div>
    );
}

export default MenuJuegos;