// Login.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "./Auth.jsx"; // Usa el hook useAuth en lugar de useContext(Auth)
import Navigation from '../Navigation.jsx';
import { auth } from "../Firebase.jsx";
import { useSpring, animated } from 'react-spring';

const Login = () => {
  const { loginUser, loading, user } = useContext(AuthContext); // Usa el hook useAuth
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  if (user) {
    navigate("/");
  }
  
  const handleLogin = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await loginUser(
        email,
        password
      );

      const user = userCredential.user;
      alert('Inicio de sesión exitoso!');
      navigate("/Profile");
    } catch (err) {
      alert('Error al iniciar sesión. Verifica tus credenciales e inténtalo de nuevo.');
    }
  };
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });
  return (
    <animated.div style={animationProps}>
    <div className="app">
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
          <form onSubmit={handleSubmit} name="sesion">
            <div className="input-group">
              <label name="email">Correo electrónico:</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={handleLogin}/>
            </div>
            <div className="input-group">
              <label name="password">Contraseña:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleLogin}/>
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

    </div>
    </animated.div>
  );
}

export default Login;
