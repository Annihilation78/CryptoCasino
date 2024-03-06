import { render, fireEvent } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home', () => {
  it('renders the navigation links correctly', () => {
    const { getByText } = render(<Router><Home /></Router>);
    const homeLink = getByText(/Inicio/i);
    const gamesLink = getByText(/Juegos/i);
    const promotionsLink = getByText(/Promociones/i);
    const supportLink = getByText(/Soporte/i);
    const contactLink = getByText(/Contacto/i);

    expect(homeLink).toBeInTheDocument();
    expect(gamesLink).toBeInTheDocument();
    expect(promotionsLink).toBeInTheDocument();
    expect(supportLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('renders the login form correctly', () => {
    const { getByLabelText, getByText } = render(<Home />);
    const usernameInput = getByLabelText(/Usuario:/i);
    const passwordInput = getByLabelText(/Contraseña:/i);
    const loginButton = getByText(/Iniciar sesión/i);

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('renders the game list correctly', () => {
    const { getByText } = render(<Home />);
    const game1 = getByText(/Juego 1/i);
    const game2 = getByText(/Juego 2/i);

    expect(game1).toBeInTheDocument();
    expect(game2).toBeInTheDocument();
  });

  it('renders the promotion list correctly', () => {
    const { getByText } = render(<Home />);
    const promotion1 = getByText(/Promoción 1/i);
    const promotion2 = getByText(/Promoción 2/i);

    expect(promotion1).toBeInTheDocument();
    expect(promotion2).toBeInTheDocument();
  });
});
