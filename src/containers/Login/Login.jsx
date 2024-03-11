import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {

  return (
        <div class="login-container">
        <h2>Ingresa a tu cuenta</h2>
        <form action="">
          <div class="input-group">
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div class="input-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="Recuérdame">Recuérdame</label>
            <input type="checkbox" name="" id="" />
          </div>
          <Link to="">¿Has olvidado tu contraseña?</Link>
          <button type="submit" class="login-btn">Iniciar sesión</button>
          <div>
            <li><Link to="/register">¿No tienes cuenta?</Link></li>
          </div>
        </form>
        </div>
  );
}

export default Login;
