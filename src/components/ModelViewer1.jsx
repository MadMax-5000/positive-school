import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize GSAP context
    const ctx = gsap.context(() => {});

    // Handle mouse movement
    const handleMouseMove = (event) => {
      // Convert mouse position to normalized coordinates (-1 to 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Animate to new position with faster duration
      gsap.to(targetPosition.current, {
        x: x * 0.5,
        y: y * 0.3,
        duration: 0.3, // Reduced from 1 to 0.3
        ease: "power1.out", // Changed to power1 for faster response
      });
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
      gsap.to(targetPosition.current, {
        x: 0,
        y: 0,
        duration: 0.8, // Reduced from 1.5 to 0.8
        ease: "elastic.out(1, 0.5)", // Adjusted for faster spring return
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Update model position every frame with faster interpolation
  useFrame(() => {
    if (modelRef.current) {
      // Increased interpolation factor from 0.1 to 0.2 for faster following
      modelRef.current.position.x +=
        (targetPosition.current.x - modelRef.current.position.x) * 0.2;
      modelRef.current.position.y +=
        (targetPosition.current.y - modelRef.current.position.y) * 0.2;

      // Slightly reduced rotation for better control with faster movement
      modelRef.current.rotation.x =
        -Math.PI / 2 + targetPosition.current.y * 0.15;
      modelRef.current.rotation.z = targetPosition.current.x * 0.15;
    }
  });

  // Apply materials
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: "#ffffff",
        metalness: 0.2,
        roughness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        envMapIntensity: 2,
      });
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={15}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  );
}

const ModelViewer = () => {
  return (
    <Canvas
      style={{ background: "#303030FF", height: "100vh", width: "100%" }}
      shadows
    >
      <ambientLight intensity={1} />
      <directionalLight position={[10, 20, 10]} intensity={5} castShadow />
      <pointLight position={[-5, 10, -5]} intensity={1} />
      <Model url="/models/logo.glb" />
      <OrbitControls
        enableZoom={false}
        dampingFactor={0.1}
        rotateSpeed={0.3}
        enabled={false}
      />
    </Canvas>
  );
};

export default ModelViewer;
