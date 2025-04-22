import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// ✅ Earth model component
const Earth = () => {
  try {
    const earth = useGLTF("/planet/scene.gltf");
    
    // Add error checking for the model
    if (!earth || !earth.scene) {
      console.error("Failed to load Earth model");
      return null;
    }

    return (
      <primitive 
        object={earth.scene} 
        scale={2.5} 
        position-y={0} 
        rotation-y={0}
        onError={(error) => console.error("Error with Earth primitive:", error)}
      />
    );
  } catch (error) {
    console.error("Error loading Earth model:", error);
    return null;
  }
};

// ✅ Preload the model outside the component
try {
  useGLTF.preload("/planet/scene.gltf");
} catch (error) {
  console.error("Error preloading Earth model:", error);
}

// ✅ Canvas component that renders the Earth
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
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
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
