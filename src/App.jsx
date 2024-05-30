import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home.jsx';
import Contact from './containers/Contact.jsx';
import { ProtectedRoute } from "./containers/ProtectedRoute.jsx";
import Login from './containers/login/Login.jsx';
import Register from './containers/login/Register.jsx';
import Profile from './containers/login/Profile.jsx';
import { AuthProvider } from './containers/login/Auth.jsx';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import Roulette from './containers/games/roulette/Roulette.jsx';
import BlackJack from './containers/games/blackjack/Game.jsx';
import Games from './containers/Games.jsx';
import Promotions from './containers/Promotions.jsx';
import Support from './containers/Support.jsx';

function App() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.Router style={fadeIn}>
      <AuthProvider>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Promotions" element={<Promotions />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/BlackJack" element={<BlackJack />} />
          <Route path="/Roulette" element={<Roulette />} />
          <Route path="/Games" element={
            <ProtectedRoute>
              <Games />
            </ProtectedRoute>
          } />
          <Route path="/Profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </animated.Router>
  );
}

export default App;
