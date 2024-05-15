import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Importar los estilos CSS de react-h5-audio-player
import audioFile from '../assets/music/ageofwar.mp3';
import { motion } from 'framer-motion';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';

function MenuJuegos() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);

  useEffect(() => {
    const audioDelay = setTimeout(() => {
      setIsPlaying(true);
    }, 2000); // 2000 milisegundos = 2 segundos

    return () => clearTimeout(audioDelay); // Limpiar el temporizador al desmontar el componente
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div className='App'>
      <Link to="/"><Header title="Juegos"/></Link>

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

      <ReactAudioPlayer
        src={audioFile}
        autoPlay={isPlaying}
        volume={volume}
        onEnded={() => setIsPlaying(false)}
        controls // Agregar controles de reproducción
      />
      <Footer />
    </div>
    
  );
}

export default MenuJuegos;