import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="app">
      <header className="header">
        <h1>Bienvenido al Casino</h1>
        <nav className="main-nav">
          <ul className="menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/juegos">Juegos</Link></li>
            <li><Link to="/promociones">Promociones</Link></li>
            <li><Link to="/soporte">Soporte</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>

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
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/jack.jpg" alt="Juego 1" className="w-full" />
                <h3 className="text-xl">Juego 1</h3>
                <p className="text-gray-700">Descripción del Juego</p>
                <button className="btn">¡Jugar Ahora!</button>
              </div>
              <div className="game-item">
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/ruleta.jpg" alt="Juego 2" />
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