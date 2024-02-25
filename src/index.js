import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Contact from './containers/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
  
);
root.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
  
);
