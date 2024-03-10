import React from 'react';
import useSound from 'use-sound';
import boopSfx from '../assets/urss.mp3'; 
import beepSfx from '../assets/fri.mp3';
import Navigation from './Navigation.jsx'; 


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
  
  


  return (
    <div className="app">
      <header className="header">
      <img src="https://github.com/Annihilation78/CryptoCasino/src/assets/Logo.png" alt="Logo" class="logo"/>
        <h1>
          Quantum Bet Bot
          <Navigation />
        </h1>
      </header>
      <main className="py-6">  
        <div class="login-container">
          <h2>Ingresa a tu cuenta</h2>
          <form>
            <div class="input-group">
              <label for="username">Usuario:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div class="input-group">
              <label for="password">Contraseña:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" class="login-btn">Iniciar sesión</button>
          </form>
          <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
        </div>
        <div class="content-container">
          <section className="container">
            <h2 className="text-2xl">Juegos Destacados</h2>
            <div className="game-list">
              <div className="game-item">
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/jack.jpg" alt="juego de blackjack" />
                <h3 className="text-xl">Juego 1</h3>
                <p className="text-gray-700">Descripción del Juego</p>
                <button className="btn">¡Jugar Ahora!</button>
              </div>
              <div className="game-item">
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/ruleta.jpg" alt="juego de ruleta" />
                <h3>Juego 2</h3>
                <p>Descripción del Juego 2</p>
                <button className="btn">¡Jugar Ahora!</button>
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
      <div class="chatbot-container">
        <p>chatbot</p>
      </div>
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