import React from 'react';
import { BrowserRouter, Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Home';
import Contact from './containers/Contact';

export default function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}
