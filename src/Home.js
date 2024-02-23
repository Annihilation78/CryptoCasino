import React from 'react';
import ReactDOM from 'react-dom';
import ChatBot from './Chatbot/Chatbot.js';

function CasinoHomePage() {
  return (
    <div className="font-sans min-h-screen antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <header className="bg-blue-600 mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Bienvenido al Casino</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white">Inicio</a></li>
            <li><a href="#" className="text-white">Juegos de pena</a></li>
            <li><a href="#" className="text-white">Promociones de pena</a></li>
            <li><a href="#" className="text-white">Soporte de putas</a></li>
          </ul>
        </nav>
      </header>
      <main className="py-6">
        <section className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Juegos Destacados</h2>
          <div className="game-list grid grid-cols-2 gap-4">
            <div className="game-item bg-white rounded-lg shadow-md p-4">
              <img src="imagen_juego_1.jpg" alt="Juego 1" className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold">Juego 1</h3>
              <p className="text-gray-700 mb-4">Descripción del Juego asssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
              <button className="bg-blue-600 text-white rounded-full px-4 py-2">¡Jugar Ahora!</button>
            </div>
            <div className="game-item bg-white rounded-lg shadow-md p-4">
              <img src="imagen_juego_2.jpg" alt="Juego 2" className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold">Juego 2</h3>
              <p className="text-gray-700 mb-4">Descripción del Juego 2</p>
              <button className="bg-blue-600 text-white rounded-full px-4 py-2">¡Jugar Ahora!</button>
            </div>
            {/* Agregar más juegos aquí */}
          </div>
        </section>
        <section className="container mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-6">Promociones</h2>
          <div className="promotion-list grid grid-cols-2 gap-4">
            <div className="promotion-item bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold">Promoción 1</h3>
              <p className="text-gray-700 mb-4">Descripción de la Promoción 1</p>
              <button className="bg-blue-600 text-white rounded-full px-4 py-2">¡Ver Más!</button>
            </div>
            <div className="promotion-item bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold">Promoción 2</h3>
              <p className="text-gray-700 mb-4">Descripción de la Promoción 2</p>
              <button className="bg-blue-600 text-white rounded-full px-4 py-2">¡Ver Más!</button>
            </div>
          </div>
        </section>
        <ChatBot />
      </main>
      <footer className="bg-blue-600 text-center text-white py-3">
        <p>© 2024 Casino. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default CasinoHomePage;
