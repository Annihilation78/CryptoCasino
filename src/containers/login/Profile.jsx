import { useContext } from "react";
import { AuthContext } from "./Auth.jsx";
import { Link } from 'react-router-dom';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

const Profile = () => {
  const { user } = useContext(AuthContext);

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
       <div><button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button></div>
         <div>
         <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
            <p className="py-6">{user?.email}</p>
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