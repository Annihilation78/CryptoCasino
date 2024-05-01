import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { useState } from "react"; 
import {Auth} from "./Auth";
import '../css/home.css';
import Navigation from '../Navigation.jsx'; 

function Register() {
  const [usuario, setUsuario] = useState(""); 
  const [email, setEmail] = useState(""); 
  const { login } = Auth();
  const [password, setPassword] = useState(""); 

  const [submitted, setSubmitted] = useState(false); 
  const [error, setError] = useState(false); 

  const handleUsuario = (e) => { 
      setUsuario(e.target.value); 
      setSubmitted(false); 
  }; 
  const handleEmail = (e) => { 
      setEmail(e.target.value); 
      setSubmitted(false); 
  }; 
  const handlePassword = (e) => { 
      setPassword(e.target.value); 
      setSubmitted(false); 
  }; 

  const handleSubmit = async (e) => { 
      e.preventDefault(); 
      if (usuario === "" || email === "" || password === "") { 
          setError(true);
          alert("Error al registrar usuario!");
          <p>Error al registrar usuario!</p>
      } else { 
          localStorage.setItem("usuario",e.usuario);
          localStorage.setItem("password",e.password)
          await login({ e });
          setSubmitted(true); 
          setError(false); 
          alert("Usuario registrado con éxito!");
      } 
  }; 

  const {
      register
    } = useForm();

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
          <h2>Crea tu cuenta</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label name="usuario">Usuario:</label>
              <input
                id="usuario"
                type="text"
                {...register("usuario", { required: "Este campo es requerido"})}
                onChange={handleUsuario}/>
            </div>
            <div className="input-group">
                <label name="email">Correo:</label>
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
                  })}
                  onChange={handleEmail}/>
            </div>
            <div className="input-group">
              <label name="password">Contraseña:</label>
              <input
                type="password"
                name="password"
                {...register("password", { required: "Este campo es requerido" })}
                onChange={handlePassword}/>
            </div>
            <div><button type="submit" className="login-btn">Registrarse</button></div>
          </form>
          <div>
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
          </div>
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
