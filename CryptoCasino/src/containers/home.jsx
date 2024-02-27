import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
      <div>
        <h1>Bienvenido a la página de inicio</h1>
        <p>Esta es la página de inicio.</p>
        <Link to="/Contact">
          <button>Contacto</button>
        </Link>
      </div>
    );
  }
  
export default Home;
