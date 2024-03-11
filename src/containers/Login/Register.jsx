import React from 'react';

const Register = () => {

  return (
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
            <li><Link to="/login">¿Ya tienes cuenta?</Link></li>
          </div>
        </form>
        </div>
  );
}

export default Register;
