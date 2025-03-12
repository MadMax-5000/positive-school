import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

// Responsive scaling helper
function useResponsiveScale() {
  const [scale, setScale] = useState({
    logo: 12,
    vinyl: 15,
    headset: 1,
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile
        setScale({
          logo: 16, // Increased logo size for mobile
          vinyl: 20,
          headset: 1.5,
        });
      } else if (width < 1024) {
        // Tablet
        setScale({
          logo: 12,
          vinyl: 14,
          headset: 1,
        });
      } else {
        // Desktop
        setScale({
          logo: 15, // Increased logo size for desktop
          vinyl: 18,
          headset: 1.2,
        });
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
}

function LogoModel() {
  const { scene } = useGLTF("/models/logo.glb");
  const modelRef = useRef();
  const targetPosition = useRef({ x: 0, y: 0 });
  const scale = useResponsiveScale();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      gsap.to(targetPosition.current, {
        x: x * 0.3,
        y: y * 0.2,
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
      scale={scale.logo}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, window.innerWidth < 768 ? -1 : 0, 0]}
    />
  );
}

function VinylModel() {
  const vinylRef = useRef();
  const { scene } = useGLTF("/models/vinyl_record.glb");
  const scale = useResponsiveScale();

  useFrame(() => {
    if (vinylRef.current) {
      vinylRef.current.rotation.z += 0.01;
    }
  });

  // Adjusted position to bottom left
  const position =
    window.innerWidth < 768
      ? [-3, -5, 0] // Mobile position
      : [-8, -4, 0]; // Desktop position

  return (
    <primitive
      ref={vinylRef}
      object={scene}
      position={position}
      scale={scale.vinyl}
      rotation={[0, 0, 0]}
    />
  );
}

function HeadsetModel() {
  const modelRef = useRef();
  const { scene } = useGLTF("/models/wireless_gaming_headset.glb");
  const scale = useResponsiveScale();

  // Adjusted position to top right
  const position =
    window.innerWidth < 768
      ? [3, 3, 0] // Mobile position
      : [7, 2, 0]; // Desktop position

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      scale={scale.headset}
      rotation={[0.1, -0.4, 0]}
    />
  );
}

export default function Hero() {
  const [glassStyles, setGlassStyles] = useState({
    width: "1300px",
    height: "550px",
  });

  useEffect(() => {
    function updateGlassStyles() {
      const width = window.innerWidth;
      if (width < 768) {
        setGlassStyles({
          width: "95vw", // Slightly wider on mobile
          height: "80vh", // Taller on mobile
        });
      } else if (width < 1024) {
        setGlassStyles({
          width: "90vw",
          height: "70vh",
        });
      } else {
        setGlassStyles({
          width: "1300px",
          height: "550px",
        });
      }
    }

    updateGlassStyles();
    window.addEventListener("resize", updateGlassStyles);
    return () => window.removeEventListener("resize", updateGlassStyles);
  }, []);

  return (
    <div className="h-screen relative">
      {/* Background Canvas */}
      <Canvas
        style={{
          background: "#000000FF",
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        shadows
        camera={{
          position: [0, 0, window.innerWidth < 768 ? 15 : 10],
          fov: window.innerWidth < 768 ? 50 : 40,
        }}
      >
        <Environment preset="sunset" />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 20, 10]} intensity={5} castShadow />
        <pointLight position={[-5, 10, -5]} intensity={1} />
        <VinylModel />
        <HeadsetModel />
        <OrbitControls
          enableZoom={false}
          dampingFactor={0.1}
          rotateSpeed={0.3}
          enabled={false}
        />
      </Canvas>

      {/* Glass Pane Overlay */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: glassStyles.width,
          height: glassStyles.height,
          zIndex: 2,
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "10px",
        }}
      />

      {/* Foreground Canvas (Logo) */}
      <Canvas
        style={{
          background: "transparent",
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 3,
        }}
        shadows
        camera={{
          position: [0, 0, window.innerWidth < 768 ? 15 : 10],
          fov: window.innerWidth < 768 ? 50 : 40,
        }}
      >
        <Environment preset="sunset" />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 20, 10]} intensity={5} castShadow />
        <pointLight position={[-5, 10, -5]} intensity={1} />
        <LogoModel />
        <OrbitControls
          enableZoom={false}
          dampingFactor={0.1}
          rotateSpeed={0.3}
          enabled={false}
        />
      </Canvas>

      {/* Footer Text */}
      <p
        className="absolute w-full bottom-14 text-center text-white font-robert-medium"
        style={{
          zIndex: 4,
          fontSize: window.innerWidth < 768 ? "1.5rem" : "1.875rem",
        }}
      >
        © SOUNI3A FI ALMAGHRIB
      </p>
    </div>
  );
}
