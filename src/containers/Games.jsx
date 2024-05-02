import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Importar los estilos CSS de react-h5-audio-player
import audioFile from '../assets/music/promociones.mp3';
import { motion } from 'framer-motion';

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
      <header>
        <h1 className='title'>
          <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo"/>
          Juegos
        </h1>
        <Navigation />
      </header>

      <div className="menu"> 
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/BlackJack">
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

      <ReactAudioPlayer
        src={audioFile}
        autoPlay={isPlaying}
        volume={volume}
        onEnded={() => setIsPlaying(false)}
        controls // Agregar controles de reproducción
      />

      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pausar' : 'Reproducir'}
      </button>
      
      <input
        type='range'
        min='0'
        max='1'
        step='0.1'
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
      />
    </div>
  );
}

export default MenuJuegos;