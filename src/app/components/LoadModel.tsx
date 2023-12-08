"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh } from "three";

var fileName: string;

function MeshComponent() {
  const fileUrl = "./models/helmet/helmet.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileName);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

interface HelmetProps {
  fn: string;
}

export function LoadModel({ fn }: HelmetProps){
  fileName = fn;
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas className='h-2xl w-2xl'>
        <OrbitControls />
        <ambientLight intensity={0.25} />
        <pointLight intensity={80} position={[10, 10, 10]} />
        <pointLight intensity={80} position={[10, -10, 10]} />
        <pointLight intensity={80} position={[-10, 10, 10]} />
        <pointLight intensity={80} position={[10, 10, -10]} />
        <pointLight intensity={80} position={[-10, 10, -10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}