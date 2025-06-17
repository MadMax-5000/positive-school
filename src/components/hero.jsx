import React, { useRef, useEffect, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

// Reusable lighting component
function SceneLights() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 20, 10]} intensity={5} castShadow />
      <pointLight position={[-5, 10, -5]} intensity={1} />
    </>
  );
}

// Responsive scaling helper with extra breakpoint for large devices
function useResponsiveScale() {
  const [scale, setScale] = useState({
    logo: 15,
    vinyl: 18,
    headset: 1.2,
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile
        setScale({
          logo: 18,
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
      } else if (width < 1440) {
        // Desktop (standard)
        setScale({
          logo: 15,
          vinyl: 18,
          headset: 1.2,
        });
      } else {
        // Large desktop
        setScale({
          logo: 12,
          vinyl: 15,
          headset: 1.0,
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

  // Update material properties on load
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: "#ffffff",
          metalness: 0.2,
          roughness: 0.1,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
          envMapIntensity: 2,
        });
      }
    });
  }, [scene]);

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

  let position;
  if (window.innerWidth < 768) {
    position = [-3, -5, 0]; // Mobile
  } else if (window.innerWidth < 1440) {
    position = [-8, -4, 0]; // Standard desktop/tablet
  } else {
    position = [-5, -3, 0]; // Large desktop
  }

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

  // Adjust positions based on screen width, with an extra condition for large screens
  let position;
  if (window.innerWidth < 768) {
    position = [3, 3, 0]; // Mobile
  } else if (window.innerWidth < 1440) {
    position = [7, 2, 0]; // Standard desktop/tablet
  } else {
    position = [5, 0, 0]; // Large desktop
  }

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
  const [isMobile, setIsMobile] = useState(false);
  const [glassStyles, setGlassStyles] = useState({
    width: "1300px",
    height: "550px",
  });

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Update glass styles responsively
  useEffect(() => {
    function updateGlassStyles() {
      const width = window.innerWidth;
      if (width < 768) {
        setGlassStyles({ width: "95vw", height: "80vh" });
      } else if (width < 1024) {
        setGlassStyles({ width: "90vw", height: "70vh" });
      } else if (width < 1440) {
        setGlassStyles({ width: "1300px", height: "550px" });
      } else if (width <= 1920) {
        // Added specific case for 1920x1080 screens
        setGlassStyles({ width: "1600px", height: "800px" });
      } else {
        // Larger screens
        setGlassStyles({ width: "2000px", height: "1100px" });
      }
    }
    updateGlassStyles();
    window.addEventListener("resize", updateGlassStyles);
    return () => window.removeEventListener("resize", updateGlassStyles);
  }, []);

  const cameraOptions = useMemo(() => {
    const width = window.innerWidth;
    if (width < 768) return { position: [0, 0, 15], fov: 50 };
    else if (width < 1440) return { position: [0, 0, 10], fov: 40 };
    else return { position: [0, 0, 9], fov: 35 };
  }, []);

  if (isMobile) {
    return (
      <div className="h-screen relative">
        <img
          src="/images/pslogo.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 3 }} // Added positioning and z-index
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: glassStyles.width,
            height: glassStyles.height,
            zIndex: 2, // Lower than image's z-index
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "10px",
          }}
        />
        <p
          className="absolute w-full bottom-32 text-center text-white font-robert-medium mb-4"
          style={{ zIndex: 2, fontSize: "1.9rem" }}
        >
          © SOUNI3A FI ALMAGHRIB
        </p>
      </div>
    );
  }

  // Desktop 3D version
  return (
    <div className="h-screen relative">
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
        dpr={[1, 2]}
        camera={cameraOptions}
      >
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <SceneLights />
          <VinylModel />
          <HeadsetModel />
          <OrbitControls
            enableZoom={false}
            dampingFactor={0.1}
            rotateSpeed={0.3}
            enabled={false}
          />
        </Suspense>
      </Canvas>
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
        dpr={[1, 2]}
        camera={cameraOptions}
      >
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <SceneLights />
          <LogoModel />
          <OrbitControls
            enableZoom={false}
            dampingFactor={0.1}
            rotateSpeed={0.3}
            enabled={false}
          />
        </Suspense>
      </Canvas>
      <p
        className="absolute w-full text-center text-white font-robert-medium"
        style={{
          zIndex: 4,
          fontSize:
            window.innerWidth < 576
              ? "1.2rem" // Small screens (up to 576px)
              : window.innerWidth < 768
              ? "1.5rem" // Medium screens (576px to 768px)
              : window.innerWidth < 1024
              ? "1.75rem" // Large screens (768px to 1024px)
              : window.innerWidth < 1440
              ? "1.875rem" // Extra-large screens (1024px to 1440px)
              : "2rem", // Ultra-large screens (1440px and above)
          bottom:
            window.innerWidth === 1920 && window.innerHeight === 1080
              ? "140px" // Adjust the bottom position for 1920x1080 devices
              : window.innerWidth < 576
              ? "10px" // Adjust for small screens
              : window.innerWidth < 768
              ? "20px" // Adjust for medium screens
              : window.innerWidth < 1024
              ? "40px" // Adjust for large screens
              : "50px", // Default for extra-large screens
        }}
      >
        © SOUNI3A FI ALMAGHRIB
      </p>
    </div>
  );
}
