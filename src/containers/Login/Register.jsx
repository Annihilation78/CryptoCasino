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
        <main className="py-6" style={{position:"absolute", top:"10%", left:"36%"}}>
          <div class="login-container" style={{height:"400px"}}>
            <h2>Crea tu cuenta</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="input-group">
                <label for="usuario">Usuario:</label>
                <input
                  type="text"
                  name="usuario"
                  {...register("usuario", { required: "Este campo es requerido" })}/>
                  {errors.nombre && <p>{errors.nombre.message}</p>}
              </div>
              <div class="input-group">
                <label for="email">Correo:</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message:
                        "Por favor, ingresa una dirección de correo válida",
                    },
                  })}/>
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div class="input-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <div>
                <label htmlFor="Recuérdame">Recuérdame</label>
                <input type="checkbox" name="" id="" style={{position: "relative", right: "-5px"}}/>
              </div>
              <button type="submit" class="login-btn">Crear cuenta</button>
              <div>
                <li><Link to="/">¿Ya tienes cuenta?</Link></li>
              </div>
            </form>
          </div>
        </main>
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
