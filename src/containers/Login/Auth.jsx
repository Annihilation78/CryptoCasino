import React, { createContext, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Auth = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Verificar el estado de autenticación al cargar la página
    verifyAuth();
  }, []);

  const login = async (username, password) => {
    try {
      // Lógica de inicio de sesión
      // Aquí deberías hacer una solicitud al backend para iniciar sesión
      // Supongamos que tu backend devuelve un token de sesión si las credenciales son válidas
      // Aquí se simula una respuesta exitosa del backend
      const token = 'fakeToken';
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      history.push('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar errores de inicio de sesión
    }
  };

  const register = async (username, password) => {
    try {
      // Lógica de registro
      // Aquí deberías hacer una solicitud al backend para registrar un nuevo usuario
      // Manejar la respuesta del backend según corresponda
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      // Manejar errores de registro
    }
  };

  const logout = () => {
    // Lógica de cierre de sesión
    // Aquí deberías limpiar el token de sesión del almacenamiento local
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    history.push('/login');
  };

  const verifyAuth = async () => {
    try {
      // Verificar la autenticación con el backend
      // Aquí deberías hacer una solicitud al backend para verificar la autenticación del usuario
      // Supongamos que tu backend tiene una ruta para verificar la autenticación
      const token = localStorage.getItem('token');
      if (token) {
        // Aquí se simula una respuesta exitosa del backend
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error al verificar autenticación:', error);
      // Manejar errores al verificar la autenticación
    }
  };

  return (
    <Auth.Provider value={{ isLoggedIn, login, register, logout }}>
      {children}
    </Auth.Provider>
  );
};
