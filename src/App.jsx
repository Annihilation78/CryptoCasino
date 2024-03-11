import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home.jsx';
import Contact from './containers/Contact.jsx';
import Navigation from './containers/Navigation.jsx';
<<<<<<< HEAD
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

=======
import Login from './containers/Login/Login.jsx';
import Register from './containers/Login/Register.jsx';
>>>>>>> 1ddd4cec932a426b0ba57d9781eef76874a12927


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
      
  );
}

export default App;

