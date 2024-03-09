import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('renders headline', () => {
    render(<Home header="Bienvenido al Casino" />);

    screen.debug();

    // check if App components renders headline
  });
});