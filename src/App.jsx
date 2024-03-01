import React from 'react';
import { BrowserRouter as BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home.jsx';
import Contact from './containers/Contact.jsx';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/CryptoCasino/'}>
      <Router>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;

