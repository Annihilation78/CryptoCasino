import { render, fireEvent } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact component and submits form', () => {
  const { getByPlaceholderText, getByText } = render(<Contact />);
  
  // Comprueba que el formulario se renderiza correctamente
  const nombreInput = getByPlaceholderText('Tu nombre');
  expect(nombreInput).toBeInTheDocument();

  const emailInput = getByPlaceholderText('Tu email');
  expect(emailInput).toBeInTheDocument();

  const mensajeInput = getByPlaceholderText('Tu mensaje');
  expect(mensajeInput).toBeInTheDocument();

  const submitButton = getByText('Enviar mensaje');
  expect(submitButton).toBeInTheDocument();

  // Simula la entrada del usuario y envía el formulario
  fireEvent.change(nombreInput, { target: { value: 'Nombre de prueba' } });
  fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
  fireEvent.change(mensajeInput, { target: { value: 'Mensaje de prueba' } });
  fireEvent.click(submitButton);

  // Aquí podrías comprobar que la función onSubmit se llamó con los datos correctos
  // Esto requeriría que pases una función mock onSubmit como prop a tu componente Contact
});
