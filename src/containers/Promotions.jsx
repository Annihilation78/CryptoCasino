import React from 'react';
import { motion } from 'framer-motion'; 
import '../css/Promotions.css'; 
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Tilt from 'react-parallax-tilt'; 
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';
 

function MenuPromociones() {
    return (
        <div className='App'>
            <Header title="Promociones"/>
            <div className="menu">
                <Tilt>
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Promocion1.webp" alt="juego 1" />   
                    <p className="imagen-juego-text">Deposita 100 y gana 20 fichas extra.Totalmente garantizado</p>
                    </Tilt> 
                    <Tilt>
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/promocion2.webp" alt="juego 2" />
                    <p className="imagen-juego-text">Deposita 100 y gana 20 fichas extra.Totalmente garantizado</p>
                    </Tilt> 
                    <Tilt>
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/promocion3" alt="juego 3" />
                    <p className="imagen-juego-text">Deposita 100 y gana 20 fichas extra.Totalmente garantizado</p>
                    </Tilt> 
                    <Tilt>
                    <img className="imagen-juego" src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/promocion4.jpg" alt="juego 3" />
                    <p className="imagen-juego-text">Deposita 100 y gana 20 fichas extra.Totalmente garantizado</p>
                    </Tilt> 
            </div> {/* Aquí faltaba cerrar la etiqueta */}
            <Footer />
        </div>
    );
}

export default MenuPromociones;