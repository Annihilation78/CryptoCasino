import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import '../css/contacto.css';


function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('¡Formulario enviado con éxito!');
  };

  return (
    <div className="app">
      <header className="header">
      <h1>Contacto</h1>
        <nav className="main-nav">
          <ul className="menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/juegos">Juegos</Link></li>
            <li><Link to="/promociones">Promociones</Link></li>
            <li><Link to="/soporte">Soporte</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <section className="contact-section">
        <div className="container mx-auto">
          <h2>Contacta con nosotros</h2>
          <p>¿Tienes preguntas, sugerencias o quieres trabajar con nosotros? ¡No dudes en contactarnos!</p>

          <div className="contact-info">
            <ul>
              <li><i className="fas fa-phone"></i> +34 629812353</li>
              <li><i className="fas fa-envelope"></i> info@quantumbetbot.com</li>
            </ul>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                {...register('nombre', { required: "Este campo es requerido" })}
              />
              {errors.nombre && <p>{errors.nombre.message}</p>}

              <input
                type="email"
                name="email"
                placeholder="Tu email"
                {...register('email', {
                  required: "Este campo es requerido",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Por favor, ingresa una dirección de correo válida"
                  }
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}

              <textarea
                name="mensaje"
                placeholder="Tu mensaje"
                {...register('mensaje', { required: "Este campo es requerido" })}
              />
              {errors.mensaje && <p>{errors.mensaje.message}</p>}

              <button type="submit" className="btn">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2024 Casino. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Contact;

