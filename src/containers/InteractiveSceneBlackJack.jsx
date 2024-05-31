import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import AvatarBlackJack from './AvatarBlackJack';

export default  function InteractiveSceneBlackJack() {
    return (
      <Canvas style={{ height: '100vh', width: '100vw' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls />
        <Environment preset="sunset" />
        <AvatarBlackJack scale={[3,3,3]} /> {}
        
      </Canvas>
      
    );
  }