import React from 'react';
import { useGLTF } from '@react-three/drei';
import Anya from '../assets/models/Anya.glb';


export default function AvatarAnya(props) {
  const { scene } = useGLTF(Anya);
  return <primitive object={scene} scale={props.scale || [1, 1, 1]} />;
}

