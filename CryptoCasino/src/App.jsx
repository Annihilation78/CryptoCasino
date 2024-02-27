import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/home.jsx';
import Contact from './containers/Contact.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

