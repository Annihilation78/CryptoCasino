import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth.jsx";
import { Link, useNavigate } from "react-router-dom";
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import { getBalance } from './Register.jsx'; // Asegúrate de importar la función correctamente
import { LogOut } from './Auth.jsx'; // Asegúrate de importar la función de cerrar sesión correctamente

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (user) {
        const userBalance = await getBalance(user.uid);
        setBalance(userBalance);
      }
    };

    fetchBalance();
  }, [user]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert('Cierre de sesión exitoso!');
        navigate("/login"); // Redirect to the login page after logout
      })
      .catch((error) => {
        console.error("Error al cerrar la sesión", error);
      });
  };

  // Render user's profile information
  return (
    <div className="app">
      <Header title="Perfil"/>
      <main className="py-6">
        <div>
          <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
        </div>
        <div>
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://media.discordapp.net/attachments/1155067568885862420/1244730756790485114/image.png?ex=66562d5a&is=6654dbda&hm=66c2f0b153a01a88d1f3961689b90b204835ca1020ccc676a4d74d093ff7f04e&=&format=webp&quality=lossless&width=632&height=676"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{user?.displayName}</h1>
              <p className="py-6">{user?.email}</p>
              {balance !== null ? (
                <p>Tu balance es: {balance}</p>
              ) : (
                <p>Obteniendo balance...</p>
              )}
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
          <div>
            <li name="home"><Link to="/">¿Listo para jugar?</Link></li>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
