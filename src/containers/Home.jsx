import React, { useContext } from 'react';
import useSound from 'use-sound';
import boopSfx from '../assets/urss.mp3';
import beepSfx from '../assets/fri.mp3';
import Header from './Header.jsx';
import { useNavigate, Link } from 'react-router-dom';
import Chat from './Chat.jsx'; // Importa el componente Chatbot desde Chatbot.jsx
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import InteractiveSceneAnya from './InteractiveSceneAnya.jsx';
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
      <Header title="Quantum Bet Bot" />
      <main className="py-6">
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
          <section className="container">
            <h2 className="text-2xl">Promociones</h2>
            <div className="game-list">
              <div className="game-item">
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Promocion1.webp" alt="juego de blackjack" />
              </div>
              <div className="game-item">
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/promocion2.webp" alt="juego de blackjack" />
              </div>
              <InteractiveSceneAnya />
            </div>
          </section>
        </div>
      </main>
      <Chat />


    </div>
  );
}

export default Home;
