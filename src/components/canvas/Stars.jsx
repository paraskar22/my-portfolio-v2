import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Stars = () => {
  const starsRef = useRef();

  const starGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const starCount = 6000; // Divisible by 3
    const positions = new Float32Array(starCount);

    for (let i = 0; i < starCount; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000;     // x
      positions[i + 1] = (Math.random() - 0.5) * 2000; // y
      positions[i + 2] = (Math.random() - 0.5) * 2000; // z
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={starsRef} geometry={starGeometry}>
      <pointsMaterial color="#ffffff" size={0.5} />
    </points>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto absolute inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  </div>
);

export default StarsCanvas;
