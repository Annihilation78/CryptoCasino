import React, { useState } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function AudioPlayer({ audioFile }) {
  const [isPlaying, setIsPlaying] = useState(false); 

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying); 
  };

  return (
    <ReactAudioPlayer
      src={audioFile}
      autoPlay={isPlaying}
      controls
      onPlay={handlePlayClick} 
    />
  );
}

export default AudioPlayer;