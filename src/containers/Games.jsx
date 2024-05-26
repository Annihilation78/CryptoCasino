import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import AudioPlayer from './AudioPlayer.jsx';
import 'react-h5-audio-player/lib/styles.css'; // Importar los estilos CSS de react-h5-audio-player
import audioFile from '../assets/music/ageofwar.mp3';
import { motion } from 'framer-motion';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';

function MenuJuegos() {
  
  return (
    <div className='App'>
      <Header title="Juegos"/>

      <div className="menu"> 
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/BlackJack">
            <motion.img
              className="imagen-juego"
              src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/jack.jpg"
              alt="juego 1"
              whileHover={{ boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.75)" }}
            />
            <div className="descripcion-juego">BlackJack</div>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/Roulette">
            <motion.img
              className="imagen-juego"
              src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Roulette.png"
              alt="juego 2"
              whileHover={{ boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.75)" }}
            />
            <div className="descripcion-juego">Roulette</div>
          </Link>
        </motion.div>
      </div>

      <div style={{
       position: 'fixed',
       bottom: '30px', // Ajusta la distancia desde la parte inferior
       right: '0px', // Ajusta la distancia desde la derecha
       width: '250px', // Ajusta el ancho
       height: '50px', // Ajusta la altura
       zIndex: 1000, // Asegura que el elemento esté por encima de otros elementos
      }}>
        <AudioPlayer
          audioFile={audioFile}
          controls // Agregar controles de reproducción
        />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default MenuJuegos;
