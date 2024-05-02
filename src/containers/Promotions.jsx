import React from 'react';
import { motion } from 'framer-motion'; 
import '../css/Promotions.css'; 
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Tilt from 'react-parallax-tilt'; 
import Footer from './Footer.jsx';
 

function MenuPromociones() {
    return (
        <div className='App'>
            <header>
                <motion.h1 className="titulo-promociones"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo"/>
                Promociones
            </motion.h1>
                <Navigation />
            </header>
            <div className="menu">
                <Tilt>
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Promocion1.webp" alt="juego 1" />   
                    </Tilt> 
                    <Tilt>
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/promocion2.webp" alt="juego 2" />
                    </Tilt> 
            </div> {/* Aquí faltaba cerrar la etiqueta */}
            <Footer />
        </div>
    );
}

export default MenuPromociones;