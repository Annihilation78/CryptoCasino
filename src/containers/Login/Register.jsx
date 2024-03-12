import React from 'react';
import { Link } from "react-router-dom";
import Navigation from '../Navigation.jsx';

const Register = () => {

  return (
        <div className="app">
        <header className="header">
          <h1>
          <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo"/>
            Quantum Bet Bot
          </h1>
          <Navigation />
        </header>
        <div class="login-container">
        <h2>Crea tu cuenta</h2>
        <form action="">
          <div class="input-group">
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div class="input-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div class="input-group">
            <label for="password">Confirma la contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" class="login-btn">Crear cuenta</button>
          <div>
            <li><Link to="/">¿Ya tienes cuenta?</Link></li>
          </div>
        </form>
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

export default Register;
