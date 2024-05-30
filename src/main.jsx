import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useSpring, animated } from 'react-spring';
import './css/Home.css'

const root =  ReactDOM.createRoot(document.getElementById('root'))
const fadeIn = useSpring({
  from: { opacity: 0 },
  to: { opacity: 1 },
  config: { duration: 500 },
});

root.render
(
  <animated.React.StrictMode style={fadeIn}>
    <App />
  </animated.React.StrictMode>,
)
