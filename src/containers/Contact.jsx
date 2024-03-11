import React from "react";
import { useForm } from "react-hook-form";
import Navigation from './Navigation.jsx';


import "../css/contacto.css";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("¡Formulario enviado con éxito!");
  };

  return (
    <div className="app">
      
      <header className="header">
      
        <h1>
        <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo"/>
          Contacto
          </h1>
        <Navigation />
      </header>
      
      <section className="contact-section">
        <div className="container mx-auto">
          <h2>Contacta con nosotros</h2>
          <p>
            ¿Tienes preguntas, sugerencias o quieres trabajar con nosotros? ¡No
            dudes en contactarnos!
          </p>

          <div className="contact-info">
            <ul>
              <li>
                <i className="fas fa-phone"></i> +34 629812353
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@quantumbetbot.com
              </li>
            </ul>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                {...register("nombre", { required: "Este campo es requerido" })}
              />
              {errors.nombre && <p>{errors.nombre.message}</p>}

              <input
                type="email"
                name="email"
                placeholder="Tu email"
                {...register("email", {
                  required: "Este campo es requerido",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message:
                      "Por favor, ingresa una dirección de correo válida",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}

              <textarea
                name="mensaje"
                placeholder="Tu mensaje"
                {...register("mensaje", {
                  required: "Este campo es requerido",
                })}
              />
              {errors.mensaje && <p>{errors.mensaje.message}</p>}

              <button type="submit" className="btn">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <footer> 
        <p>© 2024 Casino. Todos los derechos reservados.</p>
        <p>
          <a href="https://jigsaw.w3.org/css-validator/check/referer">
            <img style={{ border: '0', width: '88px', height: '31px' }}
              src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
              alt="¡CSS Válido!" />
          </a>
        </p>
      </footer>
      
    </div>
  );
}

export default Contact;
