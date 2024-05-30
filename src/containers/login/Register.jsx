import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth.jsx"; // Usa el hook useAuth en lugar de useContext(Auth)
import '../../css/Home.css';
import Navigation from '../Navigation.jsx';
import Header from '../Header.jsx'; 
import Footer from '../Footer.jsx'; 
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Asegúrate de importar esto
import { db, auth } from "../Firebase.jsx"; // Ajusta la ruta según tu estructura de archivos
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useSpring, animated } from 'react-spring';


export const getBalance = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const balance = userData.balance;
      return balance;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el balance: ", error);
    return null;
  }
};

function Register() {
  const { createUser, user, loading } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [balance, setBalance] = useState(null); // Nuevo estado para el balance
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleFormSubmit = async (e) => { 
    e.preventDefault(); 
    createUser(email, password)
      .then((result) => {
          const userId = result.user.uid;
          updateProfile(result.user, {
            displayName: usuario,
          });
          setDoc(doc(db, 'users', userId), {
            usuario: usuario,
            email: email,
            balance: 40
          })
          .then(async () => {
            alert("Usuario registrado con éxito!");
            signInWithEmailAndPassword(auth, email, password)
              .then(async () => {
                const userBalance = await getBalance(userId); // Obtener el balance después de iniciar sesión
                setBalance(userBalance); // Actualizar el estado con el balance
                handleOnPurchase(userId);
                navigate("/Profile");
              })
              .catch((error) => {
                console.error("Error al iniciar sesión después del registro: ", error);
              });
            setSubmitted(true); 
            setError(false); 
          })
          .catch((error) => {
            console.error("Error al guardar los datos del usuario: ", error);
          });
        })
        .catch((error) => {
          console.error("Error al registrar el usuario: ", error);
        });
    e.target.reset(); 
  }; 
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const { register } = useForm();

  return (
    <animated.div style={fadeIn} className="app">
      <Header title="Quantum Bet Bot"/>
      <main className="py-6">
        <div className="login-container" style={{height:"450px"}}>
          <h2>Crea tu cuenta</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label name="usuario">Usuario:</label>
              <input
                id="usuario"
                type="text"
                {...register("usuario", { required: "Este campo es requerido"})}
                placeholder="Usuario"/>
            </div>
            <div className="input-group">
              <label name="email">Correo:</label>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Este campo es requerido",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Por favor, ingresa una dirección de correo válida",
                  },
                })}
                placeholder="Email"/>
            </div>
            <div className="input-group">
              <label name="password">Contraseña:</label>
              <input
                type="password"
                name="password"
                {...register("password", { required: "Este campo es requerido" })}
                placeholder="Password"/>
            </div>
            <div><button type="submit" className="login-btn">Registrarse</button></div>
          </form>
          <div>
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
          </div>
          {balance !== null && <p>Tu balance es: {balance}</p>} {/* Mostrar el balance si está disponible */}
        </div>
      </main>
      <Footer />
    </animated.div>
  );
}

export default Register;