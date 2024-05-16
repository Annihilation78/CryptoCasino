import React, { useState } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function AudioPlayer({ audioFile }) {
  const [isPlaying, setIsPlaying] = useState(false); // Definir el estado isPlaying

  // Función para manejar el clic en el botón de reproducción
  const handlePlayClick = () => {
    setIsPlaying(!isPlaying); // Cambiar el estado de isPlaying cada vez que se hace clic en el botón de reproducción
  };

  return (
    <ReactAudioPlayer
      src={audioFile}
      autoPlay={isPlaying}
      controls
      onPlay={handlePlayClick} // Agregar un manejador de eventos para el clic en el botón de reproducción
    />
  );
}

export default AudioPlayer;