// Login.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "./Auth.jsx"; // Usa el hook useAuth en lugar de useContext(Auth)
import Navigation from '../Navigation.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import { auth } from "../Firebase.jsx";
import '../../css/Home.css';
import { useSpring, animated } from 'react-spring';

const Login = () => {
  const { loginUser, loading, user } = useContext(AuthContext); // Usa el hook useAuth
  const navigate = useNavigate();
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  // If the user is already authenticated, redirect to the home page
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
      // Sign in with email and password in firebase auth service
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // The signed-in user info
      const user = userCredential.user;
      alert('Inicio de sesión exitoso!');
      navigate("/Profile");
    } catch (err) {
     // Handle Errors here.
      const errorMessage = err.message;
      const errorCode = err.code;

      setError(true);
      console.log(errorCode)

      switch (errorCode) {
        case "auth/invalid-email":
          setErrorMessage("Este correo es inválido.");
          break;
        case "auth/user-not-found":
          setErrorMessage("Este correo no está registrado.");
          break;
        case "auth/wrong-password":
          setErrorMessage("Contraseña errónea.")
          break;
        default:
          setErrorMessage(errorMessage);
          break;
      }
    }
  };

  return (
    <animated.div style={animationProps}>
    <div className="app">
      <Header title="Quantum Bet Bot"/>
      <main className="py-6" style={{position:"relative", top:"10%", left:"36%"}}>
        <div className="login-container" style={{height:"450px"}}>
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
              <input type="checkbox" name="" id="" style={{position: "relative", right: "-5px"}}/>
            </div>
            <div>
              <li><Link to="/Contact">¿Has olvidado tu contraseña?</Link></li>
            </div>
            <div><button type="submit" className="login-btn">Iniciar sesión</button></div>
            <div>
              <li name="registro"><Link to="/register">¿No tienes cuenta?</Link></li>
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
