import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import AudioPlayer from './AudioPlayer.jsx';
import 'react-h5-audio-player/lib/styles.css';
import audioFile from '../assets/music/ageofwar.mp3';
import { motion } from 'framer-motion';
import Header from './Header.jsx';
import { useSpring, animated } from 'react-spring';

function MenuJuegos() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={fadeIn} className='App'>
      <Header title="Juegos" />
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
        position: 'absolute',
        bottom: '30px',
        right: '0px',
        width: '250px',
        height: '50px',
        zIndex: 1000,
      }}>
        <AudioPlayer
          audioFile={audioFile}
          controls
        />
      </div>

    </animated.div>
  );
}

export default MenuJuegos;
