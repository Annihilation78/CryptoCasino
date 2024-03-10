import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });

  it('renders headline', () => {
    const headline = screen.getByText(/Bienvenido al Casino/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    const links = ['Inicio', 'Juegos', 'Promociones', 'Soporte', 'Contacto'];
    links.forEach(link => {
      const navLinks = screen.getAllByText(new RegExp(link, 'i'));
      expect(navLinks.length).toBeGreaterThanOrEqual(1);
    });
  });
  

  it('renders login form', () => {
    const usernameInput = screen.getByLabelText(/Usuario:/i);
    const passwordInput = screen.getByLabelText(/Contraseña:/i);
    const loginButton = screen.getByRole('button', { name: /Iniciar sesión/i });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('renders game and promotion sections', () => {
    const gameSection = screen.getAllByText(/Juegos Destacados/i);
    const promotionSection = screen.getAllByText(/Promociones/i);

    expect(gameSection.length).toBe(2);
    expect(promotionSection.length).toBe(2);
  });

  // Aquí puedes agregar más pruebas para verificar el correcto funcionamiento de tu componente
});

