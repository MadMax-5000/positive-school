import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function SpinningVinyl() {
  const vinylRef = useRef();
  const { scene } = useGLTF("/models/vinyl_record.glb"); // Ensure the correct path

  useFrame(() => {
    if (vinylRef.current) {
      vinylRef.current.rotation.z += 0.01; // Spinning motion
    }
  });

  return (
    <primitive
      ref={vinylRef}
      object={scene}
      position={[-7, 3, 0]} // Adjust to match the existing placement
      scale={15}
      rotation={[0, 0, 0]} // Keeps it facing the user
    />
  );
}

export default function VinylScene() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={3} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[0, 0, 5]} intensity={3} />{" "}
      {/* Highlights spinning */}
      <SpinningVinyl />
    </Canvas>
  );
}
