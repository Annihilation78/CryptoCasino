import React, { Component } from 'react';
import Navigation from './Navigation.jsx';

function Header({title}){
    return (
      <header>
            <h1 className="title">
                <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo"/>{title}
            </h1>
            <Navigation />
      </header>
    );
}

export default Header;