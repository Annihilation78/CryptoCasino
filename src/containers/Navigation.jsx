import { Link } from "react-router-dom";
import React, { Component } from 'react';

function Navigation(){
    return (
        <nav className="main-nav">
          <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/juegos">Juegos</Link>
            </li>
            <li>
                <Link to="/promociones">Promociones</Link>
            </li>
            <li>
                <Link to="/soporte">Soporte</Link>
            </li>
            <li>
                <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>


    );
}

export default Navigation;
