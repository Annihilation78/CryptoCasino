import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function AudioPlayer({ audioFile }) { // Aceptar audioFile como prop
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);

  useEffect(() => {
    const audioDelay = setTimeout(() => {
      setIsPlaying(true);
    }, 2000);

    return () => clearTimeout(audioDelay);
  }, []);

  return (
    <ReactAudioPlayer
      src={audioFile}
      autoPlay={isPlaying}
      volume={volume}
      onEnded={() => setIsPlaying(false)}
      controls
    />
  );
}

export default AudioPlayer;