import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home.jsx';
import Contact from './containers/Contact.jsx';
import { ProtectedRoute } from "./containers/ProtectedRoute.jsx";
import Login from './containers/Login/Login.jsx';
import Register from './containers/Login/Register.jsx';
import {Auth, AuthProvider} from './containers/Login/Auth.jsx';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import Roulette from './containers/games/roulette/Roulette.jsx';
import BlackJack from './containers/games/roulette/Game.jsx';
import Games from './containers/Games.jsx';
import Promotions from './containers/Promotions.jsx';


function App() {
  return (
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Games" element={<Games />} />
            <Route path="/Promotions" element={<Promotions />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/BlackJack" element={<Game />} />
            <Route path="/Roulette" element={<Roulette />} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
      
  );
}

export default App;

