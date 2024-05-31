import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "./Auth.jsx";
import Navigation from '../Navigation.jsx';
import { auth } from "../Firebase.jsx";
import { useSpring, animated } from 'react-spring';

const Login = () => {
  const { loginUser, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)', width: '0%' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)', width: '100%' },
    config: { tension: 210, friction: 20 }
  });
  

  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try{
      await loginUser(email, password)
      .then((result) => {
        alert('Inicio de sesión exitoso!');
        navigate("/Profile");
      }) 
    }
    catch (err) {
      alert('Error al iniciar sesión. Verifica tus credenciales e inténtalo de nuevo.');
    }
    e.target.reset();
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });
  
  return (
    <animated.div style={fadeIn} className="app">
      <animated.div style={animationProps}>
        <header>
          <h1 className="title">
            <Link to="/">
              <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo" />
              Quantum Bet Bot
            </Link>
          </h1>
          <Navigation />
        </header>
        <main className="py-6">
          <div className="login-container">
            <h2>Ingresa a tu cuenta</h2>
            <form onSubmit={handleFormSubmit} name="sesion">
              <div className="input-group">
                <label name="email">Correo electrónico:</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"/>
              </div>
              <div className="input-group">
                <label name="password">Contraseña:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"/>
              </div>
              <div>
                <label name="recuerdame">Recuérdame</label>
                <input type="checkbox" className="box"/>
              </div>
              <div>
                <li><Link to="/Contact" style={{color:"darkorchid"}}>¿Has olvidado tu contraseña?</Link></li>
              </div>
              <div><button type="submit" className="login-btn">Iniciar sesión</button></div>
              <div>
                <li name="registro"><Link to="/register" style={{color:"darkorchid"}}>¿No tienes cuenta?</Link></li>
              </div>
            </form>
          </div>
        </main>
      </animated.div>
    </animated.div>
  );
}

export default Login;
