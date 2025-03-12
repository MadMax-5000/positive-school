import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {});
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      gsap.to(targetPosition.current, {
        x: x * 0.5,
        y: y * 0.3,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(targetPosition.current, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.x +=
        (targetPosition.current.x - modelRef.current.position.x) * 0.2;
      modelRef.current.position.y +=
        (targetPosition.current.y - modelRef.current.position.y) * 0.2;
      modelRef.current.rotation.x =
        -Math.PI / 2 + targetPosition.current.y * 0.15;
      modelRef.current.rotation.z = targetPosition.current.x * 0.15;
    }
  });

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
      style={{ background: "#151515FF", height: "100vh", width: "100%" }}
      shadows
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <Environment preset="sunset" />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 20, 10]} intensity={5} castShadow />
      <pointLight position={[-5, 10, -5]} intensity={1} />

      {/* Glass Background Plane */}
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[20, 20]} />
        <meshPhysicalMaterial
          color="#88aadd"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
          side={THREE.DoubleSide}
        />
      </mesh>

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
