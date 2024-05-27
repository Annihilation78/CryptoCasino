import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth.jsx"; // Usa el hook useAuth en lugar de useContext(Auth)
import '../../css/Home.css';
import Navigation from '../Navigation.jsx';
import Header from '../Header.jsx'; 
import Footer from '../Footer.jsx'; 
import { doc, setDoc } from 'firebase/firestore'; // Asegúrate de importar esto
import { db, auth } from "../Firebase.jsx"; // Ajusta la ruta según tu estructura de archivos
import { signInWithEmailAndPassword } from 'firebase/auth';

function Register() {
  const { createUser, user, loading } = useContext(AuthContext); // Usa el hook useAuth
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Aún no se usa, pero lo dejamos aquí
  const navigate = useNavigate();

  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }
  
  if (user) {
    navigate("/");
  }

  const handleUsuario = (e) => { 
    setUsuario(e.target.value); 
    setSubmitted(false); 
  }; 

  const handleEmail = (e) => { 
    setEmail(e.target.value); 
    setSubmitted(false); 
  }; 

  const handlePassword = (e) => { 
    setPassword(e.target.value); 
    setSubmitted(false); 
  }; 

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    if (usuario === "" || email === "" || password === "") { 
      setError(true);
      alert("Error al registrar usuario!");
    } else { 
      // Register the user in Firebase Authentication
      createUser(email, password)
        .then((userCredential) => {
          // User registered successfully, now save the additional data in Firestore
          setDoc(doc(db, 'users', userCredential.user.uid), {
            usuario: usuario,
            email: email
          })
          .then(() => {
            alert("Usuario registrado con éxito!");
            signInWithEmailAndPassword(auth, email, password)
              .then(() => {
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
    }
    e.target.reset(); 
  }; 

  const { register } = useForm();

  return (
    <div className="app">
      <Header title="Quantum Bet Bot"/>
      <main className="py-6" style={{position:"relative", top:"10%", left:"36%"}}>
        <div className="login-container" style={{height:"450px"}}>
          <h2>Crea tu cuenta</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label name="usuario">Usuario:</label>
              <input
                id="usuario"
                type="text"
                {...register("usuario", { required: "Este campo es requerido"})}
                onChange={handleUsuario}/>
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
                onChange={handleEmail}/>
            </div>
            <div className="input-group">
              <label name="password">Contraseña:</label>
              <input
                type="password"
                name="password"
                {...register("password", { required: "Este campo es requerido" })}
                onChange={handlePassword}/>
            </div>
            <div><button type="submit" className="login-btn">Registrarse</button></div>
          </form>
          <div>
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Register;
