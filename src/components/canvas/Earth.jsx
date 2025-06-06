import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Earth model component
const Earth = () => {
  const { scene } = useGLTF("/planet/scene.gltf");
  
  return (
    <primitive 
      object={scene} 
      scale={2.5} 
      position={[0, 0, 0]}
      rotation-y={0}
    />
  );
};

// Preload the model
useGLTF.preload("/planet/scene.gltf");

// EarthCanvas component
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
