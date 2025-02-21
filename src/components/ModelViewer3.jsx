import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function HeadsetModel() {
  const modelRef = useRef();
  const { scene } = useGLTF("/models/wireless_gaming_headset.glb");

  useEffect(() => {
    if (modelRef.current) {
      // Create the bouncing animation
      gsap.to(modelRef.current.position, {
        y: -0.4, // Slightly higher position than the original -0.8
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1, // Infinite repetition
        yoyo: true, // Makes it bounce back and forth
      });
    }
  }, []);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[0.7, -0.8, 0]}
      scale={0.6}
      rotation={[0.1, -0.4, 0]}
    />
  );
}

export default function HeadsetScene() {
  return (
    <Canvas
      style={{
        position: "absolute",
        bottom: "0",
        right: "0",
        width: "400px",
        height: "700px",
        zIndex: 10,
      }}
      camera={{
        position: [0, 0, 6],
        fov: 40,
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} />
      <pointLight position={[0, 0, 5]} intensity={3} />
      <HeadsetModel />
    </Canvas>
  );
}
