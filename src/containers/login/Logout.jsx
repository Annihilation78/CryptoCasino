import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth.jsx'; 

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  logOut()
    .then(() => {
      alert('Cierre de sesión exitoso!');
      navigate("/login"); 
    })
    .catch((error) => {
      console.error("Error al cerrar la sesión", error);
    });
};

export default Logout;