import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Formulario from './containers/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Contact">
          <Formulario />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
