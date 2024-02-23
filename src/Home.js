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
<<<<<<< HEAD
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white">Inicio</a></li>
            <li><a href="#" className="text-white">Juegos</a></li>
            <li><a href="#" className="text-white">Promociones</a></li>
            <li><a href="#" className="text-white">Soporte</a></li>
=======
          <ul className="nav-list">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Juegos de pena</a></li>
            <li><a href="#">Promociones de pena</a></li>
            <li><a href="#">Soporte de putas</a></li>
>>>>>>> a6e0267f01270876842d60b5226c2d8e10eef092
          </ul>
        </nav>
      </header>
<<<<<<< HEAD
      <main className="py-6">
        <section className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Juegos Destacados</h2>
          <div className="game-list grid grid-cols-2 gap-4">
            <div className="game-item bg-white rounded-lg shadow-md p-4">
              <img src="imagen_juego_1.jpg" alt="Juego 1" className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold">Juego 1</h3>
              <p className="text-gray-700 mb-4">Descripción del Juego</p>
              <button className="bg-blue-600 text-white rounded-full px-4 py-2">¡Jugar Ahora!</button>
=======
      <main>
        <section className="section">
          <h2>Juegos Destacados</h2>
          <div className="game-list">
            <div className="game-item">
              <img src="imagen_juego_1.jpg" alt="Juego 1" />
              <h3>Juego 1</h3>
              <p>Descripción del Juego asssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
              <button className="btn">¡Jugar Ahora!</button>
>>>>>>> a6e0267f01270876842d60b5226c2d8e10eef092
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

