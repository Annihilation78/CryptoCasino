import React from "react";
import { useForm } from "react-hook-form";
import Navigation from './Navigation.jsx';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';


import "../css/Contacto.css";

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
      <Link to="/"><Header title="Contacto"/></Link>
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
                <i className="fas fa-phone"></i> +34 911 21 00 90
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
      <Footer />
      
    </div>
  );
}

export default Contact;
