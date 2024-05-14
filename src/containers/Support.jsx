import React from 'react';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';
import '../css/Support.css';
import MapComponent from './Map.jsx';

function Support() {
    return (
        <div className="support-container">
            <div className="header-footer-container header">
                <Header title="Soporte"/>
            </div>
            <h1 className="support-title">Página de Soporte</h1>
            <MapComponent />
            <p className="support-text">Bienvenido a nuestra página de soporte. Aquí puedes encontrar ayuda y recursos relacionados con nuestros productos y servicios.</p>
            {/* Puedes agregar más contenido aquí */}
            <div className="header-footer-container footer">
                <Footer />
            </div>
        </div>
    );
}

export default Support;