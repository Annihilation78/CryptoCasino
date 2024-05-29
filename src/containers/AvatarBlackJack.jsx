import React from 'react';
import { useGLTF } from '@react-three/drei';
import BlackJack from '../assets/models/BlackJack.glb';


export default  function AvatarBlackJack(props) {
    const { scene } = useGLTF(BlackJack);  // Adjust the path as necessary
  
    return <primitive object={scene} scale={props.scale || [1, 1, 1]} />;
  }