import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/home.css'

const root =  ReactDOM.createRoot(document.getElementById('root'))
root.render
(
  <React.StrictMode>
    <BrowserRouter basename={"/CryptoCasino/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
