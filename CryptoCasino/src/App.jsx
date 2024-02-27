import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import Formulario from './containers/contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/formulario">
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
