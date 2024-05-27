import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signOut } from '../Firebase.jsx';
import { AuthContext } from "./Auth.jsx"; // Importa la función de cierre de sesión de Firebase

function Logout(){
  logOut()
    .then(() => {
      alert('Cierre de sesión exitoso!');
      navigate("/login"); // Redirect to the login page after logout
    })
    .catch((error) => {
      console.error("Error al cerrar la sesión", error);
    })
}

export default Logout;