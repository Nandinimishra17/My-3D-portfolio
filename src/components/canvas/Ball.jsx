import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#ffffff'
        polygonOffset
        polygonOffsetFactor={-50}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  );
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 2, 3]} intensity={3} castShadow />
        <OrbitControls enableZoom={false} />
        <Float speed={2.95} rotationIntensity={1} floatIntensity={2.5}>
          <Ball imgUrl={icon} />
        </Float>
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default BallCanvas;





