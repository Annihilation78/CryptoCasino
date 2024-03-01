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
        {/* ... (resto de tu código) */}
      </header>
      <section class="contact-section">
        <div class="container mx-auto">
          {/* ... (resto de tu código) */}

          <div class="contact-form">
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

              <button type="submit" class="btn">Enviar mensaje</button>
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
