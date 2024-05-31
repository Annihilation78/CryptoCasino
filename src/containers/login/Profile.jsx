import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth.jsx";
import { Link } from "react-router-dom";
import Navigation from '../Navigation.jsx';
import { useSpring, animated } from 'react-spring';
import { getBalance } from './Register.jsx';


const Profile = () => {
  const [balance, setBalance] = useState(null);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    const fetchBalance = async () => {
      if (user) {
        const userBalance = await getBalance(user.uid);
        setBalance(userBalance);
      }
    };

    fetchBalance();
  }, [user]);
  
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={fadeIn} className="app">
      <header>
        <h1 className="title">
          <Link to="/">
            <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo" />
            Perfil
          </Link>
        </h1>
        <div><button className="logout-btn" onClick={logOut}>Cerrar sesión</button></div>
        <Navigation />
      </header>
      <main className="py-6">
        <div>
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://media.discordapp.net/attachments/1155067568885862420/1244730756790485114/image.png?ex=66562d5a&is=6654dbda&hm=66c2f0b153a01a88d1f3961689b90b204835ca1020ccc676a4d74d093ff7f04e&=&format=webp&quality=lossless&width=632&height=676"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <p style={{color:"white"}}>¡Bienvenido {user?.displayName}!</p>
              <p style={{color:"white"}}>Tu correo es: {user?.email}</p>
              {balance !== null ? (
                <p style={{color:"white"}}>Tu balance es: {balance}</p>
              ) : (
                <p style={{color:"white"}}>Obteniendo balance...</p>
              )}
              <button className="btn btn-primary"><Link to="/">¿Listo para jugar?</Link></button>
            </div>
          </div>
        </div>
      </main>

    </animated.div>
  );
};

export default Profile;
