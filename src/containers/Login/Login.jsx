import { useState } from "react";
import {Auth} from "./Auth";
import { Link } from "react-router-dom";
import Navigation from '../Navigation.jsx'; 
import Home from "../Home.jsx";
import Register from "./Register.jsx";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login } = Auth();
  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (usuario === "usuario" && password === "password") {
      <Home/>
      await login({ e });
    } else {
      alert("Usuario y/o contraseña inválido");
    }
  };

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
      <div className="login-container" style={{height:"450px"}}>
        <h2>Ingresa a tu cuenta</h2>
        <form onSubmit={handleLogin} name="sesion">
          <div className="input-group">
            <label name="usuario">Usuario:</label>
            <input
              id="usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}/>
          </div>
          <div className="input-group">
            <label name="password">Contraseña:</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <label name="recuerdame">Recuérdame</label>
            <input type="checkbox" name="" id="" style={{position: "relative", right: "-5px"}}/>
          </div>
          <div>
            <li><Link to="">¿Has olvidado tu contraseña?</Link></li>
          </div>
          <div><button type="submit" className="login-btn" onClick={(e) => handleLogin(e)}>Iniciar sesión</button></div>
          <div>
            <li name="registro"><Link to="/register">¿No tienes cuenta?</Link></li>
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

export default Login;
