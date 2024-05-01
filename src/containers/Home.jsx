import React from 'react';
import useSound from 'use-sound';
import boopSfx from '../assets/urss.mp3'; 
import beepSfx from '../assets/fri.mp3';
import Navigation from './Navigation.jsx'; 
import {Auth} from "./Login/Auth";
import { Link } from "react-router-dom";
import Chat from './Chat.jsx'; // Importa el componente Chatbot desde Chatbot.jsx

// Resto del código de home.jsx

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';



function Home() {

  const [playBoop, { stop: stopBoop, isPlaying: isBoopPlaying }] = useSound(boopSfx, { loop: true });
  const [playBeep, { stop: stopBeep, isPlaying: isBeepPlaying }] = useSound(beepSfx);
  const urlDelGif = "https://media.tenor.com/9eXlgcljmCAAAAAM/cat-money.gif";

  const handleBoopClick = () => {
    if (isBoopPlaying) {
      stopBoop();
    } else {
      stopBoop();
      playBoop();
    }
  };
  
  const handleBeepClick = () => {
    if (isBeepPlaying) {
      stopBeep();
    } else {
      stopBeep();
      playBeep();
    }
  };
  
  const { logout } = Auth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="app">
      <h1>Quantum Bet Bot</h1>
      <header>
        <h1>
        <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo"/>
        </h1>
        <Navigation />
      </header>
      <main className="py-6">  
      <div><button className="login-btn" onClick={handleLogout}>Cerrar sesión</button></div> 
        <div className="content-container">
          <section className="container">
            <h2 className="text-2xl">Juegos Destacados</h2>
            <div className="game-list">
              <div className="game-item">
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/jack.jpg" alt="juego de blackjack" />   
              </div>
              <div className="game-item">
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Roulette.png" alt="juego de ruleta" />
              </div>
            </div>
          </section>
          <section className="section">
            <h2>Promociones</h2>
            <div className="promotion-list">
              <div className="promotion-item">
                <h3>Promoción 1</h3>
                <p>Descripción de la Promoción 1</p>
                <button className="btn">¡Ver Más!</button>
              </div>
              <div className="promotion-item">
                <h3>Promoción 2</h3>
                <p>Descripción de la Promoción 2</p>
                <button className="btn">¡Ver Más!</button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Chat />
      <footer>
      
      <img src={urlDelGif} alt="Mi Gif" style={{ display: 'block', marginLeft: '0', width: '200px', height: '200px' }} />
      <button onClick={handleBoopClick}>
          {isBoopPlaying ? 'Detener sonido Boop' : 'Reproducir sonido Boop'}
        </button>
        <button onClick={handleBeepClick}>
          {isBeepPlaying ? 'Detener sonido Beep' : 'Reproducir sonido Beep'}
        </button>
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

export default Home;