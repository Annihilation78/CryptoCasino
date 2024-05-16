import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Auth } from "./Auth.jsx";
import '../../css/Home.css';
import Navigation from '../Navigation.jsx';
import Header from '../Header.jsx'; 
import Footer from '../Footer.jsx'; 

function Register() {
  const { createUser, user } = useContext(Auth);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

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
                const user = userCredential.user;
                signInWithEmailAndPassword(auth, email, password);
                navigate("/");
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
}; 

  const {
      register
    } = useForm();

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
                      message:
                        "Por favor, ingresa una dirección de correo válida",
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

