import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home.jsx';
import Contact from './containers/Contact.jsx';
import Navigation from './containers/Navigation.jsx';


function App() {
  return (
      <Router>
        <Navigation />
      </Router>
      
  );
}

export default App;

