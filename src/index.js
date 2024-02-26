import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Contact from './containers/Contact';
import { createBrowserRouter, RouterProvider, BrowserRouter, Router, Route, Routes, Link} from "react-router-dom";
import "./css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "home",
    element: <Home/>
  },
  {
    path: "contact",
    element: <Contact/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
);