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
        </div>
      </Router>
      
  );
}

export default App;

