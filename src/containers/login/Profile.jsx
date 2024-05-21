import { useContext } from "react";
import { AuthContext } from "./Auth.jsx";
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import { AuthContext } from "./login/Auth.jsx";

const Profile = () => {
  const { user } = useContext(AuthContext);

  // Render user's profile information
  return (
    <div className="app">
      <Header title="Quantum Bet Bot"/>
      <main className="py-6">
       <div><button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button></div>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://cdn.discordapp.com/attachments/1155067568885862420/1242533944281272381/a1398460338a1f1b30665774cf525181ed8ac5ee.png?ex=664e2f69&is=664cdde9&hm=4d0a6b63566d5f5936ed70e86e48ea27d06625ae0a02164504a4ccfd952464f5&"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
            <p className="py-6">{user?.email}</p>
            <div>
              <li name="home"><Link to="/">¿Listo para jugar?</Link></li>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;