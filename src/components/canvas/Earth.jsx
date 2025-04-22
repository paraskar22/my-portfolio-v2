import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Earth model component
const Earth = () => {
  try {
    const earth = useGLTF("/planet/scene.gltf");
    
    if (!earth || !earth.scene) {
      console.error("Failed to load Earth model");
      return null;
    }

    return (
      <primitive 
        object={earth.scene} 
        scale={1.5} 
        position={[0, 0, 0]}
        rotation-y={0}
        onError={(error) => console.error("Error with Earth primitive:", error)}
      />
    );
  } catch (error) {
    console.error("Error loading Earth model:", error);
    return null;
  }
};

// Preload the model
try {
  useGLTF.preload("/planet/scene.gltf");
} catch (error) {
  console.error("Error preloading Earth model:", error);
}

// Modified EarthCanvas to work with Stars
const EarthCanvas = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <Earth />
      <Preload all />
    </Suspense>
  );
};

export default EarthCanvas;
