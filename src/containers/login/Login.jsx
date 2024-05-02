import { useState } from "react";
import {Auth} from "./Auth";
import { Link } from "react-router-dom";
import Navigation from '../Navigation.jsx'; 
import Home from "../Home.jsx";
import Header from '../Header.jsx'; 
import Footer from '../Footer.jsx'; 
import '../../css/Home.css';

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login } = Auth();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (usuario === "usuario" && password === "password") {
      await login({ e });
      alert("Bienvenido!");
    } else {
      alert("Usuario y/o contraseña inválido");
    }
  };

  return (
    <div className="app">
    <Header title="Quantum Bet Bot"/>
    <main className="py-6" style={{position:"relative", top:"10%", left:"36%"}}>
      <div className="login-container" style={{height:"450px"}}>
        <h2>Ingresa a tu cuenta</h2>
        <form onSubmit={handleLogin} name="sesion">
          <div className="input-group">
            <label name="usuario">Usuario:</label>
            <input
              name="usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}/>
          </div>
          <div className="input-group">
            <label name="password">Contraseña:</label>
            <input
              type="password"
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
    <Footer />
  </div>
  );
}

export default Login;
