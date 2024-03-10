import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home.jsx';
import Contact from './containers/Contact.jsx';

function App() {
  return (
      <Router>
        <div>
        <Navigation />
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
          <footer className="footer">
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
      </Router>
      
  );
}

export default App;

