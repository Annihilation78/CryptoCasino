// Login.jsx
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "./Auth.jsx"; // Usa el hook useAuth en lugar de useContext(Auth)
import Navigation from '../Navigation.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import '../../css/Home.css';
import { useSpring, animated } from 'react-spring';

// Definición de propiedades iniciales para la animación
const initialAnimationProps = {
  opacity: 0,
  transform: 'translate3d(0, -40px, 0)',
  width: '0%',
};

// Definición de propiedades finales para la animación
const finalAnimationProps = {
  opacity: 1,
  transform: 'translate3d(0, 0px, 0)',
  width: '100%',
};

// Configuración de la animación
const animationConfig = {
  tension: 210,
  friction: 20,
};

const Login = () => {
  const { loginUser, loading, user } = useContext(AuthContext); // Usa el hook useAuth
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const animationProps = useSpring({
    from: initialAnimationProps,
    to: finalAnimationProps,
    config: animationConfig,
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password); // Usa la autenticación de Firebase
      alert('Inicio de sesión exitoso!');
      navigate("/Profile");
      // Redirigir a la página principal o a donde sea necesario después del inicio de sesión
    } catch (error) {
      alert('Error al iniciar sesión. Verifica tus credenciales e inténtalo de nuevo.');
    }
  };

  return (
    <animated.div style={animationProps}>
      <div className="app">
        <Header title="Quantum Bet Bot" />
        <main className="py-6" style={{ position: "relative", top: "10%", left: "36%" }}>
          <div className="login-container" style={{ height: "450px" }}>
            <h2>Ingresa a tu cuenta</h2>
            <form onSubmit={handleLogin} name="sesion">
              <div className="input-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Contraseña:</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="recuerdame">Recuérdame</label>
                <input type="checkbox" id="recuerdame" style={{ position: "relative", right: "-5px" }} />
              </div>
              <div className="input-group">
                <li><Link to="/Contact">¿Has olvidado tu contraseña?</Link></li>
              </div>
              <div className="input-group">
                <button type="submit" className="login-btn">Iniciar sesión</button>
              </div>
              <div className="input-group">
                <li><Link to="/register">¿No tienes cuenta?</Link></li>
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </animated.div>
  );
}

export default Login;
