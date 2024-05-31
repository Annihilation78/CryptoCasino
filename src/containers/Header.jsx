import React, { useContext } from 'react';
import Navigation from './Navigation.jsx';
import { Link } from 'react-router-dom';
import { AuthContext } from "./login/Auth.jsx";

function Header({ title }) {
  const { logOut } = useContext(AuthContext);
  return (
    <header>
      <h1 className="title">
        <Link to="/">
          <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo" />
          {title}
        </Link>
      </h1>
      <div><button className="logout-btn" onClick={logOut}>Cerrar sesión</button></div>
      <div><button className="profile-btn"><Link to="/Profile">Perfil</Link></button></div>
      <Navigation />
    </header>
  );
}

export default Header;
