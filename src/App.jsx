import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home.jsx';
import Contact from './containers/Contact.jsx';
import Navigation from './containers/Navigation.jsx';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Navigation />
        </Routes>
      </Router>
      
  );
}

export default App;

