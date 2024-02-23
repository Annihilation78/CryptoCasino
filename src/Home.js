import React from 'react';
import ReactDOM from 'react-dom';
import ChatBot from './Chatbot/Chatbot.js';
import './index.css';

function CasinoHomePage() {
  return (
    <div className="app">
      <header className="header">
        <h1>Bienvenido al Casino</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Juegos de pena</a></li>
            <li><a href="#">Promociones de pena</a></li>
            <li><a href="#">Soporte de putas</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="section">
          <h2>Juegos Destacados</h2>
          <div className="game-list">
            <div className="game-item">
              <img src="imagen_juego_1.jpg" alt="Juego 1" />
              <h3>Juego 1</h3>
              <p>Descripción del Juego asssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
              <button className="btn">¡Jugar Ahora!</button>
            </div>
            <div className="game-item">
              <img src="imagen_juego_2.jpg" alt="Juego 2" />
              <h3>Juego 2</h3>
              <p>Descripción del Juego 2</p>
              <button className="btn">¡Jugar Ahora!</button>
            </div>
            {/* Agregar más juegos aquí */}
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
            {/* Agregar más promociones aquí */}
          </div>
        </section>
        <ChatBot />
      </main>
      <footer>
        <p>© 2024 Casino. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default CasinoHomePage;

