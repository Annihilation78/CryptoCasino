import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  it('renders headline', () => {
    render(
      <Router>
        <Home header="Bienvenido al Casino" />
      </Router>
    );

    screen.debug();

    // check if App components renders headline
  });
});
