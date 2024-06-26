import React from 'react';
import { Canvas} from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import AvatarAnya from './AvatarAnya';

export default  function InteractiveSceneAnya() {
  return (
    <Canvas style={{ height: '60vh', width: '60vw' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls />
      <Environment preset="sunset" />
      <AvatarAnya scale={[2.6,2.6,2.6]} /> {}
    </Canvas>
  );
}

