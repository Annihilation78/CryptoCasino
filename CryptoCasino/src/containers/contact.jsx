import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Bienvenido a la página de contacto</h1>
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Contact;
