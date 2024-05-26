import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signOut } from '../Firebase.jsx'; // Importa la función de cierre de sesión de Firebase
import { IconButton } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Usa la función de cierre de sesión de Firebase
      alert('¡Sesión cerrada con éxito!');
      navigate("/login");
      // Redirige a la página de inicio de sesión o a donde sea necesario después de cerrar la sesión
    } catch (error) {
      console.error('Error al cerrar la sesión:', error);
      alert('Error al cerrar la sesión. Por favor, inténtalo de nuevo.');
    }
  };


  return (
    <IconButton style={buttonStyle} onClick={handleLogout}>
      <PowerSettingsNewIcon />
    </IconButton>
  );
}

export default Logout;
