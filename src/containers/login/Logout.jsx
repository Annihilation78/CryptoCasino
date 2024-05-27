import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth.jsx'; // Importa la función de cierre de sesión de Firebase

const Logout = () => {
  export const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  logOut()
    .then(() => {
      alert('Cierre de sesión exitoso!');
      navigate("/login"); // Redirect to the login page after logout
    })
    .catch((error) => {
      console.error("Error al cerrar la sesión", error);
    });
    return (
      <logOut />
    );
};

export default Logout;