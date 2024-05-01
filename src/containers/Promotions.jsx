import React from 'react';
import { motion } from 'framer-motion'; // Importamos Framer Motion
import '../css/Games.css'; // Importa tu archivo CSS
import { Link } from 'react-router-dom';

function MenuPromociones() {
    return (
        <div className="menu">
            <motion.div whileHover={{ scale: 1.1 }}>
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/promocion1.webp" alt="juego 1" />    
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/promocion2.webp" alt="juego 2" />
            </motion.div>
        </div>
    );
}

export default MenuPromociones;