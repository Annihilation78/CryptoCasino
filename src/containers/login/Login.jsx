import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth,signInWithEmailAndPassword } from '../Firebase.jsx'; // Importa la autenticación de Firebase
import Navigation from '../Navigation.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import '../../css/Home.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Usa la autenticación de Firebase
      alert('Inicio de sesión exitoso!');
      // Redirigir a la página principal o a donde sea necesario después del inicio de sesión
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Verifica tus credenciales e inténtalo de nuevo.');
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
              <label name="email">Correo electrónico:</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
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
            <div><button type="submit" className="login-btn">Iniciar sesión</button></div>
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