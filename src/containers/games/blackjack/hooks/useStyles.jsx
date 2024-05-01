import { styled } from '@mui/material/styles';

// Define el área de juego con margen personalizado
const PlayArea = styled('div')(({ theme }) => ({
  margin: '10px 25px',
}));

// Define el área para las monedas con altura específica, padding y color de texto
const CoinArea = styled('div')(({ theme }) => ({
  height: '100px',
  padding: '10px',
  color: '#fff', // Utiliza el blanco para el texto, asegúrate de que el fondo sea oscuro para contraste
}));

// Define el área para mensajes con margen estándar
const MessageArea = styled('div')(({ theme }) => ({
  margin: '10px',
}));

// Define cómo se muestran los mensajes
const Message = styled('div')(({ theme }) => ({
  fontSize: '22px',
  color: 'white', // Asegúrate de que el fondo sea oscuro para que el texto blanco sea legible
}));

// Define el contenedor para los resultados de ganar o perder
const WinOrLoseContainer = styled('div')(({ theme }) => ({
  height: '50px',
  margin: 'auto', // Centra el contenedor horizontalmente
}));

// Define el estilo para mostrar el resultado de ganar o perder
const WinOrLose = styled('div')(({ theme }) => ({
  border: '1px solid black',
  backgroundColor: 'grey',
  height: '40px',
  fontSize: '1.3em',
  fontWeight: 'bold',
  color: 'white',
  lineHeight: '40px',
  opacity: 0.8, // Ajusta la opacidad para un mejor efecto visual
}));
