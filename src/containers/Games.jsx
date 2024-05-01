import React from 'react';
import { motion } from 'framer-motion'; // Importamos Framer Motion
import './MenuJuegos.css'; // Importa tu archivo CSS

function MenuJuegos() {
    return (
        <div className="menu">
            <motion.div whileHover={{ scale: 1.1 }}>
                <img className="imagen-juego" src="/ruta/a/imagen1.png" alt="juego 1" />
                <button className="boton-juego" onClick={() => console.log('Juego 1 seleccionado')}>
                    Juego 1
                </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <img className="imagen-juego" src="/ruta/a/imagen2.png" alt="juego 2" />
                <button className="boton-juego" onClick={() => console.log('Juego 2 seleccionado')}>
                    Juego 2
                </button>
            </motion.div>
        </div>
    );
}

export default MenuJuegos;