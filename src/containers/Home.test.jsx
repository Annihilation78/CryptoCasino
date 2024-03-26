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
    const headline = screen.getByText(/Quantum Bet Bot/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    const links = ['Inicio', 'Juegos', 'Promociones', 'Soporte', 'Contacto'];
    links.forEach(link => {
      const navLinks = screen.getAllByText(new RegExp(link, 'i'));
      expect(navLinks.length).toBeGreaterThanOrEqual(1);
    });
  });

 
/*  it('renders login form', () => {
    const usernameInput = screen.getByLabelText(/Usuario:/i);
    const passwordInput = screen.getByLabelText(/Contraseña:/i);
    const loginButton = screen.getByRole('button', { name: /Iniciar sesión/i });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
*/

  it('renders game and promotion sections', () => {
    const gameSection = screen.getByText(/Juegos Destacados/i);
    const promotionSections = screen.getAllByText(/Promociones/i);
  
    expect(gameSection).toBeInTheDocument();
    expect(promotionSections.length).toBeGreaterThanOrEqual(1);
  });
  
  it('renders footer', () => {
    const footerText = screen.getByText(/© 2024 Casino. Todos los derechos reservados./i);
    const cssValidImage = screen.getByAltText(/¡CSS Válido!/i);
  
    expect(footerText).toBeInTheDocument();
    expect(cssValidImage).toBeInTheDocument();
  });
  

  // Aquí puedes agregar más pruebas para verificar el correcto funcionamiento de tu componente
});
