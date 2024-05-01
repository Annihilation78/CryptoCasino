import React from 'react';
import { motion } from 'framer-motion'; // Importamos Framer Motion
import '../css/Games.css'; // Importa tu archivo CSS
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx'; 

function MenuPromociones() {
    return (
        <div className='App'>
            <header>
                <motion.h1 
                className="titulo-promociones"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
>
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo"/>
                Promociones
            </motion.h1>
                <Navigation />
            </header>
            <div className="menu">
                <motion.div whileHover={{ scale: 1.1 }}>
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Promocion1.webp" alt="juego 1" />    
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/promocion2.webp" alt="juego 2" />
                </motion.div>
            </div> {/* Aquí faltaba cerrar la etiqueta */}
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

export default MenuPromociones;