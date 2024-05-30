import React, { useContext } from 'react';
import Navigation from './Navigation.jsx';
import { Link } from 'react-router-dom';
import { AuthContext } from "./login/Auth.jsx";
import { useSpring, animated } from 'react-spring';
import '../css/Home.css';

function Header({ title }) {
  const { logOut } = useContext(AuthContext);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
});

  return (
    <animated.header style={fadeIn}>
      <h1 className="title">
        <Link to="/">
          <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo" />
          {title}
        </Link>
      </h1>
      <div><button className="logout-btn" onClick={logOut}>Cerrar sesión</button></div>
      <div><button className="login-btn"><Link to="/Profile">Perfil</Link></button></div>
      <Navigation />
    </animated.header>
  );
}

export default Header;
