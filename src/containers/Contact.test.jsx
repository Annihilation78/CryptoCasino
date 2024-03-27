import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './Contact';

describe('Contact Component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Contact />
      </Router>
    );
    const linkElement = screen.getByText(/Contacta con nosotros/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders form and responds to user input', () => {
    render(
      <Router>
        <Contact />
      </Router>
    );

    const input = screen.getByPlaceholderText(/Tu nombre/i);
    fireEvent.change(input, { target: { value: 'Prueba' } });
    expect(input.value).toBe('Prueba');
  });
 
  
  // Aquí puedes agregar más pruebas...
});